/root/Targets/sentinel.js
└── sentinel.js@1.2.9 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/sentinel.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000

*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","call"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0854 took 46.7738s
*-- Errors occured in test {"_bound":0}
* Error: TypeError: Cannot read property 'document' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/sentinel.js/node_modules/sentinel.js/js/sentinel.js. Coverage (Term): 1% Coverage (LOC): 2%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **