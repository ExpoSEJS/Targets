/root/Targets/multilingual.js
└─┬ multilingual.js@0.1.41 
  └── jquery@2.1.4 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/multilingual.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000

*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","random"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0454 took 2.764s
*-- Errors occured in test {"_bound":0}
* Error: ReferenceError: document is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/multilingual.js/node_modules/multilingual.js/index.js. Coverage (Term): 80% Coverage (LOC): 100%
*- File /root/Targets/multilingual.js/node_modules/multilingual.js/src/multilingual.js. Coverage (Term): 6% Coverage (LOC): 15%
*- File /root/Targets/multilingual.js/node_modules/multilingual.js/src/parseHTML/parseHTML.js. Coverage (Term): 21% Coverage (LOC): 20%
*- File /root/Targets/multilingual.js/node_modules/multilingual.js/src/parseHTML/rsingleTag.js. Coverage (Term): 94% Coverage (LOC): 100%
*- File /root/Targets/multilingual.js/node_modules/multilingual.js/src/parseHTML/buildFragments.js. Coverage (Term): 18% Coverage (LOC): 21%
*- File /root/Targets/multilingual.js/node_modules/multilingual.js/src/parseHTML/wrapMap.js. Coverage (Term): 99% Coverage (LOC): 100%
*- File /root/Targets/multilingual.js/node_modules/multilingual.js/src/parseHTML/getAll.js. Coverage (Term): 35% Coverage (LOC): 75%
*- File /root/Targets/multilingual.js/node_modules/multilingual.js/src/parseHTML/merge.js. Coverage (Term): 30% Coverage (LOC): 40%
*- File /root/Targets/multilingual.js/node_modules/multilingual.js/src/parseHTML/nodeName.js. Coverage (Term): 46% Coverage (LOC): 80%
*- File /root/Targets/multilingual.js/node_modules/multilingual.js/src/parseHTML/setGlobalEval.js. Coverage (Term): 36% Coverage (LOC): 56%
*- File /root/Targets/multilingual.js/node_modules/multilingual.js/src/parseHTML/dataPriv.js. Coverage (Term): 96% Coverage (LOC): 100%
*- File /root/Targets/multilingual.js/node_modules/multilingual.js/src/parseHTML/Data.js. Coverage (Term): 19% Coverage (LOC): 25%
*- File /root/Targets/multilingual.js/node_modules/multilingual.js/src/parseHTML/camelCase.js. Coverage (Term): 50% Coverage (LOC): 80%
*- File /root/Targets/multilingual.js/node_modules/multilingual.js/src/parseHTML/support.js. Coverage (Term): 45% Coverage (LOC): 67%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **