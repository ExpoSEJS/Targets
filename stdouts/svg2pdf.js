/root/Targets/svg2pdf.js
└─┬ svg2pdf.js@1.1.1 
  ├─┬ jspdf-yworks@1.2.70 
  │ ├── adler32cs@0.0.1  (git://github.com/chick307/adler32cs.js.git#c6576b4ed91b4216973bf85d8478a49970934515)
  │ ├── cf-blob.js@0.0.1 
  │ └── filesaver.js@1.0.0  (git://github.com/andyinabox/FileSaver.js.git#973b433b8fbaee9a11d53b9ae423b046742cfe32)
  └─┬ licensify@3.1.3 
    ├── convert-source-map@1.5.0 
    ├─┬ offset-sourcemap-lines@1.0.0 
    │ └── source-map@0.5.7 
    ├─┬ oss-license-name-to-url@1.2.1 
    │ └── osi-licenses@0.1.1 
    ├─┬ through2@2.0.3 
    │ ├─┬ readable-stream@2.3.3 
    │ │ ├── core-util-is@1.0.2 
    │ │ ├── inherits@2.0.3 
    │ │ ├── isarray@1.0.0 
    │ │ ├── process-nextick-args@1.0.7 
    │ │ ├── safe-buffer@5.1.1 
    │ │ ├── string_decoder@1.0.3 
    │ │ └── util-deprecate@1.0.2 
    │ └── xtend@4.0.1 
    └── type-name@2.0.2 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/svg2pdf.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000

*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","call","toString","apply","bound "]
*-- Stat Module Done --*
*-- Test Case {"_bound":0,"Switcher":false,"Target_Switch_Base":0} start 0.0663 took 9.7334s
*-- Test Case {"Switcher":true,"Target_Switch_Base":0,"_bound":1,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0} start 9.9737 took 7.2859s
*-- Errors occured in test {"Switcher":true,"Target_Switch_Base":0,"_bound":1,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0}
* Error: TypeError: Cannot read property 'scale' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"Target_Switch_Base":0,"_bound":1}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":0,"_bound":3} start 17.4215 took 13.3053s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":0,"_bound":3}
* Error: TypeError: Cannot read property 'scale' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":0,"_bound":3}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":2} start 17.4812 took 17.5988s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":2}
* Error: TypeError: Cannot read property 'scale' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":2}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":1,"_bound":4} start 17.5412 took 18.6467s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":1,"_bound":4}
* Error: TypeError: Cannot read property 'scale' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":1,"_bound":4}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":2,"_bound":5,"ExpansionArg_int":0} start 30.9146 took 7.1272s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":2,"_bound":5,"ExpansionArg_int":0}
* Error: TypeError: Cannot read property 'saveGraphicsState' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":2,"_bound":5}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"_bound":5,"ExpansionArg_int":0} start 35.288 took 5.73s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"_bound":5,"ExpansionArg_int":0}
* Error: TypeError: Cannot read property 'saveGraphicsState' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"_bound":5}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"_bound":5,"ExpansionArg_int":0} start 36.2417 took 6.9245s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"_bound":5,"ExpansionArg_int":0}
* Error: TypeError: Cannot read property 'saveGraphicsState' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"_bound":5}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":3,"ExpansionArg_int":0,"_bound":7,"ExpansionArg_string":"PureString"} start 38.118 took 7.1534s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":3,"ExpansionArg_int":0,"_bound":7,"ExpansionArg_string":"PureString"}
* Error: TypeError: Cannot read property 'saveGraphicsState' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":3,"ExpansionArg_int":0,"_bound":7}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_type_3":0,"_bound":4,"ExpansionArg_int":0} start 30.8554 took 16.2194s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_type_3":0,"_bound":4,"ExpansionArg_int":0}
* Error: TypeError: Cannot read property 'scale' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_type_3":0,"_bound":4}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_type_3":0,"_bound":4,"ExpansionArg_int":0} start 35.2493 took 12.1243s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_type_3":0,"_bound":4,"ExpansionArg_int":0}
* Error: TypeError: Cannot read property 'scale' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_type_3":0,"_bound":4}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":1,"ExpansionArg_int":0,"_bound":6} start 38.1538 took 9.3989s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":1,"ExpansionArg_int":0,"_bound":6}
* Error: TypeError: Cannot read property 'scale' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":1,"ExpansionArg_int":0,"_bound":6}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_int":0,"_bound":6,"ExpansionArg_string":"PureString"} start 43.2163 took 8.8313s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_int":0,"_bound":6,"ExpansionArg_string":"PureString"}
* Error: TypeError: Cannot read property 'saveGraphicsState' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_int":0,"_bound":6}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":8,"ExpansionArg_array_length":0} start 45.339 took 9.1106s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":8,"ExpansionArg_array_length":0}
* Error: TypeError: Cannot read property 'saveGraphicsState' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":8}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":3,"ExpansionArg_int":0} start 35.1948 took 19.7524s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":3,"ExpansionArg_int":0}
* Error: TypeError: Cannot read property 'scale' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":3}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"ExpansionArg_int":0,"ExpansionArg_type_3":0,"_bound":5,"ExpansionArg_string":"PureString"} start 47.1724 took 8.0339s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"ExpansionArg_int":0,"ExpansionArg_type_3":0,"_bound":5,"ExpansionArg_string":"PureString"}
* Error: TypeError: Cannot read property 'scale' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"ExpansionArg_int":0,"ExpansionArg_type_3":0,"_bound":5}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_int":0,"_bound":7,"ExpansionArg_string":"PureString"} start 41.1341 took 16.3311s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_int":0,"_bound":7,"ExpansionArg_string":"PureString"}
* Error: TypeError: Cannot read property 'saveGraphicsState' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_int":0,"_bound":7}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":1,"ExpansionArg_int":0,"_bound":6} start 41.196 took 19.9751s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":1,"ExpansionArg_int":0,"_bound":6}
* Error: TypeError: Cannot read property 'scale' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":1,"ExpansionArg_int":0,"_bound":6}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_string":"","ExpansionArg_type_3":0,"_bound":6,"ExpansionArg_array_length":0} start 55.3115 took 6.9422s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_string":"","ExpansionArg_type_3":0,"_bound":6,"ExpansionArg_array_length":0}
* Error: TypeError: Cannot read property 'scale' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_string":"","ExpansionArg_type_3":0,"_bound":6}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":3,"_bound":7,"ExpansionArg_string":"PureString"} start 47.5104 took 16.0092s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":3,"_bound":7,"ExpansionArg_string":"PureString"}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":3,"_bound":7}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":9,"ExpansionArg_bool":false} start 54.5099 took 9.4913s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":9,"ExpansionArg_bool":false}
* Error: TypeError: Cannot read property 'saveGraphicsState' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":9}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"ExpansionArg_type_3":0,"_bound":5,"ExpansionArg_string":"PureString"} start 55.0789 took 9.2059s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"ExpansionArg_type_3":0,"_bound":5,"ExpansionArg_string":"PureString"}
* Error: TypeError: Cannot read property 'scale' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"ExpansionArg_type_3":0,"_bound":5}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":3,"_bound":6,"ExpansionArg_string":"PureString"} start 47.246 took 18.9545s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":3,"_bound":6,"ExpansionArg_string":"PureString"}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":3,"_bound":6}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":1,"ExpansionArg_int":0,"ExpansionArg_type_3":0,"_bound":5} start 47.4781 took 19.8423s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":1,"ExpansionArg_int":0,"ExpansionArg_type_3":0,"_bound":5}
* Error: TypeError: Cannot read property 'scale' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":1,"ExpansionArg_int":0,"ExpansionArg_type_3":0,"_bound":5}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"_bound":6,"ExpansionArg_string":"PureString"} start 55.1469 took 12.3336s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"_bound":6,"ExpansionArg_string":"PureString"}
* Error: TypeError: Cannot read property 'saveGraphicsState' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"_bound":6}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":3,"ExpansionArg_int":0,"ExpansionArg_type_3":0,"_bound":6,"ExpansionArg_string":"PureString"} start 47.4299 took 20.4017s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":3,"ExpansionArg_int":0,"ExpansionArg_type_3":0,"_bound":6,"ExpansionArg_string":"PureString"}
* Error: TypeError: Cannot read property 'scale' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":3,"ExpansionArg_int":0,"ExpansionArg_type_3":0,"_bound":6}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":4,"_bound":7,"ExpansionArg_array_length":0} start 55.3626 took 16.0208s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":4,"_bound":7,"ExpansionArg_array_length":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":4,"_bound":7}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_type_3":0,"_bound":8,"ExpansionArg_array_element_0_type":0} start 62.3549 took 9.8849s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_type_3":0,"_bound":8,"ExpansionArg_array_element_0_type":0}
* Error: TypeError: Cannot read property 'scale' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_type_3":0,"_bound":8}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":0,"ExpansionArg_type_3":5,"_bound":9,"ExpansionArg_bool":false} start 62.3905 took 10.4066s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":0,"ExpansionArg_type_3":5,"_bound":9,"ExpansionArg_bool":false}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":0,"ExpansionArg_type_3":5,"_bound":9}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":2,"ExpansionArg_string":"","_bound":9,"ExpansionArg_int_2":0} start 64.0585 took 8.9151s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":2,"ExpansionArg_string":"","_bound":9,"ExpansionArg_int_2":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":2,"ExpansionArg_string":"","_bound":9}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"_bound":10,"ExpansionArg_array_element_0_type":0} start 54.5498 took 18.5122s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"_bound":10,"ExpansionArg_array_element_0_type":0}
* Error: TypeError: Cannot read property 'saveGraphicsState' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"_bound":10}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":8,"ExpansionArg_array_length":0} start 57.5483 took 15.7229s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":8,"ExpansionArg_array_length":0}
* Error: TypeError: Cannot read property 'saveGraphicsState' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":8}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":7,"ExpansionArg_array_length":0} start 52.1552 took 21.2396s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":7,"ExpansionArg_array_length":0}
* Error: TypeError: Cannot read property 'saveGraphicsState' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":7}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":4,"ExpansionArg_string":"PureString"} start 55.0236 took 20.5833s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":4,"ExpansionArg_string":"PureString"}
* Error: TypeError: Cannot read property 'scale' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":4}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":8,"ExpansionArg_bool":false} start 73.4459 took 7.2446s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":8,"ExpansionArg_bool":false}
* Error: TypeError: Cannot read property 'saveGraphicsState' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":8}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_3":0,"_bound":10,"ExpansionArg_array_element_1_type":0} start 72.3078 took 9.3362s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_3":0,"_bound":10,"ExpansionArg_array_element_1_type":0}
* Error: TypeError: Cannot read property 'scale' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_3":0,"_bound":10}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"_bound":10,"ExpansionArg_array_element_0_type":0} start 73.3581 took 8.5061s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"_bound":10,"ExpansionArg_array_element_0_type":0}
* Error: TypeError: Cannot read property 'saveGraphicsState' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"_bound":10}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":4,"ExpansionArg_string":"","ExpansionArg_type_3":0,"_bound":8,"ExpansionArg_array_length":0} start 66.2528 took 15.8821s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":4,"ExpansionArg_string":"","ExpansionArg_type_3":0,"_bound":8,"ExpansionArg_array_length":0}
* Error: TypeError: Cannot read property 'scale' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":4,"ExpansionArg_string":"","ExpansionArg_type_3":0,"_bound":8}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":9,"ExpansionArg_array_length":0} start 67.4064 took 14.8621s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":9,"ExpansionArg_array_length":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":9}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"ExpansionArg_type_3":0,"_bound":7,"ExpansionArg_bool":false} start 62.3375 took 20.5615s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"ExpansionArg_type_3":0,"_bound":7,"ExpansionArg_bool":false}
* Error: TypeError: Cannot read property 'scale' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"ExpansionArg_type_3":0,"_bound":7}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":1,"ExpansionArg_string":"","_bound":8} start 63.719 took 19.3503s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":1,"ExpansionArg_string":"","_bound":8}
* Error: TypeError: Cannot read property 'scale' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":1,"ExpansionArg_string":"","_bound":8}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":10,"ExpansionArg_array_length":0} start 63.623 took 20.7844s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":10,"ExpansionArg_array_length":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":10}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"_bound":9,"ExpansionArg_array_element_0_type":0} start 75.6543 took 8.8744s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"_bound":9,"ExpansionArg_array_element_0_type":0}
* Error: TypeError: Cannot read property 'saveGraphicsState' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"_bound":9}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":1,"ExpansionArg_string":"","ExpansionArg_type_3":0,"_bound":6} start 64.3394 took 20.476s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":1,"ExpansionArg_string":"","ExpansionArg_type_3":0,"_bound":6}
* Error: TypeError: Cannot read property 'scale' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":1,"ExpansionArg_string":"","ExpansionArg_type_3":0,"_bound":6}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"ExpansionArg_string":"","_bound":8,"ExpansionArg_int_2":0} start 67.5556 took 17.7802s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"ExpansionArg_string":"","_bound":8,"ExpansionArg_int_2":0}
* Error: TypeError: Cannot read property 'saveGraphicsState' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"ExpansionArg_string":"","_bound":8}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":4,"ExpansionArg_string":"","ExpansionArg_type_3":0,"_bound":7,"ExpansionArg_array_length":0} start 67.9184 took 18.0873s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":4,"ExpansionArg_string":"","ExpansionArg_type_3":0,"_bound":7,"ExpansionArg_array_length":0}
* Error: TypeError: Cannot read property 'scale' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":4,"ExpansionArg_string":"","ExpansionArg_type_3":0,"_bound":7}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"_bound":12,"ExpansionArg_array_element_0_type":0} start 72.8659 took 16.0959s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"_bound":12,"ExpansionArg_array_element_0_type":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"_bound":12}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_type_3":0,"_bound":10,"ExpansionArg_array_element_0_type":0} start 82.3591 took 9.3807s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_type_3":0,"_bound":10,"ExpansionArg_array_element_0_type":0}
* Error: TypeError: Cannot read property 'scale' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_type_3":0,"_bound":10}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":11,"ExpansionArg_bool":false} start 71.4658 took 20.6536s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":11,"ExpansionArg_bool":false}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":11}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":4,"_bound":9,"ExpansionArg_array_length":0} start 84.6349 took 7.6884s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":4,"_bound":9,"ExpansionArg_array_length":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":4,"_bound":9}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":1,"ExpansionArg_string":"","_bound":7} start 84.8744 took 9.007s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":1,"ExpansionArg_string":"","_bound":7}
* Error: TypeError: Cannot read property 'scale' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":1,"ExpansionArg_string":"","_bound":7}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":0,"ExpansionArg_type_3":4,"ExpansionArg_bool":false,"_bound":13,"ExpansionArg_array_length_2":0} start 73.0217 took 20.9562s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":0,"ExpansionArg_type_3":4,"ExpansionArg_bool":false,"_bound":13,"ExpansionArg_array_length_2":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":0,"ExpansionArg_type_3":4,"ExpansionArg_bool":false,"_bound":13}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":12,"ExpansionArg_array_element_1_type":0} start 73.1784 took 21.3143s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":12,"ExpansionArg_array_element_1_type":0}
* Error: TypeError: Cannot read property 'saveGraphicsState' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":12}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":10,"ExpansionArg_bool":false} start 82.9863 took 11.653s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":10,"ExpansionArg_bool":false}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":10}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":11,"ExpansionArg_bool":false} start 85.3905 took 10.3928s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":11,"ExpansionArg_bool":false}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":11}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"ExpansionArg_type_3":0,"_bound":9,"ExpansionArg_bool":false} start 82.204 took 15.1622s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"ExpansionArg_type_3":0,"_bound":9,"ExpansionArg_bool":false}
* Error: TypeError: Cannot read property 'scale' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"ExpansionArg_type_3":0,"_bound":9}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_type_3":0,"_bound":12,"ExpansionArg_array_element_2_type":0} start 84.4954 took 16.1062s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_type_3":0,"_bound":12,"ExpansionArg_array_element_2_type":0}
* Error: TypeError: Cannot read property 'scale' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_type_3":0,"_bound":12}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":9,"ExpansionArg_bool":false} start 80.8066 took 20.1576s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":9,"ExpansionArg_bool":false}
* Error: TypeError: Cannot read property 'saveGraphicsState' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":9}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":1,"ExpansionArg_array_length":0,"_bound":10} start 93.9506 took 7.8923s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":1,"ExpansionArg_array_length":0,"_bound":10}
* Error: TypeError: Cannot read property 'scale' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":1,"ExpansionArg_array_length":0,"_bound":10}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":0,"ExpansionArg_type_3":3,"ExpansionArg_bool":false,"_bound":12,"ExpansionArg_string":"PureString"} start 81.9424 took 20.0299s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":0,"ExpansionArg_type_3":3,"ExpansionArg_bool":false,"_bound":12,"ExpansionArg_string":"PureString"}