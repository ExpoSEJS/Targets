/root/Targets/mapbox.js
└─┬ mapbox.js@3.1.1 
  ├── corslite@0.0.6 
  ├── isarray@0.0.1 
  ├── leaflet@1.0.2 
  ├── mustache@2.2.1 
  └── sanitize-caja@0.1.4 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/mapbox.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000

*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0583 took 4.6938s
*-- Errors occured in test {"_bound":0}
* Error: ReferenceError: window is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/mapbox.js/node_modules/mapbox.js/src/index.js. Coverage (Term): 60% Coverage (LOC): 83%
*- File /root/Targets/mapbox.js/node_modules/mapbox.js/src/leaflet.js. Coverage (Term): 64% Coverage (LOC): 100%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **