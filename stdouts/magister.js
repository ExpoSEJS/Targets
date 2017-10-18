/root/Targets/magister.js
└─┬ magister.js@1.24.2 
  ├── lodash@3.10.1 
  └─┬ request@2.81.0 
    ├── aws-sign2@0.6.0 
    ├── aws4@1.6.0 
    ├── caseless@0.12.0 
    ├─┬ combined-stream@1.0.5 
    │ └── delayed-stream@1.0.0 
    ├── extend@3.0.1 
    ├── forever-agent@0.6.1 
    ├─┬ form-data@2.1.4 
    │ └── asynckit@0.4.0 
    ├─┬ har-validator@4.2.1 
    │ ├─┬ ajv@4.11.8 
    │ │ ├── co@4.6.0 
    │ │ └─┬ json-stable-stringify@1.0.1 
    │ │   └── jsonify@0.0.0 
    │ └── har-schema@1.0.5 
    ├─┬ hawk@3.1.3 
    │ ├── boom@2.10.1 
    │ ├── cryptiles@2.0.5 
    │ ├── hoek@2.16.3 
    │ └── sntp@1.0.9 
    ├─┬ http-signature@1.1.1 
    │ ├── assert-plus@0.2.0 
    │ ├─┬ jsprim@1.4.1 
    │ │ ├── assert-plus@1.0.0 
    │ │ ├── extsprintf@1.3.0 
    │ │ ├── json-schema@0.2.3 
    │ │ └─┬ verror@1.10.0 
    │ │   ├── assert-plus@1.0.0 
    │ │   └── core-util-is@1.0.2 
    │ └─┬ sshpk@1.13.1 
    │   ├── asn1@0.2.3 
    │   ├── assert-plus@1.0.0 
    │   ├── bcrypt-pbkdf@1.0.1 
    │   ├─┬ dashdash@1.14.1 
    │   │ └── assert-plus@1.0.0 
    │   ├── ecc-jsbn@0.1.1 
    │   ├─┬ getpass@0.1.7 
    │   │ └── assert-plus@1.0.0 
    │   ├── jsbn@0.1.1 
    │   └── tweetnacl@0.14.5 
    ├── is-typedarray@1.0.0 
    ├── isstream@0.1.2 
    ├── json-stringify-safe@5.0.1 
    ├─┬ mime-types@2.1.17 
    │ └── mime-db@1.30.0 
    ├── oauth-sign@0.8.2 
    ├── performance-now@0.2.0 
    ├── qs@6.4.0 
    ├── safe-buffer@5.1.1 
    ├── stringstream@0.0.5 
    ├─┬ tough-cookie@2.3.3 
    │ └── punycode@1.4.1 
    ├── tunnel-agent@0.6.0 
    └── uuid@3.1.0 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/magister.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000

*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","call","RegExp","WeakMap","max","Array","freeze","toUpperCase","create"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0266 took 60.0579s
*-- Errors occured in test {"_bound":0}
* Error: Tropigate failed because SyntaxError: Unexpected token (3:4) on program // Copyright 2012 Joyent, Inc.  All rights reserved.

var assert = require('assert-plus');
var util = require('util');
var utils = require('./utils');



///--- Globals

var HASH_ALGOS = utils.HASH_ALGOS;
var PK_ALGOS = utils.PK_ALGOS;
var HttpSignatureError = utils.HttpSignatureError;
var InvalidAlgorithmError = utils.InvalidAlgorithmError;
var validateAlgorithm = utils.validateAlgorithm;

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

function StrictParsingError(message) {
  HttpSignatureError.call(this, message, StrictParsingError);
}
util.inherits(StrictParsingError, HttpSignatureError);

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
   *           "digest"
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
   *                   - strict: should enforce latest spec parsing
   *                             (default: false).
   * @return {Object} parsed out object (see above).
   * @throws {TypeError} on invalid input.
   * @throws {InvalidHeaderError} on an invalid Authorization header error.
   * @throws {InvalidParamsError} if the params in the scheme are invalid.
   * @throws {MissingHeaderError} if the params indicate a header not present,
   *                              either in the request headers from the params,
   *                              or not in the params from a required header
   *                              in options.
   * @throws {StrictParsingError} if old attributes are used in strict parsing
   *                              mode.
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
    try {
      validateAlgorithm(parsed.params.algorithm);
    } catch (e) {
      if (e instanceof InvalidAlgorithmError)
        throw (new InvalidParamsError(parsed.params.algorithm + ' is not ' +
          'supported'));
      else
        throw (e);
    }

    // Build the signingString
    for (i = 0; i < parsed.params.headers.length; i++) {
      var h = parsed.params.headers[i].toLowerCase();
      parsed.params.headers[i] = h;

      if (h === 'request-line') {
        if (!options.strict) {
          /*
           * We allow headers from the older spec drafts if strict parsing isn't
           * specified in options.
           */
          parsed.signingString +=
            request.method + ' ' + request.url + ' HTTP/' + request.httpVersion;
        } else {
          /* Strict parsing doesn't allow older draft headers. */
          throw (new StrictParsingError('request-line is not a valid header ' +
            'with strict parsing enabled.'));
        }
      } else if (h === '(request-target)') {
        parsed.signingString +=
          '(request-target): ' + request.method.toLowerCase() + ' ' +
          request.url;
      } else {
        var value = request.headers[h];
        if (value === undefined)
          throw new MissingHeaderError(h + ' was not in the request');
        parsed.signingString += h + ': ' + value;
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
*- File /root/Targets/magister.js/node_modules/magister.js/lib/node/magister-node.js. Coverage (Term): 7% Coverage (LOC): 12%
*- File /root/Targets/magister.js/node_modules/lodash/index.js. Coverage (Term): 20% Coverage (LOC): 31%
*- File /root/Targets/magister.js/node_modules/request/index.js. Coverage (Term): 24% Coverage (LOC): 28%
*- File /root/Targets/magister.js/node_modules/extend/index.js. Coverage (Term): 13% Coverage (LOC): 16%
*- File /root/Targets/magister.js/node_modules/request/lib/cookies.js. Coverage (Term): 33% Coverage (LOC): 50%
*- File /root/Targets/magister.js/node_modules/tough-cookie/lib/cookie.js. Coverage (Term): 14% Coverage (LOC): 21%
*- File /root/Targets/magister.js/node_modules/tough-cookie/lib/pubsuffix.js. Coverage (Term): 98% Coverage (LOC): 99%
*- File /root/Targets/magister.js/node_modules/tough-cookie/lib/store.js. Coverage (Term): 41% Coverage (LOC): 74%
*- File /root/Targets/magister.js/node_modules/tough-cookie/lib/memstore.js. Coverage (Term): 17% Coverage (LOC): 26%
*- File /root/Targets/magister.js/node_modules/tough-cookie/lib/permuteDomain.js. Coverage (Term): 25% Coverage (LOC): 27%
*- File /root/Targets/magister.js/node_modules/tough-cookie/lib/pathMatch.js. Coverage (Term): 28% Coverage (LOC): 28%
*- File /root/Targets/magister.js/node_modules/request/lib/helpers.js. Coverage (Term): 35% Coverage (LOC): 53%
*- File /root/Targets/magister.js/node_modules/json-stringify-safe/stringify.js. Coverage (Term): 14% Coverage (LOC): 27%
*- File /root/Targets/magister.js/node_modules/safe-buffer/index.js. Coverage (Term): 36% Coverage (LOC): 44%
*- File /root/Targets/magister.js/node_modules/request/request.js. Coverage (Term): 2% Coverage (LOC): 1%
*- File /root/Targets/magister.js/node_modules/hawk/lib/index.js. Coverage (Term): 98% Coverage (LOC): 100%
*- File /root/Targets/magister.js/node_modules/boom/lib/index.js. Coverage (Term): 15% Coverage (LOC): 38%
*- File /root/Targets/magister.js/node_modules/hoek/lib/index.js. Coverage (Term): 7% Coverage (LOC): 16%
*- File /root/Targets/magister.js/node_modules/hoek/lib/escape.js. Coverage (Term): 33% Coverage (LOC): 46%
*- File /root/Targets/magister.js/node_modules/sntp/index.js. Coverage (Term): 95% Coverage (LOC): 100%
*- File /root/Targets/magister.js/node_modules/sntp/lib/index.js. Coverage (Term): 7% Coverage (LOC): 14%
*- File /root/Targets/magister.js/node_modules/hawk/lib/server.js. Coverage (Term): 6% Coverage (LOC): 10%
*- File /root/Targets/magister.js/node_modules/cryptiles/lib/index.js. Coverage (Term): 19% Coverage (LOC): 30%
*- File /root/Targets/magister.js/node_modules/hawk/lib/crypto.js. Coverage (Term): 19% Coverage (LOC): 42%
*- File /root/Targets/magister.js/node_modules/hawk/lib/utils.js. Coverage (Term): 16% Coverage (LOC): 22%
*- File /root/Targets/magister.js/node_modules/hawk/lib/client.js. Coverage (Term): 7% Coverage (LOC): 10%
*- File /root/Targets/magister.js/node_modules/aws-sign2/index.js. Coverage (Term): 26% Coverage (LOC): 51%
*- File /root/Targets/magister.js/node_modules/aws4/aws4.js. Coverage (Term): 9% Coverage (LOC): 18%
*- File /root/Targets/magister.js/node_modules/aws4/lru.js. Coverage (Term): 26% Coverage (LOC): 33%
*- File /root/Targets/magister.js/node_modules/http-signature/lib/index.js. Coverage (Term): 29% Coverage (LOC): 20%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **