/root/Targets/uupaa.m3u8spooler.js
└─┬ uupaa.m3u8spooler.js@0.2.1 
  ├─┬ uupaa.fileloader.js@0.1.4 
  │ ├─┬ request@2.83.0 
  │ │ ├── aws-sign2@0.7.0 
  │ │ ├── aws4@1.6.0 
  │ │ ├── caseless@0.12.0 
  │ │ ├─┬ combined-stream@1.0.5 
  │ │ │ └── delayed-stream@1.0.0 
  │ │ ├── extend@3.0.1 
  │ │ ├── forever-agent@0.6.1 
  │ │ ├─┬ form-data@2.3.1 
  │ │ │ └── asynckit@0.4.0 
  │ │ ├─┬ har-validator@5.0.3 
  │ │ │ ├─┬ ajv@5.2.3 
  │ │ │ │ ├── co@4.6.0 
  │ │ │ │ ├── fast-deep-equal@1.0.0 
  │ │ │ │ ├── json-schema-traverse@0.3.1 
  │ │ │ │ └─┬ json-stable-stringify@1.0.1 
  │ │ │ │   └── jsonify@0.0.0 
  │ │ │ └── har-schema@2.0.0 
  │ │ ├─┬ hawk@6.0.2 
  │ │ │ ├── boom@4.3.1 
  │ │ │ ├─┬ cryptiles@3.1.2 
  │ │ │ │ └── boom@5.2.0 
  │ │ │ ├── hoek@4.2.0 
  │ │ │ └── sntp@2.0.2 
  │ │ ├─┬ http-signature@1.2.0 
  │ │ │ ├── assert-plus@1.0.0 
  │ │ │ ├─┬ jsprim@1.4.1 
  │ │ │ │ ├── extsprintf@1.3.0 
  │ │ │ │ ├── json-schema@0.2.3 
  │ │ │ │ └─┬ verror@1.10.0 
  │ │ │ │   └── core-util-is@1.0.2 
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
  │ │ ├── oauth-sign@0.8.2 
  │ │ ├── performance-now@2.1.0 
  │ │ ├── qs@6.5.1 
  │ │ ├── safe-buffer@5.1.1 
  │ │ ├── stringstream@0.0.5 
  │ │ ├─┬ tough-cookie@2.3.3 
  │ │ │ └── punycode@1.4.1 
  │ │ ├── tunnel-agent@0.6.0 
  │ │ └── uuid@3.1.0 
  │ └── uupaa.uri.js@0.11.3 
  └─┬ uupaa.m3u8.js@6.1.2 
    ├── uupaa.aacprofile.js@0.0.3 
    ├── uupaa.h264profile.js@0.0.4 
    └── uupaa.task.js@1.1.6 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/uupaa.m3u8spooler.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000

*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0686 took 5.1163s
*-- Errors occured in test {"_bound":0}
* Error: TypeError: Cannot read property 'exports' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/uupaa.m3u8spooler.js/node_modules/uupaa.m3u8spooler.js/index.js. Coverage (Term): 80% Coverage (LOC): 100%
*- File /root/Targets/uupaa.m3u8spooler.js/node_modules/uupaa.m3u8spooler.js/lib/M3U8Spooler.js. Coverage (Term): 4% Coverage (LOC): 4%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **