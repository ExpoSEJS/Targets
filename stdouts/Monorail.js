/root/Targets/Monorail.js
└─┬ Monorail.js@1.0.1 
  ├─┬ express@4.16.1 
  │ ├─┬ accepts@1.3.4 
  │ │ ├─┬ mime-types@2.1.17 
  │ │ │ └── mime-db@1.30.0 
  │ │ └── negotiator@0.6.1 
  │ ├── array-flatten@1.1.1 
  │ ├─┬ body-parser@1.18.2 
  │ │ ├── bytes@3.0.0 
  │ │ ├─┬ http-errors@1.6.2 
  │ │ │ ├── inherits@2.0.3 
  │ │ │ └── setprototypeof@1.0.3 
  │ │ ├── iconv-lite@0.4.19 
  │ │ └── raw-body@2.3.2 
  │ ├── content-disposition@0.5.2 
  │ ├── content-type@1.0.4 
  │ ├── cookie@0.3.1 
  │ ├── cookie-signature@1.0.6 
  │ ├─┬ debug@2.6.9 
  │ │ └── ms@2.0.0 
  │ ├── depd@1.1.1 
  │ ├── encodeurl@1.0.1 
  │ ├── escape-html@1.0.3 
  │ ├── etag@1.8.1 
  │ ├─┬ finalhandler@1.1.0 
  │ │ └── unpipe@1.0.0 
  │ ├── fresh@0.5.2 
  │ ├── merge-descriptors@1.0.1 
  │ ├── methods@1.1.2 
  │ ├─┬ on-finished@2.3.0 
  │ │ └── ee-first@1.1.1 
  │ ├── parseurl@1.3.2 
  │ ├── path-to-regexp@0.1.7 
  │ ├─┬ proxy-addr@2.0.2 
  │ │ ├── forwarded@0.1.2 
  │ │ └── ipaddr.js@1.5.2 
  │ ├── qs@6.5.1 
  │ ├── range-parser@1.2.0 
  │ ├── safe-buffer@5.1.1 
  │ ├─┬ send@0.16.1 
  │ │ ├── destroy@1.0.4 
  │ │ └── mime@1.4.1 
  │ ├── serve-static@1.13.1 
  │ ├── setprototypeof@1.1.0 
  │ ├── statuses@1.3.1 
  │ ├─┬ type-is@1.6.15 
  │ │ └── media-typer@0.3.0 
  │ ├── utils-merge@1.0.1 
  │ └── vary@1.1.2 
  ├── node-native-zip@1.1.0 
  └─┬ nohm@0.9.8 
    ├── async@1.5.2 
    ├─┬ redis@2.8.0 
    │ ├── double-ended-queue@2.1.0-0 
    │ ├── redis-commands@1.3.1 
    │ └── redis-parser@2.6.0 
    └── traverse@0.6.6 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/Monorail.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000

*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0911 took 5.7781s
*-- Errors occured in test {"_bound":0}
* Error: Error: Cannot find module 'Monorail.js'
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **