/root/Targets/vue-sails.io
└─┬ vue-sails.io@1.0.2 
  ├─┬ sails.io.js@1.1.12 
  │ └─┬ socket.io-client@1.7.3 
  │   └── engine.io-client@1.8.3 
  └─┬ socket.io-client@1.7.4 
    ├── backo2@1.0.2 
    ├── component-bind@1.0.0 
    ├── component-emitter@1.2.1 
    ├─┬ debug@2.3.3 
    │ └── ms@0.7.2 
    ├─┬ engine.io-client@1.8.4 
    │ ├── component-inherit@0.0.3 
    │ ├─┬ engine.io-parser@1.3.2 
    │ │ ├── after@0.8.2 
    │ │ ├── arraybuffer.slice@0.0.6 
    │ │ ├── base64-arraybuffer@0.1.5 
    │ │ ├── blob@0.0.4 
    │ │ └── wtf-8@1.0.0 
    │ ├── has-cors@1.1.0 
    │ ├── parsejson@0.0.3 
    │ ├── parseqs@0.0.5 
    │ ├─┬ ws@1.1.2 
    │ │ ├── options@0.0.6 
    │ │ └── ultron@1.0.2 
    │ ├── xmlhttprequest-ssl@1.5.3 
    │ └── yeast@0.1.2 
    ├─┬ has-binary@0.1.7 
    │ └── isarray@0.0.1 
    ├── indexof@0.0.1 
    ├── object-component@0.0.3 
    ├─┬ parseuri@0.0.5 
    │ └─┬ better-assert@1.0.2 
    │   └── callsite@1.0.0 
    ├─┬ socket.io-parser@2.3.1 
    │ ├── component-emitter@1.1.2 
    │ ├─┬ debug@2.2.0 
    │ │ └── ms@0.7.1 
    │ └── json3@3.3.2 
    └── to-array@0.1.4 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/vue-sails.io/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000

*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","call","Object","Function"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0433 took 30.2375s
*-- Errors occured in test {"_bound":0}
* Error: ReferenceError: require is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/vue-sails.io/node_modules/vue-sails.io/dist/build.js. Coverage (Term): 2% Coverage (LOC): 5%
*- File evalIndirect. Coverage (Term): 17% Coverage (LOC): 25%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **