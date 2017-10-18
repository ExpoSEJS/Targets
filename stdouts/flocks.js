/root/Targets/flocks.js
└─┬ flocks.js@1.6.1 
  └─┬ react@16.0.0 
    ├─┬ fbjs@0.8.16 
    │ ├── core-js@1.2.7 
    │ ├─┬ isomorphic-fetch@2.2.1 
    │ │ ├─┬ node-fetch@1.7.3 
    │ │ │ ├─┬ encoding@0.1.12 
    │ │ │ │ └── iconv-lite@0.4.19 
    │ │ │ └── is-stream@1.1.0 
    │ │ └── whatwg-fetch@2.0.3 
    │ ├─┬ promise@7.3.1 
    │ │ └── asap@2.0.6 
    │ ├── setimmediate@1.0.5 
    │ └── ua-parser-js@0.7.14 
    ├─┬ loose-envify@1.3.1 
    │ └── js-tokens@3.0.2 
    ├── object-assign@4.1.1 
    └── prop-types@15.6.0 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/flocks.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000

*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","getOwnPropertyNames","fromCharCode","join","assign","freeze","for","call","RegExp","Map","Set"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.1092 took 17.4295s
*-- Errors occured in test {"_bound":0}
* Error: TypeError: Cannot read property 'object' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/flocks.js/node_modules/flocks.js/dist/flocks.js. Coverage (Term): 9% Coverage (LOC): 12%
*- File /root/Targets/flocks.js/node_modules/react/index.js. Coverage (Term): 80% Coverage (LOC): 86%
*- File /root/Targets/flocks.js/node_modules/react/cjs/react.development.js. Coverage (Term): 17% Coverage (LOC): 26%
*- File /root/Targets/flocks.js/node_modules/object-assign/index.js. Coverage (Term): 54% Coverage (LOC): 53%
*- File /root/Targets/flocks.js/node_modules/fbjs/lib/warning.js. Coverage (Term): 20% Coverage (LOC): 29%
*- File /root/Targets/flocks.js/node_modules/fbjs/lib/emptyFunction.js. Coverage (Term): 68% Coverage (LOC): 83%
*- File /root/Targets/flocks.js/node_modules/fbjs/lib/emptyObject.js. Coverage (Term): 97% Coverage (LOC): 100%
*- File /root/Targets/flocks.js/node_modules/fbjs/lib/invariant.js. Coverage (Term): 26% Coverage (LOC): 28%
*- File /root/Targets/flocks.js/node_modules/prop-types/checkPropTypes.js. Coverage (Term): 27% Coverage (LOC): 41%
*- File /root/Targets/flocks.js/node_modules/prop-types/lib/ReactPropTypesSecret.js. Coverage (Term): 96% Coverage (LOC): 100%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **