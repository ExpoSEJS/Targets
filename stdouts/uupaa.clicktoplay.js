/root/Targets/uupaa.clicktoplay.js
└─┬ uupaa.clicktoplay.js@0.0.5 
  └─┬ uupaa.useragent.js@1.0.2 
    └── uupaa.webgldetector.js@0.1.2 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/uupaa.clicktoplay.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000

*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0736 took 5.6556s
*-- Errors occured in test {"_bound":0}
* Error: TypeError: Cannot read property 'exports' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/uupaa.clicktoplay.js/node_modules/uupaa.clicktoplay.js/index.js. Coverage (Term): 80% Coverage (LOC): 100%
*- File /root/Targets/uupaa.clicktoplay.js/node_modules/uupaa.clicktoplay.js/lib/ClickToPlay.js. Coverage (Term): 4% Coverage (LOC): 5%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **