/root/Targets/liquid.js
└── liquid.js@1.3.2 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/liquid.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000

*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","call","Date"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.038 took 7.2218s
*-- Errors occured in test {"_bound":0}
* Error: ReferenceError: document is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/liquid.js/node_modules/liquid.js/dist/liquid.js. Coverage (Term): 10% Coverage (LOC): 21%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **