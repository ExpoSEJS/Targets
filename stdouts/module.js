/root/Targets/module.js
└── module.js@2.2.4 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/module.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000

*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","call","pow","join","RegExp","sort"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.094 took 25.8051s
*-- Errors occured in test {"_bound":0}
* Error: ReferenceError: document is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/module.js/node_modules/module.js/src/module.js. Coverage (Term): 5% Coverage (LOC): 5%
*- File /root/Targets/module.js/node_modules/promise/index.js. Coverage (Term): 95% Coverage (LOC): 100%
*- File /root/Targets/module.js/node_modules/promise/lib/index.js. Coverage (Term): 98% Coverage (LOC): 100%
*- File /root/Targets/module.js/node_modules/promise/lib/core.js. Coverage (Term): 16% Coverage (LOC): 22%
*- File /root/Targets/module.js/node_modules/asap/raw.js. Coverage (Term): 26% Coverage (LOC): 28%
*- File /root/Targets/module.js/node_modules/promise/lib/done.js. Coverage (Term): 41% Coverage (LOC): 54%
*- File /root/Targets/module.js/node_modules/promise/lib/finally.js. Coverage (Term): 35% Coverage (LOC): 44%
*- File /root/Targets/module.js/node_modules/promise/lib/es6-extensions.js. Coverage (Term): 22% Coverage (LOC): 27%
*- File /root/Targets/module.js/node_modules/promise/lib/node-extensions.js. Coverage (Term): 12% Coverage (LOC): 15%
*- File /root/Targets/module.js/node_modules/asap/asap.js. Coverage (Term): 28% Coverage (LOC): 29%
*- File /root/Targets/module.js/node_modules/promise/lib/synchronous.js. Coverage (Term): 14% Coverage (LOC): 18%
*- File /root/Targets/module.js/node_modules/underscore/underscore.js. Coverage (Term): 19% Coverage (LOC): 33%
*- File /root/Targets/module.js/node_modules/jquery/dist/jquery.js. Coverage (Term): 0% Coverage (LOC): 0%
*- File /root/Targets/module.js/node_modules/resource-manager-js/src/resource-manager.js. Coverage (Term): 8% Coverage (LOC): 16%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **