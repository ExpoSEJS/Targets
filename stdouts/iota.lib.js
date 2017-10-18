/root/Targets/iota.lib.js
└─┬ iota.lib.js@0.4.1 
  ├─┬ async@2.5.0 
  │ └── lodash@4.17.4 
  ├── crypto-js@3.1.9-1 
  └── xmlhttprequest@1.8.0 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/iota.lib.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000

*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","create","sin","abs"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0468 took 8.5471s
*-- Errors occured in test {"_bound":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/iota.lib.js/node_modules/iota.lib.js/lib/iota.js. Coverage (Term): 11% Coverage (LOC): 17%
*- File /root/Targets/iota.lib.js/node_modules/iota.lib.js/lib/utils/utils.js. Coverage (Term): 4% Coverage (LOC): 3%
*- File /root/Targets/iota.lib.js/node_modules/iota.lib.js/lib/utils/inputValidator.js. Coverage (Term): 12% Coverage (LOC): 16%
*- File /root/Targets/iota.lib.js/node_modules/iota.lib.js/lib/utils/makeRequest.js. Coverage (Term): 14% Coverage (LOC): 19%
*- File /root/Targets/iota.lib.js/node_modules/xmlhttprequest/lib/XMLHttpRequest.js. Coverage (Term): 2% Coverage (LOC): 2%
*- File /root/Targets/iota.lib.js/node_modules/iota.lib.js/lib/errors/requestErrors.js. Coverage (Term): 35% Coverage (LOC): 70%
*- File /root/Targets/iota.lib.js/node_modules/iota.lib.js/lib/crypto/curl/curl.js. Coverage (Term): 20% Coverage (LOC): 27%
*- File /root/Targets/iota.lib.js/node_modules/iota.lib.js/lib/crypto/converter/converter.js. Coverage (Term): 34% Coverage (LOC): 69%
*- File /root/Targets/iota.lib.js/node_modules/iota.lib.js/lib/crypto/kerl/kerl.js. Coverage (Term): 7% Coverage (LOC): 10%
*- File /root/Targets/iota.lib.js/node_modules/crypto-js/index.js. Coverage (Term): 24% Coverage (LOC): 16%
*- File /root/Targets/iota.lib.js/node_modules/crypto-js/core.js. Coverage (Term): 18% Coverage (LOC): 36%
*- File /root/Targets/iota.lib.js/node_modules/crypto-js/x64-core.js. Coverage (Term): 36% Coverage (LOC): 46%
*- File /root/Targets/iota.lib.js/node_modules/crypto-js/lib-typedarrays.js. Coverage (Term): 37% Coverage (LOC): 49%
*- File /root/Targets/iota.lib.js/node_modules/crypto-js/enc-utf16.js. Coverage (Term): 24% Coverage (LOC): 41%
*- File /root/Targets/iota.lib.js/node_modules/crypto-js/enc-base64.js. Coverage (Term): 18% Coverage (LOC): 27%
*- File /root/Targets/iota.lib.js/node_modules/crypto-js/md5.js. Coverage (Term): 8% Coverage (LOC): 18%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **