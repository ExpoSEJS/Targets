/root/Targets/validator.tool
└── validator.tool@1.0.8 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/validator.tool/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000

*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","toString","apply","bound ","toUpperCase","bound warn"]
*-- regex: 49
*-- Stat Module Done --*
*-- Test Case {"_bound":0,"Switcher":false,"Target_Switch_Base":0} start 0.0436 took 6.7587s
*-- Test Case {"Switcher":true,"Target_Switch_Base":0,"_bound":1,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0} start 6.9021 took 6.7676s
*-- Errors occured in test {"Switcher":true,"Target_Switch_Base":0,"_bound":1,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0}
* Error: ReferenceError: document is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"Target_Switch_Base":0,"_bound":1}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":0,"_bound":3} start 13.7134 took 3.7814s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":0,"_bound":3}
* Error: ReferenceError: document is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":0,"_bound":3}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":2,"Target_Switcher":0,"ExpansionArg_type_4":0} start 13.7006 took 5.3783s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":2,"Target_Switcher":0,"ExpansionArg_type_4":0}
* Error: TypeError: Cannot read property 'value' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":2}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":1,"_bound":4} start 13.7488 took 7.4004s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":1,"_bound":4}
* Error: ReferenceError: document is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":1,"_bound":4}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":2,"_bound":5,"ExpansionArg_int":0} start 17.5318 took 6.7281s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":2,"_bound":5,"ExpansionArg_int":0}
* Error: ReferenceError: document is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":2,"_bound":5}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_type_3":0,"_bound":4,"ExpansionArg_int":0} start 17.5186 took 6.9883s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_type_3":0,"_bound":4,"ExpansionArg_int":0}
* Error: ReferenceError: document is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_type_3":0,"_bound":4}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_type_3":0,"Target_Switcher":0,"ExpansionArg_type_4":0,"_bound":4,"ExpansionArg_int":0} start 19.1569 took 5.5625s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_type_3":0,"Target_Switcher":0,"ExpansionArg_type_4":0,"_bound":4,"ExpansionArg_int":0}
* Error: TypeError: Cannot read property 'value' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_type_3":0,"Target_Switcher":0,"ExpansionArg_type_4":0,"_bound":4}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"Target_Switcher":0,"ExpansionArg_type_4":0,"_bound":5,"ExpansionArg_int":0} start 19.129 took 6.0919s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"Target_Switcher":0,"ExpansionArg_type_4":0,"_bound":5,"ExpansionArg_int":0}
* Error: TypeError: Cannot read property 'value' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"Target_Switcher":0,"ExpansionArg_type_4":0,"_bound":5}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"Target_Switcher":2,"ExpansionArg_type_4":0,"_bound":6} start 19.1885 took 8.2576s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"Target_Switcher":2,"ExpansionArg_type_4":0,"_bound":6}
* Error: TypeError: Cannot read property 'value' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"Target_Switcher":2,"ExpansionArg_type_4":0,"_bound":6}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"Target_Switcher":0,"ExpansionArg_type_4":0,"_bound":3,"ExpansionArg_int":0} start 19.1155 took 8.6722s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"Target_Switcher":0,"ExpansionArg_type_4":0,"_bound":3,"ExpansionArg_int":0}
* Error: ReferenceError: document is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"Target_Switcher":0,"ExpansionArg_type_4":0,"_bound":3}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"Target_Switcher":0,"ExpansionArg_type_4":2,"_bound":7,"ExpansionArg_int":0,"ExpandedSwitcher":0} start 19.2018 took 9.3102s
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":3,"ExpansionArg_int":0,"_bound":7,"ExpansionArg_string":"PureString"} start 24.287 took 4.3399s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":3,"ExpansionArg_int":0,"_bound":7,"ExpansionArg_string":"PureString"}
* Error: ReferenceError: document is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":3,"ExpansionArg_int":0,"_bound":7}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"ExpansionArg_int":0,"ExpansionArg_type_3":0,"_bound":5,"ExpansionArg_string":"PureString"} start 24.5327 took 4.4035s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"ExpansionArg_int":0,"ExpansionArg_type_3":0,"_bound":5,"ExpansionArg_string":"PureString"}
* Error: ReferenceError: document is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"ExpansionArg_int":0,"ExpansionArg_type_3":0,"_bound":5}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"_bound":5,"ExpansionArg_int":0} start 21.185 took 8.6194s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"_bound":5,"ExpansionArg_int":0}
* Error: ReferenceError: document is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"_bound":5}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":2,"ExpansionArg_int":3,"_bound":8} start 24.2691 took 6.4287s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":2,"ExpansionArg_int":3,"_bound":8}
* Error: ReferenceError: document is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":2,"ExpansionArg_int":3,"_bound":8}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_4":0,"_bound":7,"ExpansionArg_string":"PureString"} start 25.2976 took 5.682s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_4":0,"_bound":7,"ExpansionArg_string":"PureString"}
* Error: TypeError: Cannot read property 'value' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_4":0,"_bound":7}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":3,"_bound":6,"ExpansionArg_string":"PureString"} start 24.5492 took 6.4942s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":3,"_bound":6,"ExpansionArg_string":"PureString"}
* Error: ReferenceError: document is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":3,"_bound":6}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":1,"ExpansionArg_int":0,"ExpansionArg_type_3":0,"Target_Switcher":0,"ExpansionArg_type_4":0,"_bound":5} start 24.7476 took 7.1571s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":1,"ExpansionArg_int":0,"ExpansionArg_type_3":0,"Target_Switcher":0,"ExpansionArg_type_4":0,"_bound":5}
* Error: TypeError: Cannot read property 'value' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":1,"ExpansionArg_int":0,"ExpansionArg_type_3":0,"Target_Switcher":0,"ExpansionArg_type_4":0,"_bound":5}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"ExpansionArg_int":3,"Target_Switcher":0,"ExpansionArg_type_4":0,"_bound":8} start 25.2654 took 6.8106s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"ExpansionArg_int":3,"Target_Switcher":0,"ExpansionArg_type_4":0,"_bound":8}
* Error: TypeError: Cannot read property 'value' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"ExpansionArg_int":3,"Target_Switcher":0,"ExpansionArg_type_4":0,"_bound":8}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":1,"ExpansionArg_int":0,"_bound":6} start 24.3216 took 8.4856s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":1,"ExpansionArg_int":0,"_bound":6}
* Error: ReferenceError: document is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":1,"ExpansionArg_int":0,"_bound":6}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":3,"ExpansionArg_string":"","_bound":9} start 28.9686 took 4.1823s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":3,"ExpansionArg_string":"","_bound":9}
* Error: ReferenceError: document is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":3,"ExpansionArg_string":"","_bound":9}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":3,"Target_Switcher":0,"ExpansionArg_type_4":0,"_bound":7,"ExpansionArg_string":"PureString"} start 24.8209 took 8.5216s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":3,"Target_Switcher":0,"ExpansionArg_type_4":0,"_bound":7,"ExpansionArg_string":"PureString"}
* Error: TypeError: Cannot read property 'value' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":3,"Target_Switcher":0,"ExpansionArg_type_4":0,"_bound":7}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_string":"","ExpansionArg_type_3":0,"_bound":6,"ExpansionArg_array_length":0} start 29.8411 took 4.2657s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_string":"","ExpansionArg_type_3":0,"_bound":6,"ExpansionArg_array_length":0}
* Error: ReferenceError: document is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_string":"","ExpansionArg_type_3":0,"_bound":6}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"ExpansionArg_int":3,"_bound":7} start 31.0025 took 3.2093s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"ExpansionArg_int":3,"_bound":7}
* Error: ReferenceError: document is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"ExpansionArg_int":3,"_bound":7}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":0,"Target_Switcher":3,"ExpansionArg_type_4":0,"_bound":8} start 24.7289 took 9.6094s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":0,"Target_Switcher":3,"ExpansionArg_type_4":0,"_bound":8}
* Error: TypeError: Cannot read property 'value' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":0,"Target_Switcher":3,"ExpansionArg_type_4":0,"_bound":8}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"ExpansionArg_int":0,"Target_Switcher":3,"ExpansionArg_type_4":0,"_bound":9} start 28.5927 took 6.0718s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"ExpansionArg_int":0,"Target_Switcher":3,"ExpansionArg_type_4":0,"_bound":9}
* Error: TypeError: Cannot read property 'value' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"ExpansionArg_int":0,"Target_Switcher":3,"ExpansionArg_type_4":0,"_bound":9}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_int":0,"_bound":6,"ExpansionArg_string":"PureString"} start 30.7986 took 4.2362s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_int":0,"_bound":6,"ExpansionArg_string":"PureString"}
* Error: ReferenceError: document is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_int":0,"_bound":6}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":3,"ExpansionArg_int":0,"ExpansionArg_type_3":0,"Target_Switcher":0,"ExpansionArg_type_4":0,"_bound":6,"ExpansionArg_string":"PureString"} start 24.7753 took 10.2953s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":3,"ExpansionArg_int":0,"ExpansionArg_type_3":0,"Target_Switcher":0,"ExpansionArg_type_4":0,"_bound":6,"ExpansionArg_string":"PureString"}
* Error: TypeError: Cannot read property 'value' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":3,"ExpansionArg_int":0,"ExpansionArg_type_3":0,"Target_Switcher":0,"ExpansionArg_type_4":0,"_bound":6}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"Target_Switcher":3,"ExpansionArg_type_4":0,"_bound":8} start 27.4549 took 8.2487s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"Target_Switcher":3,"ExpansionArg_type_4":0,"_bound":8}
* Error: TypeError: Cannot read property 'value' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"Target_Switcher":3,"ExpansionArg_type_4":0,"_bound":8}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":0,"Target_Switcher":0,"ExpansionArg_type_4":3,"_bound":9,"ExpansionArg_string":"PureString","ExpandedSwitcher":0} start 24.7913 took 11.0257s
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":8,"ExpansionArg_array_length":0} start 28.7155 took 7.6236s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":8,"ExpansionArg_array_length":0}
* Error: ReferenceError: document is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":8}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":4,"ExpansionArg_string":"PureString"} start 27.853 took 8.7653s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":4,"ExpansionArg_string":"PureString"}
* Error: ReferenceError: document is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":4}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":2,"ExpansionArg_string":"","_bound":8,"ExpansionArg_int_2":0} start 31.9439 took 5.5883s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":2,"ExpansionArg_string":"","_bound":8,"ExpansionArg_int_2":0}
* Error: ReferenceError: document is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":2,"ExpansionArg_string":"","_bound":8}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_4":0,"_bound":8,"ExpansionArg_array_length":0} start 32.0887 took 5.6828s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_4":0,"_bound":8,"ExpansionArg_array_length":0}
* Error: TypeError: Cannot read property 'value' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_4":0,"_bound":8}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":9,"ExpansionArg_array_length":0} start 31.0865 took 8.1675s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":9,"ExpansionArg_array_length":0}
* Error: ReferenceError: document is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":9}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_4":0,"_bound":11} start 33.3639 took 5.9293s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_4":0,"_bound":11}
* Error: TypeError: Cannot read property 'value' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_4":0,"_bound":11}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":1,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_4":0,"_bound":8} start 34.3493 took 4.9716s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":1,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_4":0,"_bound":8}
* Error: TypeError: Cannot read property 'value' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":1,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_4":0,"_bound":8}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_4":0,"_bound":9} start 35.719 took 4.2066s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_4":0,"_bound":9}
* Error: TypeError: Cannot read property 'value' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_4":0,"_bound":9}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"","_bound":10} start 32.8498 took 7.2926s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"","_bound":10}
* Error: ReferenceError: document is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"","_bound":10}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_4":0,"_bound":10,"ExpansionArg_array_length":0} start 35.0789 took 5.2458s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_4":0,"_bound":10,"ExpansionArg_array_length":0}
* Error: TypeError: Cannot read property 'value' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_4":0,"_bound":10}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"Target_Switcher":0,"ExpansionArg_type_4":3,"ExpansionArg_int":0,"ExpandedSwitcher":0,"_bound":9,"ExpansionArg_string":"PureString"} start 34.7011 took 5.8553s
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"ExpansionArg_type_3":0,"_bound":7,"ExpansionArg_bool":false} start 34.1608 took 6.7733s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"ExpansionArg_type_3":0,"_bound":7,"ExpansionArg_bool":false}
* Error: ReferenceError: document is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"ExpansionArg_type_3":0,"_bound":7}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":1,"ExpansionArg_string":"","_bound":7} start 35.861 took 5.2834s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":1,"ExpansionArg_string":"","_bound":7}
* Error: ReferenceError: document is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":1,"ExpansionArg_string":"","_bound":7}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"Target_Switcher":1,"ExpansionArg_type_4":0,"_bound":7} start 33.2128 took 8.2418s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"Target_Switcher":1,"ExpansionArg_type_4":0,"_bound":7}
* Error: TypeError: Cannot read property 'value' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"Target_Switcher":1,"ExpansionArg_type_4":0,"_bound":7}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"","_bound":8} start 35.0669 took 7.4358s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"","_bound":8}
* Error: ReferenceError: document is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"","_bound":8}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"_bound":11,"ExpansionArg_array_element_0_type":0} start 39.2759 took 3.3742s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"_bound":11,"ExpansionArg_array_element_0_type":0}
* Error: ReferenceError: document is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"_bound":11}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"_bound":10,"ExpansionArg_array_element_0_type":0} start 36.6546 took 6.4088s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"_bound":10,"ExpansionArg_array_element_0_type":0}
* Error: ReferenceError: document is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"_bound":10}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":1,"ExpansionArg_type_3":0,"Target_Switcher":2,"ExpansionArg_type_4":0,"_bound":7} start 37.5614 took 5.5507s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":1,"ExpansionArg_type_3":0,"Target_Switcher":2,"ExpansionArg_type_4":0,"_bound":7}
* Error: TypeError: Cannot read property 'value' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":1,"ExpansionArg_type_3":0,"Target_Switcher":2,"ExpansionArg_type_4":0,"_bound":7}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_type_3":0,"_bound":8,"ExpansionArg_array_element_0_type":0} start 34.2293 took 9.2977s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_type_3":0,"_bound":8,"ExpansionArg_array_element_0_type":0}
* Error: ReferenceError: document is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_type_3":0,"_bound":8}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"Target_Switcher":0,"ExpansionArg_type_4":0,"_bound":9,"ExpansionArg_bool":false} start 37.8131 took 5.7789s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"Target_Switcher":0,"ExpansionArg_type_4":0,"_bound":9,"ExpansionArg_bool":false}
* Error: TypeError: Cannot read property 'value' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"Target_Switcher":0,"ExpansionArg_type_4":0,"_bound":9}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":9,"ExpansionArg_bool":false} start 36.363 took 8.019s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":9,"ExpansionArg_bool":false}
* Error: ReferenceError: document is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":9}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"Target_Switcher":0,"ExpansionArg_type_4":0,"_bound":12,"ExpansionArg_array_element_0_type":0} start 40.9474 took 4.1599s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"Target_Switcher":0,"ExpansionArg_type_4":0,"_bound":12,"ExpansionArg_array_element_0_type":0}
* Error: TypeError: Cannot read property 'value' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"Target_Switcher":0,"ExpansionArg_type_4":0,"_bound":12}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"Target_Switcher":0,"ExpansionArg_type_4":0,"_bound":11,"ExpansionArg_bool":false} start 40.3575 took 4.9586s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"Target_Switcher":0,"ExpansionArg_type_4":0,"_bound":11,"ExpansionArg_bool":false}
* Error: TypeError: Cannot read property 'value' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"Target_Switcher":0,"ExpansionArg_type_4":0,"_bound":11}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"Target_Switcher":0,"ExpansionArg_type_4":0,"_bound":10,"ExpansionArg_array_element_0_type":0} start 39.3184 took 6.309s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"Target_Switcher":0,"ExpansionArg_type_4":0,"_bound":10,"ExpansionArg_array_element_0_type":0}
* Error: TypeError: Cannot read property 'value' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"Target_Switcher":0,"ExpansionArg_type_4":0,"_bound":10}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"Target_Switcher":0,"ExpansionArg_type_4":1,"ExpansionArg_int":0,"ExpandedSwitcher":0,"_bound":8} start 41.1855 took 4.5051s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"Target_Switcher":0,"ExpansionArg_type_4":1,"ExpansionArg_int":0,"ExpandedSwitcher":0,"_bound":8}
* Error: TypeError: Cannot read property 'value' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"Target_Switcher":0,"ExpansionArg_type_4":1,"ExpansionArg_int":0,"ExpandedSwitcher":0,"_bound":8}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":0,"Target_Switcher":0,"ExpansionArg_type_4":1,"ExpansionArg_string":"","ExpandedSwitcher":0,"_bound":10} start 41.4696 took 4.251s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":0,"Target_Switcher":0,"ExpansionArg_type_4":1,"ExpansionArg_string":"","ExpandedSwitcher":0,"_bound":10}
* Error: TypeError: Cannot read property 'value' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":0,"Target_Switcher":0,"ExpansionArg_type_4":1,"ExpansionArg_string":"","ExpandedSwitcher":0,"_bound":10}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":10,"ExpansionArg_bool":false} start 39.3411 took 6.3795s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":10,"ExpansionArg_bool":false}
* Error: ReferenceError: document is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":10}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":0,"Target_Switcher":0,"ExpansionArg_type_4":4,"ExpansionArg_string":"","ExpandedSwitcher":0,"_bound":12,"ExpansionArg_array_length":0} start 40.1749 took 5.9629s
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":4,"ExpansionArg_string":"","ExpansionArg_type_3":0,"Target_Switcher":0,"ExpansionArg_type_4":0,"_bound":7,"ExpansionArg_array_length":0} start 40.5696 took 6.9374s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":4,"ExpansionArg_string":"","ExpansionArg_type_3":0,"Target_Switcher":0,"ExpansionArg_type_4":0,"_bound":7,"ExpansionArg_array_length":0}
* Error: TypeError: Cannot read property 'value' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":4,"ExpansionArg_string":"","ExpansionArg_type_3":0,"Target_Switcher":0,"ExpansionArg_type_4":0,"_bound":7}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_3":0,"_bound":10,"ExpansionArg_array_element_1_type":0} start 43.5472 took 4.8759s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_3":0,"_bound":10,"ExpansionArg_array_element_1_type":0}
* Error: ReferenceError: document is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_3":0,"_bound":10}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":0,"Target_Switcher":4,"ExpansionArg_type_4":0,"_bound":11} start 45.847 took 3.5177s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":0,"Target_Switcher":4,"ExpansionArg_type_4":0,"_bound":11}
* Error: TypeError: Cannot read property 'value' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":0,"Target_Switcher":4,"ExpansionArg_type_4":0,"_bound":11}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":1,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_4":0,"_bound":6} start 39.9581 took 9.7813s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":1,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_4":0,"_bound":6}
* Error: TypeError: Cannot read property 'value' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":1,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_4":0,"_bound":6}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":0,"Target_Switcher":1,"ExpansionArg_type_4":0,"_bound":9} start 42.6654 took 7.1537s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":0,"Target_Switcher":1,"ExpansionArg_type_4":0,"_bound":9}
* Error: TypeError: Cannot read property 'value' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":0,"Target_Switcher":1,"ExpansionArg_type_4":0,"_bound":9}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":12,"ExpansionArg_array_element_1_type":0} start 43.0961 took 6.9668s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":12,"ExpansionArg_array_element_1_type":0}
* Error: ReferenceError: document is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":12}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"!0!","Target_Switcher":4,"ExpansionArg_type_4":0,"_bound":10} start 44.4138 took 5.8603s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"!0!","Target_Switcher":4,"ExpansionArg_type_4":0,"_bound":10}
* Error: TypeError: Cannot read property 'value' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"!0!","Target_Switcher":4,"ExpansionArg_type_4":0,"_bound":10}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":13,"ExpansionArg_array_element_1_type":0} start 43.1435 took 7.2659s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":13,"ExpansionArg_array_element_1_type":0}
* Error: ReferenceError: document is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":13}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":7,"ExpansionArg_array_length":0} start 43.6175 took 7.7987s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":7,"ExpansionArg_array_length":0}
* Error: ReferenceError: document is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":7}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_4":3,"_bound":10,"ExpansionArg_string":"PureString","ExpandedSwitcher":0} start 45.8253 took 5.7055s
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"Target_Switcher":0,"ExpansionArg_type_4":0,"_bound":14,"ExpansionArg_array_element_1_type":0} start 45.3479 took 6.2314s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"Target_Switcher":0,"ExpansionArg_type_4":0,"_bound":14,"ExpansionArg_array_element_1_type":0}
* Error: TypeError: Cannot read property 'value' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"Target_Switcher":0,"ExpansionArg_type_4":0,"_bound":14}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":0,"Target_Switcher":0,"ExpansionArg_type_4":5,"ExpansionArg_array_length":0,"ExpandedSwitcher":0,"_bound":13,"ExpansionArg_bool":false} start 46.1735 took 5.7265s
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"!0!","Target_Switcher":4,"ExpansionArg_type_4":0,"_bound":12} start 42.5413 took 9.7984s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"!0!","Target_Switcher":4,"ExpansionArg_type_4":0,"_bound":12}