/root/Targets/card.js
└── card.js@0.0.2 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/card.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000

*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","toString","apply","bound ","TypeError","some"]
*-- regex: 16
*-- Stat Module Done --*
*-- Test Case {"_bound":0,"Switcher":false,"Target_Switch_Base":0} start 0.054 took 2.6869s
*-- Test Case {"Switcher":true,"Target_Switch_Base":0,"_bound":1,"ExpansionArg_type":0} start 2.8049 took 2.1953s
*-- Errors occured in test {"Switcher":true,"Target_Switch_Base":0,"_bound":1,"ExpansionArg_type":0}
* Error: TypeError: cardNumber must be a string!
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"Target_Switch_Base":0,"_bound":1}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"_bound":2} start 5.0527 took 2.2689s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"_bound":2}
* Error: TypeError: cardNumber must be a string!
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"_bound":2}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"_bound":3,"ExpansionArg_int":0} start 7.3404 took 2.3669s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"_bound":3,"ExpansionArg_int":0}
* Error: TypeError: cardNumber must be a string!
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"_bound":3}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_int":0,"_bound":4,"ExpansionArg_string":"PureString","Target_Switcher":0} start 9.7334 took 23.329s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_int":0,"_bound":4,"ExpansionArg_string":"PureString","Target_Switcher":0}
* Error: TypeError: Cannot read property 'length' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_int":0,"_bound":4}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_string":"","Target_Switcher":0,"_bound":5,"ExpansionArg_array_length":0} start 33.0774 took 2.5465s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_string":"","Target_Switcher":0,"_bound":5,"ExpansionArg_array_length":0}
* Error: TypeError: cardNumber must be a string!
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_string":"","Target_Switcher":0,"_bound":5}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"_bound":7,"ExpansionArg_array_element_0_type":0} start 35.6452 took 2.3767s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"_bound":7,"ExpansionArg_array_element_0_type":0}
* Error: TypeError: cardNumber must be a string!
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"_bound":7}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":5,"ExpansionArg_array_length":0,"_bound":6,"ExpansionArg_bool":false} start 35.6408 took 2.4453s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":5,"ExpansionArg_array_length":0,"_bound":6,"ExpansionArg_bool":false}
* Error: TypeError: cardNumber must be a string!
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":5,"ExpansionArg_array_length":0,"_bound":6}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":2,"_bound":8,"ExpansionArg_array_element_0_int":0} start 38.037 took 2.841s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":2,"_bound":8,"ExpansionArg_array_element_0_int":0}
* Error: TypeError: cardNumber must be a string!
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":2,"_bound":8}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":9,"ExpansionArg_array_element_1_type":0} start 38.065 took 2.925s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":9,"ExpansionArg_array_element_1_type":0}
* Error: TypeError: cardNumber must be a string!
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":9}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":2,"ExpansionArg_array_element_0_int":0,"_bound":11,"ExpansionArg_array_element_1_type":0} start 40.9074 took 2.8199s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":2,"ExpansionArg_array_element_0_int":0,"_bound":11,"ExpansionArg_array_element_1_type":0}
* Error: TypeError: cardNumber must be a string!
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":2,"ExpansionArg_array_element_0_int":0,"_bound":11}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"_bound":11,"ExpansionArg_array_element_2_type":0} start 41.0416 took 2.9785s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"_bound":11,"ExpansionArg_array_element_2_type":0}
* Error: TypeError: cardNumber must be a string!
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"_bound":11}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":3,"ExpansionArg_array_element_0_int":0,"_bound":10,"ExpansionArg_array_element_0_string":"PureString"} start 40.9361 took 3.1676s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":3,"ExpansionArg_array_element_0_int":0,"_bound":10,"ExpansionArg_array_element_0_string":"PureString"}
* Error: TypeError: cardNumber must be a string!
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":3,"ExpansionArg_array_element_0_int":0,"_bound":10}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_0_int":0,"_bound":9} start 40.9491 took 3.2313s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_0_int":0,"_bound":9}
* Error: TypeError: cardNumber must be a string!
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_0_int":0,"_bound":9}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":1,"_bound":10} start 41.0324 took 3.3397s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":1,"_bound":10}
* Error: TypeError: cardNumber must be a string!
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":1,"_bound":10}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":2,"ExpansionArg_array_element_0_int":0,"ExpansionArg_array_element_1_type":1,"_bound":12} start 43.7496 took 2.3232s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":2,"ExpansionArg_array_element_0_int":0,"ExpansionArg_array_element_1_type":1,"_bound":12}
* Error: TypeError: cardNumber must be a string!
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":2,"ExpansionArg_array_element_0_int":0,"ExpansionArg_array_element_1_type":1,"_bound":12}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":1,"_bound":10,"ExpansionArg_array_element_1_type":0} start 44.201 took 2.3374s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":1,"_bound":10,"ExpansionArg_array_element_1_type":0}
* Error: TypeError: cardNumber must be a string!
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":1,"_bound":10}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":2,"ExpansionArg_array_element_0_int":0,"ExpansionArg_array_element_1_type":0,"_bound":13,"ExpansionArg_array_element_2_type":0} start 43.7567 took 3.2038s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":2,"ExpansionArg_array_element_0_int":0,"ExpansionArg_array_element_1_type":0,"_bound":13,"ExpansionArg_array_element_2_type":0}
* Error: TypeError: cardNumber must be a string!
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":2,"ExpansionArg_array_element_0_int":0,"ExpansionArg_array_element_1_type":0,"_bound":13}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":5,"ExpansionArg_array_element_0_string":"","_bound":11,"ExpansionArg_array_element_0_bool":false} start 44.1459 took 2.8869s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":5,"ExpansionArg_array_element_0_string":"","_bound":11,"ExpansionArg_array_element_0_bool":false}
* Error: TypeError: cardNumber must be a string!
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":5,"ExpansionArg_array_element_0_string":"","_bound":11}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":4,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":0,"_bound":13,"ExpansionArg_array_element_3_type":0} start 44.0364 took 3.0438s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":4,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":0,"_bound":13,"ExpansionArg_array_element_3_type":0}
* Error: TypeError: cardNumber must be a string!
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":4,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":0,"_bound":13}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":3,"ExpansionArg_array_element_0_string":"","_bound":12,"ExpansionArg_array_element_1_type":0} start 44.1767 took 3.0408s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":3,"ExpansionArg_array_element_0_string":"","_bound":12,"ExpansionArg_array_element_1_type":0}
* Error: TypeError: cardNumber must be a string!
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":3,"ExpansionArg_array_element_0_string":"","_bound":12}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":1,"_bound":12} start 44.0528 took 3.2427s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":1,"_bound":12}
* Error: TypeError: cardNumber must be a string!
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":1,"_bound":12}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":1,"_bound":12,"ExpansionArg_array_element_2_type":0} start 44.4169 took 3.041s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":1,"_bound":12,"ExpansionArg_array_element_2_type":0}
* Error: TypeError: cardNumber must be a string!
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":1,"_bound":12}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":3,"_bound":11,"ExpansionArg_array_element_1_string":"PureString"} start 44.3995 took 3.2749s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":3,"_bound":11,"ExpansionArg_array_element_1_string":"PureString"}
* Error: TypeError: cardNumber must be a string!
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":3,"_bound":11}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":2,"ExpansionArg_array_element_0_int":0,"ExpansionArg_array_element_1_type":3,"_bound":13,"ExpansionArg_array_element_1_string":"PureString"} start 46.0969 took 2.6524s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":2,"ExpansionArg_array_element_0_int":0,"ExpansionArg_array_element_1_type":3,"_bound":13,"ExpansionArg_array_element_1_string":"PureString"}
* Error: TypeError: cardNumber must be a string!
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":2,"ExpansionArg_array_element_0_int":0,"ExpansionArg_array_element_1_type":3,"_bound":13}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":2,"ExpansionArg_array_element_0_int":0,"ExpansionArg_array_element_1_type":1,"_bound":14,"ExpansionArg_array_element_2_type":0} start 46.1055 took 2.7912s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":2,"ExpansionArg_array_element_0_int":0,"ExpansionArg_array_element_1_type":1,"_bound":14,"ExpansionArg_array_element_2_type":0}
* Error: TypeError: cardNumber must be a string!
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":2,"ExpansionArg_array_element_0_int":0,"ExpansionArg_array_element_1_type":1,"_bound":14}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_1_type":3,"_bound":11,"ExpansionArg_array_element_1_string":"PureString"} start 46.5616 took 2.7528s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_1_type":3,"_bound":11,"ExpansionArg_array_element_1_string":"PureString"}
* Error: TypeError: cardNumber must be a string!
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_1_type":3,"_bound":11}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_1_type":0,"_bound":12,"ExpansionArg_array_element_2_type":0} start 46.5809 took 2.8266s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_1_type":0,"_bound":12,"ExpansionArg_array_element_2_type":0}
* Error: TypeError: cardNumber must be a string!
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_1_type":0,"_bound":12}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":2,"ExpansionArg_array_element_0_int":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":1,"_bound":14} start 46.977 took 2.8091s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":2,"ExpansionArg_array_element_0_int":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":1,"_bound":14}
* Error: TypeError: cardNumber must be a string!
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":2,"ExpansionArg_array_element_0_int":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":1,"_bound":14}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":4,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":0,"ExpansionArg_array_element_3_type":1,"_bound":14} start 47.104 took 2.7129s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":4,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":0,"ExpansionArg_array_element_3_type":1,"_bound":14}
* Error: TypeError: cardNumber must be a string!
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":4,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":0,"ExpansionArg_array_element_3_type":1,"_bound":14}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":4,"ExpansionArg_array_element_0_type":2,"ExpansionArg_array_element_0_int":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":0,"_bound":15,"ExpansionArg_array_element_3_type":0} start 46.9808 took 3.0031s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":4,"ExpansionArg_array_element_0_type":2,"ExpansionArg_array_element_0_int":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":0,"_bound":15,"ExpansionArg_array_element_3_type":0}
* Error: TypeError: cardNumber must be a string!
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":4,"ExpansionArg_array_element_0_type":2,"ExpansionArg_array_element_0_int":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":0,"_bound":15}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":4,"ExpansionArg_array_element_0_bool":false,"_bound":12,"ExpansionArg_array_element_0_array_length":0} start 47.058 took 3.1166s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":4,"ExpansionArg_array_element_0_bool":false,"_bound":12,"ExpansionArg_array_element_0_array_length":0}
* Error: TypeError: cardNumber must be a string!
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":4,"ExpansionArg_array_element_0_bool":false,"_bound":12}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":5,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":0,"ExpansionArg_array_element_3_type":0,"_bound":15,"ExpansionArg_array_element_4_type":0} start 47.1249 took 3.1155s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":5,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":0,"ExpansionArg_array_element_3_type":0,"_bound":15,"ExpansionArg_array_element_4_type":0}
* Error: TypeError: cardNumber must be a string!
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":5,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":0,"ExpansionArg_array_element_3_type":0,"_bound":15}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":2,"_bound":13,"ExpansionArg_array_element_2_int":0} start 47.3097 took 3.2407s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":2,"_bound":13,"ExpansionArg_array_element_2_int":0}
* Error: TypeError: cardNumber must be a string!
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":2,"_bound":13}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":3,"ExpansionArg_array_element_0_string":"","ExpansionArg_array_element_1_type":1,"_bound":13} start 47.2692 took 3.4135s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":3,"ExpansionArg_array_element_0_string":"","ExpansionArg_array_element_1_type":1,"_bound":13}
* Error: TypeError: cardNumber must be a string!
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":3,"ExpansionArg_array_element_0_string":"","ExpansionArg_array_element_1_type":1,"_bound":13}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":5,"ExpansionArg_array_element_0_bool":false,"_bound":13,"ExpansionArg_array_element_1_type":0} start 47.0784 took 3.7825s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":5,"ExpansionArg_array_element_0_bool":false,"_bound":13,"ExpansionArg_array_element_1_type":0}
* Error: TypeError: cardNumber must be a string!
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":5,"ExpansionArg_array_element_0_bool":false,"_bound":13}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":1,"ExpansionArg_array_element_2_type":2,"_bound":13,"ExpansionArg_array_element_2_int":0} start 47.4744 took 3.4236s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":1,"ExpansionArg_array_element_2_type":2,"_bound":13,"ExpansionArg_array_element_2_int":0}
* Error: TypeError: cardNumber must be a string!
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":1,"ExpansionArg_array_element_2_type":2,"_bound":13}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":5,"ExpansionArg_array_element_1_string":"","_bound":13,"ExpansionArg_array_element_1_bool":false} start 47.6911 took 3.3244s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":5,"ExpansionArg_array_element_1_string":"","_bound":13,"ExpansionArg_array_element_1_bool":false}
* Error: TypeError: cardNumber must be a string!
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":5,"ExpansionArg_array_element_1_string":"","_bound":13}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":2,"ExpansionArg_array_element_1_string":"","_bound":12,"ExpansionArg_array_element_1_int":0} start 48.9296 took 2.5945s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":2,"ExpansionArg_array_element_1_string":"","_bound":12,"ExpansionArg_array_element_1_int":0}
* Error: TypeError: cardNumber must be a string!
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":2,"ExpansionArg_array_element_1_string":"","_bound":12}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_1_type":1,"ExpansionArg_array_element_1_string":"","_bound":12} start 49.4271 took 2.3963s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_1_type":1,"ExpansionArg_array_element_1_string":"","_bound":12}
* Error: TypeError: cardNumber must be a string!
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_1_type":1,"ExpansionArg_array_element_1_string":"","_bound":12}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":2,"ExpansionArg_array_element_0_int":0,"ExpansionArg_array_element_1_type":2,"ExpansionArg_array_element_1_string":"","_bound":14,"ExpansionArg_array_element_1_int":0} start 48.7755 took 3.3375s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":2,"ExpansionArg_array_element_0_int":0,"ExpansionArg_array_element_1_type":2,"ExpansionArg_array_element_1_string":"","_bound":14,"ExpansionArg_array_element_1_int":0}
* Error: TypeError: cardNumber must be a string!
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":2,"ExpansionArg_array_element_0_int":0,"ExpansionArg_array_element_1_type":2,"ExpansionArg_array_element_1_string":"","_bound":14}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_1_type":2,"ExpansionArg_array_element_1_string":"","_bound":13,"ExpansionArg_array_element_1_int":0} start 49.3491 took 2.8323s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_1_type":2,"ExpansionArg_array_element_1_string":"","_bound":13,"ExpansionArg_array_element_1_int":0}
* Error: TypeError: cardNumber must be a string!
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_1_type":2,"ExpansionArg_array_element_1_string":"","_bound":13}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":2,"ExpansionArg_array_element_0_int":0,"ExpansionArg_array_element_1_type":5,"ExpansionArg_array_element_1_string":"","_bound":15,"ExpansionArg_array_element_1_bool":false} start 50.0026 took 2.8167s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":2,"ExpansionArg_array_element_0_int":0,"ExpansionArg_array_element_1_type":5,"ExpansionArg_array_element_1_string":"","_bound":15,"ExpansionArg_array_element_1_bool":false}
* Error: TypeError: cardNumber must be a string!
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":2,"ExpansionArg_array_element_0_int":0,"ExpansionArg_array_element_1_type":5,"ExpansionArg_array_element_1_string":"","_bound":15}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":2,"ExpansionArg_array_element_0_int":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":5,"_bound":15,"ExpansionArg_array_element_2_bool":false} start 49.8103 took 3.1069s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":2,"ExpansionArg_array_element_0_int":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":5,"_bound":15,"ExpansionArg_array_element_2_bool":false}
* Error: TypeError: cardNumber must be a string!
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":2,"ExpansionArg_array_element_0_int":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":5,"_bound":15}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":5,"ExpansionArg_array_element_2_int":0,"_bound":14,"ExpansionArg_array_element_2_bool":false} start 50.5815 took 3.683s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":5,"ExpansionArg_array_element_2_int":0,"_bound":14,"ExpansionArg_array_element_2_bool":false}
* Error: TypeError: cardNumber must be a string!
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":5,"ExpansionArg_array_element_2_int":0,"_bound":14}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":3,"ExpansionArg_array_element_0_string":"","ExpansionArg_array_element_1_type":5,"_bound":14,"ExpansionArg_array_element_1_bool":false} start 50.7374 took 3.5272s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":3,"ExpansionArg_array_element_0_string":"","ExpansionArg_array_element_1_type":5,"_bound":14,"ExpansionArg_array_element_1_bool":false}
* Error: TypeError: cardNumber must be a string!
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":3,"ExpansionArg_array_element_0_string":"","ExpansionArg_array_element_1_type":5,"_bound":14}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_1_type":5,"ExpansionArg_array_element_1_string":"","_bound":14,"ExpansionArg_array_element_1_bool":false} start 49.8316 took 4.4331s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_1_type":5,"ExpansionArg_array_element_1_string":"","_bound":14,"ExpansionArg_array_element_1_bool":false}
* Error: TypeError: cardNumber must be a string!
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_1_type":5,"ExpansionArg_array_element_1_string":"","_bound":14}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":4,"ExpansionArg_array_element_1_bool":false,"_bound":14,"ExpansionArg_array_element_1_array_length":0} start 51.0438 took 3.2208s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":4,"ExpansionArg_array_element_1_bool":false,"_bound":14,"ExpansionArg_array_element_1_array_length":0}
* Error: TypeError: cardNumber must be a string!
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":4,"ExpansionArg_array_element_1_bool":false,"_bound":14}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":4,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":0,"ExpansionArg_array_element_3_type":2,"_bound":15,"ExpansionArg_array_element_3_int":0} start 50.2134 took 4.0513s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":4,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":0,"ExpansionArg_array_element_3_type":2,"_bound":15,"ExpansionArg_array_element_3_int":0}
* Error: TypeError: cardNumber must be a string!
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":4,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":0,"ExpansionArg_array_element_3_type":2,"_bound":15}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":2,"ExpansionArg_array_element_0_int":0,"ExpansionArg_array_element_1_type":1,"ExpansionArg_array_element_2_type":5,"_bound":15,"ExpansionArg_array_element_2_bool":false} start 50.266 took 3.9987s