/root/Targets/list.js
└── list.js@1.5.0 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/list.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000

*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","defineProperties"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0818 took 7.9277s
*-- Errors occured in test {"_bound":0}
* Error: ReferenceError: window is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/list.js/node_modules/list.js/src/index.js. Coverage (Term): 4% Coverage (LOC): 2%
*- File /root/Targets/list.js/node_modules/string-natural-compare/natural-compare.js. Coverage (Term): 11% Coverage (LOC): 17%
*- File /root/Targets/list.js/node_modules/list.js/src/utils/get-by-class.js. Coverage (Term): 15% Coverage (LOC): 21%
*- File /root/Targets/list.js/node_modules/list.js/src/utils/extend.js. Coverage (Term): 25% Coverage (LOC): 31%
*- File /root/Targets/list.js/node_modules/list.js/src/utils/index-of.js. Coverage (Term): 33% Coverage (LOC): 42%
*- File /root/Targets/list.js/node_modules/list.js/src/utils/events.js. Coverage (Term): 12% Coverage (LOC): 20%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **