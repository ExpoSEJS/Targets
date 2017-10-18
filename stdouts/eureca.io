/root/Targets/eureca.io
└─┬ eureca.io@0.7.1 
  └─┬ primus@7.1.0 
    ├─┬ access-control@1.0.0 
    │ ├── millisecond@0.1.2 
    │ └── vary@1.1.2 
    ├── asyncemit@3.0.1 
    ├─┬ create-server@1.0.1 
    │ └── connected@0.0.2 
    ├─┬ diagnostics@1.1.0 
    │ ├─┬ colorspace@1.0.1 
    │ │ ├─┬ color@0.8.0 
    │ │ │ ├── color-convert@0.5.3 
    │ │ │ └─┬ color-string@0.3.0 
    │ │ │   └── color-name@1.1.3 
    │ │ └── text-hex@0.0.0 
    │ ├─┬ enabled@1.0.2 
    │ │ └── env-variable@0.0.3 
    │ └─┬ kuler@0.0.0 
    │   └── colornames@0.0.2 
    ├── eventemitter3@2.0.3 
    ├── forwarded-for@1.0.1 
    ├─┬ fusing@1.0.0 
    │ ├── emits@3.0.0 
    │ └─┬ predefine@0.1.2 
    │   └── extendible@0.1.1 
    ├─┬ setheader@0.0.4 
    │ └── debug@0.7.4 
    ├── ultron@1.1.0 
    └── yeast@0.1.2 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/eureca.io/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000

*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0733 took 15.1094s
*-- Errors occured in test {"_bound":0}
* Error: SyntaxError: Unexpected token .
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/eureca.io/node_modules/eureca.io/index.js. Coverage (Term): 11% Coverage (LOC): 17%
*- File /root/Targets/eureca.io/node_modules/eureca.io/lib/EurecaClient.js. Coverage (Term): 4% Coverage (LOC): 5%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **