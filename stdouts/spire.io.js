/root/Targets/spire.io.js
└─┬ spire.io.js@1.2.8 
  ├── async@0.1.15 
  ├─┬ shred@0.8.10 
  │ ├── ax@0.1.8 
  │ ├── cookiejar@1.3.1 
  │ ├── iconv-lite@0.4.19 
  │ └── sprintf@0.1.1 
  └── underscore@1.3.1 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/spire.io.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000

*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","call","sort","Error","defineProperties","create","getOwnPropertyDescriptor","toString","apply","bound Spire","bound "]
*-- Stat Module Done --*
*-- Test Case {"_bound":0,"Switcher":false,"Target_Switch_Base":0} start 0.0379 took 17.8641s
*-- Test Case {"Switcher":true,"Target_Switch_Base":0,"_bound":1,"ExpansionArg_type":0,"Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0} start 18.1579 took 15.8511s
*-- Errors occured in test {"Switcher":true,"Target_Switch_Base":0,"_bound":1,"ExpansionArg_type":0,"Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0}
* Error: TypeError: Cannot read property 'createSession' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"Target_Switch_Base":0,"_bound":1}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":0,"_bound":4} start 34.2301 took 16.1474s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":0,"_bound":4}
* Error: TypeError: Cannot read property 'createSession' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":0,"_bound":4}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":2} start 34.1972 took 16.4998s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":2}
* Error: TypeError: Cannot read property 'createSession' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":2}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":1,"_bound":5} start 34.2931 took 16.404s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":1,"_bound":5}
* Error: TypeError: Cannot read property 'createSession' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":1,"_bound":5}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":3,"ExpansionArg_type_4":0} start 34.1454 took 17.1304s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":3,"ExpansionArg_type_4":0}
* Error: TypeError: Cannot read property 'login' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":3}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":3,"ExpansionArg_int":0} start 50.8164 took 16.399s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":3,"ExpansionArg_int":0}
* Error: TypeError: Cannot read property 'createSession' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":3}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"_bound":6,"ExpansionArg_int":0} start 50.9762 took 16.7713s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"_bound":6,"ExpansionArg_int":0}
* Error: TypeError: Cannot read property 'createSession' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"_bound":6}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":2,"_bound":6,"ExpansionArg_int":0} start 50.6517 took 17.0961s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":2,"_bound":6,"ExpansionArg_int":0}
* Error: TypeError: Cannot read property 'createSession' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":2,"_bound":6}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":0,"ExpansionArg_type_2":2,"ExpansionArg_type_3":0,"_bound":5,"ExpansionArg_int":0} start 50.9418 took 17.2869s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":0,"ExpansionArg_type_2":2,"ExpansionArg_type_3":0,"_bound":5,"ExpansionArg_int":0}
* Error: TypeError: Cannot read property 'createSession' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":0,"ExpansionArg_type_2":2,"ExpansionArg_type_3":0,"_bound":5}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"ExpansionArg_type_4":0,"_bound":6,"ExpansionArg_int":0} start 51.4581 took 17.5705s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"ExpansionArg_type_4":0,"_bound":6,"ExpansionArg_int":0}
* Error: TypeError: Cannot read property 'login' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"ExpansionArg_type_4":0,"_bound":6}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":2,"ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"_bound":5,"ExpansionArg_int":0} start 51.5794 took 18.2559s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":2,"ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"_bound":5,"ExpansionArg_int":0}
* Error: TypeError: Cannot read property 'login' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":2,"ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"_bound":5}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"_bound":6,"ExpansionArg_int":0} start 51.2299 took 18.8083s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"_bound":6,"ExpansionArg_int":0}
* Error: TypeError: Cannot read property 'createSession' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"_bound":6}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":2,"_bound":7,"ExpansionArg_int":0} start 51.5064 took 19.7857s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":2,"_bound":7,"ExpansionArg_int":0}
* Error: TypeError: Cannot read property 'login' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":2,"_bound":7}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":4} start 50.8938 took 21.0062s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":4}
* Error: TypeError: Cannot read property 'getApplication' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":4}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"_bound":4} start 51.3783 took 20.8756s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"_bound":4}
* Error: TypeError: Cannot read property 'getApplication' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"_bound":4}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":0,"ExpansionArg_type_2":2,"ExpansionArg_type_3":0,"_bound":5,"ExpansionArg_int":0} start 50.5852 took 22.8905s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":0,"ExpansionArg_type_2":2,"ExpansionArg_type_3":0,"_bound":5,"ExpansionArg_int":0}
* Error: TypeError: Cannot read property 'createSession' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":0,"ExpansionArg_type_2":2,"ExpansionArg_type_3":0,"_bound":5}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":0,"ExpansionArg_type_2":1,"ExpansionArg_int":0,"ExpansionArg_type_3":0,"_bound":6} start 69.1348 took 14.6304s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":0,"ExpansionArg_type_2":1,"ExpansionArg_int":0,"ExpansionArg_type_3":0,"_bound":6}
* Error: TypeError: Cannot read property 'createSession' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":0,"ExpansionArg_type_2":1,"ExpansionArg_int":0,"ExpansionArg_type_3":0,"_bound":6}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":3,"Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":5} start 67.3801 took 17.4675s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":3,"Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":5}
* Error: TypeError: Cannot read property 'createSession' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":3,"Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":5}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":3,"ExpansionArg_int":0,"_bound":8,"ExpansionArg_string":"PureString"} start 68.1435 took 16.865s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":3,"ExpansionArg_int":0,"_bound":8,"ExpansionArg_string":"PureString"}
* Error: TypeError: Cannot read property 'createSession' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":3,"ExpansionArg_int":0,"_bound":8}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"_bound":8,"ExpansionArg_string":"PureString"} start 67.5291 took 18.9164s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"_bound":8,"ExpansionArg_string":"PureString"}
* Error: TypeError: Cannot read property 'createSession' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"_bound":8}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":0,"ExpansionArg_type_2":3,"ExpansionArg_int":0,"ExpansionArg_type_3":0,"_bound":7,"ExpansionArg_string":"PureString"} start 68.3585 took 18.7573s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":0,"ExpansionArg_type_2":3,"ExpansionArg_int":0,"ExpansionArg_type_3":0,"_bound":7,"ExpansionArg_string":"PureString"}
* Error: TypeError: Cannot read property 'createSession' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":0,"ExpansionArg_type_2":3,"ExpansionArg_int":0,"ExpansionArg_type_3":0,"_bound":7}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":4,"ExpansionArg_string":"PureString"} start 67.437 took 19.8883s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":4,"ExpansionArg_string":"PureString"}
* Error: TypeError: Cannot read property 'createSession' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":4}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_2":3,"ExpansionArg_type_3":0,"_bound":7,"ExpansionArg_string":"PureString"} start 67.5662 took 20.938s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_2":3,"ExpansionArg_type_3":0,"_bound":7,"ExpansionArg_string":"PureString"}
* Error: TypeError: Cannot read property 'createSession' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_2":3,"ExpansionArg_type_3":0,"_bound":7}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"Target_Switcher":3,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":6} start 67.4789 took 21.3218s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"Target_Switcher":3,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":6}
* Error: TypeError: Cannot read property 'createAccount' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"Target_Switcher":3,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":6}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":1,"ExpansionArg_int":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"_bound":6} start 70.1613 took 19.374s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":1,"ExpansionArg_int":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"_bound":6}
* Error: TypeError: Cannot read property 'login' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":1,"ExpansionArg_int":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"_bound":6}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_int":0,"_bound":8,"ExpansionArg_string":"PureString"} start 67.8957 took 21.9885s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_int":0,"_bound":8,"ExpansionArg_string":"PureString"}
* Error: TypeError: Cannot read property 'createSession' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_int":0,"_bound":8}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":3,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":6} start 73.6581 took 16.3928s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":3,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":6}
* Error: TypeError: Cannot read property 'createAccount' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":3,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":6}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_int":0,"_bound":7,"ExpansionArg_string":"PureString"} start 71.4082 took 19.3752s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_int":0,"_bound":7,"ExpansionArg_string":"PureString"}
* Error: TypeError: Cannot read property 'createSession' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_int":0,"_bound":7}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":1,"ExpansionArg_int":0,"_bound":7} start 67.9555 took 22.9524s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":1,"ExpansionArg_int":0,"_bound":7}
* Error: TypeError: Cannot read property 'createSession' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":1,"ExpansionArg_int":0,"_bound":7}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":3,"ExpansionArg_int":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"_bound":7,"ExpansionArg_string":"PureString"} start 69.9795 took 21.6321s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":3,"ExpansionArg_int":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"_bound":7,"ExpansionArg_string":"PureString"}
* Error: TypeError: Cannot read property 'login' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":3,"ExpansionArg_int":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"_bound":7}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":5,"ExpansionArg_type_4":0} start 72.0128 took 20.7302s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":5,"ExpansionArg_type_4":0}
* Error: TypeError: Cannot read property 'login' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":5}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":3,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":5} start 72.4107 took 20.714s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":3,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":5}
* Error: TypeError: Cannot read property 'createAccount' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":3,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":5}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":1,"ExpansionArg_int":0,"_bound":7} start 83.9052 took 19.2926s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":1,"ExpansionArg_int":0,"_bound":7}
* Error: TypeError: Cannot read property 'createSession' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":1,"ExpansionArg_int":0,"_bound":7}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":0,"ExpansionArg_type_2":4,"ExpansionArg_string":"","ExpansionArg_type_3":0,"_bound":8,"ExpansionArg_array_length":0} start 87.2575 took 17.7966s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":0,"ExpansionArg_type_2":4,"ExpansionArg_string":"","ExpansionArg_type_3":0,"_bound":8,"ExpansionArg_array_length":0}
* Error: TypeError: Cannot read property 'createSession' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":0,"ExpansionArg_type_2":4,"ExpansionArg_string":"","ExpansionArg_type_3":0,"_bound":8}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":11,"ExpansionArg_array_length":0} start 86.5883 took 18.7612s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":11,"ExpansionArg_array_length":0}
* Error: TypeError: Cannot read property 'createSession' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":11}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":6} start 87.5319 took 18.0761s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":6}
* Error: TypeError: Cannot read property 'createSession' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":6}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_2":4,"ExpansionArg_string":"","ExpansionArg_type_3":0,"_bound":10,"ExpansionArg_array_length":0} start 88.9188 took 16.7921s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_2":4,"ExpansionArg_string":"","ExpansionArg_type_3":0,"_bound":10,"ExpansionArg_array_length":0}
* Error: TypeError: Cannot read property 'createSession' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_2":4,"ExpansionArg_string":"","ExpansionArg_type_3":0,"_bound":10}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"Target_Switcher":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":7,"ExpansionArg_type_4":0} start 89.6231 took 16.2197s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"Target_Switcher":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":7,"ExpansionArg_type_4":0}
* Error: TypeError: Cannot read property 'login' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"Target_Switcher":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":7}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":9,"ExpansionArg_array_length":0} start 85.0975 took 20.7453s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":9,"ExpansionArg_array_length":0}
* Error: TypeError: Cannot read property 'createSession' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":9}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":1,"Target_Switcher":3,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":6} start 84.9279 took 23.5065s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":1,"Target_Switcher":3,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":6}
* Error: TypeError: Cannot read property 'createAccount' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":1,"Target_Switcher":3,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":6}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":9,"ExpansionArg_array_length":0} start 90.1831 took 18.5904s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":9,"ExpansionArg_array_length":0}
* Error: TypeError: Cannot read property 'createSession' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":9}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_int":0,"ExpansionArg_type_4":0,"_bound":8,"ExpansionArg_string":"PureString"} start 89.9912 took 19.0146s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_int":0,"ExpansionArg_type_4":0,"_bound":8,"ExpansionArg_string":"PureString"}
* Error: TypeError: Cannot read property 'login' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_int":0,"ExpansionArg_type_4":0,"_bound":8}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"Target_Switcher":4,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":9} start 91.067 took 18.8895s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"Target_Switcher":4,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":9}
* Error: TypeError: Cannot read property 'passwordResetRequest' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"Target_Switcher":4,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":9}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":5,"ExpansionArg_array_length":0} start 88.6389 took 21.5964s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":5,"ExpansionArg_array_length":0}
* Error: TypeError: Cannot read property 'createSession' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":5}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":1,"ExpansionArg_int":0,"ExpansionArg_type_4":0,"_bound":7} start 91.6942 took 19.6919s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":1,"ExpansionArg_int":0,"ExpansionArg_type_4":0,"_bound":7}
* Error: TypeError: Cannot read property 'login' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":1,"ExpansionArg_int":0,"ExpansionArg_type_4":0,"_bound":7}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":3,"ExpansionArg_int":0,"_bound":9,"ExpansionArg_string":"PureString"} start 93.262 took 18.3613s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":3,"ExpansionArg_int":0,"_bound":9,"ExpansionArg_string":"PureString"}
* Error: TypeError: Cannot read property 'login' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":3,"ExpansionArg_int":0,"_bound":9}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":8,"ExpansionArg_array_length":0} start 90.8566 took 20.9324s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":8,"ExpansionArg_array_length":0}
* Error: TypeError: Cannot read property 'createSession' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":8}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":3,"_bound":8,"ExpansionArg_string":"PureString"} start 92.8259 took 19.16s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":3,"_bound":8,"ExpansionArg_string":"PureString"}
* Error: TypeError: Cannot read property 'createSession' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":3,"_bound":8}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":1,"ExpansionArg_int":0,"_bound":8} start 103.3104 took 18.3775s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":1,"ExpansionArg_int":0,"_bound":8}
* Error: TypeError: Cannot read property 'login' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":1,"ExpansionArg_int":0,"_bound":8}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"_bound":13,"ExpansionArg_array_element_0_type":0} start 105.4144 took 17.1253s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"_bound":13,"ExpansionArg_array_element_0_type":0}
* Error: TypeError: Cannot read property 'createSession' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"_bound":13}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"ExpansionArg_type_3":0,"_bound":9,"ExpansionArg_bool":false} start 105.146 took 17.9379s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"ExpansionArg_type_3":0,"_bound":9,"ExpansionArg_bool":false}
* Error: TypeError: Cannot read property 'createSession' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"ExpansionArg_type_3":0,"_bound":9}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":12,"ExpansionArg_bool":false} start 105.6852 took 18.3907s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":12,"ExpansionArg_bool":false}
* Error: TypeError: Cannot read property 'createSession' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":12}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_type_3":0,"_bound":10,"ExpansionArg_array_element_0_type":0} start 106.0505 took 18.1981s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_type_3":0,"_bound":10,"ExpansionArg_array_element_0_type":0}
* Error: TypeError: Cannot read property 'createSession' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_type_3":0,"_bound":10}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_type_3":0,"_bound":12,"ExpansionArg_array_element_0_type":0} start 105.9242 took 18.7112s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_type_3":0,"_bound":12,"ExpansionArg_array_element_0_type":0}
* Error: TypeError: Cannot read property 'createSession' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_type_3":0,"_bound":12}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":10,"ExpansionArg_bool":false} start 108.5948 took 18.7084s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":10,"ExpansionArg_bool":false}
* Error: TypeError: Cannot read property 'createSession' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":10}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"ExpansionArg_type_3":0,"_bound":11,"ExpansionArg_bool":false} start 105.7953 took 22.0373s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"ExpansionArg_type_3":0,"_bound":11,"ExpansionArg_bool":false}
* Error: TypeError: Cannot read property 'createSession' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"ExpansionArg_type_3":0,"_bound":11}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","ExpansionArg_type_4":0,"_bound":9,"ExpansionArg_array_length":0} start 110.0349 took 19.1624s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","ExpansionArg_type_4":0,"_bound":9,"ExpansionArg_array_length":0}
* Error: TypeError: Cannot read property 'login' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","ExpansionArg_type_4":0,"_bound":9}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"_bound":11,"ExpansionArg_array_element_0_type":0} start 109.1762 took 20.1793s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"_bound":11,"ExpansionArg_array_element_0_type":0}
* Error: TypeError: Cannot read property 'createSession' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"_bound":11}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":10,"ExpansionArg_bool":false} start 108.9118 took 20.7474s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":10,"ExpansionArg_bool":false}
* Error: TypeError: Cannot read property 'createSession' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":10}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":5,"ExpansionArg_array_length":0,"Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":6,"ExpansionArg_bool":false} start 111.4652 took 18.7779s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":5,"ExpansionArg_array_length":0,"Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":6,"ExpansionArg_bool":false}
* Error: TypeError: Cannot read property 'createSession' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":5,"ExpansionArg_array_length":0,"Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":6}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":7,"ExpansionArg_array_element_0_type":0} start 110.3574 took 20.3139s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":7,"ExpansionArg_array_element_0_type":0}
* Error: TypeError: Cannot read property 'createSession' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":7}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":9,"ExpansionArg_bool":false} start 112.1509 took 19.851s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":9,"ExpansionArg_bool":false}
* Error: TypeError: Cannot read property 'createSession' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":9}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"_bound":10,"ExpansionArg_array_element_0_type":0} start 111.9152 took 20.7535s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"_bound":10,"ExpansionArg_array_element_0_type":0}
* Error: TypeError: Cannot read property 'createSession' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"_bound":10}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"_bound":11,"ExpansionArg_array_element_0_type":0} start 111.7347 took 21.2198s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"_bound":11,"ExpansionArg_array_element_0_type":0}
* Error: TypeError: Cannot read property 'createSession' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"_bound":11}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":4,"ExpansionArg_string":"","_bound":10,"ExpansionArg_array_length":0} start 121.8304 took 15.9043s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":4,"ExpansionArg_string":"","_bound":10,"ExpansionArg_array_length":0}