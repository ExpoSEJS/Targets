/root/Targets/tempmail.js
└─┬ tempmail.js@0.2.1 
  ├─┬ babel-polyfill@6.26.0 
  │ ├─┬ babel-runtime@6.26.0 
  │ │ └── regenerator-runtime@0.11.0 
  │ ├── core-js@2.5.1 
  │ └── regenerator-runtime@0.10.5 
  ├── blueimp-md5@2.10.0 
  ├── fetch-jsonp@1.1.3 
  └─┬ isomorphic-fetch@2.2.1 
    ├─┬ node-fetch@1.7.3 
    │ ├─┬ encoding@0.1.12 
    │ │ └── iconv-lite@0.4.19 
    │ └── is-stream@1.1.0 
    └── whatwg-fetch@2.0.3 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/tempmail.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000

*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","Function"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.037 took 5.7372s
*-- Errors occured in test {"_bound":0}
* Error: ReferenceError: require is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/tempmail.js/node_modules/tempmail.js/dist/tempmail-node.js. Coverage (Term): 5% Coverage (LOC): 7%
*- File /root/Targets/tempmail.js/node_modules/babel-polyfill/lib/index.js. Coverage (Term): 18% Coverage (LOC): 27%
*- File /root/Targets/tempmail.js/node_modules/core-js/shim.js. Coverage (Term): 2% Coverage (LOC): 2%
*- File /root/Targets/tempmail.js/node_modules/core-js/modules/es6.symbol.js. Coverage (Term): 5% Coverage (LOC): 2%
*- File /root/Targets/tempmail.js/node_modules/core-js/modules/_global.js. Coverage (Term): 55% Coverage (LOC): 80%
*- File evalIndirect. Coverage (Term): 17% Coverage (LOC): 25%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **