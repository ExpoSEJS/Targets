/root/Targets/tweeg.js
└─┬ tweeg.js@0.0.1 
  ├── minimist@1.2.0 
  └─┬ uglify-js@2.7.5 
    ├── async@0.2.10 
    ├── source-map@0.5.7 
    ├── uglify-to-browserify@1.0.2 
    └─┬ yargs@3.10.0 
      ├── camelcase@1.2.1 
      ├─┬ cliui@2.1.0 
      │ ├─┬ center-align@0.1.3 
      │ │ ├─┬ align-text@0.1.4 
      │ │ │ ├─┬ kind-of@3.2.2 
      │ │ │ │ └── is-buffer@1.1.5 
      │ │ │ ├── longest@1.0.1 
      │ │ │ └── repeat-string@1.6.1 
      │ │ └── lazy-cache@1.0.4 
      │ ├── right-align@0.1.3 
      │ └── wordwrap@0.0.2 
      ├── decamelize@1.2.0 
      └── window-size@0.1.0 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/tweeg.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000

*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","setBlocking","join","Function"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0319 took 17.7836s
*-- Errors occured in test {"_bound":0}
* Error: ReferenceError: require is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/tweeg.js/node_modules/tweeg.js/compiler.js. Coverage (Term): 9% Coverage (LOC): 11%
*- File /root/Targets/tweeg.js/node_modules/uglify-js/tools/node.js. Coverage (Term): 10% Coverage (LOC): 13%
*- File evalIndirect. Coverage (Term): 0% Coverage (LOC): 0%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **