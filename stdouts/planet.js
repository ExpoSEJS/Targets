/root/Targets/planet.js
└─┬ planet.js@0.3.0 
  └── request@2.83.0 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/planet.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000

*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0284 took 2.7724s
*-- Errors occured in test {"_bound":0}
* Error: SyntaxError: Unexpected token .
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/planet.js/node_modules/planet.js/lib/index.js. Coverage (Term): 20% Coverage (LOC): 20%
*- File /root/Targets/planet.js/node_modules/minimist/index.js. Coverage (Term): 22% Coverage (LOC): 34%
*- File /root/Targets/planet.js/node_modules/planet.js/lib/init.js. Coverage (Term): 15% Coverage (LOC): 19%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **