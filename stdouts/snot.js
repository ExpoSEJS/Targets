/root/Targets/snot.js
└─┬ snot.js@1.1.4 
  ├─┬ babelify@7.3.0 
  │ ├─┬ babel-core@6.26.0 
  │ │ ├─┬ babel-code-frame@6.26.0 
  │ │ │ ├─┬ chalk@1.1.3 
  │ │ │ │ ├── ansi-styles@2.2.1 
  │ │ │ │ ├── escape-string-regexp@1.0.5 
  │ │ │ │ ├─┬ has-ansi@2.0.0 
  │ │ │ │ │ └── ansi-regex@2.1.1 
  │ │ │ │ ├── strip-ansi@3.0.1 
  │ │ │ │ └── supports-color@2.0.0 
  │ │ │ ├── esutils@2.0.2 
  │ │ │ └── js-tokens@3.0.2 
  │ │ ├─┬ babel-generator@6.26.0 
  │ │ │ ├─┬ detect-indent@4.0.0 
  │ │ │ │ └─┬ repeating@2.0.1 
  │ │ │ │   └─┬ is-finite@1.0.2 
  │ │ │ │     └── number-is-nan@1.0.1 
  │ │ │ ├── jsesc@1.3.0 
  │ │ │ └── trim-right@1.0.1 
  │ │ ├── babel-helpers@6.24.1 
  │ │ ├── babel-messages@6.23.0 
  │ │ ├─┬ babel-register@6.26.0 
  │ │ │ ├── core-js@2.5.1 
  │ │ │ ├─┬ home-or-tmp@2.0.0 
  │ │ │ │ ├── os-homedir@1.0.2 
  │ │ │ │ └── os-tmpdir@1.0.2 
  │ │ │ ├─┬ mkdirp@0.5.1 
  │ │ │ │ └── minimist@0.0.8 
  │ │ │ └── source-map-support@0.4.18 
  │ │ ├─┬ babel-runtime@6.26.0 
  │ │ │ └── regenerator-runtime@0.11.0 
  │ │ ├── babel-template@6.26.0 
  │ │ ├─┬ babel-traverse@6.26.0 
  │ │ │ ├── globals@9.18.0 
  │ │ │ └─┬ invariant@2.2.2 
  │ │ │   └── loose-envify@1.3.1 
  │ │ ├─┬ babel-types@6.26.0 
  │ │ │ └── to-fast-properties@1.0.3 
  │ │ ├── babylon@6.18.0 
  │ │ ├── convert-source-map@1.5.0 
  │ │ ├─┬ debug@2.6.9 
  │ │ │ └── ms@2.0.0 
  │ │ ├── json5@0.5.1 
  │ │ ├── lodash@4.17.4 
  │ │ ├─┬ minimatch@3.0.4 
  │ │ │ └─┬ brace-expansion@1.1.8 
  │ │ │   ├── balanced-match@1.0.0 
  │ │ │   └── concat-map@0.0.1 
  │ │ ├── path-is-absolute@1.0.1 
  │ │ ├── private@0.1.7 
  │ │ ├── slash@1.0.0 
  │ │ └── source-map@0.5.7 
  │ └── object-assign@4.1.1 
  └── kd-tree-javascript@1.0.1 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/snot.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000

*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","call","assign","Array","create","random","join","floor","isArray","Float32Array","freeze","defineProperties","Uint16Array","sin","cos","sqrt","isFinite"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0377 took 66.1591s
*-- Errors occured in test {"_bound":0}
* Error: ReferenceError: navigator is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/snot.js/node_modules/snot.js/build/js/snot_webgl_renderer.min.js. Coverage (Term): 11% Coverage (LOC): 25%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **