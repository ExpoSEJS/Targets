/root/Targets/collar.js
└── collar.js@1.0.0 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/collar.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000

*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","toString","randomBytes","Function"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0622 took 25.5636s
*-- Errors occured in test {"_bound":0}
* Error: ReferenceError: require is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/collar.js/node_modules/collar.js/index.js. Coverage (Term): 80% Coverage (LOC): 100%
*- File /root/Targets/collar.js/node_modules/collar.js/build/prod/node/collar.min.latest.js. Coverage (Term): 0% Coverage (LOC): 0%
*- File /root/Targets/collar.js/node_modules/uuid/index.js. Coverage (Term): 98% Coverage (LOC): 100%
*- File /root/Targets/collar.js/node_modules/uuid/v1.js. Coverage (Term): 21% Coverage (LOC): 30%
*- File /root/Targets/collar.js/node_modules/uuid/lib/rng.js. Coverage (Term): 94% Coverage (LOC): 100%
*- File /root/Targets/collar.js/node_modules/uuid/lib/bytesToUuid.js. Coverage (Term): 22% Coverage (LOC): 73%
*- File /root/Targets/collar.js/node_modules/uuid/v4.js. Coverage (Term): 23% Coverage (LOC): 29%
*- File /root/Targets/collar.js/node_modules/freezer-js/freezer.js. Coverage (Term): 67% Coverage (LOC): 100%
*- File /root/Targets/collar.js/node_modules/freezer-js/src/freezer.js. Coverage (Term): 5% Coverage (LOC): 6%
*- File /root/Targets/collar.js/node_modules/freezer-js/src/utils.js. Coverage (Term): 3% Coverage (LOC): 5%
*- File evalIndirect. Coverage (Term): 17% Coverage (LOC): 25%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **