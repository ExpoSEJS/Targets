/root/Targets/jclass.js
└── jclass.js@1.0.13 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/jclass.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000

*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","toString","apply","bound ","call","Function","parseInt"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0,"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpandedSwitcher":0} start 0.0571 took 9.4186s
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpandedSwitcher":0,"_bound":3} start 9.6906 took 8.2942s
*-- Test Case {"Switcher":true,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpandedSwitcher":0,"_bound":1} start 9.594 took 10.8441s
*-- Errors occured in test {"Switcher":true,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpandedSwitcher":0,"_bound":1}
* Error: TypeError: this._specialFunctions[f.name] is not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpandedSwitcher":0,"_bound":1}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":0,"ExpandedSwitcher":0,"_bound":2} start 9.6306 took 11.1593s
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"ExpandedSwitcher":0,"_bound":4,"ExpansionArg_int":0} start 18.0465 took 9.9432s
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":2,"ExpandedSwitcher":0,"_bound":4,"ExpansionArg_int":0} start 20.8557 took 10.3961s
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpansionArg_type":0,"ExpandedSwitcher":0,"_bound":3} start 20.8392 took 12.6741s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpansionArg_type":0,"ExpandedSwitcher":0,"_bound":3}
* Error: ReferenceError: require is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpansionArg_type":0,"ExpandedSwitcher":0,"_bound":3}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_int":0,"ExpandedSwitcher":0,"_bound":5,"ExpansionArg_string":"PureString"} start 28.0246 took 9.5492s
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":1,"ExpansionArg_int":0,"ExpandedSwitcher":0,"_bound":5} start 31.4087 took 9.0661s
*-- Test Case {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":0,"_bound":4} start 33.5991 took 8.5888s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":0,"_bound":4}
* Error: TypeError: Cannot read property 'done' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":0,"_bound":4}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpansionArg_type":3,"_bound":5,"ExpansionArg_string":"PureString"} start 33.5462 took 10.3512s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpansionArg_type":3,"_bound":5,"ExpansionArg_string":"PureString"}
* Error: ReferenceError: require is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpansionArg_type":3,"_bound":5}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":3,"ExpansionArg_int":0,"ExpandedSwitcher":0,"_bound":6,"ExpansionArg_string":"PureString"} start 31.3161 took 12.9511s
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_string":"","ExpandedSwitcher":0,"_bound":6,"ExpansionArg_array_length":0} start 37.6271 took 8.2663s
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"_bound":5,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":0} start 42.2714 took 8.8059s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"_bound":5,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":0}
* Error: TypeError: Cannot read property 'attachEvent' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"_bound":5}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpansionArg_type":2,"ExpansionArg_string":"","_bound":7,"ExpansionArg_int":0} start 43.9672 took 9.1263s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpansionArg_type":2,"ExpansionArg_string":"","_bound":7,"ExpansionArg_int":0}
* Error: ReferenceError: require is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpansionArg_type":2,"ExpansionArg_string":"","_bound":7}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpansionArg_type":4,"ExpansionArg_string":"","_bound":8,"ExpansionArg_array_length":0} start 43.9262 took 9.2871s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpansionArg_type":4,"ExpansionArg_string":"","_bound":8,"ExpansionArg_array_length":0}
* Error: ReferenceError: require is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpansionArg_type":4,"ExpansionArg_string":"","_bound":8}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpandedSwitcher":0,"_bound":8,"ExpansionArg_array_element_0_type":0} start 45.9138 took 7.7392s
*-- Test Case {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"_bound":6,"ExpansionArg_array_length":0} start 42.2342 took 12.1481s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"_bound":6,"ExpansionArg_array_length":0}
* Error: TypeError: Cannot read property 'done' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"_bound":6}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_string":"","ExpandedSwitcher":0,"_bound":7,"ExpansionArg_array_length":0} start 44.3028 took 10.6143s
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":5,"ExpansionArg_array_length":0,"ExpandedSwitcher":0,"_bound":7,"ExpansionArg_bool":false} start 45.9295 took 10.402s
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpansionArg_type":1,"ExpansionArg_string":"","_bound":6} start 43.9512 took 13.7954s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpansionArg_type":1,"ExpansionArg_string":"","_bound":6}
* Error: ReferenceError: require is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpansionArg_type":1,"ExpansionArg_string":"","_bound":6}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":5,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"_bound":7,"ExpansionArg_bool":false,"ExpandedSwitcher":0} start 51.1211 took 10.7181s
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"_bound":10,"ExpansionArg_array_element_0_type":0} start 53.2746 took 8.6288s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"_bound":10,"ExpansionArg_array_element_0_type":0}
* Error: ReferenceError: require is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"_bound":10}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":5,"ExpansionArg_array_length":0,"_bound":10,"ExpansionArg_bool":false} start 54.9392 took 8.1502s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":5,"ExpansionArg_array_length":0,"_bound":10,"ExpansionArg_bool":false}
* Error: TypeError: Cannot read property 'done' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":5,"ExpansionArg_array_length":0,"_bound":10}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"_bound":8,"ExpansionArg_bool":false} start 51.1917 took 12.3719s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"_bound":8,"ExpansionArg_bool":false}
* Error: TypeError: Cannot read property 'attachEvent' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"_bound":8}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":5,"ExpansionArg_type_4":0,"_bound":9,"ExpansionArg_bool":false} start 51.1476 took 13.313s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":5,"ExpansionArg_type_4":0,"_bound":9,"ExpansionArg_bool":false}
* Error: TypeError: Cannot read property 'attachEvent' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":5,"ExpansionArg_type_4":0,"_bound":9}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":5,"_bound":10,"ExpansionArg_bool":false} start 51.2107 took 13.7424s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":5,"_bound":10,"ExpansionArg_bool":false}
* Error: TypeError: Cannot read property 'attachEvent' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":5,"_bound":10}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":5,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"_bound":6} start 51.0949 took 14.0317s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":5,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"_bound":6}
* Error: TypeError: Cannot read property 'detachEvent' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":5,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"_bound":6}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":2,"ExpansionArg_array_length":0,"_bound":8,"ExpansionArg_int":0} start 54.5269 took 10.674s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":2,"ExpansionArg_array_length":0,"_bound":8,"ExpansionArg_int":0}
* Error: TypeError: Cannot read property 'done' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":2,"ExpansionArg_array_length":0,"_bound":8}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpansionArg_type":5,"ExpansionArg_array_length":0,"_bound":9,"ExpansionArg_bool":false} start 53.2957 took 12.0439s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpansionArg_type":5,"ExpansionArg_array_length":0,"_bound":9,"ExpansionArg_bool":false}
* Error: ReferenceError: require is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpansionArg_type":5,"ExpansionArg_array_length":0,"_bound":9}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpandedSwitcher":0,"_bound":10,"ExpansionArg_array_element_1_type":0} start 53.7071 took 11.8566s
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":2,"ExpandedSwitcher":0,"_bound":9,"ExpansionArg_array_element_0_int":0} start 53.7503 took 12.4149s
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpandedSwitcher":0,"_bound":9,"ExpansionArg_array_element_0_type":0} start 57.7693 took 9.0952s
*-- Test Case {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"_bound":11,"ExpansionArg_array_element_0_type":0} start 54.4111 took 13.0341s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"_bound":11,"ExpansionArg_array_element_0_type":0}
* Error: TypeError: Cannot read property 'done' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"_bound":11}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":3,"ExpansionArg_array_length":0,"_bound":9,"ExpansionArg_string":"PureString"} start 54.4991 took 13.2174s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":3,"ExpansionArg_array_length":0,"_bound":9,"ExpansionArg_string":"PureString"}
* Error: TypeError: Cannot read property 'done' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":3,"ExpansionArg_array_length":0,"_bound":9}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":3,"ExpansionArg_bool":false,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"ExpandedSwitcher":0,"_bound":10,"ExpansionArg_string":"PureString"} start 61.9866 took 6.8612s
*-- Test Case {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":1,"ExpansionArg_array_length":0,"_bound":7} start 54.4433 took 16.2446s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":1,"ExpansionArg_array_length":0,"_bound":7}
* Error: TypeError: Cannot read property 'done' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":1,"ExpansionArg_array_length":0,"_bound":7}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":5,"ExpansionArg_array_length":0,"ExpandedSwitcher":0,"_bound":8,"ExpansionArg_bool":false} start 56.3633 took 14.6302s
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":3,"ExpansionArg_bool":false,"_bound":13,"ExpansionArg_string":"PureString"} start 65.5425 took 7.0863s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":3,"ExpansionArg_bool":false,"_bound":13,"ExpansionArg_string":"PureString"}
* Error: TypeError: Cannot read property 'attachEvent' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":3,"ExpansionArg_bool":false,"_bound":13}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":2,"ExpansionArg_bool":false,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"ExpandedSwitcher":0,"_bound":9,"ExpansionArg_int":0} start 63.1031 took 9.7543s
*-- Test Case {"Switcher":false,"Target_Switch_Base":6,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":7} start 65.1761 took 8.4691s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":6,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":7}
* Error: ReferenceError: window is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":6,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":7}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":1,"ExpansionArg_bool":false,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"ExpandedSwitcher":0,"_bound":8} start 65.6626 took 8.8583s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":1,"ExpansionArg_bool":false,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"ExpandedSwitcher":0,"_bound":8}
* Error: TypeError: Cannot read property 'attachEvent' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":1,"ExpansionArg_bool":false,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"ExpandedSwitcher":0,"_bound":8}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_bool":false,"ExpansionArg_type_4":0,"_bound":12,"ExpansionArg_string":"PureString"} start 64.5121 took 10.457s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_bool":false,"ExpansionArg_type_4":0,"_bound":12,"ExpansionArg_string":"PureString"}
* Error: TypeError: Cannot read property 'attachEvent' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_bool":false,"ExpansionArg_type_4":0,"_bound":12}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_bool":false,"ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"_bound":9} start 63.5998 took 12.0827s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_bool":false,"ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"_bound":9}
* Error: TypeError: Cannot read property 'attachEvent' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_bool":false,"ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"_bound":9}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":4,"ExpansionArg_bool":false,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"ExpandedSwitcher":0,"_bound":11,"ExpansionArg_array_length":0} start 61.8632 took 15.1721s
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":2,"ExpansionArg_array_element_0_int":0,"ExpandedSwitcher":0,"_bound":12,"ExpansionArg_array_element_1_type":0} start 67.4678 took 10.0273s
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":12,"ExpansionArg_array_element_1_type":0} start 67.7836 took 9.9067s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":12,"ExpansionArg_array_element_1_type":0}
* Error: SyntaxError: Unexpected token ,
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":12}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_bool":false,"ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"_bound":10,"ExpansionArg_int":0} start 65.3053 took 13.8095s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_bool":false,"ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"_bound":10,"ExpansionArg_int":0}
* Error: TypeError: Cannot read property 'attachEvent' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_bool":false,"ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"_bound":10}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":2,"ExpansionArg_bool":false,"_bound":12,"ExpansionArg_int":0} start 66.9157 took 13.3522s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":2,"ExpansionArg_bool":false,"_bound":12,"ExpansionArg_int":0}
* Error: TypeError: Cannot read property 'attachEvent' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":2,"ExpansionArg_bool":false,"_bound":12}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_bool":false,"ExpansionArg_type_4":0,"_bound":13,"ExpansionArg_array_length":0} start 65.0117 took 15.5716s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_bool":false,"ExpansionArg_type_4":0,"_bound":13,"ExpansionArg_array_length":0}
* Error: TypeError: Cannot read property 'attachEvent' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_bool":false,"ExpansionArg_type_4":0,"_bound":13}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":4,"ExpansionArg_bool":false,"_bound":14,"ExpansionArg_array_length":0} start 66.1916 took 15.4444s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":4,"ExpansionArg_bool":false,"_bound":14,"ExpansionArg_array_length":0}
* Error: TypeError: Cannot read property 'attachEvent' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":4,"ExpansionArg_bool":false,"_bound":14}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"ExpansionArg_bool":false,"ExpansionArg_type_4":0,"_bound":11,"ExpansionArg_int":0} start 68.9439 took 13.1218s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"ExpansionArg_bool":false,"ExpansionArg_type_4":0,"_bound":11,"ExpansionArg_int":0}
* Error: TypeError: Cannot read property 'attachEvent' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"ExpansionArg_bool":false,"ExpansionArg_type_4":0,"_bound":11}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpandedSwitcher":0,"_bound":11,"ExpansionArg_array_element_1_type":0} start 71.0223 took 12.2607s
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":1,"ExpansionArg_bool":false,"ExpansionArg_type_4":0,"_bound":10} start 74.6014 took 9.0768s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":1,"ExpansionArg_bool":false,"ExpansionArg_type_4":0,"_bound":10}
* Error: TypeError: Cannot read property 'attachEvent' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":1,"ExpansionArg_bool":false,"ExpansionArg_type_4":0,"_bound":10}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":7,"ExpansionArg_type":0,"_bound":8} start 75.0578 took 8.9634s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":7,"ExpansionArg_type":0,"_bound":8}
* Error: TypeError: Cannot read property 'substr' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":7,"ExpansionArg_type":0,"_bound":8}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_0_int":0,"ExpandedSwitcher":0,"_bound":10} start 72.9004 took 12.4327s
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_bool":false,"ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"_bound":12,"ExpansionArg_array_length":0} start 70.7475 took 14.6686s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_bool":false,"ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"_bound":12,"ExpansionArg_array_length":0}
* Error: TypeError: Cannot read property 'attachEvent' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_bool":false,"ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"_bound":12}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":1,"ExpansionArg_bool":false,"_bound":11} start 77.0644 took 9.1668s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":1,"ExpansionArg_bool":false,"_bound":11}
* Error: TypeError: Cannot read property 'attachEvent' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":1,"ExpansionArg_bool":false,"_bound":11}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"ExpandedSwitcher":0,"_bound":12,"ExpansionArg_array_element_0_type":0} start 77.5159 took 9.5036s
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":3,"ExpansionArg_array_element_0_int":0,"ExpandedSwitcher":0,"_bound":11,"ExpansionArg_array_element_0_string":"PureString"} start 77.7278 took 9.3876s
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":5,"ExpansionArg_bool":false,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":6,"ExpandedSwitcher":0,"_bound":14,"ExpansionArg_bool_2":false} start 79.1509 took 9.0688s
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"ExpansionArg_bool":false,"ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"_bound":11,"ExpansionArg_string":"PureString"} start 73.6608 took 14.6827s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"ExpansionArg_bool":false,"ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"_bound":11,"ExpansionArg_string":"PureString"}
* Error: TypeError: Cannot read property 'attachEvent' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"ExpansionArg_bool":false,"ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"_bound":11}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":13,"ExpansionArg_array_element_1_type":0} start 72.6543 took 15.8758s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":13,"ExpansionArg_array_element_1_type":0}
* Error: TypeError: Cannot read property 'done' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":13}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpandedSwitcher":0,"_bound":12,"ExpansionArg_array_element_2_type":0} start 75.7316 took 13.5293s
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":5,"ExpansionArg_bool":false,"ExpansionArg_type_2":6,"ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"ExpandedSwitcher":0,"_bound":12,"ExpansionArg_bool_2":false} start 80.2914 took 9.0467s
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":5,"ExpansionArg_bool":false,"ExpansionArg_type_2":0,"ExpansionArg_type_3":6,"ExpansionArg_type_4":0,"ExpandedSwitcher":0,"_bound":13,"ExpansionArg_bool_2":false} start 82.0882 took 10.3511s
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"ExpansionArg_type_4":0,"_bound":14,"ExpansionArg_array_element_0_type":0} start 80.6249 took 12.5915s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"ExpansionArg_type_4":0,"_bound":14,"ExpansionArg_array_element_0_type":0}
* Error: TypeError: Cannot read property 'attachEvent' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"ExpansionArg_type_4":0,"_bound":14}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":8,"ExpansionArg_type":0,"_bound":9} start 84.0739 took 10.2499s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":8,"ExpansionArg_type":0,"_bound":9}
* Error: TypeError: Cannot read property 'substr' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":8,"ExpansionArg_type":0,"_bound":9}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpandedSwitcher":0,"_bound":13,"ExpansionArg_array_element_2_type":0} start 83.7832 took 11.3812s
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_bool":false,"ExpansionArg_type_3":6,"ExpansionArg_type_4":0,"_bound":13,"ExpansionArg_bool_2":false} start 87.0522 took 8.5836s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_bool":false,"ExpansionArg_type_3":6,"ExpansionArg_type_4":0,"_bound":13,"ExpansionArg_bool_2":false}
* Error: TypeError: Cannot read property 'attachEvent' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_bool":false,"ExpansionArg_type_3":6,"ExpansionArg_type_4":0,"_bound":13}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":3,"_bound":11,"ExpansionArg_array_element_0_string":"PureString"} start 85.4717 took 11.3512s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":3,"_bound":11,"ExpansionArg_array_element_0_string":"PureString"}
* Error: SyntaxError: missing ) after argument list
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":3,"_bound":11}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":5,"ExpansionArg_bool":false,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":4,"ExpansionArg_bool_2":false,"ExpandedSwitcher":0,"_bound":18,"ExpansionArg_array_length":0} start 88.5904 took 8.3263s
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":2,"ExpansionArg_array_element_0_int":0,"ExpansionArg_array_element_1_type":0,"ExpandedSwitcher":0,"_bound":14,"ExpansionArg_array_element_2_type":0} start 83.3437 took 13.7892s
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":5,"ExpansionArg_array_element_0_string":"","ExpandedSwitcher":0,"_bound":12,"ExpansionArg_array_element_0_bool":false} start 87.1521 took 10.1329s
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"_bound":14,"ExpansionArg_array_element_2_type":0} start 81.7006 took 16.5867s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"_bound":14,"ExpansionArg_array_element_2_type":0}
* Error: SyntaxError: Unexpected token ,
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"_bound":14}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":5,"ExpansionArg_bool":false,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":3,"ExpansionArg_bool_2":false,"ExpandedSwitcher":0,"_bound":17,"ExpansionArg_string":"PureString"} start 88.4159 took 10.4238s
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":1,"ExpandedSwitcher":0,"_bound":11,"ExpansionArg_array_element_1_type":0} start 85.3728 took 14.5322s
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":4,"ExpansionArg_array_length":1,"_bound":15,"ExpansionArg_array_element_0_type":0} start 86.265 took 13.6757s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":4,"ExpansionArg_array_length":1,"_bound":15,"ExpansionArg_array_element_0_type":0}
* Error: TypeError: Cannot read property 'attachEvent' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":4,"ExpansionArg_array_length":1,"_bound":15}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":5,"ExpansionArg_bool":false,"ExpansionArg_type_2":4,"ExpansionArg_bool_2":false,"ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"ExpandedSwitcher":0,"_bound":16,"ExpansionArg_array_length":0} start 89.4085 took 11.7139s
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":5,"ExpansionArg_bool":false,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":2,"ExpansionArg_bool_2":false,"ExpandedSwitcher":0,"_bound":16,"ExpansionArg_int":0} start 89.3013 took 12.572s
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":5,"ExpansionArg_bool":false,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":1,"ExpansionArg_bool_2":false,"ExpandedSwitcher":0,"_bound":15} start 88.2562 took 15.1941s
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":5,"ExpansionArg_bool":false,"ExpansionArg_type_2":0,"ExpansionArg_type_3":1,"ExpansionArg_bool_2":false,"ExpansionArg_type_4":0,"ExpandedSwitcher":0,"_bound":14} start 94.3925 took 11.4967s
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":5,"ExpansionArg_bool":false,"ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"ExpansionArg_bool_2":false,"ExpansionArg_type_4":0,"ExpandedSwitcher":0,"_bound":15,"ExpansionArg_int":0} start 95.2017 took 11.9593s
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":5,"ExpansionArg_bool":false,"ExpansionArg_type_2":2,"ExpansionArg_bool_2":false,"ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"ExpandedSwitcher":0,"_bound":14,"ExpansionArg_int":0} start 93.2886 took 14.3616s
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":5,"ExpansionArg_bool":false,"ExpansionArg_type_2":1,"ExpansionArg_bool_2":false,"ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"ExpandedSwitcher":0,"_bound":13} start 92.4769 took 15.9199s
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":5,"ExpansionArg_array_element_0_string":"","_bound":14,"ExpansionArg_array_element_0_bool":false} start 96.9496 took 12.0859s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":5,"ExpansionArg_array_element_0_string":"","_bound":14,"ExpansionArg_array_element_0_bool":false}
* Error: SyntaxError: missing ) after argument list
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":5,"ExpansionArg_array_element_0_string":"","_bound":14}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":5,"ExpansionArg_bool":false,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_bool_2":false,"ExpansionArg_type_4":0,"ExpandedSwitcher":0,"_bound":17,"ExpansionArg_array_length":0} start 97.1857 took 11.9018s
*-- Test Case {"Switcher":false,"Target_Switch_Base":9,"ExpansionArg_type":0,"_bound":10} start 97.3806 took 11.9645s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":9,"ExpansionArg_type":0,"_bound":10}
* Error: ReferenceError: window is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":9,"ExpansionArg_type":0,"_bound":10}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_bool":false,"ExpansionArg_type_3":1,"ExpansionArg_bool_2":false,"ExpansionArg_type_4":0,"_bound":14} start 96.8762 took 13.717s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_bool":false,"ExpansionArg_type_3":1,"ExpansionArg_bool_2":false,"ExpansionArg_type_4":0,"_bound":14}
* Error: TypeError: Cannot read property 'attachEvent' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_bool":false,"ExpansionArg_type_3":1,"ExpansionArg_bool_2":false,"ExpansionArg_type_4":0,"_bound":14}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_bool":false,"ExpansionArg_type_3":4,"ExpansionArg_bool_2":false,"ExpansionArg_type_4":0,"_bound":17,"ExpansionArg_array_length":0} start 95.7126 took 15.4955s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_bool":false,"ExpansionArg_type_3":4,"ExpansionArg_bool_2":false,"ExpansionArg_type_4":0,"_bound":17,"ExpansionArg_array_length":0}
* Error: TypeError: Cannot read property 'attachEvent' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_bool":false,"ExpansionArg_type_3":4,"ExpansionArg_bool_2":false,"ExpansionArg_type_4":0,"_bound":17}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":2,"ExpansionArg_array_element_0_string":"","_bound":13,"ExpansionArg_array_element_0_int":0} start 98.8761 took 12.4268s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":2,"ExpansionArg_array_element_0_string":"","_bound":13,"ExpansionArg_array_element_0_int":0}
* Error: SyntaxError: missing ) after argument list
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":2,"ExpansionArg_array_element_0_string":"","_bound":13}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_bool":false,"ExpansionArg_type_3":2,"ExpansionArg_bool_2":false,"ExpansionArg_type_4":0,"_bound":15,"ExpansionArg_int":0} start 98.3409 took 13.0829s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_bool":false,"ExpansionArg_type_3":2,"ExpansionArg_bool_2":false,"ExpansionArg_type_4":0,"_bound":15,"ExpansionArg_int":0}
* Error: TypeError: Cannot read property 'attachEvent' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_bool":false,"ExpansionArg_type_3":2,"ExpansionArg_bool_2":false,"ExpansionArg_type_4":0,"_bound":15}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_0_string":"","_bound":12} start 103.4881 took 8.2255s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_0_string":"","_bound":12}
* Error: ReferenceError: require is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_0_string":"","_bound":12}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":5,"ExpansionArg_bool":false,"ExpansionArg_type_2":3,"ExpansionArg_bool_2":false,"ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"ExpandedSwitcher":0,"_bound":15,"ExpansionArg_string":"PureString"} start 100.0168 took 13.0601s
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_bool":false,"ExpansionArg_type_3":3,"ExpansionArg_bool_2":false,"ExpansionArg_type_4":0,"_bound":16,"ExpansionArg_string":"PureString"} start 99.9302 took 14.3916s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_bool":false,"ExpansionArg_type_3":3,"ExpansionArg_bool_2":false,"ExpansionArg_type_4":0,"_bound":16,"ExpansionArg_string":"PureString"}
* Error: TypeError: Cannot read property 'attachEvent' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_bool":false,"ExpansionArg_type_3":3,"ExpansionArg_bool_2":false,"ExpansionArg_type_4":0,"_bound":16}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":4,"ExpansionArg_array_element_0_bool":false,"ExpandedSwitcher":0,"_bound":13,"ExpansionArg_array_element_0_array_length":0} start 101.1872 took 15.9299s
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":5,"ExpansionArg_bool":false,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_bool_2":false,"ExpansionArg_type_4":0,"ExpandedSwitcher":0,"_bound":16,"ExpansionArg_string":"PureString"} start 101.8992 took 15.6741s
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":5,"ExpansionArg_bool":false,"ExpansionArg_type_4":6,"_bound":14,"ExpansionArg_bool_2":false} start 105.9167 took 12.253s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":5,"ExpansionArg_bool":false,"ExpansionArg_type_4":6,"_bound":14,"ExpansionArg_bool_2":false}
* Error: TypeError: Cannot read property 'attachEvent' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":5,"ExpansionArg_bool":false,"ExpansionArg_type_4":6,"_bound":14}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_bool":false,"ExpansionArg_type_3":0,"ExpansionArg_type_4":6,"_bound":14,"ExpansionArg_bool_2":false} start 107.6898 took 13.6326s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_bool":false,"ExpansionArg_type_3":0,"ExpansionArg_type_4":6,"_bound":14,"ExpansionArg_bool_2":false}
* Error: TypeError: Cannot read property 'attachEvent' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_bool":false,"ExpansionArg_type_3":0,"ExpansionArg_type_4":6,"_bound":14}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_4":0,"_bound":16,"ExpansionArg_array_element_1_type":0} start 111.7461 took 9.6406s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_4":0,"_bound":16,"ExpansionArg_array_element_1_type":0}
* Error: TypeError: Cannot read property 'attachEvent' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_4":0,"_bound":16}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":5,"ExpansionArg_type":0,"ExpansionArg_type_2":6,"ExpansionArg_type_3":0,"_bound":9,"ExpansionArg_bool":false} start 107.2183 took 14.2707s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":5,"ExpansionArg_type":0,"ExpansionArg_type_2":6,"ExpansionArg_type_3":0,"_bound":9,"ExpansionArg_bool":false}
* Error: TypeError: Cannot read property 'detachEvent' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":5,"ExpansionArg_type":0,"ExpansionArg_type_2":6,"ExpansionArg_type_3":0,"_bound":9}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":5,"ExpansionArg_type":6,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":8,"ExpansionArg_bool":false,"ExpandedSwitcher":0} start 110.6558 took 10.9138s
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":3,"ExpansionArg_array_element_0_string":"","ExpandedSwitcher":0,"_bound":13,"ExpansionArg_array_element_1_type":0} start 109.1886 took 13.4365s
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"_bound":13,"ExpansionArg_array_element_0_type":0} start 108.4454 took 15.0034s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"_bound":13,"ExpansionArg_array_element_0_type":0}
* Error: TypeError: Cannot read property 'attachEvent' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"_bound":13}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":5,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":6,"_bound":10,"ExpansionArg_bool":false} start 111.3689 took 12.3669s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":5,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":6,"_bound":10,"ExpansionArg_bool":false}
* Error: TypeError: Cannot read property 'detachEvent' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":5,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":6,"_bound":10}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":4,"ExpansionArg_array_element_0_bool":false,"_bound":15,"ExpansionArg_array_element_0_array_length":0} start 109.0722 took 15.9289s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":4,"ExpansionArg_array_element_0_bool":false,"_bound":15,"ExpansionArg_array_element_0_array_length":0}
* Error: ReferenceError: require is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":4,"ExpansionArg_array_element_0_bool":false,"_bound":15}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":2,"_bound":12,"ExpansionArg_array_element_0_int":0} start 113.1049 took 12.0013s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":2,"_bound":12,"ExpansionArg_array_element_0_int":0}
* Error: TypeError: Cannot read property 'done' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":2,"_bound":12}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":2,"ExpandedSwitcher":0,"_bound":10,"ExpansionArg_array_element_0_int":0} start 117.1537 took 8.0771s
*-- Test Case {"Switcher":false,"Target_Switch_Base":10,"_bound":11,"ExpansionArg_type":0,"ExpansionArg_type_2":0} start 109.4048 took 16.2361s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":10,"_bound":11,"ExpansionArg_type":0,"ExpansionArg_type_2":0}
* Error: TypeError: Cannot read property 'selectedIndex' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":10,"_bound":11}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":1,"ExpandedSwitcher":0,"_bound":11} start 111.2787 took 15.0064s
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"ExpandedSwitcher":0,"_bound":14,"ExpansionArg_array_element_1_type":0} start 114.3647 took 13.038s
*-- Test Case {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"_bound":15,"ExpansionArg_array_element_2_type":0} start 111.4517 took 17.4849s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"_bound":15,"ExpansionArg_array_element_2_type":0}
* Error: TypeError: Cannot read property 'done' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"_bound":15}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":5,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_bool":false,"ExpansionArg_type_3":0,"_bound":13,"ExpansionArg_array_length":0} start 121.645 took 7.3363s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":5,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_bool":false,"ExpansionArg_type_3":0,"_bound":13,"ExpansionArg_array_length":0}
* Error: TypeError: Cannot read property 'detachEvent' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":5,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_bool":false,"ExpansionArg_type_3":0,"_bound":13}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":5,"ExpansionArg_bool":false,"ExpansionArg_type_4":2,"ExpansionArg_bool_2":false,"_bound":16,"ExpansionArg_int":0} start 118.2238 took 10.7576s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":5,"ExpansionArg_bool":false,"ExpansionArg_type_4":2,"ExpansionArg_bool_2":false,"_bound":16,"ExpansionArg_int":0}
* Error: TypeError: Cannot read property 'attachEvent' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":5,"ExpansionArg_bool":false,"ExpansionArg_type_4":2,"ExpansionArg_bool_2":false,"_bound":16}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":4,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":0,"ExpandedSwitcher":0,"_bound":14,"ExpansionArg_array_element_3_type":0} start 117.6128 took 14.0233s
*-- Test Case {"Switcher":false,"Target_Switch_Base":5,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"ExpansionArg_bool":false,"ExpansionArg_type_3":0,"_bound":12,"ExpansionArg_string":"PureString"} start 125.3369 took 6.4427s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":5,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"ExpansionArg_bool":false,"ExpansionArg_type_3":0,"_bound":12,"ExpansionArg_string":"PureString"}
* Error: TypeError: Cannot read property 'detachEvent' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":5,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"ExpansionArg_bool":false,"ExpansionArg_type_3":0,"_bound":12}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":5,"ExpansionArg_bool":false,"ExpansionArg_type_4":4,"ExpansionArg_bool_2":false,"_bound":18,"ExpansionArg_array_length":0} start 123.7808 took 9.8686s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":5,"ExpansionArg_bool":false,"ExpansionArg_type_4":4,"ExpansionArg_bool_2":false,"_bound":18,"ExpansionArg_array_length":0}
* Error: TypeError: Cannot read property 'attachEvent' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":5,"ExpansionArg_bool":false,"ExpansionArg_type_4":4,"ExpansionArg_bool_2":false,"_bound":18}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_bool":false,"ExpansionArg_type_3":0,"ExpansionArg_type_4":4,"ExpansionArg_bool_2":false,"_bound":18,"ExpansionArg_array_length":0} start 125.1551 took 8.6635s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_bool":false,"ExpansionArg_type_3":0,"ExpansionArg_type_4":4,"ExpansionArg_bool_2":false,"_bound":18,"ExpansionArg_array_length":0}
* Error: TypeError: Cannot read property 'attachEvent' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_bool":false,"ExpansionArg_type_3":0,"ExpansionArg_type_4":4,"ExpansionArg_bool_2":false,"_bound":18}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":5,"ExpansionArg_bool":false,"ExpansionArg_type_4":3,"ExpansionArg_bool_2":false,"_bound":17,"ExpansionArg_string":"PureString"} start 121.346 took 12.9823s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":5,"ExpansionArg_bool":false,"ExpansionArg_type_4":3,"ExpansionArg_bool_2":false,"_bound":17,"ExpansionArg_string":"PureString"}
* Error: TypeError: Cannot read property 'attachEvent' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":5,"ExpansionArg_bool":false,"ExpansionArg_type_4":3,"ExpansionArg_bool_2":false,"_bound":17}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":5,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_bool":false,"ExpansionArg_type_3":0,"_bound":10} start 121.5097 took 14.3103s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":5,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_bool":false,"ExpansionArg_type_3":0,"_bound":10}
* Error: TypeError: Cannot read property 'detachEvent' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":5,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_bool":false,"ExpansionArg_type_3":0,"_bound":10}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_bool":false,"ExpansionArg_type_3":0,"ExpansionArg_type_4":3,"ExpansionArg_bool_2":false,"_bound":17,"ExpansionArg_string":"PureString"} start 123.5088 took 13.2757s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_bool":false,"ExpansionArg_type_3":0,"ExpansionArg_type_4":3,"ExpansionArg_bool_2":false,"_bound":17,"ExpansionArg_string":"PureString"}
* Error: TypeError: Cannot read property 'attachEvent' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_bool":false,"ExpansionArg_type_3":0,"ExpansionArg_type_4":3,"ExpansionArg_bool_2":false,"_bound":17}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":5,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_bool":false,"_bound":14,"ExpansionArg_array_length":0} start 129.0999 took 7.7389s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":5,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_bool":false,"_bound":14,"ExpansionArg_array_length":0}
* Error: TypeError: Cannot read property 'detachEvent' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":5,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_bool":false,"_bound":14}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":11,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"_bound":12,"ExpandedSwitcher":0} start 125.6669 took 11.7715s
*-- Test Case {"Switcher":false,"Target_Switch_Base":5,"ExpansionArg_type":1,"ExpansionArg_bool":false,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpandedSwitcher":0,"_bound":9} start 126.3125 took 11.2075s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":5,"ExpansionArg_type":1,"ExpansionArg_bool":false,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpandedSwitcher":0,"_bound":9}
* Error: TypeError: Cannot read property 'detachEvent' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":5,"ExpansionArg_type":1,"ExpansionArg_bool":false,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpandedSwitcher":0,"_bound":9}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":5,"ExpansionArg_type":4,"ExpansionArg_bool":false,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpandedSwitcher":0,"_bound":12,"ExpansionArg_array_length":0} start 122.7416 took 15.1465s
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":5,"ExpansionArg_bool":false,"ExpansionArg_type_4":1,"ExpansionArg_bool_2":false,"_bound":15} start 121.464 took 16.4819s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":5,"ExpansionArg_bool":false,"ExpansionArg_type_4":1,"ExpansionArg_bool_2":false,"_bound":15}
* Error: TypeError: Cannot read property 'attachEvent' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":5,"ExpansionArg_bool":false,"ExpansionArg_type_4":1,"ExpansionArg_bool_2":false,"_bound":15}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_0_int":0,"_bound":13} start 129.0315 took 9.3358s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_0_int":0,"_bound":13}
* Error: TypeError: Cannot read property 'done' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_0_int":0,"_bound":13}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_bool":false,"ExpansionArg_type_3":0,"ExpansionArg_type_4":2,"ExpansionArg_bool_2":false,"_bound":16,"ExpansionArg_int":0} start 125.0337 took 13.9777s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_bool":false,"ExpansionArg_type_3":0,"ExpansionArg_type_4":2,"ExpansionArg_bool_2":false,"_bound":16,"ExpansionArg_int":0}
* Error: TypeError: Cannot read property 'attachEvent' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_bool":false,"ExpansionArg_type_3":0,"ExpansionArg_type_4":2,"ExpansionArg_bool_2":false,"_bound":16}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":5,"ExpansionArg_type":2,"ExpansionArg_bool":false,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpandedSwitcher":0,"_bound":10,"ExpansionArg_int":0} start 133.906 took 6.0524s
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_bool":false,"ExpansionArg_type_3":0,"ExpansionArg_type_4":1,"ExpansionArg_bool_2":false,"_bound":15} start 127.4618 took 12.5376s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_bool":false,"ExpansionArg_type_3":0,"ExpansionArg_type_4":1,"ExpansionArg_bool_2":false,"_bound":15}
* Error: TypeError: Cannot read property 'attachEvent' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_bool":false,"ExpansionArg_type_3":0,"ExpansionArg_type_4":1,"ExpansionArg_bool_2":false,"_bound":15}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":5,"ExpansionArg_array_element_0_int":0,"_bound":14,"ExpansionArg_array_element_0_bool":false} start 131.6646 took 9.505s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":5,"ExpansionArg_array_element_0_int":0,"_bound":14,"ExpansionArg_array_element_0_bool":false}
* Error: TypeError: Cannot read property 'done' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":5,"ExpansionArg_array_element_0_int":0,"_bound":14}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":5,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_bool":false,"ExpansionArg_type_3":0,"_bound":11,"ExpansionArg_int":0} start 128.9717 took 14.4913s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":5,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_bool":false,"ExpansionArg_type_3":0,"_bound":11,"ExpansionArg_int":0}
* Error: TypeError: Cannot read property 'detachEvent' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":5,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_bool":false,"ExpansionArg_type_3":0,"_bound":11}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":3,"ExpansionArg_array_element_0_int":0,"ExpandedSwitcher":0,"_bound":12,"ExpansionArg_array_element_0_string":"PureString"} start 133.6877 took 10.2006s
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_0_int":0,"ExpandedSwitcher":0,"_bound":11} start 136.9086 took 7.7979s
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":1,"ExpandedSwitcher":0,"_bound":13} start 138.0112 took 6.8007s
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":0,"ExpansionArg_type_3":1,"ExpansionArg_type_4":0,"ExpandedSwitcher":0,"_bound":12} start 139.0454 took 6.3318s
*-- Test Case {"Switcher":false,"Target_Switch_Base":5,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":1,"ExpansionArg_bool":false,"_bound":11} start 135.8928 took 9.7987s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":5,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":1,"ExpansionArg_bool":false,"_bound":11}
* Error: TypeError: Cannot read property 'detachEvent' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":5,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":1,"ExpansionArg_bool":false,"_bound":11}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":5,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"ExpansionArg_bool":false,"_bound":12,"ExpansionArg_int":0} start 134.3899 took 12.0022s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":5,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"ExpansionArg_bool":false,"_bound":12,"ExpansionArg_int":0}
* Error: TypeError: Cannot read property 'detachEvent' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":5,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"ExpansionArg_bool":false,"_bound":12}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":5,"ExpansionArg_type":3,"ExpansionArg_bool":false,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpandedSwitcher":0,"_bound":11,"ExpansionArg_string":"PureString"} start 131.9071 took 15.0579s
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":3,"ExpandedSwitcher":0,"_bound":12,"ExpansionArg_array_element_1_string":"PureString"} start 137.916 took 9.3313s
*-- Test Case {"Switcher":false,"Target_Switch_Base":5,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_bool":false,"_bound":13,"ExpansionArg_string":"PureString"} start 136.8287 took 11.1379s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":5,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_bool":false,"_bound":13,"ExpansionArg_string":"PureString"}
* Error: TypeError: Cannot read property 'detachEvent' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":5,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_bool":false,"_bound":13}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":4,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":0,"ExpandedSwitcher":0,"_bound":15,"ExpansionArg_array_element_3_type":0} start 138.4619 took 10.9792s
*-- Test Case {"Switcher":false,"Target_Switch_Base":12,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpandedSwitcher":0,"_bound":13} start 137.5048 took 12.26s
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":1,"ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"ExpandedSwitcher":0,"_bound":11} start 137.641 took 12.7205s
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":5,"ExpansionArg_array_element_0_string":"","ExpandedSwitcher":0,"_bound":13,"ExpansionArg_array_element_0_bool":false} start 143.9401 took 7.0124s
*-- Test Case {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":3,"ExpansionArg_array_element_0_bool":false,"_bound":15,"ExpansionArg_array_element_0_string":"PureString"} start 143.5096 took 8.1134s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":3,"ExpansionArg_array_element_0_bool":false,"_bound":15,"ExpansionArg_array_element_0_string":"PureString"}
* Error: TypeError: Cannot read property 'done' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":3,"ExpansionArg_array_element_0_bool":false,"_bound":15}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"ExpandedSwitcher":0,"_bound":10} start 140.0695 took 12.4555s
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":4,"ExpansionArg_array_element_0_type":2,"ExpansionArg_array_element_0_int":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":0,"ExpandedSwitcher":0,"_bound":16,"ExpansionArg_array_element_3_type":0} start 145.7442 took 6.892s
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"ExpansionArg_type_4":0,"ExpandedSwitcher":0,"_bound":13,"ExpansionArg_int":0} start 145.4146 took 7.8686s
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":1,"ExpansionArg_type_4":0,"ExpandedSwitcher":0,"_bound":11} start 139.99 took 13.6729s
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":5,"ExpansionArg_array_element_1_string":"","ExpandedSwitcher":0,"_bound":14,"ExpansionArg_array_element_1_bool":false} start 147.29 took 7.6789s
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpansionArg_type":4,"ExpansionArg_array_length":4,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":0,"_bound":16,"ExpansionArg_array_element_3_type":0} start 146.4281 took 8.7416s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpansionArg_type":4,"ExpansionArg_array_length":4,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":0,"_bound":16,"ExpansionArg_array_element_3_type":0}
* Error: SyntaxError: Unexpected token ,
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpansionArg_type":4,"ExpansionArg_array_length":4,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":0,"_bound":16}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":4,"ExpansionArg_array_element_0_bool":false,"ExpandedSwitcher":0,"_bound":14,"ExpansionArg_array_element_0_array_length":0} start 150.9975 took 4.2518s
*-- Test Case {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":4,"ExpansionArg_array_element_0_bool":false,"_bound":16,"ExpansionArg_array_element_0_array_length":0} start 141.2371 took 14.4038s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":4,"ExpansionArg_array_element_0_bool":false,"_bound":16,"ExpansionArg_array_element_0_array_length":0}
* Error: TypeError: Cannot read property 'done' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":4,"ExpansionArg_array_element_0_bool":false,"_bound":16}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":5,"ExpansionArg_array_element_0_bool":false,"ExpandedSwitcher":0,"_bound":14,"ExpansionArg_array_element_1_type":0} start 147.0207 took 8.8089s
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":3,"ExpansionArg_array_element_0_string":"","_bound":15,"ExpansionArg_array_element_1_type":0} start 144.7936 took 11.2877s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":3,"ExpansionArg_array_element_0_string":"","_bound":15,"ExpansionArg_array_element_1_type":0}
* Error: SyntaxError: Unexpected token ,
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":3,"ExpansionArg_array_element_0_string":"","_bound":15}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":2,"ExpandedSwitcher":0,"_bound":14,"ExpansionArg_int":0} start 144.8754 took 12.3122s
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"","ExpansionArg_type_4":1,"_bound":13} start 155.2935 took 5.3314s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"","ExpansionArg_type_4":1,"_bound":13}
* Error: TypeError: Cannot read property 'attachEvent' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"","ExpansionArg_type_4":1,"_bound":13}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_1_type":0,"ExpandedSwitcher":0,"_bound":13,"ExpansionArg_array_element_2_type":0} start 149.4868 took 11.1912s
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":2,"ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"ExpandedSwitcher":0,"_bound":12,"ExpansionArg_int":0} start 150.4137 took 11.6795s
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":1,"ExpandedSwitcher":0,"_bound":12} start 149.8085 took 12.7658s
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":0,"ExpansionArg_type_3":5,"ExpansionArg_int":0,"ExpansionArg_type_4":0,"ExpandedSwitcher":0,"_bound":14,"ExpansionArg_bool":false} start 153.3497 took 9.6223s
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":2,"ExpansionArg_array_element_1_string":"","ExpandedSwitcher":0,"_bound":13,"ExpansionArg_array_element_1_int":0} start 148.0366 took 14.9968s
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"ExpandedSwitcher":0,"_bound":11,"ExpansionArg_string":"PureString"} start 152.5632 took 10.8654s
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_type_4":0,"ExpandedSwitcher":0,"_bound":12,"ExpansionArg_string":"PureString"} start 153.7008 took 9.8301s
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":5,"ExpansionArg_bool":false,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":4,"ExpansionArg_array_length":1,"ExpandedSwitcher":0,"_bound":19,"ExpansionArg_array_element_0_type":0} start 151.6484 took 13.2302s
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":5,"ExpansionArg_int":0,"ExpandedSwitcher":0,"_bound":15,"ExpansionArg_bool":false} start 157.2245 took 8.8856s
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":5,"ExpansionArg_bool":false,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"ExpansionArg_type_4":0,"ExpandedSwitcher":0,"_bound":18,"ExpansionArg_array_element_0_type":0} start 152.7297 took 13.4291s
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"","ExpansionArg_type_4":2,"_bound":14,"ExpansionArg_int":0} start 160.6683 took 6.7206s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"","ExpansionArg_type_4":2,"_bound":14,"ExpansionArg_int":0}
* Error: TypeError: Cannot read property 'attachEvent' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"","ExpansionArg_type_4":2,"_bound":14}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"_bound":9,"ExpansionArg_int":0} start 155.2387 took 12.6278s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"_bound":9,"ExpansionArg_int":0}
* Error: TypeError: Cannot read property 'attachEvent' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"_bound":9}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":4,"ExpansionArg_array_element_1_bool":false,"ExpandedSwitcher":0,"_bound":15,"ExpansionArg_array_element_1_array_length":0} start 154.9887 took 14.506s
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"ExpansionArg_type_4":0,"_bound":10,"ExpansionArg_int":0} start 155.878 took 14.1807s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"ExpansionArg_type_4":0,"_bound":10,"ExpansionArg_int":0}
* Error: TypeError: Cannot read property 'attachEvent' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"ExpansionArg_type_4":0,"_bound":10}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":17,"ExpansionArg_array_element_1_type":0} start 156.1039 took 14.5733s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":17,"ExpansionArg_array_element_1_type":0}
* Error: TypeError: Cannot read property 'attachEvent' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":17}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":6,"ExpansionArg_type":7,"_bound":9,"ExpansionArg_bool":false} start 155.6887 took 15.0753s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":6,"ExpansionArg_type":7,"_bound":9,"ExpansionArg_bool":false}
* Error: ReferenceError: window is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":6,"ExpansionArg_type":7,"_bound":9}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":5,"ExpansionArg_int":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"ExpandedSwitcher":0,"_bound":13,"ExpansionArg_bool":false} start 162.1261 took 9.0882s
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":3,"ExpandedSwitcher":0,"_bound":13,"ExpansionArg_string":"PureString"} start 162.5964 took 9.1564s
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":5,"ExpansionArg_string":"","ExpansionArg_type_4":0,"ExpandedSwitcher":0,"_bound":14,"ExpansionArg_bool":false} start 163.5884 took 8.9329s
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":2,"ExpansionArg_string":"","ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"ExpandedSwitcher":0,"_bound":12,"ExpansionArg_int_2":0} start 163.5046 took 9.4041s
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_bool":false,"ExpansionArg_type_4":0,"ExpandedSwitcher":0,"_bound":15,"ExpansionArg_string_2":"PureString"} start 163.1154 took 10.3842s
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_bool":false,"ExpansionArg_type_4":0,"ExpandedSwitcher":0,"_bound":16,"ExpansionArg_array_length":0} start 162.9924 took 10.9575s
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":3,"ExpansionArg_bool":false,"ExpandedSwitcher":0,"_bound":16,"ExpansionArg_string_2":"PureString"} start 166.1483 took 8.1803s
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":5,"ExpansionArg_bool":false,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"ExpandedSwitcher":0,"_bound":17,"ExpansionArg_array_element_0_type":0} start 160.7125 took 15.6275s
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"","ExpansionArg_type_4":5,"ExpansionArg_int":0,"_bound":15,"ExpansionArg_bool":false} start 167.4272 took 9.9937s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"","ExpansionArg_type_4":5,"ExpansionArg_int":0,"_bound":15,"ExpansionArg_bool":false}
* Error: TypeError: Cannot read property 'attachEvent' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"","ExpansionArg_type_4":5,"ExpansionArg_int":0,"_bound":15}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":5,"ExpansionArg_string":"","ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"ExpandedSwitcher":0,"_bound":13,"ExpansionArg_bool":false} start 164.9233 took 13.5963s
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":4,"ExpansionArg_bool":false,"ExpandedSwitcher":0,"_bound":17,"ExpansionArg_array_length":0} start 166.2169 took 13.4424s
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_int":0,"ExpansionArg_type_4":0,"_bound":12,"ExpansionArg_string":"PureString"} start 170.1206 took 9.5878s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_int":0,"ExpansionArg_type_4":0,"_bound":12,"ExpansionArg_string":"PureString"}
* Error: TypeError: Cannot read property 'attachEvent' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_int":0,"ExpansionArg_type_4":0,"_bound":12}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_bool":false,"ExpansionArg_type_4":0,"ExpandedSwitcher":0,"_bound":15,"ExpansionArg_array_length":0} start 172.5766 took 7.3051s
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"ExpansionArg_string":"","ExpansionArg_type_4":0,"ExpandedSwitcher":0,"_bound":13,"ExpansionArg_int_2":0} start 169.5324 took 10.8759s
*-- Test Case {"Switcher":false,"Target_Switch_Base":6,"ExpansionArg_type":4,"ExpansionArg_bool":false,"_bound":13,"ExpansionArg_array_length":0} start 170.8159 took 11.4182s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":6,"ExpansionArg_type":4,"ExpansionArg_bool":false,"_bound":13,"ExpansionArg_array_length":0}
* Error: ReferenceError: window is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":6,"ExpansionArg_type":4,"ExpansionArg_bool":false,"_bound":13}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":6,"ExpansionArg_type":3,"ExpansionArg_bool":false,"_bound":12,"ExpansionArg_string":"PureString"} start 171.7973 took 10.524s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":6,"ExpansionArg_type":3,"ExpansionArg_bool":false,"_bound":12,"ExpansionArg_string":"PureString"}
* Error: ReferenceError: window is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":6,"ExpansionArg_type":3,"ExpansionArg_bool":false,"_bound":12}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":1,"ExpansionArg_type_2":1,"ExpansionArg_int":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"_bound":10} start 170.7073 took 11.7037s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":1,"ExpansionArg_type_2":1,"ExpansionArg_int":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"_bound":10}
* Error: TypeError: Cannot read property 'attachEvent' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":1,"ExpansionArg_type_2":1,"ExpansionArg_int":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"_bound":10}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":1,"ExpansionArg_type_2":3,"ExpansionArg_int":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"_bound":11,"ExpansionArg_string":"PureString"} start 167.9739 took 14.5403s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":1,"ExpansionArg_type_2":3,"ExpansionArg_int":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"_bound":11,"ExpansionArg_string":"PureString"}
* Error: TypeError: Cannot read property 'attachEvent' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":1,"ExpansionArg_type_2":3,"ExpansionArg_int":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"_bound":11}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":6,"ExpansionArg_type":2,"ExpansionArg_bool":false,"_bound":11,"ExpansionArg_int":0} start 176.4168 took 6.1601s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":6,"ExpansionArg_type":2,"ExpansionArg_bool":false,"_bound":11,"ExpansionArg_int":0}
* Error: ReferenceError: window is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":6,"ExpansionArg_type":2,"ExpansionArg_bool":false,"_bound":11}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":3,"ExpansionArg_bool":false,"ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"ExpandedSwitcher":0,"_bound":14,"ExpansionArg_string_2":"PureString"} start 173.5523 took 9.1198s
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"","ExpansionArg_type_4":3,"ExpansionArg_bool":false,"_bound":16,"ExpansionArg_string_2":"PureString"} start 178.5368 took 5.4945s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"","ExpansionArg_type_4":3,"ExpansionArg_bool":false,"_bound":16,"ExpansionArg_string_2":"PureString"}
* Error: TypeError: Cannot read property 'attachEvent' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"","ExpansionArg_type_4":3,"ExpansionArg_bool":false,"_bound":16}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":4,"ExpansionArg_bool":false,"ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"ExpandedSwitcher":0,"_bound":15,"ExpansionArg_array_length":0} start 171.2515 took 13.2502s
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":5,"ExpansionArg_string":"","ExpansionArg_type_4":0,"_bound":13,"ExpansionArg_bool":false} start 179.7802 took 4.7767s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":5,"ExpansionArg_string":"","ExpansionArg_type_4":0,"_bound":13,"ExpansionArg_bool":false}
* Error: TypeError: Cannot read property 'attachEvent' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":5,"ExpansionArg_string":"","ExpansionArg_type_4":0,"_bound":13}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":5,"ExpansionArg_string":"","ExpandedSwitcher":0,"_bound":15,"ExpansionArg_bool":false} start 172.9486 took 13.2756s
*-- Test Case {"Switcher":false,"Target_Switch_Base":6,"ExpansionArg_type":1,"ExpansionArg_bool":false,"_bound":10} start 173.9737 took 12.7324s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":6,"ExpansionArg_type":1,"ExpansionArg_bool":false,"_bound":10}
* Error: ReferenceError: window is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":6,"ExpansionArg_type":1,"ExpansionArg_bool":false,"_bound":10}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":2,"ExpansionArg_string":"","ExpandedSwitcher":0,"_bound":14,"ExpansionArg_int_2":0} start 174.378 took 13.1628s
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":1,"ExpansionArg_type_2":5,"ExpansionArg_string":"","ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"_bound":12,"ExpansionArg_bool":false} start 182.5407 took 5.7031s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":1,"ExpansionArg_type_2":5,"ExpansionArg_string":"","ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"_bound":12,"ExpansionArg_bool":false}
* Error: TypeError: Cannot read property 'attachEvent' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":1,"ExpansionArg_type_2":5,"ExpansionArg_string":"","ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"_bound":12}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":2,"ExpansionArg_type_4":0,"_bound":10,"ExpansionArg_int":0} start 179.9209 took 8.6297s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":2,"ExpansionArg_type_4":0,"_bound":10,"ExpansionArg_int":0}
* Error: TypeError: Cannot read property 'attachEvent' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":2,"ExpansionArg_type_4":0,"_bound":10}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"ExpandedSwitcher":0,"_bound":13} start 182.6486 took 9.2862s
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":5,"ExpansionArg_array_element_0_bool":false,"_bound":16,"ExpansionArg_array_element_1_type":0} start 182.4529 took 9.5476s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":5,"ExpansionArg_array_element_0_bool":false,"_bound":16,"ExpansionArg_array_element_1_type":0}
* Error: SyntaxError: missing ) after argument list
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":5,"ExpansionArg_array_element_0_bool":false,"_bound":16}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"","ExpansionArg_type_4":4,"ExpansionArg_bool":false,"_bound":17,"ExpansionArg_array_length":0} start 177.4928 took 14.9862s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"","ExpansionArg_type_4":4,"ExpansionArg_bool":false,"_bound":17,"ExpansionArg_array_length":0}
* Error: TypeError: Cannot read property 'attachEvent' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"","ExpansionArg_type_4":4,"ExpansionArg_bool":false,"_bound":17}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_bool":false,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"ExpansionArg_type_4":0,"_bound":18,"ExpansionArg_array_element_0_type":0} start 182.6928 took 9.9217s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_bool":false,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"ExpansionArg_type_4":0,"_bound":18,"ExpansionArg_array_element_0_type":0}
* Error: TypeError: Cannot read property 'attachEvent' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_bool":false,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"ExpansionArg_type_4":0,"_bound":18}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":0,"ExpansionArg_type_4":2,"_bound":11,"ExpansionArg_int":0} start 180.4647 took 12.1498s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":0,"ExpansionArg_type_4":2,"_bound":11,"ExpansionArg_int":0}
* Error: TypeError: Cannot read property 'attachEvent' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":0,"ExpansionArg_type_4":2,"_bound":11}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":2,"_bound":11,"ExpansionArg_int":0} start 182.3578 took 10.2568s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":2,"_bound":11,"ExpansionArg_int":0}
* Error: TypeError: Cannot read property 'attachEvent' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":2,"_bound":11}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":1,"ExpansionArg_int":0,"ExpansionArg_type_4":0,"_bound":11} start 182.2952 took 10.6804s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":1,"ExpansionArg_int":0,"ExpansionArg_type_4":0,"_bound":11}
* Error: TypeError: Cannot read property 'attachEvent' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":1,"ExpansionArg_int":0,"ExpansionArg_type_4":0,"_bound":11}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":4,"ExpansionArg_bool":false,"ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"ExpandedSwitcher":0,"_bound":14,"ExpansionArg_array_length":0} start 179.6813 took 13.5433s
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":1,"ExpandedSwitcher":0,"_bound":15} start 184.0661 took 9.4668s
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_bool":false,"ExpansionArg_type_4":0,"_bound":14,"ExpansionArg_array_length":0} start 184.6264 took 11.519s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_bool":false,"ExpansionArg_type_4":0,"_bound":14,"ExpansionArg_array_length":0}
* Error: TypeError: Cannot read property 'attachEvent' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_bool":false,"ExpansionArg_type_4":0,"_bound":14}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":1,"ExpansionArg_int":0,"ExpansionArg_type_4":0,"_bound":11} start 188.5922 took 7.6895s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":1,"ExpansionArg_int":0,"ExpansionArg_type_4":0,"_bound":11}
* Error: TypeError: Cannot read property 'attachEvent' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":1,"ExpansionArg_int":0,"ExpansionArg_type_4":0,"_bound":11}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":2,"ExpansionArg_array_element_0_int":0,"_bound":14,"ExpansionArg_array_element_1_type":0} start 186.7485 took 10.3127s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":2,"ExpansionArg_array_element_0_int":0,"_bound":14,"ExpansionArg_array_element_1_type":0}
* Error: SyntaxError: missing ) after argument list
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":2,"ExpansionArg_array_element_0_int":0,"_bound":14}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":4,"ExpansionArg_array_element_0_array_length":1,"ExpandedSwitcher":0,"_bound":14,"ExpansionArg_array_element_0_array_element_0_type":0} start 184.5244 took 12.6567s
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":1,"ExpansionArg_type_4":0,"ExpandedSwitcher":0,"_bound":14} start 187.5621 took 10.1486s
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":1,"ExpansionArg_type_2":4,"ExpansionArg_bool":false,"ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"_bound":13,"ExpansionArg_array_length":0} start 188.262 took 9.9519s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":1,"ExpansionArg_type_2":4,"ExpansionArg_bool":false,"ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"_bound":13,"ExpansionArg_array_length":0}
* Error: TypeError: Cannot read property 'attachEvent' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":1,"ExpansionArg_type_2":4,"ExpansionArg_bool":false,"ExpansionArg_type_3":0,"ExpansionArg_type_4":0,"_bound":13}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":0,"ExpansionArg_type_4":3,"ExpansionArg_int":0,"_bound":13,"ExpansionArg_string":"PureString"} start 192.8365 took 6.0353s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":0,"ExpansionArg_type_4":3,"ExpansionArg_int":0,"_bound":13,"ExpansionArg_string":"PureString"}
* Error: TypeError: Cannot read property 'attachEvent' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":0,"ExpansionArg_type_4":3,"ExpansionArg_int":0,"_bound":13}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":4,"ExpansionArg_bool":false,"ExpandedSwitcher":0,"_bound":16,"ExpansionArg_array_length":0} start 186.2496 took 13.2754s
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":3,"ExpansionArg_int":0,"_bound":13,"ExpansionArg_string":"PureString"} start 192.8703 took 8.0075s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":3,"ExpansionArg_int":0,"_bound":13,"ExpansionArg_string":"PureString"}
* Error: TypeError: Cannot read property 'attachEvent' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":3,"ExpansionArg_int":0,"_bound":13}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":1,"ExpansionArg_int":0,"_bound":12} start 193.0228 took 8.5009s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":1,"ExpansionArg_int":0,"_bound":12}
* Error: TypeError: Cannot read property 'attachEvent' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":1,"ExpansionArg_int":0,"_bound":12}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":0,"ExpansionArg_type_4":1,"ExpansionArg_int":0,"_bound":12} start 193.2922 took 9.1128s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":0,"ExpansionArg_type_4":1,"ExpansionArg_int":0,"_bound":12}
* Error: TypeError: Cannot read property 'attachEvent' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":0,"ExpansionArg_type_4":1,"ExpansionArg_int":0,"_bound":12}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"ExpansionArg_type_4":2,"ExpandedSwitcher":0,"_bound":16,"ExpansionArg_int":0} start 193.574 took 8.8854s
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":1,"_bound":13,"ExpansionArg_array_element_1_type":0} start 196.1669 took 8.7984s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":1,"_bound":13,"ExpansionArg_array_element_1_type":0}
* Error: SyntaxError: Unexpected token ,
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":1,"_bound":13}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":2,"ExpansionArg_array_element_0_int":0,"ExpansionArg_array_element_1_type":1,"ExpandedSwitcher":0,"_bound":13} start 196.3218 took 9.3348s
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":3,"ExpansionArg_int":0,"ExpansionArg_type_4":0,"_bound":12,"ExpansionArg_string":"PureString"} start 192.0939 took 13.606s