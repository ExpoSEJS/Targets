/root/Targets/typeahead.js
└─┬ typeahead.js@0.11.1 
  └── jquery@3.2.1 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/typeahead.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000

*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.07 took 43.3256s
*-- Errors occured in test {"_bound":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/typeahead.js/node_modules/typeahead.js/dist/typeahead.bundle.js. Coverage (Term): 1% Coverage (LOC): 3%
*- File /root/Targets/typeahead.js/node_modules/jquery/dist/jquery.js. Coverage (Term): 0% Coverage (LOC): 0%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **