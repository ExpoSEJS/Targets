/root/Targets/two.js
└── two.js@0.6.0 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/two.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000

*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","call","pow","join","RegExp","sort","apply"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0737 took 85.0834s
*-- Errors occured in test {"_bound":0}
* Error: Error: Cannot find module 'requestAnimationFrame'
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/two.js/node_modules/two.js/build/two.js. Coverage (Term): 4% Coverage (LOC): 7%
*- File /root/Targets/two.js/node_modules/underscore/underscore.js. Coverage (Term): 23% Coverage (LOC): 36%
*- File /root/Targets/two.js/node_modules/backbone/backbone.js. Coverage (Term): 9% Coverage (LOC): 23%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **