/root/Targets/uupaa.h264.js
└─┬ uupaa.h264.js@0.0.4 
  ├── uupaa.hexdump.js@0.0.5 
  └─┬ uupaa.nalunit.js@0.1.0 
    └── uupaa.bit.js@0.8.1 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/uupaa.h264.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000

*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.041 took 3.9854s
*-- Errors occured in test {"_bound":0}
* Error: TypeError: Cannot read property 'exports' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/uupaa.h264.js/node_modules/uupaa.h264.js/index.js. Coverage (Term): 80% Coverage (LOC): 100%
*- File /root/Targets/uupaa.h264.js/node_modules/uupaa.h264.js/lib/H264.js. Coverage (Term): 6% Coverage (LOC): 4%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **