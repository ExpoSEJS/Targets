/root/Targets/hcmui.js
└─┬ hcmui.js@0.1.0 
  ├── angular@1.6.6 
  ├── balajs@0.1.9 
  ├── element-closest@2.0.2 
  ├── hcmui@1.0.2 
  ├── object-assign@4.1.1 
  └── ui-router@1.0.0-alpha.3 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/hcmui.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000

*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","call"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0667 took 7.8747s
*-- Errors occured in test {"_bound":0}
* Error: ReferenceError: window is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/hcmui.js/node_modules/hcmui.js/dist/weui.min.js. Coverage (Term): 2% Coverage (LOC): 6%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **