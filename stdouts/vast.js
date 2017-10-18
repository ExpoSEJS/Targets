/root/Targets/vast.js
└── vast.js@0.0.1-2 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/vast.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000

*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0438 took 10.384s
*-- Errors occured in test {"_bound":0}
* Error: Tropigate failed because SyntaxError: Octal literal in strict mode (128:13) on program 
/*!
 * debug
 * Copyright(c) 2012 TJ Holowaychuk <tj@vision-media.ca>
 * MIT Licensed
 */

/**
 * Module dependencies.
 */

var tty = require('tty');

/**
 * Expose `debug()` as the module.
 */

module.exports = debug;

/**
 * Library version.
 */

exports.version = '0.6.0';

/**
 * Enabled debuggers.
 */

var names = []
  , skips = [];

(process.env.DEBUG || '')
  .split(/[\s,]+/)
  .forEach(function(name){
    name = name.replace('*', '.*?');
    if (name[0] === '-') {
      skips.push(new RegExp('^' + name.substr(1) + '$'));
    } else {
      names.push(new RegExp('^' + name + '$'));
    }
  });

/**
 * Colors.
 */

var colors = [6, 2, 3, 4, 5, 1];

/**
 * Previous debug() call.
 */

var prev = {};

/**
 * Previously assigned color.
 */

var prevColor = 0;

/**
 * Is stdout a TTY? Colored output is disabled when `true`.
 */

var isatty = tty.isatty(2);

/**
 * Select a color.
 *
 * @return {Number}
 * @api private
 */

function color() {
  return colors[prevColor++ % colors.length];
}

/**
 * Humanize the given `ms`.
 *
 * @param {Number} m
 * @return {String}
 * @api private
 */

function humanize(ms) {
  var sec = 1000
    , min = 60 * 1000
    , hour = 60 * min;

  if (ms >= hour) return (ms / hour).toFixed(1) + 'h';
  if (ms >= min) return (ms / min).toFixed(1) + 'm';
  if (ms >= sec) return (ms / sec | 0) + 's';
  return ms + 'ms';
}

/**
 * Create a debugger with the given `name`.
 *
 * @param {String} name
 * @return {Type}
 * @api public
 */

function debug(name) {
  function disabled(){}
  disabled.enabled = false;

  var match = skips.some(function(re){
    return re.test(name);
  });

  if (match) return disabled;

  match = names.some(function(re){
    return re.test(name);
  });

  if (!match) return disabled;
  var c = color();

  function colored(fmt) {
    var curr = new Date;
    var ms = curr - (prev[name] || curr);
    prev[name] = curr;

    fmt = '  \033[9' + c + 'm' + name + ' '
      + '\033[3' + c + 'm\033[90m'
      + fmt + '\033[3' + c + 'm'
      + ' +' + humanize(ms) + '\033[0m';

    console.error.apply(this, arguments);
  }

  function plain(fmt) {
    fmt = new Date().toUTCString()
      + ' ' + name + ' ' + fmt;
    console.error.apply(this, arguments);
  }

  colored.enabled = plain.enabled = true;

  return isatty
    ? colored
    : plain;
}
 at SyntaxError: Octal literal in strict mode (128:13)
    at Parser.pp$4.raise (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:2221:15)
    at Parser.pp$7.readEscapedChar (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:3023:16)
    at Parser.pp$7.readString (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:2935:23)
    at Parser.pp$7.getTokenFromCode (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:2724:19)
    at Parser.pp$7.readToken (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:2477:17)
    at Parser.readToken (/root/ExpoSE/lib/Tropigate/bin/Tokens.js:124:26)
    at Parser.pp$7.nextToken (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:2468:15)
    at Parser.pp$7.next (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:2413:10)
    at Parser.pp$3.parseMaybeAssign (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:1607:12)
    at Parser.pp$3.parseExpression (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:1573:21)
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/vast.js/node_modules/vast.js/index.js. Coverage (Term): 80% Coverage (LOC): 100%
*- File /root/Targets/vast.js/node_modules/vast.js/lib/index.js. Coverage (Term): 9% Coverage (LOC): 9%
*- File /root/Targets/vast.js/node_modules/socket.io/index.js. Coverage (Term): 80% Coverage (LOC): 100%
*- File /root/Targets/vast.js/node_modules/socket.io/lib/index.js. Coverage (Term): 5% Coverage (LOC): 4%
*- File /root/Targets/vast.js/node_modules/engine.io/lib/engine.io.js. Coverage (Term): 19% Coverage (LOC): 29%
*- File /root/Targets/vast.js/node_modules/engine.io/lib/server.js. Coverage (Term): 5% Coverage (LOC): 3%
*- File /root/Targets/vast.js/node_modules/base64id/lib/base64id.js. Coverage (Term): 13% Coverage (LOC): 15%
*- File /root/Targets/vast.js/node_modules/engine.io/lib/transports/index.js. Coverage (Term): 29% Coverage (LOC): 29%
*- File /root/Targets/vast.js/node_modules/engine.io/lib/transports/polling-xhr.js. Coverage (Term): 8% Coverage (LOC): 12%
*- File /root/Targets/vast.js/node_modules/engine.io/lib/transports/polling.js. Coverage (Term): 3% Coverage (LOC): 4%
*- File /root/Targets/vast.js/node_modules/engine.io/lib/transport.js. Coverage (Term): 17% Coverage (LOC): 17%
*- File /root/Targets/vast.js/node_modules/engine.io-parser/index.js. Coverage (Term): 95% Coverage (LOC): 100%
*- File /root/Targets/vast.js/node_modules/engine.io-parser/lib/index.js. Coverage (Term): 7% Coverage (LOC): 15%
*- File /root/Targets/vast.js/node_modules/utf8/utf8.js. Coverage (Term): 16% Coverage (LOC): 19%
*- File /root/Targets/vast.js/node_modules/after/index.js. Coverage (Term): 20% Coverage (LOC): 24%
*- File /root/Targets/vast.js/node_modules/engine.io-parser/lib/keys.js. Coverage (Term): 33% Coverage (LOC): 33%
*- File /root/Targets/vast.js/node_modules/engine.io/node_modules/debug/index.js. Coverage (Term): 80% Coverage (LOC): 100%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **