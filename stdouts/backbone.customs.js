/root/Targets/backbone.customs.js
└─┬ backbone.customs.js@0.1.0 
  ├── backbone@1.1.2 
  ├── backbone.epoxy@1.2.2 
  ├── customs.js@0.1.3 
  ├── jquery@2.1.4 
  └── underscore@1.6.0 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/backbone.customs.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000

*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0835 took 4.7929s
*-- Errors occured in test {"_bound":0}
* Error: Error: Cannot find module 'backbone.customs.js'
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **