/root/Targets/dataflo.ws
├── UNMET PEER DEPENDENCY commop@^1.2.0
├── UNMET PEER DEPENDENCY conf-fu@^0.5.12
└─┬ dataflo.ws@0.72.8 
  ├── fsobject@1.0.0 
  ├─┬ multiparty@4.1.3 
  │ └─┬ fd-slicer@1.0.1 
  │   └── pend@1.2.0 
  ├── paintbrush@1.1.0 
  └─┬ tough-cookie@2.3.3 
    └── punycode@1.4.1 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/dataflo.ws/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000

*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0408 took 6.0002s
*-- Errors occured in test {"_bound":0}
* Error: Error: Cannot find module 'conf-fu'
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/dataflo.ws/node_modules/dataflo.ws/node.js. Coverage (Term): 10% Coverage (LOC): 7%
*- File /root/Targets/dataflo.ws/node_modules/dataflo.ws/common.js. Coverage (Term): 3% Coverage (LOC): 4%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **