/root/Targets/playbasis.js
└── playbasis.js@1.4.6 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/playbasis.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000

*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","Error","call","Promise","Array","join","Function"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0361 took 17.8409s
*-- Errors occured in test {"_bound":0}
* Error: ReferenceError: require is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/playbasis.js/node_modules/playbasis.js/lib/playbasis.js. Coverage (Term): 12% Coverage (LOC): 16%
*- File /root/Targets/playbasis.js/node_modules/playbasis.js/lib/core/core.js. Coverage (Term): 69% Coverage (LOC): 84%
*- File /root/Targets/playbasis.js/node_modules/bluebird/js/release/bluebird.js. Coverage (Term): 53% Coverage (LOC): 62%
*- File /root/Targets/playbasis.js/node_modules/bluebird/js/release/promise.js. Coverage (Term): 17% Coverage (LOC): 27%
*- File /root/Targets/playbasis.js/node_modules/bluebird/js/release/util.js. Coverage (Term): 36% Coverage (LOC): 49%
*- File /root/Targets/playbasis.js/node_modules/bluebird/js/release/es5.js. Coverage (Term): 45% Coverage (LOC): 52%
*- File /root/Targets/playbasis.js/node_modules/bluebird/js/release/async.js. Coverage (Term): 29% Coverage (LOC): 39%
*- File /root/Targets/playbasis.js/node_modules/bluebird/js/release/schedule.js. Coverage (Term): 21% Coverage (LOC): 27%
*- File /root/Targets/playbasis.js/node_modules/bluebird/js/release/queue.js. Coverage (Term): 20% Coverage (LOC): 37%
*- File /root/Targets/playbasis.js/node_modules/bluebird/js/release/errors.js. Coverage (Term): 46% Coverage (LOC): 62%
*- File /root/Targets/playbasis.js/node_modules/bluebird/js/release/thenables.js. Coverage (Term): 18% Coverage (LOC): 22%
*- File /root/Targets/playbasis.js/node_modules/bluebird/js/release/promise_array.js. Coverage (Term): 16% Coverage (LOC): 25%
*- File /root/Targets/playbasis.js/node_modules/bluebird/js/release/context.js. Coverage (Term): 27% Coverage (LOC): 41%
*- File /root/Targets/playbasis.js/node_modules/bluebird/js/release/debuggability.js. Coverage (Term): 15% Coverage (LOC): 24%
*- File /root/Targets/playbasis.js/node_modules/bluebird/js/release/finally.js. Coverage (Term): 18% Coverage (LOC): 27%
*- File /root/Targets/playbasis.js/node_modules/bluebird/js/release/catch_filter.js. Coverage (Term): 24% Coverage (LOC): 30%
*- File /root/Targets/playbasis.js/node_modules/bluebird/js/release/nodeback.js. Coverage (Term): 22% Coverage (LOC): 28%
*- File /root/Targets/playbasis.js/node_modules/bluebird/js/release/method.js. Coverage (Term): 20% Coverage (LOC): 28%
*- File /root/Targets/playbasis.js/node_modules/bluebird/js/release/bind.js. Coverage (Term): 22% Coverage (LOC): 33%
*- File /root/Targets/playbasis.js/node_modules/bluebird/js/release/cancel.js. Coverage (Term): 24% Coverage (LOC): 34%
*- File /root/Targets/playbasis.js/node_modules/bluebird/js/release/direct_resolve.js. Coverage (Term): 25% Coverage (LOC): 38%
*- File /root/Targets/playbasis.js/node_modules/bluebird/js/release/synchronous_inspection.js. Coverage (Term): 32% Coverage (LOC): 56%
*- File /root/Targets/playbasis.js/node_modules/bluebird/js/release/join.js. Coverage (Term): 36% Coverage (LOC): 37%
*- File evalIndirect. Coverage (Term): 2% Coverage (LOC): 3%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **