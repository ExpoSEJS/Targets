/root/Targets/brauliovm.github.io
└─┬ brauliovm.github.io@0.0.0 
  └── turing-lang@0.0.1  (git://github.com/BraulioVM/turing-lang.git#2dc111ed67725dc5590ae4f6401cf852d2a8aea2)

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/brauliovm.github.io/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000

*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0513 took 3.6337s
*-- Errors occured in test {"_bound":0}
* Error: Error: Cannot find module 'brauliovm.github.io'
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **