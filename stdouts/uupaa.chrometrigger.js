/root/Targets/uupaa.chrometrigger.js
└─┬ uupaa.chrometrigger.js@0.3.2 
  ├─┬ uupaa.useragent.js@1.0.2 
  │ └── uupaa.webgldetector.js@0.1.2 
  └── uupaa.webintent.js@0.0.2 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/uupaa.chrometrigger.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000

*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0516 took 2.5704s
*-- Errors occured in test {"_bound":0}
* Error: TypeError: Cannot read property 'exports' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/uupaa.chrometrigger.js/node_modules/uupaa.chrometrigger.js/index.js. Coverage (Term): 80% Coverage (LOC): 100%
*- File /root/Targets/uupaa.chrometrigger.js/node_modules/uupaa.chrometrigger.js/lib/ChromeTrigger.js. Coverage (Term): 6% Coverage (LOC): 7%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **