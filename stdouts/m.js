/root/Targets/m.js
└─┬ m.js@0.1.12 
  ├── commander@2.2.0 
  ├─┬ js-beautify@1.5.1 
  │ ├─┬ config-chain@1.1.11 
  │ │ ├── ini@1.3.4 
  │ │ └── proto-list@1.2.4 
  │ ├── mkdirp@0.3.5 
  │ └─┬ nopt@2.2.1 
  │   └── abbrev@1.1.1 
  └── lodash@2.4.1 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/m.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000

*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0393 took 3.1216s
*-- Errors occured in test {"_bound":0}
* Error: Error: Cannot find module 'm.js'
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **