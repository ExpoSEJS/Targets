/root/Targets/fullpage.js
└─┬ fullpage.js@2.9.4 
  └── jquery@3.2.1 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/fullpage.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000

*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","Error"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0474 took 25.5661s
*-- Errors occured in test {"_bound":0}
* Error: Error: jQuery requires a window with a document
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/fullpage.js/node_modules/fullpage.js/dist/jquery.fullpage.js. Coverage (Term): 4% Coverage (LOC): 4%
*- File /root/Targets/fullpage.js/node_modules/jquery/dist/jquery.js. Coverage (Term): 0% Coverage (LOC): 0%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **