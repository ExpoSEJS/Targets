/root/Targets/oscin.es
└─┬ oscin.es@2.3.4 
  └── allong.es@0.2.5 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/oscin.es/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000

*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","call","max","Array","apply"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0224 took 4.2712s
*-- Errors occured in test {"_bound":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/oscin.es/node_modules/oscin.es/lib/oscin.es.js. Coverage (Term): 50% Coverage (LOC): 67%
*- File /root/Targets/oscin.es/node_modules/allong.es/lib/allong.es.js. Coverage (Term): 22% Coverage (LOC): 34%
*- File /root/Targets/oscin.es/node_modules/oscin.es/lib/passeri.js. Coverage (Term): 9% Coverage (LOC): 24%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **