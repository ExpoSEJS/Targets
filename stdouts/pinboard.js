/root/Targets/pinboard.js
└─┬ pinboard.js@1.0.2 
  ├── browser-request@0.3.3 
  ├─┬ request@2.51.0 
  │ ├── aws-sign2@0.5.0 
  │ ├─┬ bl@0.9.5 
  │ │ └─┬ readable-stream@1.0.34 
  │ │   ├── core-util-is@1.0.2 
  │ │   ├── inherits@2.0.3 
  │ │   ├── isarray@0.0.1 
  │ │   └── string_decoder@0.10.31 
  │ ├── caseless@0.8.0 
  │ ├─┬ combined-stream@0.0.7 
  │ │ └── delayed-stream@0.0.5 
  │ ├── forever-agent@0.5.2 
  │ ├─┬ form-data@0.2.0 
  │ │ ├── async@0.9.2 
  │ │ └─┬ mime-types@2.0.14 
  │ │   └── mime-db@1.12.0 
  │ ├─┬ hawk@1.1.1 
  │ │ ├── boom@0.4.2 
  │ │ ├── cryptiles@0.2.2 
  │ │ ├── hoek@0.9.1 
  │ │ └── sntp@0.2.4 
  │ ├─┬ http-signature@0.10.1 
  │ │ ├── asn1@0.1.11 
  │ │ ├── assert-plus@0.1.5 
  │ │ └── ctype@0.5.3 
  │ ├── json-stringify-safe@5.0.1 
  │ ├── mime-types@1.0.2 
  │ ├── node-uuid@1.4.8 
  │ ├── oauth-sign@0.5.0 
  │ ├── qs@2.3.3 
  │ ├── stringstream@0.0.5 
  │ ├─┬ tough-cookie@2.3.3 
  │ │ └── punycode@1.4.1 
  │ └── tunnel-agent@0.4.3 
  └── xtend@4.0.1 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/pinboard.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000

*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","freeze","RegExp"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0349 took 68.5912s
*-- Errors occured in test {"_bound":0}
* Error: Tropigate failed because SyntaxError: Unexpected token (3:4) on program // Copyright 2012 Joyent, Inc.  All rights reserved.

var assert = require('assert-plus');
var util = require('util');



///--- Globals

var Algorithms = {
  'rsa-sha1': true,
  'rsa-sha256': true,
  'rsa-sha512': true,
  'dsa-sha1': true,
  'hmac-sha1': true,
  'hmac-sha256': true,
  'hmac-sha512': true
};

var State = {
  New: 0,
  Params: 1
};

var ParamsState = {
  Name: 0,
  Quote: 1,
  Value: 2,
  Comma: 3
};



///--- Specific Errors

function HttpSignatureError(message, caller) {
  if (Error.captureStackTrace)
    Error.captureStackTrace(this, caller || HttpSignatureError);

  this.message = message;
  this.name = caller.name;
}
util.inherits(HttpSignatureError, Error);

function ExpiredRequestError(message) {
  HttpSignatureError.call(this, message, ExpiredRequestError);
}
util.inherits(ExpiredRequestError, HttpSignatureError);


function InvalidHeaderError(message) {
  HttpSignatureError.call(this, message, InvalidHeaderError);
}
util.inherits(InvalidHeaderError, HttpSignatureError);


function InvalidParamsError(message) {
  HttpSignatureError.call(this, message, InvalidParamsError);
}
util.inherits(InvalidParamsError, HttpSignatureError);


function MissingHeaderError(message) {
  HttpSignatureError.call(this, message, MissingHeaderError);
}
util.inherits(MissingHeaderError, HttpSignatureError);



///--- Exported API

module.exports = {

  /**
   * Parses the 'Authorization' header out of an http.ServerRequest object.
   *
   * Note that this API will fully validate the Authorization header, and throw
   * on any error.  It will not however check the signature, or the keyId format
   * as those are specific to your environment.  You can use the options object
   * to pass in extra constraints.
   *
   * As a response object you can expect this:
   *
   *     {
   *       "scheme": "Signature",
   *       "params": {
   *         "keyId": "foo",
   *         "algorithm": "rsa-sha256",
   *         "headers": [
   *           "date" or "x-date",
   *           "content-md5"
   *         ],
   *         "signature": "base64"
   *       },
   *       "signingString": "ready to be passed to crypto.verify()"
   *     }
   *
   * @param {Object} request an http.ServerRequest.
   * @param {Object} options an optional options object with:
   *                   - clockSkew: allowed clock skew in seconds (default 300).
   *                   - headers: required header names (def: date or x-date)
   *                   - algorithms: algorithms to support (default: all).
   * @return {Object} parsed out object (see above).
   * @throws {TypeError} on invalid input.
   * @throws {InvalidHeaderError} on an invalid Authorization header error.
   * @throws {InvalidParamsError} if the params in the scheme are invalid.
   * @throws {MissingHeaderError} if the params indicate a header not present,
   *                              either in the request headers from the params,
   *                              or not in the params from a required header
   *                              in options.
   * @throws {ExpiredRequestError} if the value of date or x-date exceeds skew.
   */
  parseRequest: function parseRequest(request, options) {
    assert.object(request, 'request');
    assert.object(request.headers, 'request.headers');
    if (options === undefined) {
      options = {};
    }
    if (options.headers === undefined) {
      options.headers = [request.headers['x-date'] ? 'x-date' : 'date'];
    }
    assert.object(options, 'options');
    assert.arrayOfString(options.headers, 'options.headers');
    assert.optionalNumber(options.clockSkew, 'options.clockSkew');

    if (!request.headers.authorization)
      throw new MissingHeaderError('no authorization header present in ' +
                                   'the request');

    options.clockSkew = options.clockSkew || 300;


    var i = 0;
    var state = State.New;
    var substate = ParamsState.Name;
    var tmpName = '';
    var tmpValue = '';

    var parsed = {
      scheme: '',
      params: {},
      signingString: '',

      get algorithm() {
        return this.params.algorithm.toUpperCase();
      },

      get keyId() {
        return this.params.keyId;
      }

    };

    var authz = request.headers.authorization;
    for (i = 0; i < authz.length; i++) {
      var c = authz.charAt(i);

      switch (Number(state)) {

      case State.New:
        if (c !== ' ') parsed.scheme += c;
        else state = State.Params;
        break;

      case State.Params:
        switch (Number(substate)) {

        case ParamsState.Name:
          var code = c.charCodeAt(0);
          // restricted name of A-Z / a-z
          if ((code >= 0x41 && code <= 0x5a) || // A-Z
              (code >= 0x61 && code <= 0x7a)) { // a-z
            tmpName += c;
          } else if (c === '=') {
            if (tmpName.length === 0)
              throw new InvalidHeaderError('bad param format');
            substate = ParamsState.Quote;
          } else {
            throw new InvalidHeaderError('bad param format');
          }
          break;

        case ParamsState.Quote:
          if (c === '"') {
            tmpValue = '';
            substate = ParamsState.Value;
          } else {
            throw new InvalidHeaderError('bad param format');
          }
          break;

        case ParamsState.Value:
          if (c === '"') {
            parsed.params[tmpName] = tmpValue;
            substate = ParamsState.Comma;
          } else {
            tmpValue += c;
          }
          break;

        case ParamsState.Comma:
          if (c === ',') {
            tmpName = '';
            substate = ParamsState.Name;
          } else {
            throw new InvalidHeaderError('bad param format');
          }
          break;

        default:
          throw new Error('Invalid substate');
        }
        break;

      default:
        throw new Error('Invalid substate');
      }

    }

    if (!parsed.params.headers || parsed.params.headers === '') {
      if (request.headers['x-date']) {
        parsed.params.headers = ['x-date'];
      } else {
        parsed.params.headers = ['date'];
      }
    } else {
      parsed.params.headers = parsed.params.headers.split(' ');
    }

    // Minimally validate the parsed object
    if (!parsed.scheme || parsed.scheme !== 'Signature')
      throw new InvalidHeaderError('scheme was not "Signature"');

    if (!parsed.params.keyId)
      throw new InvalidHeaderError('keyId was not specified');

    if (!parsed.params.algorithm)
      throw new InvalidHeaderError('algorithm was not specified');

    if (!parsed.params.signature)
      throw new InvalidHeaderError('signature was not specified');

    // Check the algorithm against the official list
    parsed.params.algorithm = parsed.params.algorithm.toLowerCase();
    if (!Algorithms[parsed.params.algorithm])
      throw new InvalidParamsError(parsed.params.algorithm +
                                   ' is not supported');

    // Build the signingString
    for (i = 0; i < parsed.params.headers.length; i++) {
      var h = parsed.params.headers[i].toLowerCase();
      parsed.params.headers[i] = h;

      if (h !== 'request-line') {
        var value = request.headers[h];
        if (!value)
          throw new MissingHeaderError(h + ' was not in the request');
        parsed.signingString += h + ': ' + value;
      } else {
        parsed.signingString +=
          request.method + ' ' + request.url + ' HTTP/' + request.httpVersion;
      }

      if ((i + 1) < parsed.params.headers.length)
        parsed.signingString += '\n';
    }

    // Check against the constraints
    var date;
    if (request.headers.date || request.headers['x-date']) {
        if (request.headers['x-date']) {
          date = new Date(request.headers['x-date']);
        } else {
          date = new Date(request.headers.date);
        }
      var now = new Date();
      var skew = Math.abs(now.getTime() - date.getTime());

      if (skew > options.clockSkew * 1000) {
        throw new ExpiredRequestError('clock skew of ' +
                                      (skew / 1000) +
                                      's was greater than ' +
                                      options.clockSkew + 's');
      }
    }

    options.headers.forEach(function (hdr) {
      // Remember that we already checked any headers in the params
      // were in the request, so if this passes we're good.
      if (parsed.params.headers.indexOf(hdr) < 0)
        throw new MissingHeaderError(hdr + ' was not a signed header');
    });

    if (options.algorithms) {
      if (options.algorithms.indexOf(parsed.params.algorithm) === -1)
        throw new InvalidParamsError(parsed.params.algorithm +
                                     ' is not a supported algorithm');
    }

    return parsed;
  }

};
 at SyntaxError: Unexpected token (3:4)
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
*- File /root/Targets/pinboard.js/node_modules/pinboard.js/lib/node.js. Coverage (Term): 73% Coverage (LOC): 100%
*- File /root/Targets/pinboard.js/node_modules/pinboard.js/lib/pinboard.js. Coverage (Term): 12% Coverage (LOC): 25%
*- File /root/Targets/pinboard.js/node_modules/xtend/immutable.js. Coverage (Term): 32% Coverage (LOC): 33%
*- File /root/Targets/pinboard.js/node_modules/request/index.js. Coverage (Term): 16% Coverage (LOC): 27%
*- File /root/Targets/pinboard.js/node_modules/request/lib/cookies.js. Coverage (Term): 33% Coverage (LOC): 50%
*- File /root/Targets/pinboard.js/node_modules/tough-cookie/lib/cookie.js. Coverage (Term): 14% Coverage (LOC): 21%
*- File /root/Targets/pinboard.js/node_modules/tough-cookie/lib/pubsuffix.js. Coverage (Term): 98% Coverage (LOC): 99%
*- File /root/Targets/pinboard.js/node_modules/tough-cookie/lib/store.js. Coverage (Term): 41% Coverage (LOC): 74%
*- File /root/Targets/pinboard.js/node_modules/tough-cookie/lib/memstore.js. Coverage (Term): 17% Coverage (LOC): 26%
*- File /root/Targets/pinboard.js/node_modules/tough-cookie/lib/permuteDomain.js. Coverage (Term): 25% Coverage (LOC): 27%
*- File /root/Targets/pinboard.js/node_modules/tough-cookie/lib/pathMatch.js. Coverage (Term): 28% Coverage (LOC): 28%
*- File /root/Targets/pinboard.js/node_modules/request/lib/helpers.js. Coverage (Term): 33% Coverage (LOC): 51%
*- File /root/Targets/pinboard.js/node_modules/json-stringify-safe/stringify.js. Coverage (Term): 14% Coverage (LOC): 27%
*- File /root/Targets/pinboard.js/node_modules/request/request.js. Coverage (Term): 2% Coverage (LOC): 1%
*- File /root/Targets/pinboard.js/node_modules/qs/index.js. Coverage (Term): 95% Coverage (LOC): 100%
*- File /root/Targets/pinboard.js/node_modules/qs/lib/index.js. Coverage (Term): 97% Coverage (LOC): 100%
*- File /root/Targets/pinboard.js/node_modules/qs/lib/stringify.js. Coverage (Term): 11% Coverage (LOC): 22%
*- File /root/Targets/pinboard.js/node_modules/qs/lib/utils.js. Coverage (Term): 10% Coverage (LOC): 19%
*- File /root/Targets/pinboard.js/node_modules/qs/lib/parse.js. Coverage (Term): 7% Coverage (LOC): 18%
*- File /root/Targets/pinboard.js/node_modules/bl/bl.js. Coverage (Term): 15% Coverage (LOC): 32%
*- File /root/Targets/pinboard.js/node_modules/readable-stream/duplex.js. Coverage (Term): 95% Coverage (LOC): 100%
*- File /root/Targets/pinboard.js/node_modules/readable-stream/lib/_stream_duplex.js. Coverage (Term): 49% Coverage (LOC): 51%
*- File /root/Targets/pinboard.js/node_modules/core-util-is/lib/util.js. Coverage (Term): 33% Coverage (LOC): 64%
*- File /root/Targets/pinboard.js/node_modules/inherits/inherits.js. Coverage (Term): 74% Coverage (LOC): 88%
*- File /root/Targets/pinboard.js/node_modules/readable-stream/lib/_stream_readable.js. Coverage (Term): 6% Coverage (LOC): 10%
*- File /root/Targets/pinboard.js/node_modules/isarray/index.js. Coverage (Term): 53% Coverage (LOC): 80%
*- File /root/Targets/pinboard.js/node_modules/readable-stream/lib/_stream_writable.js. Coverage (Term): 9% Coverage (LOC): 17%
*- File /root/Targets/pinboard.js/node_modules/oauth-sign/index.js. Coverage (Term): 14% Coverage (LOC): 25%
*- File /root/Targets/pinboard.js/node_modules/hawk/index.js. Coverage (Term): 95% Coverage (LOC): 100%
*- File /root/Targets/pinboard.js/node_modules/hawk/lib/index.js. Coverage (Term): 98% Coverage (LOC): 100%
*- File /root/Targets/pinboard.js/node_modules/boom/index.js. Coverage (Term): 95% Coverage (LOC): 100%
*- File /root/Targets/pinboard.js/node_modules/boom/lib/index.js. Coverage (Term): 16% Coverage (LOC): 23%
*- File /root/Targets/pinboard.js/node_modules/hoek/index.js. Coverage (Term): 95% Coverage (LOC): 100%
*- File /root/Targets/pinboard.js/node_modules/hoek/lib/index.js. Coverage (Term): 8% Coverage (LOC): 21%
*- File /root/Targets/pinboard.js/node_modules/hoek/lib/escape.js. Coverage (Term): 34% Coverage (LOC): 46%
*- File /root/Targets/pinboard.js/node_modules/sntp/index.js. Coverage (Term): 95% Coverage (LOC): 100%
*- File /root/Targets/pinboard.js/node_modules/sntp/lib/index.js. Coverage (Term): 6% Coverage (LOC): 13%
*- File /root/Targets/pinboard.js/node_modules/hawk/lib/server.js. Coverage (Term): 5% Coverage (LOC): 8%
*- File /root/Targets/pinboard.js/node_modules/cryptiles/index.js. Coverage (Term): 95% Coverage (LOC): 100%
*- File /root/Targets/pinboard.js/node_modules/cryptiles/lib/index.js. Coverage (Term): 18% Coverage (LOC): 30%
*- File /root/Targets/pinboard.js/node_modules/hawk/lib/crypto.js. Coverage (Term): 20% Coverage (LOC): 45%
*- File /root/Targets/pinboard.js/node_modules/hawk/lib/utils.js. Coverage (Term): 17% Coverage (LOC): 23%
*- File /root/Targets/pinboard.js/node_modules/hawk/lib/client.js. Coverage (Term): 7% Coverage (LOC): 10%
*- File /root/Targets/pinboard.js/node_modules/aws-sign2/index.js. Coverage (Term): 26% Coverage (LOC): 51%
*- File /root/Targets/pinboard.js/node_modules/http-signature/lib/index.js. Coverage (Term): 32% Coverage (LOC): 24%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **