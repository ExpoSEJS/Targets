/root/Targets/floating.js
└── floating.js@2.7.4 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/floating.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000

*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","toString","apply","bound floating"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0,"Switcher":false,"Target_Switch_Base":0} start 0.0557 took 5.5382s
*-- Test Case {"Switcher":true,"Target_Switch_Base":0,"_bound":1} start 5.6517 took 5.0219s
*-- Errors occured in test {"Switcher":true,"Target_Switch_Base":0,"_bound":1}
* Error: ReferenceError: document is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"Target_Switch_Base":0,"_bound":1}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 57% Coverage (LOC): 62%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 19% Coverage (LOC): 37%
*- File /root/Targets/floating.js/node_modules/floating.js/build/floating.js. Coverage (Term): 34% Coverage (LOC): 30%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 2 paths with 1 errors **