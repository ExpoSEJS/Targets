/root/Targets/chartnew.js
└── chartnew.js@3.9.0 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/chartnew.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000

*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","Array"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0282 took 45.9959s
*-- Errors occured in test {"_bound":0}
* Error: ReferenceError: navigator is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/chartnew.js/node_modules/chartnew.js/ChartNew.js. Coverage (Term): 0% Coverage (LOC): 2%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **