/root/Targets/dragon.js
└─┬ dragon.js@0.2.2-alpha-14 
  └── UNMET PEER DEPENDENCY webpack@1 || 2 || ^2.1.0-beta || ^2.2.0-rc

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/dragon.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000

*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","Function"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.093 took 8.6953s
*-- Errors occured in test {"_bound":0}
* Error: ReferenceError: require is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/dragon.js/node_modules/dragon.js/dist/dragon.js. Coverage (Term): 29% Coverage (LOC): 19%
*- File /root/Targets/dragon.js/node_modules/dragon.js/lib/polyfills/element.remove.js. Coverage (Term): 54% Coverage (LOC): 57%
*- File /root/Targets/dragon.js/node_modules/dragon.js/lib/polyfills/node.prependchild.js. Coverage (Term): 38% Coverage (LOC): 40%
*- File /root/Targets/dragon.js/node_modules/dragon.js/lib/polyfills/nodelist.queryselectorall.js. Coverage (Term): 28% Coverage (LOC): 36%
*- File /root/Targets/dragon.js/node_modules/dragon.js/lib/polyfills/nodelist.remove.js. Coverage (Term): 27% Coverage (LOC): 36%
*- File /root/Targets/dragon.js/node_modules/dragon.js/lib/polyfills/Array.from.js. Coverage (Term): 5% Coverage (LOC): 6%
*- File /root/Targets/dragon.js/node_modules/dragon.js/dist/dragon/application/index.js. Coverage (Term): 14% Coverage (LOC): 13%
*- File /root/Targets/dragon.js/node_modules/babel-runtime/core-js/object/assign.js. Coverage (Term): 73% Coverage (LOC): 83%
*- File /root/Targets/dragon.js/node_modules/core-js/library/fn/object/assign.js. Coverage (Term): 58% Coverage (LOC): 100%
*- File /root/Targets/dragon.js/node_modules/core-js/library/modules/es6.object.assign.js. Coverage (Term): 48% Coverage (LOC): 100%
*- File /root/Targets/dragon.js/node_modules/core-js/library/modules/_export.js. Coverage (Term): 6% Coverage (LOC): 7%
*- File /root/Targets/dragon.js/node_modules/core-js/library/modules/_global.js. Coverage (Term): 55% Coverage (LOC): 80%
*- File evalIndirect. Coverage (Term): 17% Coverage (LOC): 25%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **