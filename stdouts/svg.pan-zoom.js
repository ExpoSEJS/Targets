/root/Targets/svg.pan-zoom.js
└── svg.pan-zoom.js@2.8.0 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/svg.pan-zoom.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000

*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","call"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0469 took 4.8624s
*-- Errors occured in test {"_bound":0}
* Error: ReferenceError: document is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/svg.pan-zoom.js/node_modules/svg.pan-zoom.js/src/svg.pan-zoom.js. Coverage (Term): 4% Coverage (LOC): 5%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **