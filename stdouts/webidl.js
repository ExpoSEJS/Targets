/root/Targets/webidl.js
└─┬ webidl.js@0.1.0 
  └── pegjs@0.7.0 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/webidl.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000

*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0,"Switcher":false,"Target_Switch_Base":0} start 0.0625 took 36.0929s
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 43% Coverage (LOC): 51%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 19% Coverage (LOC): 37%
*- File /root/Targets/webidl.js/node_modules/webidl.js/node/webidl.js. Coverage (Term): 96% Coverage (LOC): 100%
*- File /root/Targets/webidl.js/node_modules/webidl.js/node/WebIDLParser.js. Coverage (Term): 0% Coverage (LOC): 0%
*- File /root/Targets/webidl.js/node_modules/webidl.js/node/WICDAParser.js. Coverage (Term): 1% Coverage (LOC): 1%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 0 errors **