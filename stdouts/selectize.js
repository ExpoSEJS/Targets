/root/Targets/selectize.js
└── selectize.js@0.12.12 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/selectize.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000

*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","RegExp"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0326 took 18.8496s
*-- Errors occured in test {"_bound":0}
* Error: TypeError: Cannot set property 'removeHighlight' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/selectize.js/node_modules/selectize.js/dist/js/selectize.js. Coverage (Term): 1% Coverage (LOC): 1%
*- File /root/Targets/selectize.js/node_modules/jquery/dist/jquery.js. Coverage (Term): 0% Coverage (LOC): 0%
*- File /root/Targets/selectize.js/node_modules/sifter/sifter.js. Coverage (Term): 11% Coverage (LOC): 21%
*- File /root/Targets/selectize.js/node_modules/microplugin/src/microplugin.js. Coverage (Term): 17% Coverage (LOC): 20%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **