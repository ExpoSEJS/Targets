/root/Targets/angular-chartist.js
├── UNMET PEER DEPENDENCY angular@>=1.2.28
├── angular-chartist.js@4.3.4 
└── UNMET PEER DEPENDENCY chartist@>=0.9.0

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/angular-chartist.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000

*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0457 took 4.3736s
*-- Errors occured in test {"_bound":0}
* Error: Error: Cannot find module 'angular'
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/angular-chartist.js/node_modules/angular-chartist.js/dist/angular-chartist.js. Coverage (Term): 4% Coverage (LOC): 3%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **