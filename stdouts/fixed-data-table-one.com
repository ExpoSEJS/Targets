/root/Targets/fixed-data-table-one.com
├─┬ fixed-data-table-one.com@0.8.0-patch0 
│ ├─┬ create-react-class@15.6.2 
│ │ ├─┬ fbjs@0.8.16 
│ │ │ ├── core-js@1.2.7 
│ │ │ ├─┬ isomorphic-fetch@2.2.1 
│ │ │ │ ├─┬ node-fetch@1.7.3 
│ │ │ │ │ ├─┬ encoding@0.1.12 
│ │ │ │ │ │ └── iconv-lite@0.4.19 
│ │ │ │ │ └── is-stream@1.1.0 
│ │ │ │ └── whatwg-fetch@2.0.3 
│ │ │ ├─┬ promise@7.3.1 
│ │ │ │ └── asap@2.0.6 
│ │ │ ├── setimmediate@1.0.5 
│ │ │ └── ua-parser-js@0.7.14 
│ │ ├─┬ loose-envify@1.3.1 
│ │ │ └── js-tokens@3.0.2 
│ │ └── object-assign@4.1.1 
│ └── prop-types@15.6.0 
├── UNMET PEER DEPENDENCY react@>=0.13.0 || ^0.14.0-beta3
└── UNMET PEER DEPENDENCY react-dom@>=0.14.0 || ^0.14.0-beta3

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/fixed-data-table-one.com/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000

*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0307 took 5.2099s
*-- Errors occured in test {"_bound":0}
* Error: Error: Cannot find module 'react'
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/fixed-data-table-one.com/node_modules/fixed-data-table-one.com/main.js. Coverage (Term): 80% Coverage (LOC): 100%
*- File /root/Targets/fixed-data-table-one.com/node_modules/fixed-data-table-one.com/internal/FixedDataTableRoot.js. Coverage (Term): 27% Coverage (LOC): 30%
*- File /root/Targets/fixed-data-table-one.com/node_modules/fixed-data-table-one.com/internal/FixedDataTable.js. Coverage (Term): 2% Coverage (LOC): 1%
*- File /root/Targets/fixed-data-table-one.com/node_modules/fixed-data-table-one.com/internal/React.js. Coverage (Term): 82% Coverage (LOC): 100%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **