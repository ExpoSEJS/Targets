/root/Targets/socketize.js
└─┬ socketize.js@1.0.0 
  ├── bootstrap@3.3.7 
  ├── jquery@2.2.4 
  ├── lodash@3.10.1 
  ├── q@1.5.0 
  └─┬ sockjs-client@1.1.4 
    ├─┬ debug@2.6.9 
    │ └── ms@2.0.0 
    ├─┬ eventsource@0.1.6 
    │ └─┬ original@1.0.0 
    │   └─┬ url-parse@1.0.5 
    │     └── querystringify@0.0.4 
    ├─┬ faye-websocket@0.11.1 
    │ └─┬ websocket-driver@0.7.0 
    │   ├── http-parser-js@0.4.9 
    │   └── websocket-extensions@0.1.2 
    ├── inherits@2.0.3 
    ├── json3@3.3.2 
    └─┬ url-parse@1.1.9 
      ├── querystringify@1.0.0 
      └── requires-port@1.0.0 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/socketize.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000

*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0396 took 18.2242s
*-- Errors occured in test {"_bound":0}
* Error: SyntaxError: Identifier 'i' has already been declared
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **