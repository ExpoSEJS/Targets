/root/Targets/mediators.app
└─┬ mediators.app@0.0.5 
  ├─┬ babel-polyfill@6.26.0 
  │ ├─┬ babel-runtime@6.26.0 
  │ │ └── regenerator-runtime@0.11.0 
  │ ├── core-js@2.5.1 
  │ └── regenerator-runtime@0.10.5 
  ├── classnames@2.2.5 
  ├── fastclick@1.0.6 
  ├─┬ history@3.3.0 
  │ ├── invariant@2.2.2 
  │ ├─┬ loose-envify@1.3.1 
  │ │ └── js-tokens@3.0.2 
  │ ├─┬ query-string@4.3.4 
  │ │ └── strict-uri-encode@1.1.0 
  │ └── warning@3.0.0 
  ├─┬ react@15.6.2 
  │ ├── create-react-class@15.6.2 
  │ ├─┬ fbjs@0.8.16 
  │ │ ├── core-js@1.2.7 
  │ │ ├─┬ isomorphic-fetch@2.2.1 
  │ │ │ └─┬ node-fetch@1.7.3 
  │ │ │   ├─┬ encoding@0.1.12 
  │ │ │   │ └── iconv-lite@0.4.19 
  │ │ │   └── is-stream@1.1.0 
  │ │ ├─┬ promise@7.3.1 
  │ │ │ └── asap@2.0.6 
  │ │ ├── setimmediate@1.0.5 
  │ │ └── ua-parser-js@0.7.14 
  │ ├── object-assign@4.1.1 
  │ └── prop-types@15.6.0 
  ├── react-dom@15.6.2 
  ├─┬ react-mdl@1.10.3 
  │ ├── clamp@1.0.1 
  │ └── lodash.isequal@4.5.0 
  ├─┬ react-redux@4.4.8 
  │ ├── hoist-non-react-statics@1.2.0 
  │ └── lodash@4.17.4 
  ├─┬ redux@3.7.2 
  │ ├── lodash-es@4.17.4 
  │ └── symbol-observable@1.0.4 
  └── whatwg-fetch@1.1.1 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/mediators.app/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000

*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0704 took 1.9879s
*-- Errors occured in test {"_bound":0}
* Error: Error: Cannot find module 'mediators.app'
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **