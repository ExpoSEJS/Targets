/root/Targets/uniqush.js
└─┬ uniqush.js@0.0.1 
  └─┬ got@6.7.1 
    ├─┬ create-error-class@3.0.2 
    │ └── capture-stack-trace@1.0.0 
    ├── duplexer3@0.1.4 
    ├── get-stream@3.0.0 
    ├── is-redirect@1.0.0 
    ├── is-retry-allowed@1.1.0 
    ├── is-stream@1.1.0 
    ├── lowercase-keys@1.0.0 
    ├── safe-buffer@5.1.1 
    ├── timed-out@4.0.1 
    ├── unzip-response@2.0.1 
    └─┬ url-parse-lax@1.0.0 
      └── prepend-http@1.0.4 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/uniqush.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000

*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0594 took 4.857s
*-- Errors occured in test {"_bound":0}
* Error: ReferenceError: Uniqush is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/uniqush.js/node_modules/uniqush.js/index.js. Coverage (Term): 12% Coverage (LOC): 17%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **