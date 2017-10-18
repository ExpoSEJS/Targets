/root/Targets/mingge.js
└── mingge.js@1.0.2 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/mingge.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000

*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","RegExp","bind","defineProperties","call","max","create","Set"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0349 took 18.6311s
*-- Errors occured in test {"_bound":0}
* Error: Tropigate failed because SyntaxError: Unexpected token (49:4) on program // Approach:
//
// 1. Get the minimatch set
// 2. For each pattern in the set, PROCESS(pattern, false)
// 3. Store matches per-set, then uniq them
//
// PROCESS(pattern, inGlobStar)
// Get the first [n] items from pattern that are all strings
// Join these together.  This is PREFIX.
//   If there is no more remaining, then stat(PREFIX) and
//   add to matches if it succeeds.  END.
//
// If inGlobStar and PREFIX is symlink and points to dir
//   set ENTRIES = []
// else readdir(PREFIX) as ENTRIES
//   If fail, END
//
// with ENTRIES
//   If pattern[n] is GLOBSTAR
//     // handle the case where the globstar match is empty
//     // by pruning it out, and testing the resulting pattern
//     PROCESS(pattern[0..n] + pattern[n+1 .. $], false)
//     // handle other cases.
//     for ENTRY in ENTRIES (not dotfiles)
//       // attach globstar + tail onto the entry
//       // Mark that this entry is a globstar match
//       PROCESS(pattern[0..n] + ENTRY + pattern[n .. $], true)
//
//   else // not globstar
//     for ENTRY in ENTRIES (not dotfiles, unless pattern[n] is dot)
//       Test ENTRY against pattern[n]
//       If fails, continue
//       If passes, PROCESS(pattern[0..n] + item + pattern[n+1 .. $])
//
// Caveat:
//   Cache all stats and readdirs results to minimize syscall.  Since all
//   we ever care about is existence and directory-ness, we can just keep
//   `true` for files, and [children,...] for directories, or `false` for
//   things that don't exist.

module.exports = glob

var fs = require('fs')
var minimatch = require('minimatch')
var Minimatch = minimatch.Minimatch
var inherits = require('inherits')
var EE = require('events').EventEmitter
var path = require('path')
var assert = require('assert')
var globSync = require('./sync.js')
var common = require('./common.js')
var alphasort = common.alphasort
var alphasorti = common.alphasorti
var isAbsolute = common.isAbsolute
var setopts = common.setopts
var ownProp = common.ownProp
var inflight = require('inflight')
var util = require('util')
var childrenIgnored = common.childrenIgnored

var once = require('once')

function glob (pattern, options, cb) {
  if (typeof options === 'function') cb = options, options = {}
  if (!options) options = {}

  if (options.sync) {
    if (cb)
      throw new TypeError('callback provided to sync glob')
    return globSync(pattern, options)
  }

  return new Glob(pattern, options, cb)
}

glob.sync = globSync
var GlobSync = glob.GlobSync = globSync.GlobSync

// old api surface
glob.glob = glob

glob.hasMagic = function (pattern, options_) {
  var options = util._extend({}, options_)
  options.noprocess = true

  var g = new Glob(pattern, options)
  var set = g.minimatch.set
  if (set.length > 1)
    return true

  for (var j = 0; j < set[0].length; j++) {
    if (typeof set[0][j] !== 'string')
      return true
  }

  return false
}

glob.Glob = Glob
inherits(Glob, EE)
function Glob (pattern, options, cb) {
  if (typeof options === 'function') {
    cb = options
    options = null
  }

  if (options && options.sync) {
    if (cb)
      throw new TypeError('callback provided to sync glob')
    return new GlobSync(pattern, options)
  }

  if (!(this instanceof Glob))
    return new Glob(pattern, options, cb)

  setopts(this, pattern, options)
  this._didRealPath = false

  // process each pattern in the minimatch set
  var n = this.minimatch.set.length

  // The matches are stored as {<filename>: true,...} so that
  // duplicates are automagically pruned.
  // Later, we do an Object.keys() on these.
  // Keep them as a list so we can fill in when nonull is set.
  this.matches = new Array(n)

  if (typeof cb === 'function') {
    cb = once(cb)
    this.on('error', cb)
    this.on('end', function (matches) {
      cb(null, matches)
    })
  }

  var self = this
  var n = this.minimatch.set.length
  this._processing = 0
  this.matches = new Array(n)

  this._emitQueue = []
  this._processQueue = []
  this.paused = false

  if (this.noprocess)
    return this

  if (n === 0)
    return done()

  for (var i = 0; i < n; i ++) {
    this._process(this.minimatch.set[i], i, false, done)
  }

  function done () {
    --self._processing
    if (self._processing <= 0)
      self._finish()
  }
}

Glob.prototype._finish = function () {
  assert(this instanceof Glob)
  if (this.aborted)
    return

  if (this.realpath && !this._didRealpath)
    return this._realpath()

  common.finish(this)
  this.emit('end', this.found)
}

Glob.prototype._realpath = function () {
  if (this._didRealpath)
    return

  this._didRealpath = true

  var n = this.matches.length
  if (n === 0)
    return this._finish()

  var self = this
  for (var i = 0; i < this.matches.length; i++)
    this._realpathSet(i, next)

  function next () {
    if (--n === 0)
      self._finish()
  }
}

Glob.prototype._realpathSet = function (index, cb) {
  var matchset = this.matches[index]
  if (!matchset)
    return cb()

  var found = Object.keys(matchset)
  var self = this
  var n = found.length

  if (n === 0)
    return cb()

  var set = this.matches[index] = Object.create(null)
  found.forEach(function (p, i) {
    // If there's a problem with the stat, then it means that
    // one or more of the links in the realpath couldn't be
    // resolved.  just return the abs value in that case.
    p = self._makeAbs(p)
    fs.realpath(p, self.realpathCache, function (er, real) {
      if (!er)
        set[real] = true
      else if (er.syscall === 'stat')
        set[p] = true
      else
        self.emit('error', er) // srsly wtf right here

      if (--n === 0) {
        self.matches[index] = set
        cb()
      }
    })
  })
}

Glob.prototype._mark = function (p) {
  return common.mark(this, p)
}

Glob.prototype._makeAbs = function (f) {
  return common.makeAbs(this, f)
}

Glob.prototype.abort = function () {
  this.aborted = true
  this.emit('abort')
}

Glob.prototype.pause = function () {
  if (!this.paused) {
    this.paused = true
    this.emit('pause')
  }
}

Glob.prototype.resume = function () {
  if (this.paused) {
    this.emit('resume')
    this.paused = false
    if (this._emitQueue.length) {
      var eq = this._emitQueue.slice(0)
      this._emitQueue.length = 0
      for (var i = 0; i < eq.length; i ++) {
        var e = eq[i]
        this._emitMatch(e[0], e[1])
      }
    }
    if (this._processQueue.length) {
      var pq = this._processQueue.slice(0)
      this._processQueue.length = 0
      for (var i = 0; i < pq.length; i ++) {
        var p = pq[i]
        this._processing--
        this._process(p[0], p[1], p[2], p[3])
      }
    }
  }
}

Glob.prototype._process = function (pattern, index, inGlobStar, cb) {
  assert(this instanceof Glob)
  assert(typeof cb === 'function')

  if (this.aborted)
    return

  this._processing++
  if (this.paused) {
    this._processQueue.push([pattern, index, inGlobStar, cb])
    return
  }

  //console.error('PROCESS %d', this._processing, pattern)

  // Get the first [n] parts of pattern that are all strings.
  var n = 0
  while (typeof pattern[n] === 'string') {
    n ++
  }
  // now n is the index of the first one that is *not* a string.

  // see if there's anything else
  var prefix
  switch (n) {
    // if not, then this is rather simple
    case pattern.length:
      this._processSimple(pattern.join('/'), index, cb)
      return

    case 0:
      // pattern *starts* with some non-trivial item.
      // going to readdir(cwd), but not include the prefix in matches.
      prefix = null
      break

    default:
      // pattern has some string bits in the front.
      // whatever it starts with, whether that's 'absolute' like /foo/bar,
      // or 'relative' like '../baz'
      prefix = pattern.slice(0, n).join('/')
      break
  }

  var remain = pattern.slice(n)

  // get the list of entries.
  var read
  if (prefix === null)
    read = '.'
  else if (isAbsolute(prefix) || isAbsolute(pattern.join('/'))) {
    if (!prefix || !isAbsolute(prefix))
      prefix = '/' + prefix
    read = prefix
  } else
    read = prefix

  var abs = this._makeAbs(read)

  //if ignored, skip _processing
  if (childrenIgnored(this, read))
    return cb()

  var isGlobStar = remain[0] === minimatch.GLOBSTAR
  if (isGlobStar)
    this._processGlobStar(prefix, read, abs, remain, index, inGlobStar, cb)
  else
    this._processReaddir(prefix, read, abs, remain, index, inGlobStar, cb)
}

Glob.prototype._processReaddir = function (prefix, read, abs, remain, index, inGlobStar, cb) {
  var self = this
  this._readdir(abs, inGlobStar, function (er, entries) {
    return self._processReaddir2(prefix, read, abs, remain, index, inGlobStar, entries, cb)
  })
}

Glob.prototype._processReaddir2 = function (prefix, read, abs, remain, index, inGlobStar, entries, cb) {

  // if the abs isn't a dir, then nothing can match!
  if (!entries)
    return cb()

  // It will only match dot entries if it starts with a dot, or if
  // dot is set.  Stuff like @(.foo|.bar) isn't allowed.
  var pn = remain[0]
  var negate = !!this.minimatch.negate
  var rawGlob = pn._glob
  var dotOk = this.dot || rawGlob.charAt(0) === '.'

  var matchedEntries = []
  for (var i = 0; i < entries.length; i++) {
    var e = entries[i]
    if (e.charAt(0) !== '.' || dotOk) {
      var m
      if (negate && !prefix) {
        m = !e.match(pn)
      } else {
        m = e.match(pn)
      }
      if (m)
        matchedEntries.push(e)
    }
  }

  //console.error('prd2', prefix, entries, remain[0]._glob, matchedEntries)

  var len = matchedEntries.length
  // If there are no matched entries, then nothing matches.
  if (len === 0)
    return cb()

  // if this is the last remaining pattern bit, then no need for
  // an additional stat *unless* the user has specified mark or
  // stat explicitly.  We know they exist, since readdir returned
  // them.

  if (remain.length === 1 && !this.mark && !this.stat) {
    if (!this.matches[index])
      this.matches[index] = Object.create(null)

    for (var i = 0; i < len; i ++) {
      var e = matchedEntries[i]
      if (prefix) {
        if (prefix !== '/')
          e = prefix + '/' + e
        else
          e = prefix + e
      }

      if (e.charAt(0) === '/' && !this.nomount) {
        e = path.join(this.root, e)
      }
      this._emitMatch(index, e)
    }
    // This was the last one, and no stats were needed
    return cb()
  }

  // now test all matched entries as stand-ins for that part
  // of the pattern.
  remain.shift()
  for (var i = 0; i < len; i ++) {
    var e = matchedEntries[i]
    var newPattern
    if (prefix) {
      if (prefix !== '/')
        e = prefix + '/' + e
      else
        e = prefix + e
    }
    this._process([e].concat(remain), index, inGlobStar, cb)
  }
  cb()
}

Glob.prototype._emitMatch = function (index, e) {
  if (this.aborted)
    return

  if (this.matches[index][e])
    return

  if (this.paused) {
    this._emitQueue.push([index, e])
    return
  }

  var abs = this._makeAbs(e)

  if (this.nodir) {
    var c = this.cache[abs]
    if (c === 'DIR' || Array.isArray(c))
      return
  }

  if (this.mark)
    e = this._mark(e)

  this.matches[index][e] = true

  var st = this.statCache[abs]
  if (st)
    this.emit('stat', e, st)

  this.emit('match', e)
}

Glob.prototype._readdirInGlobStar = function (abs, cb) {
  if (this.aborted)
    return

  // follow all symlinked directories forever
  // just proceed as if this is a non-globstar situation
  if (this.follow)
    return this._readdir(abs, false, cb)

  var lstatkey = 'lstat\0' + abs
  var self = this
  var lstatcb = inflight(lstatkey, lstatcb_)

  if (lstatcb)
    fs.lstat(abs, lstatcb)

  function lstatcb_ (er, lstat) {
    if (er)
      return cb()

    var isSym = lstat.isSymbolicLink()
    self.symlinks[abs] = isSym

    // If it's not a symlink or a dir, then it's definitely a regular file.
    // don't bother doing a readdir in that case.
    if (!isSym && !lstat.isDirectory()) {
      self.cache[abs] = 'FILE'
      cb()
    } else
      self._readdir(abs, false, cb)
  }
}

Glob.prototype._readdir = function (abs, inGlobStar, cb) {
  if (this.aborted)
    return

  cb = inflight('readdir\0'+abs+'\0'+inGlobStar, cb)
  if (!cb)
    return

  //console.error('RD %j %j', +inGlobStar, abs)
  if (inGlobStar && !ownProp(this.symlinks, abs))
    return this._readdirInGlobStar(abs, cb)

  if (ownProp(this.cache, abs)) {
    var c = this.cache[abs]
    if (!c || c === 'FILE')
      return cb()

    if (Array.isArray(c))
      return cb(null, c)
  }

  var self = this
  fs.readdir(abs, readdirCb(this, abs, cb))
}

function readdirCb (self, abs, cb) {
  return function (er, entries) {
    if (er)
      self._readdirError(abs, er, cb)
    else
      self._readdirEntries(abs, entries, cb)
  }
}

Glob.prototype._readdirEntries = function (abs, entries, cb) {
  if (this.aborted)
    return

  // if we haven't asked to stat everything, then just
  // assume that everything in there exists, so we can avoid
  // having to stat it a second time.
  if (!this.mark && !this.stat) {
    for (var i = 0; i < entries.length; i ++) {
      var e = entries[i]
      if (abs === '/')
        e = abs + e
      else
        e = abs + '/' + e
      this.cache[e] = true
    }
  }

  this.cache[abs] = entries
  return cb(null, entries)
}

Glob.prototype._readdirError = function (f, er, cb) {
  if (this.aborted)
    return

  // handle errors, and cache the information
  switch (er.code) {
    case 'ENOTDIR': // totally normal. means it *does* exist.
      this.cache[this._makeAbs(f)] = 'FILE'
      break

    case 'ENOENT': // not terribly unusual
    case 'ELOOP':
    case 'ENAMETOOLONG':
    case 'UNKNOWN':
      this.cache[this._makeAbs(f)] = false
      break

    default: // some unusual error.  Treat as failure.
      this.cache[this._makeAbs(f)] = false
      if (this.strict) return this.emit('error', er)
      if (!this.silent) console.error('glob error', er)
      break
  }
  return cb()
}

Glob.prototype._processGlobStar = function (prefix, read, abs, remain, index, inGlobStar, cb) {
  var self = this
  this._readdir(abs, inGlobStar, function (er, entries) {
    self._processGlobStar2(prefix, read, abs, remain, index, inGlobStar, entries, cb)
  })
}


Glob.prototype._processGlobStar2 = function (prefix, read, abs, remain, index, inGlobStar, entries, cb) {
  //console.error('pgs2', prefix, remain[0], entries)

  // no entries means not a dir, so it can never have matches
  // foo.txt/** doesn't match foo.txt
  if (!entries)
    return cb()

  // test without the globstar, and with every child both below
  // and replacing the globstar.
  var remainWithoutGlobStar = remain.slice(1)
  var gspref = prefix ? [ prefix ] : []
  var noGlobStar = gspref.concat(remainWithoutGlobStar)

  // the noGlobStar pattern exits the inGlobStar state
  this._process(noGlobStar, index, false, cb)

  var isSym = this.symlinks[abs]
  var len = entries.length

  // If it's a symlink, and we're in a globstar, then stop
  if (isSym && inGlobStar)
    return cb()

  for (var i = 0; i < len; i++) {
    var e = entries[i]
    if (e.charAt(0) === '.' && !this.dot)
      continue

    // these two cases enter the inGlobStar state
    var instead = gspref.concat(entries[i], remainWithoutGlobStar)
    this._process(instead, index, true, cb)

    var below = gspref.concat(entries[i], remain)
    this._process(below, index, true, cb)
  }

  cb()
}

Glob.prototype._processSimple = function (prefix, index, cb) {
  // XXX review this.  Shouldn't it be doing the mounting etc
  // before doing stat?  kinda weird?
  var self = this
  this._stat(prefix, function (er, exists) {
    self._processSimple2(prefix, index, er, exists, cb)
  })
}
Glob.prototype._processSimple2 = function (prefix, index, er, exists, cb) {

  //console.error('ps2', prefix, exists)

  if (!this.matches[index])
    this.matches[index] = Object.create(null)

  // If it doesn't exist, then just mark the lack of results
  if (!exists)
    return cb()

  if (prefix && isAbsolute(prefix) && !this.nomount) {
    var trail = /[\/\\]$/.test(prefix)
    if (prefix.charAt(0) === '/') {
      prefix = path.join(this.root, prefix)
    } else {
      prefix = path.resolve(this.root, prefix)
      if (trail)
        prefix += '/'
    }
  }

  if (process.platform === 'win32')
    prefix = prefix.replace(/\\/g, '/')

  // Mark this as a match
  this._emitMatch(index, prefix)
  cb()
}

// Returns either 'DIR', 'FILE', or false
Glob.prototype._stat = function (f, cb) {
  var abs = this._makeAbs(f)
  var needDir = f.slice(-1) === '/'

  if (f.length > this.maxLength)
    return cb()

  if (!this.stat && ownProp(this.cache, abs)) {
    var c = this.cache[abs]

    if (Array.isArray(c))
      c = 'DIR'

    // It exists, but maybe not how we need it
    if (!needDir || c === 'DIR')
      return cb(null, c)

    if (needDir && c === 'FILE')
      return cb()

    // otherwise we have to stat, because maybe c=true
    // if we know it exists, but not what it is.
  }

  var exists
  var stat = this.statCache[abs]
  if (stat !== undefined) {
    if (stat === false)
      return cb(null, stat)
    else {
      var type = stat.isDirectory() ? 'DIR' : 'FILE'
      if (needDir && type === 'FILE')
        return cb()
      else
        return cb(null, type, stat)
    }
  }

  var self = this
  var statcb = inflight('stat\0' + abs, lstatcb_)
  if (statcb)
    fs.lstat(abs, statcb)

  function lstatcb_ (er, lstat) {
    if (lstat && lstat.isSymbolicLink()) {
      // If it's a symlink, then treat it as the target, unless
      // the target does not exist, then treat it as a file.
      return fs.stat(abs, function (er, stat) {
        if (er)
          self._stat2(f, abs, null, lstat, cb)
        else
          self._stat2(f, abs, er, stat, cb)
      })
    } else {
      self._stat2(f, abs, er, lstat, cb)
    }
  }
}

Glob.prototype._stat2 = function (f, abs, er, stat, cb) {
  if (er) {
    this.statCache[abs] = false
    return cb()
  }

  var needDir = f.slice(-1) === '/'
  this.statCache[abs] = stat

  if (abs.slice(-1) === '/' && !stat.isDirectory())
    return cb(null, false, stat)

  var c = stat.isDirectory() ? 'DIR' : 'FILE'
  this.cache[abs] = this.cache[abs] || c

  if (needDir && c !== 'DIR')
    return cb()

  return cb(null, c, stat)
}
 at SyntaxError: Unexpected token (49:4)
    at Parser.pp$4.raise (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:2221:15)
    at Parser.pp.unexpected (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:603:10)
    at Parser.pp$2.parseBindingAtom (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:1417:12)
    at Parser.parseBindingAtom (/root/ExpoSE/lib/Tropigate/bin/FunctionSignatures.js:49:30)
    at Parser.pp$1.parseVarId (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:1049:20)
    at Parser.pp$1.parseVar (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:1032:14)
    at Parser.pp$1.parseVarStatement (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:917:10)
    at Parser.pp$1.parseStatement (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:706:19)
    at Parser.parseStatement (/root/ExpoSE/lib/Tropigate/bin/Statements.js:104:30)
    at Parser.pp$1.parseTopLevel (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:638:25)
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/mingge.js/node_modules/mingge.js/gulpfile.js. Coverage (Term): 9% Coverage (LOC): 9%
*- File /root/Targets/mingge.js/node_modules/gulp/index.js. Coverage (Term): 21% Coverage (LOC): 29%
*- File /root/Targets/mingge.js/node_modules/orchestrator/index.js. Coverage (Term): 13% Coverage (LOC): 19%
*- File /root/Targets/mingge.js/node_modules/orchestrator/lib/runTask.js. Coverage (Term): 14% Coverage (LOC): 16%
*- File /root/Targets/mingge.js/node_modules/end-of-stream/index.js. Coverage (Term): 11% Coverage (LOC): 14%
*- File /root/Targets/mingge.js/node_modules/once/once.js. Coverage (Term): 49% Coverage (LOC): 53%
*- File /root/Targets/mingge.js/node_modules/wrappy/wrappy.js. Coverage (Term): 31% Coverage (LOC): 48%
*- File /root/Targets/mingge.js/node_modules/stream-consume/index.js. Coverage (Term): 29% Coverage (LOC): 33%
*- File /root/Targets/mingge.js/node_modules/sequencify/index.js. Coverage (Term): 12% Coverage (LOC): 12%
*- File /root/Targets/mingge.js/node_modules/gulp-util/index.js. Coverage (Term): 98% Coverage (LOC): 100%
*- File /root/Targets/mingge.js/node_modules/vinyl/index.js. Coverage (Term): 20% Coverage (LOC): 33%
*- File /root/Targets/mingge.js/node_modules/clone/clone.js. Coverage (Term): 16% Coverage (LOC): 22%
*- File /root/Targets/mingge.js/node_modules/clone-stats/index.js. Coverage (Term): 43% Coverage (LOC): 50%
*- File /root/Targets/mingge.js/node_modules/vinyl/lib/cloneBuffer.js. Coverage (Term): 53% Coverage (LOC): 63%
*- File /root/Targets/mingge.js/node_modules/vinyl/lib/isBuffer.js. Coverage (Term): 95% Coverage (LOC): 100%
*- File /root/Targets/mingge.js/node_modules/vinyl/lib/isStream.js. Coverage (Term): 62% Coverage (LOC): 83%
*- File /root/Targets/mingge.js/node_modules/vinyl/lib/isNull.js. Coverage (Term): 61% Coverage (LOC): 80%
*- File /root/Targets/mingge.js/node_modules/vinyl/lib/inspectStream.js. Coverage (Term): 40% Coverage (LOC): 45%
*- File /root/Targets/mingge.js/node_modules/replace-ext/index.js. Coverage (Term): 32% Coverage (LOC): 45%
*- File /root/Targets/mingge.js/node_modules/chalk/index.js. Coverage (Term): 46% Coverage (LOC): 56%
*- File /root/Targets/mingge.js/node_modules/escape-string-regexp/index.js. Coverage (Term): 85% Coverage (LOC): 90%
*- File /root/Targets/mingge.js/node_modules/ansi-styles/index.js. Coverage (Term): 98% Coverage (LOC): 100%
*- File /root/Targets/mingge.js/node_modules/strip-ansi/index.js. Coverage (Term): 57% Coverage (LOC): 86%
*- File /root/Targets/mingge.js/node_modules/ansi-regex/index.js. Coverage (Term): 93% Coverage (LOC): 100%
*- File /root/Targets/mingge.js/node_modules/has-ansi/index.js. Coverage (Term): 97% Coverage (LOC): 100%
*- File /root/Targets/mingge.js/node_modules/supports-color/index.js. Coverage (Term): 63% Coverage (LOC): 56%
*- File /root/Targets/mingge.js/node_modules/dateformat/lib/dateformat.js. Coverage (Term): 17% Coverage (LOC): 41%
*- File /root/Targets/mingge.js/node_modules/gulp-util/lib/log.js. Coverage (Term): 38% Coverage (LOC): 42%
*- File /root/Targets/mingge.js/node_modules/has-gulplog/index.js. Coverage (Term): 71% Coverage (LOC): 86%
*- File /root/Targets/mingge.js/node_modules/sparkles/index.js. Coverage (Term): 31% Coverage (LOC): 37%
*- File /root/Targets/mingge.js/node_modules/gulp-util/lib/template.js. Coverage (Term): 47% Coverage (LOC): 63%
*- File /root/Targets/mingge.js/node_modules/lodash.template/index.js. Coverage (Term): 20% Coverage (LOC): 33%
*- File /root/Targets/mingge.js/node_modules/lodash._basecopy/index.js. Coverage (Term): 29% Coverage (LOC): 36%
*- File /root/Targets/mingge.js/node_modules/lodash._basetostring/index.js. Coverage (Term): 53% Coverage (LOC): 80%
*- File /root/Targets/mingge.js/node_modules/lodash._basevalues/index.js. Coverage (Term): 31% Coverage (LOC): 44%
*- File /root/Targets/mingge.js/node_modules/lodash._isiterateecall/index.js. Coverage (Term): 20% Coverage (LOC): 43%
*- File /root/Targets/mingge.js/node_modules/lodash._reinterpolate/index.js. Coverage (Term): 95% Coverage (LOC): 100%
*- File /root/Targets/mingge.js/node_modules/lodash.keys/index.js. Coverage (Term): 19% Coverage (LOC): 33%
*- File /root/Targets/mingge.js/node_modules/lodash._getnative/index.js. Coverage (Term): 82% Coverage (LOC): 89%
*- File /root/Targets/mingge.js/node_modules/lodash.isarguments/index.js. Coverage (Term): 30% Coverage (LOC): 64%
*- File /root/Targets/mingge.js/node_modules/lodash.isarray/index.js. Coverage (Term): 69% Coverage (LOC): 86%
*- File /root/Targets/mingge.js/node_modules/lodash.restparam/index.js. Coverage (Term): 29% Coverage (LOC): 34%
*- File /root/Targets/mingge.js/node_modules/lodash.templatesettings/index.js. Coverage (Term): 98% Coverage (LOC): 100%
*- File /root/Targets/mingge.js/node_modules/lodash.escape/index.js. Coverage (Term): 41% Coverage (LOC): 59%
*- File /root/Targets/mingge.js/node_modules/lodash._root/index.js. Coverage (Term): 86% Coverage (LOC): 100%
*- File /root/Targets/mingge.js/node_modules/lodash._reescape/index.js. Coverage (Term): 95% Coverage (LOC): 100%
*- File /root/Targets/mingge.js/node_modules/lodash._reevaluate/index.js. Coverage (Term): 95% Coverage (LOC): 100%
*- File /root/Targets/mingge.js/node_modules/gulp-util/lib/env.js. Coverage (Term): 97% Coverage (LOC): 100%
*- File /root/Targets/mingge.js/node_modules/minimist/index.js. Coverage (Term): 22% Coverage (LOC): 34%
*- File /root/Targets/mingge.js/node_modules/beeper/index.js. Coverage (Term): 13% Coverage (LOC): 17%
*- File /root/Targets/mingge.js/node_modules/gulp-util/lib/noop.js. Coverage (Term): 70% Coverage (LOC): 83%
*- File /root/Targets/mingge.js/node_modules/through2/through2.js. Coverage (Term): 24% Coverage (LOC): 26%
*- File /root/Targets/mingge.js/node_modules/through2/node_modules/readable-stream/transform.js. Coverage (Term): 95% Coverage (LOC): 100%
*- File /root/Targets/mingge.js/node_modules/through2/node_modules/readable-stream/readable.js. Coverage (Term): 61% Coverage (LOC): 60%
*- File /root/Targets/mingge.js/node_modules/through2/node_modules/readable-stream/lib/_stream_readable.js. Coverage (Term): 8% Coverage (LOC): 14%
*- File /root/Targets/mingge.js/node_modules/process-nextick-args/index.js. Coverage (Term): 22% Coverage (LOC): 19%
*- File /root/Targets/mingge.js/node_modules/through2/node_modules/isarray/index.js. Coverage (Term): 62% Coverage (LOC): 83%
*- File /root/Targets/mingge.js/node_modules/through2/node_modules/readable-stream/lib/internal/streams/stream.js. Coverage (Term): 95% Coverage (LOC): 100%
*- File /root/Targets/mingge.js/node_modules/safe-buffer/index.js. Coverage (Term): 36% Coverage (LOC): 44%
*- File /root/Targets/mingge.js/node_modules/core-util-is/lib/util.js. Coverage (Term): 33% Coverage (LOC): 64%
*- File /root/Targets/mingge.js/node_modules/inherits/inherits.js. Coverage (Term): 74% Coverage (LOC): 88%
*- File /root/Targets/mingge.js/node_modules/through2/node_modules/readable-stream/lib/internal/streams/BufferList.js. Coverage (Term): 19% Coverage (LOC): 29%
*- File /root/Targets/mingge.js/node_modules/through2/node_modules/readable-stream/lib/internal/streams/destroy.js. Coverage (Term): 15% Coverage (LOC): 21%
*- File /root/Targets/mingge.js/node_modules/through2/node_modules/readable-stream/lib/_stream_writable.js. Coverage (Term): 14% Coverage (LOC): 19%
*- File /root/Targets/mingge.js/node_modules/util-deprecate/node.js. Coverage (Term): 95% Coverage (LOC): 100%
*- File /root/Targets/mingge.js/node_modules/through2/node_modules/readable-stream/lib/_stream_duplex.js. Coverage (Term): 35% Coverage (LOC): 44%
*- File /root/Targets/mingge.js/node_modules/through2/node_modules/readable-stream/lib/_stream_transform.js. Coverage (Term): 14% Coverage (LOC): 22%
*- File /root/Targets/mingge.js/node_modules/through2/node_modules/readable-stream/lib/_stream_passthrough.js. Coverage (Term): 59% Coverage (LOC): 73%
*- File /root/Targets/mingge.js/node_modules/xtend/immutable.js. Coverage (Term): 32% Coverage (LOC): 33%
*- File /root/Targets/mingge.js/node_modules/gulp-util/lib/isStream.js. Coverage (Term): 62% Coverage (LOC): 83%
*- File /root/Targets/mingge.js/node_modules/gulp-util/lib/isBuffer.js. Coverage (Term): 64% Coverage (LOC): 86%
*- File /root/Targets/mingge.js/node_modules/gulp-util/lib/isNull.js. Coverage (Term): 61% Coverage (LOC): 80%
*- File /root/Targets/mingge.js/node_modules/gulp-util/lib/combine.js. Coverage (Term): 36% Coverage (LOC): 45%
*- File /root/Targets/mingge.js/node_modules/multipipe/index.js. Coverage (Term): 19% Coverage (LOC): 20%
*- File /root/Targets/mingge.js/node_modules/duplexer2/index.js. Coverage (Term): 20% Coverage (LOC): 24%
*- File /root/Targets/mingge.js/node_modules/readable-stream/readable.js. Coverage (Term): 90% Coverage (LOC): 92%
*- File /root/Targets/mingge.js/node_modules/readable-stream/lib/_stream_readable.js. Coverage (Term): 7% Coverage (LOC): 11%
*- File /root/Targets/mingge.js/node_modules/isarray/index.js. Coverage (Term): 53% Coverage (LOC): 80%
*- File /root/Targets/mingge.js/node_modules/readable-stream/lib/_stream_writable.js. Coverage (Term): 9% Coverage (LOC): 16%
*- File /root/Targets/mingge.js/node_modules/readable-stream/lib/_stream_duplex.js. Coverage (Term): 49% Coverage (LOC): 51%
*- File /root/Targets/mingge.js/node_modules/readable-stream/lib/_stream_transform.js. Coverage (Term): 15% Coverage (LOC): 23%
*- File /root/Targets/mingge.js/node_modules/readable-stream/lib/_stream_passthrough.js. Coverage (Term): 58% Coverage (LOC): 71%
*- File /root/Targets/mingge.js/node_modules/gulp-util/lib/buffer.js. Coverage (Term): 27% Coverage (LOC): 33%
*- File /root/Targets/mingge.js/node_modules/gulp-util/lib/PluginError.js. Coverage (Term): 19% Coverage (LOC): 25%
*- File /root/Targets/mingge.js/node_modules/array-differ/index.js. Coverage (Term): 32% Coverage (LOC): 56%
*- File /root/Targets/mingge.js/node_modules/array-uniq/index.js. Coverage (Term): 36% Coverage (LOC): 44%
*- File /root/Targets/mingge.js/node_modules/object-assign/index.js. Coverage (Term): 19% Coverage (LOC): 29%
*- File /root/Targets/mingge.js/node_modules/deprecated/index.js. Coverage (Term): 17% Coverage (LOC): 18%
*- File /root/Targets/mingge.js/node_modules/vinyl-fs/index.js. Coverage (Term): 62% Coverage (LOC): 75%
*- File /root/Targets/mingge.js/node_modules/vinyl-fs/lib/src/index.js. Coverage (Term): 17% Coverage (LOC): 23%
*- File /root/Targets/mingge.js/node_modules/defaults/index.js. Coverage (Term): 34% Coverage (LOC): 42%
*- File /root/Targets/mingge.js/node_modules/vinyl-fs/node_modules/through2/through2.js. Coverage (Term): 24% Coverage (LOC): 26%
*- File /root/Targets/mingge.js/node_modules/vinyl-fs/node_modules/readable-stream/transform.js. Coverage (Term): 95% Coverage (LOC): 100%
*- File /root/Targets/mingge.js/node_modules/vinyl-fs/node_modules/readable-stream/lib/_stream_transform.js. Coverage (Term): 15% Coverage (LOC): 23%
*- File /root/Targets/mingge.js/node_modules/vinyl-fs/node_modules/readable-stream/lib/_stream_duplex.js. Coverage (Term): 49% Coverage (LOC): 51%
*- File /root/Targets/mingge.js/node_modules/vinyl-fs/node_modules/readable-stream/lib/_stream_readable.js. Coverage (Term): 6% Coverage (LOC): 10%
*- File /root/Targets/mingge.js/node_modules/vinyl-fs/node_modules/readable-stream/lib/_stream_writable.js. Coverage (Term): 9% Coverage (LOC): 17%
*- File /root/Targets/mingge.js/node_modules/glob-stream/index.js. Coverage (Term): 9% Coverage (LOC): 13%
*- File /root/Targets/mingge.js/node_modules/glob-stream/node_modules/through2/through2.js. Coverage (Term): 24% Coverage (LOC): 26%
*- File /root/Targets/mingge.js/node_modules/glob-stream/node_modules/readable-stream/transform.js. Coverage (Term): 95% Coverage (LOC): 100%
*- File /root/Targets/mingge.js/node_modules/glob-stream/node_modules/readable-stream/lib/_stream_transform.js. Coverage (Term): 15% Coverage (LOC): 23%
*- File /root/Targets/mingge.js/node_modules/glob-stream/node_modules/readable-stream/lib/_stream_duplex.js. Coverage (Term): 49% Coverage (LOC): 51%
*- File /root/Targets/mingge.js/node_modules/glob-stream/node_modules/readable-stream/lib/_stream_readable.js. Coverage (Term): 6% Coverage (LOC): 10%
*- File /root/Targets/mingge.js/node_modules/glob-stream/node_modules/readable-stream/lib/_stream_writable.js. Coverage (Term): 9% Coverage (LOC): 17%
*- File /root/Targets/mingge.js/node_modules/ordered-read-streams/index.js. Coverage (Term): 15% Coverage (LOC): 19%
*- File /root/Targets/mingge.js/node_modules/unique-stream/index.js. Coverage (Term): 12% Coverage (LOC): 13%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **