/root/Targets/ally.js
└── ally.js@1.4.1 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/ally.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000

*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","call","pow","toUpperCase","RegExp","join","stringify","parse","parseFloat","floor","Boolean","bind","fromCharCode","toString","apply","bound "]
*-- Stat Module Done --*
*-- Test Case {"_bound":0,"Switcher":false,"Target_Switch_Base":0,"ExpandedSwitcher":0} start 0.0729 took 27.7317s
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpandedSwitcher":0,"_bound":1} start 28.2505 took 31.7212s
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 82% Coverage (LOC): 86%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 19% Coverage (LOC): 37%
*- File /root/Targets/ally.js/node_modules/ally.js/ally.min.js. Coverage (Term): 22% Coverage (LOC): 43%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 2 paths with 0 errors **