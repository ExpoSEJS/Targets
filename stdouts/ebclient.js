/root/Targets/ebclient.js
└── ebclient.js@0.1.14 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/ebclient.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000

*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","pow","floor","randomBytes","Uint8Array","Uint32Array","Date","call","round","subarray","splice","max","ceil","pop","min","Array","charCodeAt","getTime","reduce","parseInt","abs","create","toString","toUpperCase","bind","freeze","Error","Promise","join","Function"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0527 took 62.0041s
*-- Errors occured in test {"_bound":0}
* Error: ReferenceError: require is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/ebclient.js/node_modules/ebclient.js/lib/enigma.js. Coverage (Term): 31% Coverage (LOC): 38%
*- File /root/Targets/ebclient.js/node_modules/ebclient.js/lib/eb-core.js. Coverage (Term): 0% Coverage (LOC): 0%
*- File /root/Targets/ebclient.js/node_modules/ebclient.js/lib/eb-util-sprintf.js. Coverage (Term): 6% Coverage (LOC): 7%
*- File /root/Targets/ebclient.js/node_modules/ebclient.js/lib/eb-util-extend.js. Coverage (Term): 24% Coverage (LOC): 36%
*- File /root/Targets/ebclient.js/node_modules/extend/index.js. Coverage (Term): 13% Coverage (LOC): 16%
*- File /root/Targets/ebclient.js/node_modules/ebclient.js/lib/eb-util-inherit.js. Coverage (Term): 35% Coverage (LOC): 33%
*- File /root/Targets/ebclient.js/node_modules/ebclient.js/lib/eb-util-retry.js. Coverage (Term): 22% Coverage (LOC): 35%
*- File /root/Targets/ebclient.js/node_modules/ebclient.js/lib/built/sjcl/sjcl.js. Coverage (Term): 18% Coverage (LOC): 38%
*- File /root/Targets/ebclient.js/node_modules/jsbn/index.js. Coverage (Term): 15% Coverage (LOC): 31%
*- File /root/Targets/ebclient.js/node_modules/superagent/lib/node/index.js. Coverage (Term): 16% Coverage (LOC): 21%
*- File /root/Targets/ebclient.js/node_modules/debug/src/index.js. Coverage (Term): 81% Coverage (LOC): 83%
*- File /root/Targets/ebclient.js/node_modules/debug/src/node.js. Coverage (Term): 34% Coverage (LOC): 43%
*- File /root/Targets/ebclient.js/node_modules/debug/src/debug.js. Coverage (Term): 44% Coverage (LOC): 48%
*- File /root/Targets/ebclient.js/node_modules/ms/index.js. Coverage (Term): 12% Coverage (LOC): 15%
*- File /root/Targets/ebclient.js/node_modules/formidable/lib/index.js. Coverage (Term): 97% Coverage (LOC): 100%
*- File /root/Targets/ebclient.js/node_modules/formidable/lib/incoming_form.js. Coverage (Term): 10% Coverage (LOC): 12%
*- File /root/Targets/ebclient.js/node_modules/formidable/lib/file.js. Coverage (Term): 25% Coverage (LOC): 25%
*- File /root/Targets/ebclient.js/node_modules/formidable/lib/multipart_parser.js. Coverage (Term): 14% Coverage (LOC): 15%
*- File /root/Targets/ebclient.js/node_modules/formidable/lib/querystring_parser.js. Coverage (Term): 34% Coverage (LOC): 52%
*- File /root/Targets/ebclient.js/node_modules/formidable/lib/octet_parser.js. Coverage (Term): 51% Coverage (LOC): 63%
*- File /root/Targets/ebclient.js/node_modules/formidable/lib/json_parser.js. Coverage (Term): 26% Coverage (LOC): 38%
*- File /root/Targets/ebclient.js/node_modules/form-data/lib/form_data.js. Coverage (Term): 14% Coverage (LOC): 20%
*- File /root/Targets/ebclient.js/node_modules/combined-stream/lib/combined_stream.js. Coverage (Term): 17% Coverage (LOC): 27%
*- File /root/Targets/ebclient.js/node_modules/delayed-stream/lib/delayed_stream.js. Coverage (Term): 23% Coverage (LOC): 33%
*- File /root/Targets/ebclient.js/node_modules/mime-types/index.js. Coverage (Term): 48% Coverage (LOC): 51%
*- File /root/Targets/ebclient.js/node_modules/mime-db/index.js. Coverage (Term): 95% Coverage (LOC): 100%
*- File /root/Targets/ebclient.js/node_modules/async/lib/async.js. Coverage (Term): 12% Coverage (LOC): 18%
*- File /root/Targets/ebclient.js/node_modules/form-data/lib/populate.js. Coverage (Term): 34% Coverage (LOC): 40%
*- File /root/Targets/ebclient.js/node_modules/superagent/lib/node/response.js. Coverage (Term): 17% Coverage (LOC): 29%
*- File /root/Targets/ebclient.js/node_modules/superagent/lib/node/utils.js. Coverage (Term): 13% Coverage (LOC): 19%
*- File /root/Targets/ebclient.js/node_modules/methods/index.js. Coverage (Term): 59% Coverage (LOC): 27%
*- File /root/Targets/ebclient.js/node_modules/superagent/lib/node/part.js. Coverage (Term): 34% Coverage (LOC): 41%
*- File /root/Targets/ebclient.js/node_modules/mime/mime.js. Coverage (Term): 55% Coverage (LOC): 75%
*- File /root/Targets/ebclient.js/node_modules/readable-stream/passthrough.js. Coverage (Term): 95% Coverage (LOC): 100%
*- File /root/Targets/ebclient.js/node_modules/readable-stream/readable.js. Coverage (Term): 61% Coverage (LOC): 60%
*- File /root/Targets/ebclient.js/node_modules/readable-stream/lib/_stream_readable.js. Coverage (Term): 8% Coverage (LOC): 14%
*- File /root/Targets/ebclient.js/node_modules/process-nextick-args/index.js. Coverage (Term): 22% Coverage (LOC): 19%
*- File /root/Targets/ebclient.js/node_modules/isarray/index.js. Coverage (Term): 62% Coverage (LOC): 83%
*- File /root/Targets/ebclient.js/node_modules/readable-stream/lib/internal/streams/stream.js. Coverage (Term): 95% Coverage (LOC): 100%
*- File /root/Targets/ebclient.js/node_modules/safe-buffer/index.js. Coverage (Term): 36% Coverage (LOC): 44%
*- File /root/Targets/ebclient.js/node_modules/core-util-is/lib/util.js. Coverage (Term): 33% Coverage (LOC): 64%
*- File /root/Targets/ebclient.js/node_modules/inherits/inherits.js. Coverage (Term): 74% Coverage (LOC): 88%
*- File /root/Targets/ebclient.js/node_modules/readable-stream/lib/internal/streams/BufferList.js. Coverage (Term): 19% Coverage (LOC): 29%
*- File /root/Targets/ebclient.js/node_modules/readable-stream/lib/internal/streams/destroy.js. Coverage (Term): 15% Coverage (LOC): 21%
*- File /root/Targets/ebclient.js/node_modules/readable-stream/lib/_stream_writable.js. Coverage (Term): 14% Coverage (LOC): 19%
*- File /root/Targets/ebclient.js/node_modules/util-deprecate/node.js. Coverage (Term): 95% Coverage (LOC): 100%
*- File /root/Targets/ebclient.js/node_modules/readable-stream/lib/_stream_duplex.js. Coverage (Term): 35% Coverage (LOC): 44%
*- File /root/Targets/ebclient.js/node_modules/readable-stream/lib/_stream_transform.js. Coverage (Term): 14% Coverage (LOC): 22%
*- File /root/Targets/ebclient.js/node_modules/readable-stream/lib/_stream_passthrough.js. Coverage (Term): 59% Coverage (LOC): 73%
*- File /root/Targets/ebclient.js/node_modules/qs/lib/index.js. Coverage (Term): 98% Coverage (LOC): 100%
*- File /root/Targets/ebclient.js/node_modules/qs/lib/stringify.js. Coverage (Term): 8% Coverage (LOC): 18%
*- File /root/Targets/ebclient.js/node_modules/qs/lib/utils.js. Coverage (Term): 12% Coverage (LOC): 18%
*- File /root/Targets/ebclient.js/node_modules/qs/lib/formats.js. Coverage (Term): 61% Coverage (LOC): 87%
*- File /root/Targets/ebclient.js/node_modules/qs/lib/parse.js. Coverage (Term): 7% Coverage (LOC): 17%
*- File /root/Targets/ebclient.js/node_modules/superagent/lib/request-base.js. Coverage (Term): 15% Coverage (LOC): 28%
*- File /root/Targets/ebclient.js/node_modules/superagent/lib/is-object.js. Coverage (Term): 54% Coverage (LOC): 80%
*- File /root/Targets/ebclient.js/node_modules/superagent/lib/request.js. Coverage (Term): 32% Coverage (LOC): 36%
*- File /root/Targets/ebclient.js/node_modules/superagent/lib/node/agent.js. Coverage (Term): 39% Coverage (LOC): 49%
*- File /root/Targets/ebclient.js/node_modules/cookiejar/cookiejar.js. Coverage (Term): 8% Coverage (LOC): 11%
*- File /root/Targets/ebclient.js/node_modules/superagent/lib/node/parsers/index.js. Coverage (Term): 98% Coverage (LOC): 100%
*- File /root/Targets/ebclient.js/node_modules/superagent/lib/node/parsers/urlencoded.js. Coverage (Term): 29% Coverage (LOC): 33%
*- File /root/Targets/ebclient.js/node_modules/superagent/lib/node/parsers/json.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/Targets/ebclient.js/node_modules/superagent/lib/node/parsers/text.js. Coverage (Term): 31% Coverage (LOC): 40%
*- File /root/Targets/ebclient.js/node_modules/superagent/lib/node/parsers/image.js. Coverage (Term): 27% Coverage (LOC): 36%
*- File /root/Targets/ebclient.js/node_modules/bluebird/js/release/bluebird.js. Coverage (Term): 53% Coverage (LOC): 62%
*- File /root/Targets/ebclient.js/node_modules/bluebird/js/release/promise.js. Coverage (Term): 17% Coverage (LOC): 27%
*- File /root/Targets/ebclient.js/node_modules/bluebird/js/release/util.js. Coverage (Term): 36% Coverage (LOC): 49%
*- File /root/Targets/ebclient.js/node_modules/bluebird/js/release/es5.js. Coverage (Term): 45% Coverage (LOC): 52%
*- File /root/Targets/ebclient.js/node_modules/bluebird/js/release/async.js. Coverage (Term): 29% Coverage (LOC): 39%
*- File /root/Targets/ebclient.js/node_modules/bluebird/js/release/schedule.js. Coverage (Term): 21% Coverage (LOC): 27%
*- File /root/Targets/ebclient.js/node_modules/bluebird/js/release/queue.js. Coverage (Term): 20% Coverage (LOC): 37%
*- File /root/Targets/ebclient.js/node_modules/bluebird/js/release/errors.js. Coverage (Term): 46% Coverage (LOC): 62%
*- File /root/Targets/ebclient.js/node_modules/bluebird/js/release/thenables.js. Coverage (Term): 18% Coverage (LOC): 22%
*- File /root/Targets/ebclient.js/node_modules/bluebird/js/release/promise_array.js. Coverage (Term): 16% Coverage (LOC): 25%
*- File /root/Targets/ebclient.js/node_modules/bluebird/js/release/context.js. Coverage (Term): 27% Coverage (LOC): 41%
*- File /root/Targets/ebclient.js/node_modules/bluebird/js/release/debuggability.js. Coverage (Term): 15% Coverage (LOC): 24%
*- File /root/Targets/ebclient.js/node_modules/bluebird/js/release/finally.js. Coverage (Term): 18% Coverage (LOC): 27%
*- File /root/Targets/ebclient.js/node_modules/bluebird/js/release/catch_filter.js. Coverage (Term): 24% Coverage (LOC): 30%
*- File /root/Targets/ebclient.js/node_modules/bluebird/js/release/nodeback.js. Coverage (Term): 22% Coverage (LOC): 28%
*- File /root/Targets/ebclient.js/node_modules/bluebird/js/release/method.js. Coverage (Term): 20% Coverage (LOC): 28%
*- File /root/Targets/ebclient.js/node_modules/bluebird/js/release/bind.js. Coverage (Term): 22% Coverage (LOC): 33%
*- File /root/Targets/ebclient.js/node_modules/bluebird/js/release/cancel.js. Coverage (Term): 24% Coverage (LOC): 34%
*- File /root/Targets/ebclient.js/node_modules/bluebird/js/release/direct_resolve.js. Coverage (Term): 25% Coverage (LOC): 38%
*- File /root/Targets/ebclient.js/node_modules/bluebird/js/release/synchronous_inspection.js. Coverage (Term): 32% Coverage (LOC): 56%
*- File /root/Targets/ebclient.js/node_modules/bluebird/js/release/join.js. Coverage (Term): 36% Coverage (LOC): 37%
*- File evalIndirect. Coverage (Term): 2% Coverage (LOC): 3%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **