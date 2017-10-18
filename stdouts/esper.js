/root/Targets/esper.js
└─┬ esper.js@0.1.7 
  ├── commander@2.11.0 
  ├─┬ escodegen@1.9.0 
  │ ├── esprima@3.1.3 
  │ ├── estraverse@4.2.0 
  │ ├── esutils@2.0.2 
  │ ├─┬ optionator@0.8.2 
  │ │ ├── deep-is@0.1.3 
  │ │ ├── fast-levenshtein@2.0.6 
  │ │ ├── levn@0.3.0 
  │ │ ├── prelude-ls@1.1.2 
  │ │ ├── type-check@0.3.2 
  │ │ └── wordwrap@1.0.0 
  │ └── source-map@0.5.7 
  └── esprima@2.7.3 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/esper.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000

*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0659 took 4.5469s
*-- Errors occured in test {"_bound":0}
* Error: ReferenceError: Engine is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/esper.js/node_modules/esper.js/src/index.js. Coverage (Term): 5% Coverage (LOC): 7%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **