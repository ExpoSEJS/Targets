
> contextify@0.1.15 install /root/Targets/relalg.js/node_modules/contextify
> node-gyp rebuild

make: Entering directory '/root/Targets/relalg.js/node_modules/contextify/build'
  CXX(target) Release/obj.target/contextify/src/contextify.o
contextify.target.mk:94: recipe for target 'Release/obj.target/contextify/src/contextify.o' failed
make: Leaving directory '/root/Targets/relalg.js/node_modules/contextify/build'

> phantomjs@1.9.20 install /root/Targets/relalg.js/node_modules/phantomjs
> node install.js

PhantomJS not found on PATH
Downloading https://github.com/Medium/phantomjs/releases/download/v1.9.19/phantomjs-1.9.8-linux-x86_64.tar.bz2
Saving to /root/Targets/relalg.js/node_modules/phantomjs/phantomjs/phantomjs-1.9.8-linux-x86_64.tar.bz2
Receiving...

Received 12854K total.
Extracting tar contents (via spawned process)
Removing /root/Targets/relalg.js/node_modules/phantomjs/lib/phantom
Copying extracted folder /root/Targets/relalg.js/node_modules/phantomjs/phantomjs/phantomjs-1.9.8-linux-x86_64.tar.bz2-extract-1506999517962/phantomjs-1.9.8-linux-x86_64 -> /root/Targets/relalg.js/node_modules/phantomjs/lib/phantom
Writing location.js file
Done. Phantomjs binary available at /root/Targets/relalg.js/node_modules/phantomjs/lib/phantom/bin/phantomjs
/root/Targets/relalg.js
└─┬ relalg.js@0.2.1 
  ├── deep-equal@0.0.0 
  ├─┬ phantomjs@1.9.20 
  │ ├─┬ extract-zip@1.5.0 
  │ │ ├─┬ concat-stream@1.5.0 
  │ │ │ ├── inherits@2.0.3 
  │ │ │ ├─┬ readable-stream@2.0.6 
  │ │ │ │ ├── core-util-is@1.0.2 
  │ │ │ │ ├── isarray@1.0.0 
  │ │ │ │ ├── process-nextick-args@1.0.7 
  │ │ │ │ ├── string_decoder@0.10.31 
  │ │ │ │ └── util-deprecate@1.0.2 
  │ │ │ └── typedarray@0.0.6 
  │ │ ├── debug@0.7.4 
  │ │ ├─┬ mkdirp@0.5.0 
  │ │ │ └── minimist@0.0.8 
  │ │ └─┬ yauzl@2.4.1 
  │ │   └─┬ fd-slicer@1.0.1 
  │ │     └── pend@1.2.0 
  │ ├─┬ fs-extra@0.26.7 
  │ │ ├── graceful-fs@4.1.11 
  │ │ ├── jsonfile@2.4.0 
  │ │ ├── klaw@1.3.1 
  │ │ ├── path-is-absolute@1.0.1 
  │ │ └─┬ rimraf@2.6.2 
  │ │   └─┬ glob@7.1.2 
  │ │     ├── fs.realpath@1.0.0 
  │ │     ├─┬ inflight@1.0.6 
  │ │     │ └── wrappy@1.0.2 
  │ │     ├─┬ minimatch@3.0.4 
  │ │     │ └─┬ brace-expansion@1.1.8 
  │ │     │   ├── balanced-match@1.0.0 
  │ │     │   └── concat-map@0.0.1 
  │ │     └── once@1.4.0 
  │ ├─┬ hasha@2.2.0 
  │ │ ├── is-stream@1.1.0 
  │ │ └─┬ pinkie-promise@2.0.1 
  │ │   └── pinkie@2.0.4 
  │ ├── kew@0.7.0 
  │ ├── progress@1.1.8 
  │ ├─┬ request@2.67.0 
  │ │ ├── aws-sign2@0.6.0 
  │ │ ├── bl@1.0.3 
  │ │ ├── caseless@0.11.0 
  │ │ ├─┬ combined-stream@1.0.5 
  │ │ │ └── delayed-stream@1.0.0 
  │ │ ├── extend@3.0.1 
  │ │ ├── forever-agent@0.6.1 
  │ │ ├─┬ form-data@1.0.1 
  │ │ │ └─┬ async@2.5.0 
  │ │ │   └── lodash@4.17.4 
  │ │ ├─┬ har-validator@2.0.6 
  │ │ │ ├─┬ chalk@1.1.3 
  │ │ │ │ ├── ansi-styles@2.2.1 
  │ │ │ │ ├── escape-string-regexp@1.0.5 
  │ │ │ │ ├─┬ has-ansi@2.0.0 
  │ │ │ │ │ └── ansi-regex@2.1.1 
  │ │ │ │ ├── strip-ansi@3.0.1 
  │ │ │ │ └── supports-color@2.0.0 
  │ │ │ ├── commander@2.11.0 
  │ │ │ └─┬ is-my-json-valid@2.16.1 
  │ │ │   ├── generate-function@2.0.0 
  │ │ │   ├─┬ generate-object-property@1.2.0 
  │ │ │   │ └── is-property@1.0.2 
  │ │ │   ├── jsonpointer@4.0.1 
  │ │ │   └── xtend@4.0.1 
  │ │ ├─┬ hawk@3.1.3 
  │ │ │ ├── boom@2.10.1 
  │ │ │ ├── cryptiles@2.0.5 
  │ │ │ ├── hoek@2.16.3 
  │ │ │ └── sntp@1.0.9 
  │ │ ├─┬ http-signature@1.1.1 
  │ │ │ ├── assert-plus@0.2.0 
  │ │ │ ├─┬ jsprim@1.4.1 
  │ │ │ │ ├── assert-plus@1.0.0 
  │ │ │ │ ├── extsprintf@1.3.0 
  │ │ │ │ ├── json-schema@0.2.3 
  │ │ │ │ └── verror@1.10.0 
  │ │ │ └─┬ sshpk@1.13.1 
  │ │ │   ├── asn1@0.2.3 
  │ │ │   ├── bcrypt-pbkdf@1.0.1 
  │ │ │   ├── dashdash@1.14.1 
  │ │ │   ├── ecc-jsbn@0.1.1 
  │ │ │   ├── getpass@0.1.7 
  │ │ │   ├── jsbn@0.1.1 
  │ │ │   └── tweetnacl@0.14.5 
  │ │ ├── is-typedarray@1.0.0 
  │ │ ├── isstream@0.1.2 
  │ │ ├── json-stringify-safe@5.0.1 
  │ │ ├─┬ mime-types@2.1.17 
  │ │ │ └── mime-db@1.30.0 
  │ │ ├── node-uuid@1.4.8 
  │ │ ├── oauth-sign@0.8.2 
  │ │ ├── qs@5.2.1 
  │ │ ├── stringstream@0.0.5 
  │ │ ├── tough-cookie@2.2.2 
  │ │ └── tunnel-agent@0.4.3 
  │ ├─┬ request-progress@2.0.1 
  │ │ └── throttleit@1.0.0 
  │ └─┬ which@1.2.14 
  │   └── isexe@2.0.0 
  └── requirejs@2.1.22 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/relalg.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000

*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0335 took 4.0574s
*-- Errors occured in test {"_bound":0}
* Error: Error: Cannot find module 'relalg.js'
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **