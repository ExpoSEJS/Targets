/root/Targets/tornado.js
└─┬ tornado.js@0.2.1 
  └─┬ cli@0.8.0 
    ├── exit@0.1.2 
    └─┬ glob@5.0.15 
      ├─┬ inflight@1.0.6 
      │ └── wrappy@1.0.2 
      ├── inherits@2.0.3 
      ├─┬ minimatch@3.0.4 
      │ └─┬ brace-expansion@1.1.8 
      │   ├── balanced-match@1.0.0 
      │   └── concat-map@0.0.1 
      ├── once@1.4.0 
      └── path-is-absolute@1.0.1 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/tornado.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000

*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","toString","apply","bound compile","charCodeAt","join","create","assign"]
*-- regex: 354
*-- Stat Module Done --*
*-- Test Case {"_bound":0,"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0} start 0.0802 took 38.7351s
*-- Errors occured in test {"_bound":0,"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0}
* Error: TypeError: Cannot read property 'charCodeAt' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":0,"_bound":3} start 39.8884 took 33.1224s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":0,"_bound":3}
* Error: TypeError: Cannot read property 'charCodeAt' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":0,"_bound":3}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":1,"_bound":4} start 40.2067 took 33.7364s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":1,"_bound":4}
* Error: TypeError: Cannot read property 'charCodeAt' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":1,"_bound":4}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":1} start 39.7044 took 42.9774s
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":2} start 40.0137 took 43.4093s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":2}
* Error: TypeError: Cannot read property 'charCodeAt' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":2}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":2,"_bound":5,"ExpansionArg_int":0} start 73.6009 took 32.2902s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":2,"_bound":5,"ExpansionArg_int":0}
* Error: TypeError: Cannot read property 'charCodeAt' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":2,"_bound":5}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"_bound":5,"ExpansionArg_int":0} start 74.2576 took 32.8064s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"_bound":5,"ExpansionArg_int":0}
* Error: TypeError: Cannot read property 'charCodeAt' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"_bound":5}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_type_3":0,"_bound":4,"ExpansionArg_int":0} start 73.4092 took 40.4413s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_type_3":0,"_bound":4,"ExpansionArg_int":0}
* Error: TypeError: Cannot read property 'charCodeAt' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_type_3":0,"_bound":4}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"_bound":5,"ExpansionArg_int":0} start 84.1504 took 37.7089s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"_bound":5,"ExpansionArg_int":0}
* Error: TypeError: Cannot read property 'charCodeAt' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"_bound":5}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_type_3":0,"_bound":4,"ExpansionArg_int":0} start 83.9931 took 40.3209s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_type_3":0,"_bound":4,"ExpansionArg_int":0}
* Error: TypeError: Cannot read property 'charCodeAt' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_type_3":0,"_bound":4}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":3,"ExpansionArg_int":0} start 83.7718 took 42.0518s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":3,"ExpansionArg_int":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":3}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":1,"ExpansionArg_int":0,"_bound":6} start 106.3238 took 28.5352s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":1,"ExpansionArg_int":0,"_bound":6}
* Error: TypeError: Cannot read property 'charCodeAt' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":1,"ExpansionArg_int":0,"_bound":6}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_int":0,"_bound":6,"ExpansionArg_string":"PureString"} start 107.7524 took 39.4617s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_int":0,"_bound":6,"ExpansionArg_string":"PureString"}
* Error: TypeError: Cannot read property 'charCodeAt' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_int":0,"_bound":6}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":3,"ExpansionArg_int":0,"_bound":7,"ExpansionArg_string":"PureString"} start 106.5538 took 45.5044s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":3,"ExpansionArg_int":0,"_bound":7,"ExpansionArg_string":"PureString"}
* Error: TypeError: Cannot read property 'charCodeAt' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":3,"ExpansionArg_int":0,"_bound":7}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_int":0,"_bound":7,"ExpansionArg_string":"PureString"} start 122.2751 took 31.9602s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_int":0,"_bound":7,"ExpansionArg_string":"PureString"}
* Error: TypeError: Cannot read property 'charCodeAt' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_int":0,"_bound":7}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":3,"_bound":7,"ExpansionArg_string":"PureString"} start 125.1145 took 30.001s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":3,"_bound":7,"ExpansionArg_string":"PureString"}
* Error: TypeError: Cannot read property 'charCodeAt' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":3,"_bound":7}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":3,"_bound":6,"ExpansionArg_string":"PureString"} start 114.4912 took 43.227s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":3,"_bound":6,"ExpansionArg_string":"PureString"}
* Error: TypeError: Cannot read property 'charCodeAt' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":3,"_bound":6}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"ExpansionArg_type_3":0,"_bound":5,"ExpansionArg_string":"PureString"} start 126.3803 took 33.7973s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"ExpansionArg_type_3":0,"_bound":5,"ExpansionArg_string":"PureString"}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"ExpansionArg_type_3":0,"_bound":5}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"ExpansionArg_int":0,"ExpansionArg_type_3":0,"_bound":5,"ExpansionArg_string":"PureString"} start 114.2111 took 46.943s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"ExpansionArg_int":0,"ExpansionArg_type_3":0,"_bound":5,"ExpansionArg_string":"PureString"}
* Error: TypeError: Cannot read property 'charCodeAt' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"ExpansionArg_int":0,"ExpansionArg_type_3":0,"_bound":5}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":4,"ExpansionArg_string":"PureString"} start 126.2631 took 36.8232s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":4,"ExpansionArg_string":"PureString"}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":4}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":1,"ExpansionArg_int":0,"_bound":6} start 122.4159 took 43.1779s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":1,"ExpansionArg_int":0,"_bound":6}
* Error: TypeError: Cannot read property 'charCodeAt' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":1,"ExpansionArg_int":0,"_bound":6}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":3,"ExpansionArg_int":0,"ExpansionArg_type_3":0,"_bound":6,"ExpansionArg_string":"PureString"} start 124.8471 took 44.7385s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":3,"ExpansionArg_int":0,"ExpansionArg_type_3":0,"_bound":6,"ExpansionArg_string":"PureString"}
* Error: TypeError: Cannot read property 'charCodeAt' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":3,"ExpansionArg_int":0,"ExpansionArg_type_3":0,"_bound":6}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":1,"ExpansionArg_int":0,"ExpansionArg_type_3":0,"_bound":5} start 125.3709 took 48.0496s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":1,"ExpansionArg_int":0,"ExpansionArg_type_3":0,"_bound":5}
* Error: TypeError: Cannot read property 'charCodeAt' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":1,"ExpansionArg_int":0,"ExpansionArg_type_3":0,"_bound":5}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"_bound":6,"ExpansionArg_string":"PureString"} start 126.5417 took 47.97s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"_bound":6,"ExpansionArg_string":"PureString"}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"_bound":6}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":7,"ExpansionArg_array_length":0} start 147.6621 took 29.2669s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":7,"ExpansionArg_array_length":0}
* Error: TypeError: Cannot read property 'charCodeAt' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":7}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":8,"ExpansionArg_array_length":0} start 152.4398 took 28.8829s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":8,"ExpansionArg_array_length":0}
* Error: TypeError: Cannot read property 'charCodeAt' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":8}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":10,"ExpansionArg_array_length":0} start 155.881 took 33.5881s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":10,"ExpansionArg_array_length":0}
* Error: TypeError: Cannot read property 'charCodeAt' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":10}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":1,"ExpansionArg_string":"","_bound":7} start 158.3891 took 33.0932s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":1,"ExpansionArg_string":"","_bound":7}
* Error: TypeError: Cannot read property 'charCodeAt' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":1,"ExpansionArg_string":"","_bound":7}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":8,"ExpansionArg_array_length":0} start 154.6188 took 50.3257s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":8,"ExpansionArg_array_length":0}
* Error: TypeError: Cannot read property 'charCodeAt' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":8}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":2,"ExpansionArg_string":"","_bound":8,"ExpansionArg_int_2":0} start 158.6628 took 47.0622s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":2,"ExpansionArg_string":"","_bound":8,"ExpansionArg_int_2":0}
* Error: TypeError: Cannot read property 'charCodeAt' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":2,"ExpansionArg_string":"","_bound":8}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":8} start 163.3153 took 43.9626s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":8}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":8}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":17} start 173.6522 took 34.8588s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":17}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":17}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":2,"ExpansionArg_string":"","_bound":9,"ExpansionArg_int_2":0} start 156.407 took 53.7091s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":2,"ExpansionArg_string":"","_bound":9,"ExpansionArg_int_2":0}
* Error: TypeError: Cannot read property 'charCodeAt' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":2,"ExpansionArg_string":"","_bound":9}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":9,"ExpansionArg_array_length":0} start 158.1789 took 53.5735s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":9,"ExpansionArg_array_length":0}
* Error: TypeError: Cannot read property 'charCodeAt' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":9}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":1,"ExpansionArg_string":"","_bound":8} start 156.5187 took 56.0714s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":1,"ExpansionArg_string":"","_bound":8}
* Error: TypeError: Cannot read property 'charCodeAt' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":1,"ExpansionArg_string":"","_bound":8}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_string":"","ExpansionArg_type_3":0,"_bound":6,"ExpansionArg_array_length":0} start 161.475 took 51.7202s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_string":"","ExpansionArg_type_3":0,"_bound":6,"ExpansionArg_array_length":0}
* Error: TypeError: Cannot read property 'charCodeAt' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_string":"","ExpansionArg_type_3":0,"_bound":6}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":1,"ExpansionArg_string":"","ExpansionArg_type_3":0,"_bound":6} start 160.6585 took 54.46s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":1,"ExpansionArg_string":"","ExpansionArg_type_3":0,"_bound":6}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":1,"ExpansionArg_string":"","ExpansionArg_type_3":0,"_bound":6}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":11} start 165.6862 took 50.1232s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":11}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":11}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":14} start 191.7072 took 24.8139s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":14}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":14}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":20} start 174.8751 took 49.5329s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":20}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":20}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000<!--\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":12} start 169.9032 took 55.3233s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000<!--\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":12}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000<!--\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":12}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000<!--\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":15} start 189.8792 took 37.2616s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000<!--\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":15}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000<!--\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":15}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"_bound":9,"ExpansionArg_array_element_0_type":0} start 181.6132 took 57.953s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"_bound":9,"ExpansionArg_array_element_0_type":0}
* Error: TypeError: Cannot read property 'charCodeAt' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"_bound":9}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":9,"ExpansionArg_bool":false} start 205.1425 took 35.7237s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":9,"ExpansionArg_bool":false}
* Error: TypeError: Cannot read property 'charCodeAt' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":9}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000<!--\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":18} start 206.2463 took 35.6626s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000<!--\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":18}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000<!--\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":18}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"_bound":10,"ExpansionArg_array_element_0_type":0} start 208.8194 took 34.0127s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"_bound":10,"ExpansionArg_array_element_0_type":0}
* Error: TypeError: Cannot read property 'charCodeAt' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"_bound":10}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":8,"ExpansionArg_bool":false} start 215.5443 took 34.814s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":8,"ExpansionArg_bool":false}
* Error: TypeError: Cannot read property 'charCodeAt' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":8}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000</\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":13} start 177.275 took 73.927s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000</\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":13}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000</\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":13}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"_bound":10,"ExpansionArg_array_element_0_type":0} start 216.0629 took 36.3177s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"_bound":10,"ExpansionArg_array_element_0_type":0}
* Error: TypeError: Cannot read property 'charCodeAt' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"_bound":10}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"_bound":12,"ExpansionArg_array_element_0_type":0} start 212.1819 took 43.3973s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"_bound":12,"ExpansionArg_array_element_0_type":0}
* Error: TypeError: Cannot read property 'charCodeAt' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"_bound":12}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000</\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":16} start 213.0479 took 43.347s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000</\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":16}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000</\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":16}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":11} start 207.805 took 54.3081s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":11}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":11}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":9,"ExpansionArg_bool":false} start 210.4391 took 55.0835s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":9,"ExpansionArg_bool":false}
* Error: TypeError: Cannot read property 'charCodeAt' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":9}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":10} start 213.4075 took 53.5346s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":10}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":10}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_type_3":0,"_bound":8,"ExpansionArg_array_element_0_type":0} start 216.9028 took 50.7574s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_type_3":0,"_bound":8,"ExpansionArg_array_element_0_type":0}
* Error: TypeError: Cannot read property 'charCodeAt' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_type_3":0,"_bound":8}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000<!--\u0000\u0000\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":16} start 225.7086 took 42.5685s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000<!--\u0000\u0000\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":16}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000<!--\u0000\u0000\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":16}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":26} start 224.8104 took 51.7868s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":26}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":26}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000<!---->\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":19} start 242.499 took 43.4186s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000<!---->\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":19}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000<!---->\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":19}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000<!--","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":14} start 227.6268 took 61.9875s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000<!--","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":14}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000<!--","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":14}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000<!---->\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":13} start 241.063 took 56.7139s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000<!---->\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":13}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000<!---->\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":13}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":11} start 267.2829 took 31.8891s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":11}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":11}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000<!--","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":20} start 243.2163 took 56.8763s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000<!--","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":20}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000<!--","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":20}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000<!--\u0000\u0000\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":19} start 239.8032 took 67.3663s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000<!--\u0000\u0000\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":19}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000<!--\u0000\u0000\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":19}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000<!---->\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":16} start 250.8535 took 60.6668s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000<!---->\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":16}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000<!---->\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":16}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000<!--\u0000-->\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":15} start 252.6679 took 64.7338s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000<!--\u0000-->\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":15}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000<!--\u0000-->\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":15}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000<!--\u0000-->\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":18} start 256.1259 took 61.8878s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000<!--\u0000-->\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":18}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000<!--\u0000-->\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":18}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000<!--\u0000\u0000-->\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":17} start 268.7513 took 50.2102s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000<!--\u0000\u0000-->\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":17}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000<!--\u0000\u0000-->\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":17}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000<!--\u0000-->\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":21} start 262.3668 took 57.5362s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000<!--\u0000-->\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":21}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000<!--\u0000-->\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":21}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000<!---->","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":30} start 286.5269 took 37.6752s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000<!---->","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":30}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000<!---->","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":30}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000<!--","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":17} start 265.7991 took 60.0688s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000<!--","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":17}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000<!--","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":17}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000<!--\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":18} start 289.9217 took 40.5651s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000<!--\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":18}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000<!--\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":18}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000<!--\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":20} start 276.9164 took 65.5547s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000<!--\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":20}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000<!--\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":20}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000<!--\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":27} start 300.76 took 43.2241s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000<!--\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":27}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000<!--\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":27}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000<!--\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":24} start 307.715 took 37.1669s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000<!--\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":24}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000<!--\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":24}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000<!--\u0000\u0000\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":22} start 268.1185 took 77.5284s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000<!--\u0000\u0000\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":22}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000<!--\u0000\u0000\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":22}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000<!--\u0000\u0000\u0000\u0000\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":24} start 298.3628 took 48.5772s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000<!--\u0000\u0000\u0000\u0000\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":24}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000<!--\u0000\u0000\u0000\u0000\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":24}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":11,"ExpansionArg_bool":false} start 299.598 took 53.9481s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":11,"ExpansionArg_bool":false}
* Error: TypeError: Cannot read property 'charCodeAt' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":11}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"ExpansionArg_type_3":0,"_bound":7,"ExpansionArg_bool":false} start 318.6921 took 39.1692s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"ExpansionArg_type_3":0,"_bound":7,"ExpansionArg_bool":false}
* Error: TypeError: Cannot read property 'charCodeAt' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"ExpansionArg_type_3":0,"_bound":7}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000<!--\u0000\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":22} start 311.7888 took 48.2333s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000<!--\u0000\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":22}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000<!--\u0000\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":22}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":10,"ExpansionArg_bool":false} start 326.542 took 36.1808s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":10,"ExpansionArg_bool":false}
* Error: TypeError: Cannot read property 'charCodeAt' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":10}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000</\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":25} start 317.6502 took 51.2578s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000</\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":25}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000</\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":25}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":32} start 319.3741 took 50.7923s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":32}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":32}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000<!--\u0000\u0000\u0000-->\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":19} start 324.8879 took 46.2264s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000<!--\u0000\u0000\u0000-->\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":19}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000<!--\u0000\u0000\u0000-->\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":19}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000<!---->","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":24} start 320.459 took 55.8352s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000<!---->","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":24}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000<!---->","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":24}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000<!---->\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":28} start 346.0174 took 31.1456s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000<!---->\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":28}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000<!---->\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":28}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000<!--","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":29} start 344.4829 took 38.2321s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000<!--","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":29}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000<!--","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":29}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"_bound":11,"ExpansionArg_array_element_0_type":0} start 331.2679 took 55.2895s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"_bound":11,"ExpansionArg_array_element_0_type":0}
* Error: TypeError: Cannot read property 'charCodeAt' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"_bound":11}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000<!--","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":26} start 345.4735 took 51.6056s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000<!--","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":26}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000<!--","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":26}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000<!---->\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":25} start 347.3147 took 58.8697s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000<!---->\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":25}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000<!---->\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":25}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":23} start 353.8255 took 53.807s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":23}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":23}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000<!---->","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":27} start 362.906 took 53.3765s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000<!---->","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":27}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000<!---->","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":27}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000</\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":19} start 343.3477 took 73.7512s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000</\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":19}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000</\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":19}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000<!--\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":21} start 360.5898 took 56.5094s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000<!--\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":21}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000<!--\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":21}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000\u0000<!--\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":30} start 377.6549 took 40.9216s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000\u0000<!--\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":30}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000\u0000<!--\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":30}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000<!--\u0000-->","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":28} start 371.8299 took 48.7803s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000<!--\u0000-->","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":28}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000<!--\u0000-->","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":28}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":12,"ExpansionArg_array_element_1_type":0} start 376.6421 took 51.4268s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":12,"ExpansionArg_array_element_1_type":0}
* Error: TypeError: Cannot read property 'charCodeAt' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":12}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000\u0000</\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":31} start 358.2985 took 74.1278s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000\u0000</\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":31}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000\u0000</\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":31}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000<!--\u0000\u0000\u0000\u0000-->\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":21} start 370.5012 took 62.9628s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000<!--\u0000\u0000\u0000\u0000-->\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":21}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000<!--\u0000\u0000\u0000\u0000-->\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":21}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000<!--\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":21} start 383.316 took 51.3548s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000<!--\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":21}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000<!--\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":21}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000</\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":28} start 397.3377 took 46.3369s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000</\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":28}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000</\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":28}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":29} start 408.022 took 36.2372s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":29}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":29}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000<!--\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":33} start 416.7389 took 35.4179s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000<!--\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":33}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000<!--\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":33}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000</\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":22} start 386.9235 took 70.0802s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000</\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":22}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000</\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":22}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000\u0000<!--","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":32} start 420.9673 took 36.9394s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000\u0000<!--","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":32}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000\u0000<!--","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":32}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000<!--\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":23} start 406.9988 took 62.6286s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000<!--\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":23}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000<!--\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":23}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":12,"ExpansionArg_array_element_1_type":0} start 417.9447 took 52.6909s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":12,"ExpansionArg_array_element_1_type":0}
* Error: TypeError: Cannot read property 'charCodeAt' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":12}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000\u0000<!---->\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":31} start 418.9317 took 60.5351s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000\u0000<!---->\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":31}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000\u0000<!---->\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":31}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000<!---->\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":22} start 444.5222 took 37.7742s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000<!---->\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":22}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000<!---->\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":22}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":35} start 434.0054 took 49.576s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":35}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":35}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":41} start 428.3516 took 58.1415s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":41}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":41}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000<!--","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":23} start 435.735 took 52.9235s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000<!--","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":23}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000<!--","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":23}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000<!--","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":35} start 452.4565 took 55.4311s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000<!--","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":35}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000<!--","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":35}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000<!--\u0000\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":25} start 471.2508 took 40.0682s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000<!--\u0000\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":25}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000<!--\u0000\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":25}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000<!--\u0000\u0000\u0000\u0000\u0000-->\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":23} start 457.322 took 58.1266s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000<!--\u0000\u0000\u0000\u0000\u0000-->\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":23}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000<!--\u0000\u0000\u0000\u0000\u0000-->\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":23}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":4,"ExpansionArg_string":"","ExpansionArg_type_3":0,"_bound":8,"ExpansionArg_array_length":0} start 469.9141 took 46.6651s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":4,"ExpansionArg_string":"","ExpansionArg_type_3":0,"_bound":8,"ExpansionArg_array_length":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":4,"ExpansionArg_string":"","ExpansionArg_type_3":0,"_bound":8}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000<!--\u0000\u0000\u0000\u0000\u0000-->\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":26} start 489.423 took 39.209s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000<!--\u0000\u0000\u0000\u0000\u0000-->\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":26}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000<!--\u0000\u0000\u0000\u0000\u0000-->\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":26}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":9,"ExpansionArg_array_length":0} start 483.1187 took 46.475s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":9,"ExpansionArg_array_length":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":9}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000</\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":34} start 479.6655 took 51.4901s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000</\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":34}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000</\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":34}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":11,"ExpansionArg_array_element_1_type":0} start 486.7711 took 45.5669s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":11,"ExpansionArg_array_element_1_type":0}
* Error: TypeError: Cannot read property 'charCodeAt' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":11}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000</H\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":21} start 417.333 took 116.2988s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000</H\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":21}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000</H\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":21}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_string":"","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":5,"ExpansionArg_array_length":0} start 483.8549 took 52.9917s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_string":"","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":5,"ExpansionArg_array_length":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_string":"","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":5}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_3":0,"_bound":10,"ExpansionArg_array_element_1_type":0} start 515.8666 took 42.1316s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_3":0,"_bound":10,"ExpansionArg_array_element_1_type":0}
* Error: TypeError: Cannot read property 'charCodeAt' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_3":0,"_bound":10}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000<!--\u0000-->","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":31} start 508.1115 took 50.9697s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000<!--\u0000-->","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":31}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000<!--\u0000-->","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":31}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000</\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":26} start 511.5933 took 48.8894s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000</\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":26}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000</\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":26}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":10,"ExpansionArg_bool":false} start 529.7914 took 31.8391s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":10,"ExpansionArg_bool":false}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":10}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"ExpansionArg_type_3":0,"_bound":9,"ExpansionArg_bool":false} start 516.8544 took 47.1188s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"ExpansionArg_type_3":0,"_bound":9,"ExpansionArg_bool":false}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"ExpansionArg_type_3":0,"_bound":9}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":4,"ExpansionArg_string":"","ExpansionArg_type_3":0,"_bound":7,"ExpansionArg_array_length":0} start 533.0353 took 45.5267s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":4,"ExpansionArg_string":"","ExpansionArg_type_3":0,"_bound":7,"ExpansionArg_array_length":0}
* Error: TypeError: Cannot read property 'charCodeAt' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":4,"ExpansionArg_string":"","ExpansionArg_type_3":0,"_bound":7}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000<!---->\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":34} start 528.9203 took 59.6195s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000<!---->\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":34}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000<!---->\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":34}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":5,"ExpansionArg_array_length":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":6,"ExpansionArg_bool":false} start 558.5502 took 31.6642s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":5,"ExpansionArg_array_length":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":6,"ExpansionArg_bool":false}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":5,"ExpansionArg_array_length":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":6}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000</N\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":15} start 251.4777 took 342.9705s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000</N\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":15}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000</N\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":15}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000</p\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":18} start 256.7354 took 339.0616s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000</p\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":18}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000</p\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":18}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":2,"ExpansionArg_string":"","ExpansionArg_type_3":0,"_bound":7,"ExpansionArg_int_2":0} start 560.9136 took 35.8464s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":2,"ExpansionArg_string":"","ExpansionArg_type_3":0,"_bound":7,"ExpansionArg_int_2":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":2,"ExpansionArg_string":"","ExpansionArg_type_3":0,"_bound":7}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000<!--\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":36} start 561.8169 took 48.103s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000<!--\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":36}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000<!--\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":36}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":1,"ExpansionArg_string":"","_bound":7} start 564.4789 took 46.5613s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":1,"ExpansionArg_string":"","_bound":7}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":1,"ExpansionArg_string":"","_bound":7}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000<!--\u0000\u0000-->\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":20} start 559.5688 took 55.0617s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000<!--\u0000\u0000-->\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":20}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000<!--\u0000\u0000-->\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":20}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000</z ","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":23} start 534.1571 took 83.6526s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000</z ","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":23}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000</z ","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":23}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000<!--\u0000\u0000-->","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":32} start 590.5257 took 33.2812s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000<!--\u0000\u0000-->","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":32}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000<!--\u0000\u0000-->","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":32}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":38} start 578.9731 took 48.6071s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":38}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":38}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000</S\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":24} start 458.0813 took 178.5529s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000</S\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":24}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000</S\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":24}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000<!--","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":38} start 611.5733 took 32.4613s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000<!--","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":38}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000<!--","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":38}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000<!--\u0000\u0000\u0000-->\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":22} start 588.9287 took 55.8794s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000<!--\u0000\u0000\u0000-->\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":22}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000<!--\u0000\u0000\u0000-->\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":22}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":13,"ExpansionArg_array_element_1_type":0} start 615.0112 took 32.0314s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":13,"ExpansionArg_array_element_1_type":0}
* Error: TypeError: Cannot read property 'charCodeAt' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":13}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000</z6\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":22} start 537.491 took 118.6788s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000</z6\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":22}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000</z6\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":22}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000</4\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":36} start 531.5625 took 126.4333s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000</4\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":36}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000</4\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":36}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000</","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":23} start 624.1143 took 49.5441s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000</","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":23}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000</","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":23}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000</\u0000\u0000<!--\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":27} start 627.8485 took 55.3011s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000</\u0000\u0000<!--\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":27}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000</\u0000\u0000<!--\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":27}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000</</\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":22} start 645.1216 took 56.5595s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000</</\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":22}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000</</\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":22}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000<!---->\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":37} start 647.3858 took 56.561s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000<!---->\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":37}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000<!---->\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":37}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000</m\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":27} start 369.2219 took 335.8021s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000</m\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":27}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000</m\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":27}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000</p \u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":20} start 596.388 took 128.469s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000</p \u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":20}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000</p \u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":20}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000</\u0000\u0000<!--","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":29} start 701.9467 took 41.8784s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000</\u0000\u0000<!--","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":29}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000</\u0000\u0000<!--","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":29}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000\u0000</3\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":33} start 433.0225 took 318.8233s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000\u0000</3\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":33}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000\u0000</3\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":33}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000</3K\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":25} start 644.5 took 123.0936s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000</3K\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":25}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000</3K\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":25}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000</z\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":30} start 443.803 took 324.9503s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000</z\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":30}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000</z\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":30}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000</CS ","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":24} start 656.5138 took 141.7107s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000</CS ","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":24}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000</CS ","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":24}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000</CS0","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":23} start 658.3151 took 143.4729s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000</CS0","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":23}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000</CS0","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":23}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000</3 \u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":29} start 705.3828 took 100.1468s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000</3 \u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":29}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000</3 \u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":29}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000</pK\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":19} start 597.214 took 210.8465s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000</pK\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":19}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000</pK\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":19}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000</l ","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":38} start 673.8835 took 139.2196s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000</l ","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":38}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000</l ","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":38}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000</z f","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":24} start 618.3587 took 196.1945s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000</z f","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":24}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000</z f","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":24}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000</l-","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":37} start 683.4389 took 138.397s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000</l-","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":37}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000</l-","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":37}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000</3 \u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":17} start 610.0848 took 212.4894s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000</3 \u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":17}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000</3 \u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":17}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000<!---->","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":36} start 813.4065 took 23.1163s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000<!---->","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":36}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000<!---->","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":36}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000</3 n","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":21} start 725.5151 took 111.7249s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000</3 n","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":21}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000</3 n","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":21}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000</4J ","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":27} start 768.0214 took 71.7639s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000</4J ","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":27}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000</4J ","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":27}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000</3 \u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":26} start 637.0664 took 203.6984s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000</3 \u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":26}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000</3 \u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":26}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":4,"ExpansionArg_type_3":0,"_bound":6,"ExpansionArg_array_length":0} start 814.7533 took 33.2368s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":4,"ExpansionArg_type_3":0,"_bound":6,"ExpansionArg_array_length":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":4,"ExpansionArg_type_3":0,"_bound":6}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000<!--\u0000\u0000\u0000-->","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":36} start 822.0058 took 26.9185s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000<!--\u0000\u0000\u0000-->","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":36}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000<!--\u0000\u0000\u0000-->","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":36}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000<!--\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":27} start 798.4468 took 56.4288s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000<!--\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":27}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000<!--\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":27}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000</3z\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":16} start 595.0061 took 260.2985s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000</3z\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":16}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000</3z\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":16}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000<!--\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":39} start 822.9949 took 34.7637s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000<!--\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":39}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000<!--\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":39}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000</3s2","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":20} start 808.2139 took 58.3869s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000</3s2","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":20}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000</3s2","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":20}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000</\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":29} start 837.5494 took 30.0177s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000</\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":29}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000</\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":29}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000</\u0000\u0000<!---->\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":28} start 840.2617 took 28.8553s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000</\u0000\u0000<!---->\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":28}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000</\u0000\u0000<!---->\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":28}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":2,"ExpansionArg_array_length":0,"ExpansionArg_type_3":0,"_bound":8,"ExpansionArg_int":0} start 849.154 took 25.6214s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":2,"ExpansionArg_array_length":0,"ExpansionArg_type_3":0,"_bound":8,"ExpansionArg_int":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":2,"ExpansionArg_array_length":0,"ExpansionArg_type_3":0,"_bound":8}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":1,"ExpansionArg_array_length":0,"ExpansionArg_type_3":0,"_bound":7} start 855.8591 took 19.8584s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":1,"ExpansionArg_array_length":0,"ExpansionArg_type_3":0,"_bound":7}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":1,"ExpansionArg_array_length":0,"ExpansionArg_type_3":0,"_bound":7}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"ExpansionArg_type_3":0,"_bound":10,"ExpansionArg_bool":false} start 848.2745 took 33.9934s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"ExpansionArg_type_3":0,"_bound":10,"ExpansionArg_bool":false}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"ExpansionArg_type_3":0,"_bound":10}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000</4J0","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":26} start 805.7056 took 77.4338s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000</4J0","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":26}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000</4J0","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":26}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000</\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":37} start 840.8964 took 44.4962s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000</\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":37}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000</\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":37}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000<!--\u0000\u0000\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":31} start 836.7935 took 50.159s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000<!--\u0000\u0000\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":31}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000\u0000\u0000\u0000\u0000\u0000<!--\u0000\u0000\u0000\u0000\u0000","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":31}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":3,"ExpansionArg_array_length":0,"ExpansionArg_type_3":0,"_bound":9,"ExpansionArg_string_2":"PureString"} start 855.0347 took 34.3419s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":3,"ExpansionArg_array_length":0,"ExpansionArg_type_3":0,"_bound":9,"ExpansionArg_string_2":"PureString"}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":3,"ExpansionArg_array_length":0,"ExpansionArg_type_3":0,"_bound":9}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":4,"_bound":7,"ExpansionArg_array_length":0} start 858.3333 took 34.2583s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":4,"_bound":7,"ExpansionArg_array_length":0}
* Error: TypeError: Cannot read property 'charCodeAt' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":4,"_bound":7}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 81% Coverage (LOC): 86%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 38% Coverage (LOC): 56%
*- File /root/Targets/tornado.js/node_modules/tornado.js/tornado.js. Coverage (Term): 89% Coverage (LOC): 100%
*- File /root/Targets/tornado.js/node_modules/tornado.js/dist/parser.js. Coverage (Term): 25% Coverage (LOC): 26%
*- File /root/Targets/tornado.js/node_modules/tornado.js/dist/compiler.js. Coverage (Term): 79% Coverage (LOC): 85%
*- File /root/Targets/tornado.js/node_modules/tornado.js/dist/compiler/context.js. Coverage (Term): 29% Coverage (LOC): 34%
*- File /root/Targets/tornado.js/node_modules/tornado.js/dist/compiler/passes/escapableRaw.js. Coverage (Term): 65% Coverage (LOC): 72%
*- File /root/Targets/tornado.js/node_modules/tornado.js/dist/compiler/utils/builder.js. Coverage (Term): 64% Coverage (LOC): 83%
*- File /root/Targets/tornado.js/node_modules/tornado.js/dist/compiler/visitor.js. Coverage (Term): 40% Coverage (LOC): 33%
*- File /root/Targets/tornado.js/node_modules/tornado.js/dist/compiler/passes/htmlEntities.js. Coverage (Term): 48% Coverage (LOC): 48%
*- File /root/Targets/tornado.js/node_modules/tornado.js/dist/compiler/utils/namedHTMLEntities.js. Coverage (Term): 100% Coverage (LOC): 100%
*- File /root/Targets/tornado.js/node_modules/tornado.js/dist/compiler/utils/hexDecHTMLEntities.js. Coverage (Term): 100% Coverage (LOC): 100%
*- File /root/Targets/tornado.js/node_modules/tornado.js/dist/compiler/passes/adjustAttrs.js. Coverage (Term): 66% Coverage (LOC): 89%
*- File /root/Targets/tornado.js/node_modules/tornado.js/dist/compiler/passes/buildInstructions.js. Coverage (Term): 26% Coverage (LOC): 38%
*- File /root/Targets/tornado.js/node_modules/tornado.js/dist/compiler/utils/Instruction.js. Coverage (Term): 8% Coverage (LOC): 8%
*- File /root/Targets/tornado.js/node_modules/tornado.js/dist/compiler/passes/generateJS.js. Coverage (Term): 5% Coverage (LOC): 13%
*- File /root/Targets/tornado.js/node_modules/tornado.js/dist/compiler/codeGenerator.js. Coverage (Term): 33% Coverage (LOC): 43%
*- File /root/Targets/tornado.js/node_modules/tornado.js/dist/compiler/passes/postprocess.js. Coverage (Term): 47% Coverage (LOC): 64%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 182 paths with 181 errors **