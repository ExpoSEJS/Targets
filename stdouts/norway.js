/root/Targets/norway.js
└─┬ norway.js@1.0.2 
  ├─┬ d3@4.10.2 
  │ ├── d3-array@1.2.0 
  │ ├── d3-axis@1.0.8 
  │ ├── d3-brush@1.0.4 
  │ ├── d3-chord@1.0.4 
  │ ├── d3-collection@1.0.4 
  │ ├── d3-color@1.0.3 
  │ ├── d3-dispatch@1.0.3 
  │ ├── d3-drag@1.1.1 
  │ ├─┬ d3-dsv@1.0.7 
  │ │ ├── iconv-lite@0.4.19 
  │ │ └── rw@1.3.3 
  │ ├── d3-ease@1.0.3 
  │ ├── d3-force@1.0.6 
  │ ├── d3-format@1.2.0 
  │ ├── d3-geo@1.6.4 
  │ ├── d3-hierarchy@1.1.5 
  │ ├── d3-interpolate@1.1.5 
  │ ├── d3-path@1.0.5 
  │ ├── d3-polygon@1.0.3 
  │ ├── d3-quadtree@1.0.3 
  │ ├── d3-queue@3.0.7 
  │ ├── d3-random@1.1.0 
  │ ├─┬ d3-request@1.0.6 
  │ │ └── xmlhttprequest@1.8.0 
  │ ├── d3-scale@1.0.6 
  │ ├── d3-selection@1.1.0 
  │ ├── d3-shape@1.2.0 
  │ ├── d3-time@1.0.7 
  │ ├── d3-time-format@2.0.5 
  │ ├── d3-timer@1.0.7 
  │ ├── d3-transition@1.1.0 
  │ ├── d3-voronoi@1.1.2 
  │ └── d3-zoom@1.5.0 
  ├── d3-geo@1.8.1 
  └─┬ d3-geo-projection@1.2.3 
    └── commander@2.11.0 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/norway.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000

*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0353 took 2.9567s
*-- Errors occured in test {"_bound":0}
* Error: SyntaxError: 'import' and 'export' may appear only with 'sourceType: module' (3:0)
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **