/root/Targets/fixed-bn.js
└─┬ fixed-bn.js@0.0.2 
  ├── bn.js@4.11.8 
  ├── is-hex-prefixed@1.0.0 
  └── strip-hex-prefix@1.0.0 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/fixed-bn.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000

*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0682 took 5.8487s
*-- Errors occured in test {"_bound":0}
* Error: TypeError: ExprGen[$param.type] is not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **