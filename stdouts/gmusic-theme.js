/root/Targets/gmusic-theme.js
└─┬ gmusic-theme.js@2.1.16 
  ├─┬ brfs@1.4.3 
  │ ├─┬ quote-stream@1.0.2 
  │ │ ├── buffer-equal@0.0.1 
  │ │ └── minimist@1.2.0 
  │ ├─┬ resolve@1.4.0 
  │ │ └── path-parse@1.0.5 
  │ ├─┬ static-module@1.5.0 
  │ │ ├─┬ concat-stream@1.6.0 
  │ │ │ ├── inherits@2.0.3 
  │ │ │ └── typedarray@0.0.6 
  │ │ ├─┬ duplexer2@0.0.2 
  │ │ │ └─┬ readable-stream@1.1.14 
  │ │ │   ├── isarray@0.0.1 
  │ │ │   └── string_decoder@0.10.31 
  │ │ ├─┬ escodegen@1.3.3 
  │ │ │ ├── esprima@1.1.1 
  │ │ │ ├── estraverse@1.5.1 
  │ │ │ ├── esutils@1.0.0 
  │ │ │ └─┬ source-map@0.1.43 
  │ │ │   └── amdefine@1.0.1 
  │ │ ├─┬ falafel@2.1.0 
  │ │ │ ├── acorn@5.1.2 
  │ │ │ ├── foreach@2.0.5 
  │ │ │ ├── isarray@0.0.1 
  │ │ │ └── object-keys@1.0.11 
  │ │ ├─┬ has@1.0.1 
  │ │ │ └── function-bind@1.1.1 
  │ │ ├── object-inspect@0.4.0 
  │ │ ├─┬ quote-stream@0.0.0 
  │ │ │ └── minimist@0.0.8 
  │ │ ├─┬ readable-stream@1.0.34 
  │ │ │ ├── core-util-is@1.0.2 
  │ │ │ ├── isarray@0.0.1 
  │ │ │ └── string_decoder@0.10.31 
  │ │ ├── shallow-copy@0.0.1 
  │ │ ├─┬ static-eval@0.2.4 
  │ │ │ └─┬ escodegen@0.0.28 
  │ │ │   ├── esprima@1.0.4 
  │ │ │   └── estraverse@1.3.2 
  │ │ └─┬ through2@0.4.2 
  │ │   └─┬ xtend@2.1.2 
  │ │     └── object-keys@0.4.0 
  │ └─┬ through2@2.0.3 
  │   ├─┬ readable-stream@2.3.3 
  │   │ ├── isarray@1.0.0 
  │   │ ├── process-nextick-args@1.0.7 
  │   │ ├── safe-buffer@5.1.1 
  │   │ ├── string_decoder@1.0.3 
  │   │ └── util-deprecate@1.0.2 
  │   └── xtend@4.0.1 
  └─┬ color@0.11.4 
    ├── clone@1.0.2 
    ├─┬ color-convert@1.9.0 
    │ └── color-name@1.1.3 
    └── color-string@0.3.0 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/gmusic-theme.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000

*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","call","charCodeAt","Uint8Array","subarray","pop"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.1017 took 15.9987s
*-- Errors occured in test {"_bound":0}
* Error: TypeError: Cannot read property 'distance' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/gmusic-theme.js/node_modules/gmusic-theme.js/dist/gmusic-theme.js. Coverage (Term): 11% Coverage (LOC): 29%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **