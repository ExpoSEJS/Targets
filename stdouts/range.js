+ range.js@1.1.0
updated 1 package in 5.343s
Setup Done exists, not setting up
:../FeatureTester/libs/:/home/blake/Targets/range.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /home/blake/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000

*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound consoleCall","toUpperCase","toString","apply","bound ","Number","join","pop","lastIndexOf","reverse"]
*-- regex: 75
*-- Stat Module Done --*
*-- Test Case {"_bound":0,"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":0} start 0.0071 took 0.8669s
*-- Errors occured in test {"_bound":0,"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":0}
* Error: TypeError: Cannot read property 'join' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Test Case {"Switcher":true,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"_bound":1,"ExpansionArg_type_3":0} start 0.892 took 0.735s
*-- Errors occured in test {"Switcher":true,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"_bound":1,"ExpansionArg_type_3":0}
* Error: TypeError: Cannot read property 'toLowerCase' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"_bound":1}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"_bound":2} start 0.8864 took 0.7924s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"_bound":2}
* Error: TypeError: Cannot read property '0' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"_bound":2}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"_bound":4} start 0.8944 took 0.9228s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"_bound":4}
* Error: TypeError: Cannot read property 'join' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"_bound":4}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"_bound":3} start 0.8832 took 0.953s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"_bound":3}
* Error: TypeError: Cannot read property 'join' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"_bound":3}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":0,"_bound":3} start 1.6421 took 0.7429s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":0,"_bound":3}
* Error: TypeError: Cannot read property 'toLowerCase' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":0,"_bound":3}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"_bound":3} start 1.69 took 0.7712s
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":2,"Target_Switcher":0} start 1.654 took 0.8809s
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"_bound":5,"ExpansionArg_int":0} start 1.6994 took 0.8905s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"_bound":5,"ExpansionArg_int":0}
* Error: TypeError: Cannot read property '0' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"_bound":5}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":2,"ExpansionArg_type_2":0,"_bound":4,"ExpansionArg_int":0} start 1.7123 took 0.9318s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":2,"ExpansionArg_type_2":0,"_bound":4,"ExpansionArg_int":0}
* Error: TypeError: Cannot read property 'slice' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":2,"ExpansionArg_type_2":0,"_bound":4}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"_bound":5,"ExpansionArg_int":0} start 1.8339 took 0.9591s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"_bound":5,"ExpansionArg_int":0}
* Error: TypeError: Cannot read property 'join' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"_bound":5}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"ExpansionArg_type_2":0,"_bound":4,"ExpansionArg_int":0} start 1.8469 took 0.9622s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"ExpansionArg_type_2":0,"_bound":4,"ExpansionArg_int":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"ExpansionArg_type_2":0,"_bound":4}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":1,"_bound":4} start 1.6766 took 1.3456s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":1,"_bound":4}
* Error: TypeError: Cannot read property 'toLowerCase' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":1,"_bound":4}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"_bound":5,"ExpansionArg_int":0} start 1.8699 took 1.181s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"_bound":5,"ExpansionArg_int":0}
* Error: TypeError: Cannot read property 'join' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"_bound":5}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"Target_Switcher":0,"_bound":3,"ExpansionArg_int":0} start 2.5543 took 0.885s
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":3,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"_bound":6,"ExpansionArg_string":"PureString"} start 2.6586 took 0.8601s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":3,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"_bound":6,"ExpansionArg_string":"PureString"}
* Error: TypeError: Cannot read property 'slice' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":3,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"_bound":6}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_type_3":0,"_bound":4,"ExpansionArg_int":0} start 2.4099 took 1.2294s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_type_3":0,"_bound":4,"ExpansionArg_int":0}
* Error: TypeError: Cannot read property 'toLowerCase' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_type_3":0,"_bound":4}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":2,"_bound":5,"ExpansionArg_int":0} start 2.4238 took 1.28s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":2,"_bound":5,"ExpansionArg_int":0}
* Error: TypeError: Cannot read property 'toLowerCase' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":2,"_bound":5}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_int":0,"_bound":6} start 2.6189 took 1.2657s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_int":0,"_bound":6}
* Error: TypeError: Cannot read property '0' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_int":0,"_bound":6}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"ExpansionArg_int":0,"_bound":7,"ExpansionArg_string":"PureString"} start 2.6102 took 1.2897s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"ExpansionArg_int":0,"_bound":7,"ExpansionArg_string":"PureString"}
* Error: TypeError: Cannot read property '0' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"ExpansionArg_int":0,"_bound":7}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"ExpansionArg_int":0,"_bound":6,"ExpansionArg_string":"PureString"} start 2.8063 took 1.1136s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"ExpansionArg_int":0,"_bound":6,"ExpansionArg_string":"PureString"}
* Error: TypeError: Cannot read property 'join' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"ExpansionArg_int":0,"_bound":6}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"Target_Switcher":0,"_bound":5,"ExpansionArg_int":0} start 2.5821 took 1.4293s
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":1,"ExpansionArg_int":0,"_bound":6} start 3.0932 took 0.9429s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":1,"ExpansionArg_int":0,"_bound":6}
* Error: TypeError: Cannot read property 'join' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":1,"ExpansionArg_int":0,"_bound":6}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"_bound":7,"ExpansionArg_string":"PureString","ExpandedSwitcher":0} start 2.6747 took 1.4641s
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"_bound":5,"ExpansionArg_int":0} start 3.0314 took 1.1212s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"_bound":5,"ExpansionArg_int":0}
* Error: TypeError: Cannot read property 'toLowerCase' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"_bound":5}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":1,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"_bound":5} start 2.6662 took 1.5978s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":1,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"_bound":5}
* Error: TypeError: Cannot read property '0' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":1,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"_bound":5}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"_bound":5,"ExpansionArg_string":"PureString"} start 2.826 took 1.4664s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"_bound":5,"ExpansionArg_string":"PureString"}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"_bound":5}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_type_3":0,"Target_Switcher":0,"_bound":4,"ExpansionArg_int":0} start 2.5744 took 1.8258s
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"_bound":6,"ExpansionArg_string":"PureString"} start 2.8342 took 1.6966s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"_bound":6,"ExpansionArg_string":"PureString"}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"_bound":6}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_string":"","ExpansionArg_type_2":0,"_bound":7,"ExpansionArg_array_length":0} start 3.5386 took 1.112s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_string":"","ExpansionArg_type_2":0,"_bound":7,"ExpansionArg_array_length":0}
* Error: TypeError: Cannot read property 'slice' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_string":"","ExpansionArg_type_2":0,"_bound":7}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":2,"ExpansionArg_int":3,"_bound":8} start 3.726 took 0.9761s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":2,"ExpansionArg_int":3,"_bound":8}
* Error: TypeError: Cannot read property 'toLowerCase' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":2,"ExpansionArg_int":3,"_bound":8}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"Target_Switcher":0,"_bound":4,"ExpansionArg_string":"PureString"} start 3.4611 took 1.4218s
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"ExpansionArg_int":0,"ExpansionArg_type_3":0,"_bound":5,"ExpansionArg_string":"PureString"} start 3.702 took 1.2021s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"ExpansionArg_int":0,"ExpansionArg_type_3":0,"_bound":5,"ExpansionArg_string":"PureString"}
* Error: TypeError: Cannot read property 'toLowerCase' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"ExpansionArg_int":0,"ExpansionArg_type_3":0,"_bound":5}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":3,"ExpansionArg_int":0,"_bound":7,"ExpansionArg_string":"PureString"} start 3.0776 took 1.9433s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":3,"ExpansionArg_int":0,"_bound":7,"ExpansionArg_string":"PureString"}
* Error: TypeError: Cannot read property 'join' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":3,"ExpansionArg_int":0,"_bound":7}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":3,"ExpansionArg_int":0,"_bound":7,"ExpansionArg_string":"PureString"} start 3.8981 took 1.1612s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":3,"ExpansionArg_int":0,"_bound":7,"ExpansionArg_string":"PureString"}
* Error: TypeError: Cannot read property 'toLowerCase' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":3,"ExpansionArg_int":0,"_bound":7}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_string":"","_bound":8,"ExpansionArg_array_length":0} start 3.918 took 1.1653s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_string":"","_bound":8,"ExpansionArg_array_length":0}
* Error: TypeError: Cannot read property '0' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_string":"","_bound":8}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":4,"ExpansionArg_string":"","ExpandedSwitcher":0,"_bound":10,"ExpansionArg_array_length":0} start 4.1504 took 0.9811s
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":1,"ExpansionArg_int":0,"_bound":6} start 4.2904 took 0.9547s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":1,"ExpansionArg_int":0,"_bound":6}
* Error: TypeError: Cannot read property 'toLowerCase' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":1,"ExpansionArg_int":0,"_bound":6}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"ExpansionArg_int":3,"Target_Switcher":0,"_bound":8} start 4.0342 took 1.2631s
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":1,"ExpansionArg_int":0,"Target_Switcher":0,"_bound":6} start 4.426 took 0.889s
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_int":0,"Target_Switcher":0,"_bound":7,"ExpansionArg_string":"PureString"} start 4.0503 took 1.3131s
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_string":"","_bound":7,"ExpansionArg_array_length":0} start 3.9379 took 1.4487s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_string":"","_bound":7,"ExpansionArg_array_length":0}
* Error: TypeError: Cannot read property 'join' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_string":"","_bound":7}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"ExpansionArg_int":3,"_bound":7} start 4.1822 took 1.3802s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"ExpansionArg_int":3,"_bound":7}
* Error: TypeError: Cannot read property 'toLowerCase' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"ExpansionArg_int":3,"_bound":7}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_type_2":0,"_bound":9,"ExpansionArg_array_element_0_type":0} start 4.6677 took 1.0237s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_type_2":0,"_bound":9,"ExpansionArg_array_element_0_type":0}
* Error: TypeError: Cannot read property 'slice' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_type_2":0,"_bound":9}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":4,"ExpansionArg_string":"","_bound":9,"ExpansionArg_array_length":0} start 4.5581 took 1.233s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":4,"ExpansionArg_string":"","_bound":9,"ExpansionArg_array_length":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":4,"ExpansionArg_string":"","_bound":9}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_string":"","ExpansionArg_type_2":0,"_bound":6,"ExpansionArg_array_length":0} start 4.3123 took 1.5933s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_string":"","ExpansionArg_type_2":0,"_bound":6,"ExpansionArg_array_length":0}
* Error: TypeError: Cannot read property 'join' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_string":"","ExpansionArg_type_2":0,"_bound":6}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"[","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"Target_Switcher":0,"_bound":9} start 4.9021 took 1.0809s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"[","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"Target_Switcher":0,"_bound":9}
* Error: TypeError: Cannot read property 'toUpperCase' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"[","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"Target_Switcher":0,"_bound":9}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_string":"","ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"Target_Switcher":0,"_bound":5,"ExpansionArg_array_length":0} start 4.922 took 1.0988s
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":3,"ExpansionArg_string":"","_bound":9} start 5.078 took 1.0382s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":3,"ExpansionArg_string":"","_bound":9}
* Error: TypeError: Cannot read property 'toLowerCase' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":3,"ExpansionArg_string":"","_bound":9}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"","Target_Switcher":0,"_bound":9} start 5.3846 took 0.9611s
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpandedSwitcher":0,"_bound":12,"ExpansionArg_array_element_0_type":0} start 5.1627 took 1.2991s
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"ExpandedSwitcher":0,"_bound":11,"ExpansionArg_bool":false} start 5.2582 took 1.2298s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"ExpandedSwitcher":0,"_bound":11,"ExpansionArg_bool":false}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"ExpandedSwitcher":0,"_bound":11}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":5,"ExpansionArg_array_length":0,"ExpansionArg_type_2":0,"_bound":8,"ExpansionArg_bool":false} start 4.7263 took 1.8135s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":5,"ExpansionArg_array_length":0,"ExpansionArg_type_2":0,"_bound":8,"ExpansionArg_bool":false}
* Error: TypeError: Cannot read property 'slice' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":5,"ExpansionArg_array_length":0,"ExpansionArg_type_2":0,"_bound":8}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_string":"","ExpansionArg_type_3":0,"_bound":6,"ExpansionArg_array_length":0} start 5.0574 took 1.4988s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_string":"","ExpansionArg_type_3":0,"_bound":6,"ExpansionArg_array_length":0}
* Error: TypeError: Cannot read property 'toLowerCase' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_string":"","ExpansionArg_type_3":0,"_bound":6}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":8,"ExpansionArg_array_length":0} start 5.3262 took 1.2635s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":8,"ExpansionArg_array_length":0}
* Error: TypeError: Cannot read property 'toLowerCase' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":8}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":8,"ExpansionArg_bool":false} start 5.5784 took 1.085s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":8,"ExpansionArg_bool":false}
* Error: TypeError: Cannot read property 'join' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":8}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"_bound":9,"ExpansionArg_array_element_0_type":0} start 5.41 took 1.3003s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"_bound":9,"ExpansionArg_array_element_0_type":0}
* Error: TypeError: Cannot read property 'join' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"_bound":9}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":9,"ExpansionArg_bool":false} start 5.1049 took 1.6474s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":9,"ExpansionArg_bool":false}
* Error: TypeError: Cannot read property '0' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":9}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_type_2":0,"_bound":8,"ExpansionArg_array_element_0_type":0} start 5.9227 took 0.9868s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_type_2":0,"_bound":8,"ExpansionArg_array_element_0_type":0}
* Error: TypeError: Cannot read property 'join' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_type_2":0,"_bound":8}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"_bound":10,"ExpansionArg_array_element_0_type":0} start 5.3131 took 1.6154s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"_bound":10,"ExpansionArg_array_element_0_type":0}
* Error: TypeError: Cannot read property '0' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"_bound":10}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"_bound":11,"ExpansionArg_array_element_0_type":0} start 5.8062 took 1.1872s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"_bound":11,"ExpansionArg_array_element_0_type":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"_bound":11}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_2":0,"_bound":11,"ExpansionArg_array_element_1_type":0} start 5.7061 took 1.4092s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_2":0,"_bound":11,"ExpansionArg_array_element_1_type":0}
* Error: TypeError: Cannot read property 'slice' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_2":0,"_bound":11}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":10,"ExpansionArg_bool":false} start 6.0187 took 1.2309s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":10,"ExpansionArg_bool":false}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":10}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":5,"ExpansionArg_array_length":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"Target_Switcher":0,"_bound":6,"ExpansionArg_bool":false} start 6.3737 took 1.0637s
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","Target_Switcher":0,"_bound":8,"ExpansionArg_array_length":0} start 6.1279 took 1.3936s
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":2,"ExpansionArg_string":"","ExpandedSwitcher":0,"_bound":9,"ExpansionArg_int_2":0} start 6.4842 took 1.0713s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":2,"ExpansionArg_string":"","ExpandedSwitcher":0,"_bound":9,"ExpansionArg_int_2":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":2,"ExpansionArg_string":"","ExpandedSwitcher":0,"_bound":9}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":3,"ExpansionArg_int":0,"ExpansionArg_type_3":0,"Target_Switcher":0,"_bound":6,"ExpansionArg_string":"PureString"} start 6.5541 took 1.0213s
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":5,"ExpansionArg_array_length":0,"ExpansionArg_type_2":0,"_bound":7,"ExpansionArg_bool":false} start 6.0542 took 1.731s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":5,"ExpansionArg_array_length":0,"ExpansionArg_type_2":0,"_bound":7,"ExpansionArg_bool":false}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":5,"ExpansionArg_array_length":0,"ExpansionArg_type_2":0,"_bound":7}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_int":0,"_bound":6,"ExpansionArg_string":"PureString"} start 6.5664 took 1.229s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_int":0,"_bound":6,"ExpansionArg_string":"PureString"}
* Error: TypeError: Cannot read property 'toLowerCase' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_int":0,"_bound":6}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":4,"ExpansionArg_string":"","_bound":8,"ExpansionArg_array_length":0} start 6.7424 took 1.1221s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":4,"ExpansionArg_string":"","_bound":8,"ExpansionArg_array_length":0}
* Error: TypeError: Cannot read property 'join' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":4,"ExpansionArg_string":"","_bound":8}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":1,"ExpansionArg_int":0,"ExpansionArg_type_3":0,"Target_Switcher":0,"_bound":5} start 7.0063 took 0.9052s
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_type_3":0,"_bound":8,"ExpansionArg_array_element_0_type":0} start 6.6863 took 1.2493s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_type_3":0,"_bound":8,"ExpansionArg_array_element_0_type":0}
* Error: TypeError: Cannot read property 'toLowerCase' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_type_3":0,"_bound":8}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":9,"ExpansionArg_bool":false} start 6.6176 took 1.451s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":9,"ExpansionArg_bool":false}
* Error: TypeError: Cannot read property 'toLowerCase' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":9}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpandedSwitcher":0,"_bound":14,"ExpansionArg_array_element_1_type":0} start 6.9267 took 1.3278s
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"Target_Switcher":0,"_bound":7,"ExpansionArg_array_element_0_type":0} start 6.5225 took 1.7716s
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":1,"ExpansionArg_string":"","ExpandedSwitcher":0,"_bound":8} start 7.5743 took 0.7787s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":1,"ExpansionArg_string":"","ExpandedSwitcher":0,"_bound":8}
* Error: TypeError: Cannot read property 'slice' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":1,"ExpansionArg_string":"","ExpandedSwitcher":0,"_bound":8}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":2,"ExpansionArg_string":"","_bound":8,"ExpansionArg_int_2":0} start 7.5974 took 0.8175s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":2,"ExpansionArg_string":"","_bound":8,"ExpansionArg_int_2":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":2,"ExpansionArg_string":"","_bound":8}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":11,"ExpansionArg_array_element_1_type":0} start 6.9427 took 1.4848s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":11,"ExpansionArg_array_element_1_type":0}
* Error: TypeError: Cannot read property 'join' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":11}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"ExpansionArg_type_3":0,"_bound":7,"ExpansionArg_bool":false} start 6.7765 took 1.663s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"ExpansionArg_type_3":0,"_bound":7,"ExpansionArg_bool":false}
* Error: TypeError: Cannot read property 'toLowerCase' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"ExpansionArg_type_3":0,"_bound":7}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"Target_Switcher":0,"_bound":9,"ExpansionArg_bool":false} start 7.5542 took 1.049s
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":12,"ExpansionArg_array_element_1_type":0} start 7.1341 took 1.5218s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":12,"ExpansionArg_array_element_1_type":0}
* Error: TypeError: Cannot read property '0' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":12}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"ExpansionArg_type_3":0,"Target_Switcher":0,"_bound":5,"ExpansionArg_string":"PureString"} start 7.458 took 1.2183s
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":1,"ExpansionArg_string":"","_bound":7} start 7.9344 took 0.8974s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":1,"ExpansionArg_string":"","_bound":7}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":1,"ExpansionArg_string":"","_bound":7}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"","_bound":8} start 7.8061 took 1.0865s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"","_bound":8}
* Error: TypeError: Cannot read property 'toLowerCase' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"","_bound":8}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":7,"ExpansionArg_array_length":0} start 7.8744 took 1.1742s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":7,"ExpansionArg_array_length":0}
* Error: TypeError: Cannot read property 'toLowerCase' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":7}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"_bound":10,"ExpansionArg_array_element_0_type":0} start 7.2706 took 1.802s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"_bound":10,"ExpansionArg_array_element_0_type":0}
* Error: TypeError: Cannot read property 'toLowerCase' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"_bound":10}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":4,"ExpansionArg_string":"","ExpansionArg_type_3":0,"Target_Switcher":0,"_bound":7,"ExpansionArg_array_length":0} start 7.7942 took 1.3209s
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"Target_Switcher":0,"_bound":6,"ExpansionArg_string":"PureString"} start 8.3634 took 0.8097s
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":13,"ExpansionArg_array_element_1_type":0} start 8.2664 took 0.9346s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":13,"ExpansionArg_array_element_1_type":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":13}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":5,"ExpansionArg_bool":true,"_bound":10} start 8.0982 took 1.138s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":5,"ExpansionArg_bool":true,"_bound":10}
* Error: TypeError: Cannot read property 'toLowerCase' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":5,"ExpansionArg_bool":true,"_bound":10}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":4,"_bound":8,"ExpansionArg_array_length":0} start 7.9697 took 1.4781s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":4,"_bound":8,"ExpansionArg_array_length":0}
* Error: TypeError: Cannot read property 'checks' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":4,"_bound":8}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"_bound":6,"ExpansionArg_int":0} start 8.4264 took 1.0957s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"_bound":6,"ExpansionArg_int":0}
* Error: TypeError: Cannot read property '0' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"_bound":6}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":9,"ExpansionArg_bool":false} start 8.3081 took 1.2559s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":9,"ExpansionArg_bool":false}
* Error: TypeError: Cannot read property 'join' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":9}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_2":0,"_bound":10,"ExpansionArg_array_element_1_type":0} start 8.4711 took 1.1245s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_2":0,"_bound":10,"ExpansionArg_array_element_1_type":0}
* Error: TypeError: Cannot read property 'join' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_2":0,"_bound":10}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":1,"ExpansionArg_string":"","ExpansionArg_type_3":0,"Target_Switcher":0,"_bound":6} start 8.8461 took 0.8479s
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_type_2":0,"_bound":13,"ExpansionArg_array_element_2_type":0} start 8.4384 took 1.2878s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_type_2":0,"_bound":13,"ExpansionArg_array_element_2_type":0}
* Error: TypeError: Cannot read property 'slice' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_type_2":0,"_bound":13}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"Target_Switcher":0,"_bound":10,"ExpansionArg_array_element_0_type":0} start 8.6751 took 1.1483s
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":4,"ExpansionArg_string":"","ExpansionArg_type_3":0,"Target_Switcher":0,"_bound":8,"ExpansionArg_array_length":0} start 8.9062 took 0.9732s
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":2,"ExpansionArg_string":"","ExpansionArg_type_3":0,"Target_Switcher":0,"_bound":7,"ExpansionArg_int_2":0} start 8.6981 took 1.2263s
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"ExpansionArg_type_3":0,"Target_Switcher":0,"_bound":8,"ExpansionArg_bool":false} start 9.1306 took 0.8368s
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"ExpansionArg_string":"","Target_Switcher":0,"_bound":8,"ExpansionArg_int_2":0} start 9.2115 took 0.8267s
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":5,"ExpansionArg_bool":true,"Target_Switcher":0,"_bound":10} start 8.6267 took 1.4385s
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpandedSwitcher":0,"_bound":16,"ExpansionArg_array_element_2_type":0} start 9.0861 took 0.9963s
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"","Target_Switcher":0,"_bound":10} start 9.1993 took 1.1055s
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":1,"ExpansionArg_type_2":3,"ExpansionArg_int":0,"_bound":8,"ExpansionArg_string":"PureString"} start 9.6102 took 0.7968s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":1,"ExpansionArg_type_2":3,"ExpansionArg_int":0,"_bound":8,"ExpansionArg_string":"PureString"}
* Error: TypeError: Cannot read property '0' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":1,"ExpansionArg_type_2":3,"ExpansionArg_int":0,"_bound":8}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":8,"ExpansionArg_bool":false} start 9.0662 took 1.3696s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":8,"ExpansionArg_bool":false}
* Error: TypeError: Cannot read property 'toLowerCase' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":8}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","Target_Switcher":0,"_bound":9,"ExpansionArg_array_length":0} start 9.262 took 1.2548s
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":1,"ExpansionArg_array_length":0,"_bound":9} start 9.5354 took 1.0851s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":1,"ExpansionArg_array_length":0,"_bound":9}
* Error: TypeError: Cannot read property 'slice' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":1,"ExpansionArg_array_length":0,"_bound":9}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":12,"ExpansionArg_bool":false} start 9.5944 took 1.0495s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":12,"ExpansionArg_bool":false}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":12}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":1,"ExpansionArg_type_2":1,"ExpansionArg_int":0,"_bound":7} start 9.7593 took 0.9327s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":1,"ExpansionArg_type_2":1,"ExpansionArg_int":0,"_bound":7}
* Error: TypeError: Cannot read property '0' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":1,"ExpansionArg_type_2":1,"ExpansionArg_int":0,"_bound":7}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":3,"ExpansionArg_array_length":0,"_bound":11,"ExpansionArg_string_2":"PureString","ExpandedSwitcher":0} start 9.4586 took 1.2656s
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":1,"ExpansionArg_string":"","Target_Switcher":0,"_bound":7} start 9.7047 took 1.1829s
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"ExpansionArg_int_2":1,"Target_Switcher":0,"_bound":9} start 10.0617 took 0.8597s
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":3,"_bound":6,"ExpansionArg_string":"PureString"} start 9.9662 took 0.9693s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":3,"_bound":6,"ExpansionArg_string":"PureString"}
* Error: TypeError: Cannot read property 'toLowerCase' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":3,"_bound":6}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"ExpansionArg_type_3":0,"Target_Switcher":0,"_bound":9,"ExpansionArg_bool":false} start 9.8968 took 1.1226s
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":2,"ExpansionArg_array_length":0,"_bound":10,"ExpansionArg_int":0} start 9.8782 took 1.2743s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":2,"ExpansionArg_array_length":0,"_bound":10,"ExpansionArg_int":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":2,"ExpansionArg_array_length":0,"_bound":10}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":4,"_bound":7,"ExpansionArg_array_length":0} start 10.1 took 1.1843s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":4,"_bound":7,"ExpansionArg_array_length":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":4,"_bound":7}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"_bound":10,"ExpansionArg_array_element_0_type":0} start 10.0021 took 1.2892s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"_bound":10,"ExpansionArg_array_element_0_type":0}
* Error: TypeError: Cannot read property 'join' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"_bound":10}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_3":0,"_bound":10,"ExpansionArg_array_element_1_type":0} start 10.0813 took 1.3099s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_3":0,"_bound":10,"ExpansionArg_array_element_1_type":0}
* Error: TypeError: Cannot read property 'toLowerCase' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_3":0,"_bound":10}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":3,"Target_Switcher":0,"_bound":7,"ExpansionArg_string":"PureString"} start 10.6303 took 1.0362s
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":5,"ExpansionArg_bool":true,"_bound":9} start 10.4464 took 1.2453s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":5,"ExpansionArg_bool":true,"_bound":9}
* Error: TypeError: Cannot read property 'toLowerCase' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":5,"ExpansionArg_bool":true,"_bound":9}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"Target_Switcher":0,"_bound":10,"ExpansionArg_bool":false} start 10.5381 took 1.1782s
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":1,"ExpansionArg_type_2":4,"ExpansionArg_string":"","_bound":9,"ExpansionArg_array_length":0} start 10.4347 took 1.2981s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":1,"ExpansionArg_type_2":4,"ExpansionArg_string":"","_bound":9,"ExpansionArg_array_length":0}
* Error: TypeError: Cannot read property '0' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":1,"ExpansionArg_type_2":4,"ExpansionArg_string":"","_bound":9}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"Target_Switcher":0,"_bound":9,"ExpansionArg_array_element_1_type":0} start 10.7231 took 1.0532s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"Target_Switcher":0,"_bound":9,"ExpansionArg_array_element_1_type":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"Target_Switcher":0,"_bound":9}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":5,"_bound":10,"ExpansionArg_bool":false} start 10.3221 took 1.5009s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":5,"_bound":10,"ExpansionArg_bool":false}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":5,"_bound":10}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":12,"ExpansionArg_array_element_1_type":0} start 10.6647 took 1.1868s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":12,"ExpansionArg_array_element_1_type":0}
* Error: TypeError: Cannot read property 'toLowerCase' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":12}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"_bound":14,"ExpansionArg_array_element_2_type":0} start 10.9344 took 1.0407s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"_bound":14,"ExpansionArg_array_element_2_type":0}
* Error: TypeError: Cannot read property '0' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"_bound":14}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"_bound":9,"ExpansionArg_array_element_0_type":0} start 10.9011 took 1.0943s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"_bound":9,"ExpansionArg_array_element_0_type":0}
* Error: TypeError: Cannot read property 'toLowerCase' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"_bound":9}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":4,"ExpansionArg_type_3":0,"Target_Switcher":0,"_bound":6,"ExpansionArg_array_length":0} start 10.7501 took 1.3196s
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":2,"ExpansionArg_string":"","_bound":8,"ExpansionArg_int_2":0} start 11.0343 took 1.0732s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":2,"ExpansionArg_string":"","_bound":8,"ExpansionArg_int_2":0}
* Error: TypeError: Cannot read property 'toLowerCase' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":2,"ExpansionArg_string":"","_bound":8}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":1,"ExpansionArg_string":"","_bound":7} start 11.1623 took 0.9714s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":1,"ExpansionArg_string":"","_bound":7}
* Error: TypeError: Cannot read property 'toLowerCase' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":1,"ExpansionArg_string":"","_bound":7}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":11,"ExpansionArg_bool":false} start 11.3171 took 1.1862s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":11,"ExpansionArg_bool":false}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":11}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":9,"ExpansionArg_array_length":0} start 11.2901 took 1.2372s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":9,"ExpansionArg_array_length":0}
* Error: TypeError: Cannot read property 'toLowerCase' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":9}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":1,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":10,"ExpansionArg_bool":false} start 11.7426 took 0.8053s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":1,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":10,"ExpansionArg_bool":false}
* Error: TypeError: Cannot read property '0' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":1,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":10}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":3,"ExpansionArg_array_length":0,"_bound":10,"ExpansionArg_string_2":"PureString"} start 11.4096 took 1.1838s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":3,"ExpansionArg_array_length":0,"_bound":10,"ExpansionArg_string_2":"PureString"}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":3,"ExpansionArg_array_length":0,"_bound":10}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":5,"ExpansionArg_bool":true,"Target_Switcher":0,"_bound":11} start 11.7304 took 0.8888s
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"","_bound":10} start 10.9657 took 1.6534s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"","_bound":10}
* Error: TypeError: Cannot read property 'toLowerCase' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"","_bound":10}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":1,"ExpansionArg_string":"","Target_Switcher":0,"_bound":8} start 11.6904 took 1.0935s
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":1,"ExpansionArg_array_length":0,"_bound":8} start 11.9942 took 0.8476s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":1,"ExpansionArg_array_length":0,"_bound":8}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":1,"ExpansionArg_array_length":0,"_bound":8}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":1,"ExpansionArg_bool":false,"_bound":11} start 11.8629 took 1.0195s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":1,"ExpansionArg_bool":false,"_bound":11}
* Error: TypeError: Cannot read property 'slice' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":1,"ExpansionArg_bool":false,"_bound":11}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":2,"ExpansionArg_array_length":0,"_bound":9,"ExpansionArg_int":0} start 12.0184 took 1.01s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":2,"ExpansionArg_array_length":0,"_bound":9,"ExpansionArg_int":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":2,"ExpansionArg_array_length":0,"_bound":9}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":4,"ExpansionArg_bool":false,"_bound":14,"ExpansionArg_array_length_2":0,"ExpandedSwitcher":0} start 11.8503 took 1.3165s
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":2,"ExpansionArg_bool":false,"_bound":12,"ExpansionArg_int":0} start 12.1504 took 1.0701s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":2,"ExpansionArg_bool":false,"_bound":12,"ExpansionArg_int":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":2,"ExpansionArg_bool":false,"_bound":12}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":2,"ExpansionArg_string":"","Target_Switcher":0,"_bound":9,"ExpansionArg_int_2":0} start 11.7944 took 1.4512s
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":2,"ExpansionArg_int_2":1,"_bound":9} start 12.1185 took 1.1727s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":2,"ExpansionArg_int_2":1,"_bound":9}
* Error: TypeError: Cannot read property 'toLowerCase' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":2,"ExpansionArg_int_2":1,"_bound":9}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"","Target_Switcher":0,"_bound":11} start 11.7151 took 1.8072s
*-- Test Case {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"ExpansionArg_type_3":0,"Target_Switcher":0,"_bound":10,"ExpansionArg_bool":false} start 12.5747 took 1.0111s
*-- Test Case {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":1,"ExpansionArg_array_length":0,"ExpansionArg_type_3":0,"Target_Switcher":0,"_bound":7} start 12.6177 took 1.1456s
*-- Test Case {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":2,"ExpansionArg_array_length":0,"ExpansionArg_type_3":0,"Target_Switcher":0,"_bound":8,"ExpansionArg_int":0} start 12.0824 took 1.6994s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":2,"ExpansionArg_array_length":0,"ExpansionArg_type_3":0,"Target_Switcher":0,"_bound":8,"ExpansionArg_int":0}
* Error: TypeError: Cannot read property 'toLowerCase' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":2,"ExpansionArg_array_length":0,"ExpansionArg_type_3":0,"Target_Switcher":0,"_bound":8}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":3,"ExpansionArg_array_length":0,"ExpansionArg_type_3":0,"Target_Switcher":0,"_bound":9,"ExpansionArg_string_2":"PureString"} start 12.6301 took 1.2569s
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":10,"ExpansionArg_bool":false} start 12.6531 took 1.2465s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":10,"ExpansionArg_bool":false}
* Error: TypeError: Cannot read property 'toLowerCase' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":10}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":3,"ExpansionArg_bool":false,"_bound":13,"ExpansionArg_string":"PureString","ExpandedSwitcher":0} start 12.5261 took 1.3895s
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"_bound":13,"ExpansionArg_array_element_2_type":0} start 12.9061 took 1.2818s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"_bound":13,"ExpansionArg_array_element_2_type":0}
* Error: TypeError: Cannot read property 'join' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"_bound":13}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":2,"ExpansionArg_type_2":0,"_bound":10,"ExpansionArg_array_element_0_int":0} start 12.8031 took 1.4983s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":2,"ExpansionArg_type_2":0,"_bound":10,"ExpansionArg_array_element_0_int":0}
* Error: TypeError: Cannot read property 'slice' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":2,"ExpansionArg_type_2":0,"_bound":10}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_2":2,"_bound":12,"ExpansionArg_int":0} start 13.1862 took 1.1253s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_2":2,"_bound":12,"ExpansionArg_int":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_2":2,"_bound":12}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":5,"_bound":9,"ExpansionArg_bool":false} start 13.0471 took 1.3747s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":5,"_bound":9,"ExpansionArg_bool":false}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":5,"_bound":9}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"_bound":15,"ExpansionArg_array_element_2_type":0} start 13.2394 took 1.203s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"_bound":15,"ExpansionArg_array_element_2_type":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"_bound":15}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"Target_Switcher":0,"_bound":7,"ExpansionArg_array_length":0} start 12.8542 took 1.6103s
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":4,"_bound":7,"ExpansionArg_array_length":0} start 13.3074 took 1.3561s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":4,"_bound":7,"ExpansionArg_array_length":0}
* Error: TypeError: Cannot read property 'toLowerCase' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":4,"_bound":7}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":2,"ExpansionArg_int_2":3,"Target_Switcher":0,"_bound":10} start 13.2615 took 1.423s
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"Target_Switcher":0,"_bound":12,"ExpansionArg_array_element_1_type":0} start 13.7792 took 1.1362s
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":5,"Target_Switcher":0,"_bound":9,"ExpansionArg_bool":false} start 13.5944 took 1.3672s
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_type_2":0,"_bound":12,"ExpansionArg_array_element_2_type":0} start 13.5355 took 1.6212s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_type_2":0,"_bound":12,"ExpansionArg_array_element_2_type":0}
* Error: TypeError: Cannot read property 'join' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_type_2":0,"_bound":12}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":5,"ExpansionArg_bool":true,"_bound":11} start 13.9144 took 1.2928s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":5,"ExpansionArg_bool":true,"_bound":11}
* Error: TypeError: Cannot read property 'toLowerCase' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":5,"ExpansionArg_bool":true,"_bound":11}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":3,"ExpandedSwitcher":0,"_bound":13,"ExpansionArg_array_element_0_string":"PureString"} start 14.2061 took 1.0309s
*-- Test Case {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":2,"ExpansionArg_int":1,"ExpansionArg_type_3":0,"_bound":15} start 13.9421 took 1.4811s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":2,"ExpansionArg_int":1,"ExpansionArg_type_3":0,"_bound":15}
* Error: TypeError: Cannot read property 'toLowerCase' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":2,"ExpansionArg_int":1,"ExpansionArg_type_3":0,"_bound":15}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":3,"ExpansionArg_bool":false,"_bound":12,"ExpansionArg_string":"PureString"} start 14.4348 took 1.1603s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":3,"ExpansionArg_bool":false,"_bound":12,"ExpansionArg_string":"PureString"}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":3,"ExpansionArg_bool":false,"_bound":12}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_2":1,"ExpansionArg_int":0,"_bound":13} start 14.3409 took 1.2707s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_2":1,"ExpansionArg_int":0,"_bound":13}
* Error: TypeError: Cannot read property 'slice' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_2":1,"ExpansionArg_int":0,"_bound":13}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":0,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"Target_Switcher":0,"_bound":11,"ExpansionArg_bool":false} start 14.4883 took 1.3516s
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":1,"ExpansionArg_bool":false,"_bound":10} start 14.6744 took 1.1878s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":1,"ExpansionArg_bool":false,"_bound":10}
* Error: TypeError: Cannot read property 'join' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":1,"ExpansionArg_bool":false,"_bound":10}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":4,"ExpansionArg_bool":false,"_bound":13,"ExpansionArg_array_length_2":0,"ExpandedSwitcher":0} start 14.7076 took 1.22s
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":3,"ExpansionArg_array_element_0_int":0,"ExpansionArg_type_2":0,"_bound":12,"ExpansionArg_array_element_0_string":"PureString"} start 14.4622 took 1.4893s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":3,"ExpansionArg_array_element_0_int":0,"ExpansionArg_type_2":0,"_bound":12,"ExpansionArg_array_element_0_string":"PureString"}
* Error: TypeError: Cannot read property 'slice' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":3,"ExpansionArg_array_element_0_int":0,"ExpansionArg_type_2":0,"_bound":12}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000","ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":0,"_bound":14} start 13.7957 took 2.1917s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000","ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":0,"_bound":14}
* Error: TypeError: Cannot read property 'toUpperCase' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000","ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":0,"_bound":14}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_0_int":0,"ExpansionArg_type_2":0,"_bound":11} start 14.3104 took 1.7022s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_0_int":0,"ExpansionArg_type_2":0,"_bound":11}
* Error: TypeError: Cannot read property 'slice' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_0_int":0,"ExpansionArg_type_2":0,"_bound":11}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_bool":false,"Target_Switcher":0,"_bound":12,"ExpansionArg_string":"PureString"} start 14.979 took 1.1947s
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":2,"ExpansionArg_array_length":0,"_bound":9,"ExpansionArg_int":0} start 15.2247 took 1.0586s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":2,"ExpansionArg_array_length":0,"_bound":9,"ExpansionArg_int":0}
* Error: TypeError: Cannot read property 'toLowerCase' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":2,"ExpansionArg_array_length":0,"_bound":9}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":5,"ExpansionArg_array_element_0_string":"","ExpandedSwitcher":0,"_bound":16,"ExpansionArg_array_element_0_bool":false} start 15.2504 took 1.1644s
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":5,"ExpansionArg_bool":true,"Target_Switcher":0,"_bound":14} start 15.1729 took 1.2547s
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":3,"ExpansionArg_array_length":0,"_bound":10,"ExpansionArg_string_2":"PureString"} start 15.4353 took 1.0491s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":3,"ExpansionArg_array_length":0,"_bound":10,"ExpansionArg_string_2":"PureString"}
* Error: TypeError: Cannot read property 'toLowerCase' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":3,"ExpansionArg_array_length":0,"_bound":10}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_array_length":0,"Target_Switcher":0,"_bound":10,"ExpansionArg_string_2":"PureString"} start 14.9344 took 1.5943s
*-- Test Case {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":0,"ExpansionArg_type_3":5,"ExpansionArg_bool":true,"Target_Switcher":0,"_bound":12} start 15.8568 took 0.8554s
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":11,"ExpansionArg_bool":false} start 15.8884 took 1.0257s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":11,"ExpansionArg_bool":false}
* Error: TypeError: Cannot read property 'toLowerCase' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":11}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_2":3,"ExpansionArg_int":0,"_bound":14,"ExpansionArg_string":"PureString","ExpandedSwitcher":0} start 15.6276 took 1.3536s
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":5,"ExpansionArg_array_element_0_string":"","ExpansionArg_type_2":0,"_bound":13,"ExpansionArg_array_element_0_bool":false} start 15.9642 took 1.1261s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":5,"ExpansionArg_array_element_0_string":"","ExpansionArg_type_2":0,"_bound":13,"ExpansionArg_array_element_0_bool":false}
* Error: TypeError: Cannot read property 'slice' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":5,"ExpansionArg_array_element_0_string":"","ExpansionArg_type_2":0,"_bound":13}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_0_string":"","ExpandedSwitcher":0,"_bound":14} start 16.0347 took 1.0726s
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"","Target_Switcher":0,"_bound":13} start 16.1902 took 1.1616s
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":4,"ExpansionArg_array_element_0_bool":false,"ExpandedSwitcher":0,"_bound":17,"ExpansionArg_array_element_0_array_length":0} start 16.4264 took 1.0128s
*-- Test Case {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000","ExpansionArg_type_2":2,"ExpansionArg_int":4,"ExpansionArg_type_3":0,"_bound":15} start 16.0115 took 1.4739s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000","ExpansionArg_type_2":2,"ExpansionArg_int":4,"ExpansionArg_type_3":0,"_bound":15}
* Error: TypeError: Cannot read property 'toUpperCase' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"\u0000","ExpansionArg_type_2":2,"ExpansionArg_int":4,"ExpansionArg_type_3":0,"_bound":15}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_bool":false,"Target_Switcher":0,"_bound":13,"ExpansionArg_array_length_2":0} start 15.6105 took 1.9008s
*-- Test Case {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"ExpansionArg_string_2":"","Target_Switcher":0,"_bound":11} start 16.5425 took 1.0445s
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":2,"ExpansionArg_bool":false,"_bound":11,"ExpansionArg_int":0} start 15.9503 took 1.6727s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":2,"ExpansionArg_bool":false,"_bound":11,"ExpansionArg_int":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":2,"ExpansionArg_bool":false,"_bound":11}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":2,"ExpansionArg_int":1,"_bound":10} start 16.3103 took 1.3753s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":2,"ExpansionArg_int":1,"_bound":10}
* Error: TypeError: Cannot read property 'toLowerCase' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":2,"ExpansionArg_int":1,"_bound":10}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":5,"ExpansionArg_bool":true,"_bound":12} start 16.9264 took 0.8258s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":5,"ExpansionArg_bool":true,"_bound":12}
* Error: TypeError: Cannot read property 'toLowerCase' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":5,"ExpansionArg_bool":true,"_bound":12}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"ExpansionArg_array_length":0,"Target_Switcher":0,"_bound":9,"ExpansionArg_int":0} start 16.4946 took 1.2769s
*-- Test Case {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":0,"ExpansionArg_type_3":1,"ExpansionArg_array_length":0,"Target_Switcher":0,"_bound":8} start 17.1295 took 0.9747s
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"ExpansionArg_bool":false,"Target_Switcher":0,"_bound":11,"ExpansionArg_int":0} start 16.4364 took 1.6873s
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_2":5,"ExpansionArg_string":"","ExpandedSwitcher":0,"_bound":15,"ExpansionArg_bool":false} start 16.9904 took 1.3707s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_2":5,"ExpansionArg_string":"","ExpandedSwitcher":0,"_bound":15,"ExpansionArg_bool":false}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_2":5,"ExpansionArg_string":"","ExpandedSwitcher":0,"_bound":15}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":3,"ExpansionArg_string_2":"","_bound":11} start 16.7344 took 1.6657s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":3,"ExpansionArg_string_2":"","_bound":11}
* Error: TypeError: Cannot read property 'toLowerCase' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":3,"ExpansionArg_string_2":"","_bound":11}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":1,"ExpansionArg_array_length":0,"_bound":8} start 17.106 took 1.3634s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":1,"ExpansionArg_array_length":0,"_bound":8}
* Error: TypeError: Cannot read property 'toLowerCase' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":1,"ExpansionArg_array_length":0,"_bound":8}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_type_3":0,"Target_Switcher":0,"_bound":9,"ExpansionArg_array_element_0_type":0} start 17.3624 took 1.1474s
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":2,"ExpansionArg_array_element_0_string":"","ExpandedSwitcher":0,"_bound":15,"ExpansionArg_array_element_0_int":0} start 17.4525 took 1.1755s
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":1,"ExpansionArg_bool":false,"Target_Switcher":0,"_bound":10} start 17.6742 took 0.9829s
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"_bound":13,"ExpansionArg_array_element_0_type":0} start 17.5344 took 1.1638s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"_bound":13,"ExpansionArg_array_element_0_type":0}
* Error: TypeError: Cannot read property 'checks' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"_bound":13}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":5,"ExpansionArg_bool":false,"ExpansionArg_type_2":6,"_bound":9,"ExpansionArg_bool_2":false} start 17.7702 took 1.0969s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":5,"ExpansionArg_bool":false,"ExpansionArg_type_2":6,"_bound":9,"ExpansionArg_bool_2":false}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":5,"ExpansionArg_bool":false,"ExpansionArg_type_2":6,"_bound":9}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_type_3":0,"Target_Switcher":0,"_bound":10,"ExpansionArg_array_element_0_type":0} start 17.6019 took 1.2905s
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":5,"ExpansionArg_type_3":0,"Target_Switcher":0,"_bound":8,"ExpansionArg_bool":false} start 17.7103 took 1.2013s
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":4,"ExpansionArg_array_element_0_bool":false,"ExpansionArg_type_2":0,"_bound":14,"ExpansionArg_array_element_0_array_length":0} start 17.5102 took 1.6357s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":4,"ExpansionArg_array_element_0_bool":false,"ExpansionArg_type_2":0,"_bound":14,"ExpansionArg_array_element_0_array_length":0}
* Error: TypeError: Cannot read property 'slice' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":4,"ExpansionArg_array_element_0_bool":false,"ExpansionArg_type_2":0,"_bound":14}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":4,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":0,"ExpansionArg_type_2":0,"_bound":15,"ExpansionArg_array_element_3_type":0} start 18.1224 took 1.1848s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":4,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":0,"ExpansionArg_type_2":0,"_bound":15,"ExpansionArg_array_element_3_type":0}
* Error: TypeError: Cannot read property 'slice' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":4,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":0,"ExpansionArg_type_2":0,"_bound":15}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"ExpansionArg_int":1,"Target_Switcher":0,"_bound":10} start 17.8143 took 1.6385s
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"ExpansionArg_int":1,"Target_Switcher":0,"_bound":12} start 18.1397 took 1.3241s
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_2":2,"_bound":11,"ExpansionArg_int":0} start 18.4885 took 1.0128s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_2":2,"_bound":11,"ExpansionArg_int":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_2":2,"_bound":11}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"Target_Switcher":0,"_bound":11,"ExpansionArg_array_element_0_type":0} start 18.4194 took 1.2077s
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":2,"ExpansionArg_type_2":0,"_bound":9,"ExpansionArg_array_element_0_int":0} start 18.6751 took 1.0081s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":2,"ExpansionArg_type_2":0,"_bound":9,"ExpansionArg_array_element_0_int":0}
* Error: TypeError: Cannot read property 'join' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":2,"ExpansionArg_type_2":0,"_bound":9}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":5,"ExpansionArg_bool":false,"ExpansionArg_type_2":2,"ExpansionArg_bool_2":false,"_bound":11,"ExpansionArg_int":0} start 18.8911 took 0.8128s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":5,"ExpansionArg_bool":false,"ExpansionArg_type_2":2,"ExpansionArg_bool_2":false,"_bound":11,"ExpansionArg_int":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":5,"ExpansionArg_bool":false,"ExpansionArg_type_2":2,"ExpansionArg_bool_2":false,"_bound":11}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":2,"_bound":10,"ExpansionArg_array_element_0_int":0} start 18.7126 took 1.2005s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":2,"_bound":10,"ExpansionArg_array_element_0_int":0}
* Error: TypeError: Cannot read property 'join' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":2,"_bound":10}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"_bound":12,"ExpansionArg_array_element_0_type":0} start 18.5343 took 1.3978s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"_bound":12,"ExpansionArg_array_element_0_type":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"_bound":12}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":2,"_bound":11,"ExpansionArg_array_element_0_int":0} start 18.646 took 1.5489s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":2,"_bound":11,"ExpansionArg_array_element_0_int":0}
* Error: TypeError: Cannot read property '0' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":2,"_bound":11}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":2,"ExpansionArg_bool":false,"ExpansionArg_type_3":0,"Target_Switcher":0,"_bound":10,"ExpansionArg_int":0} start 18.9255 took 1.3407s
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_2":4,"ExpansionArg_bool":false,"_bound":16,"ExpansionArg_array_length_2":0,"ExpandedSwitcher":0} start 18.3792 took 1.9368s
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":5,"ExpansionArg_bool":false,"ExpansionArg_type_2":1,"ExpansionArg_bool_2":false,"_bound":10} start 18.9103 took 1.4383s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":5,"ExpansionArg_bool":false,"ExpansionArg_type_2":1,"ExpansionArg_bool_2":false,"_bound":10}
* Error: TypeError: Cannot read property 'slice' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":5,"ExpansionArg_bool":false,"ExpansionArg_type_2":1,"ExpansionArg_bool_2":false,"_bound":10}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":3,"ExpansionArg_bool":false,"ExpansionArg_type_3":0,"Target_Switcher":0,"_bound":11,"ExpansionArg_string":"PureString"} start 19.1679 took 1.1989s
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":4,"ExpansionArg_bool":false,"ExpansionArg_type_3":0,"Target_Switcher":0,"_bound":12,"ExpansionArg_array_length_2":0} start 19.331 took 1.1356s
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":3,"ExpansionArg_array_element_0_int":0,"ExpansionArg_type_2":0,"_bound":11,"ExpansionArg_array_element_0_string":"PureString"} start 19.7026 took 0.7918s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":3,"ExpansionArg_array_element_0_int":0,"ExpansionArg_type_2":0,"_bound":11,"ExpansionArg_array_element_0_string":"PureString"}
* Error: TypeError: Cannot read property 'join' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":3,"ExpansionArg_array_element_0_int":0,"ExpansionArg_type_2":0,"_bound":11}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":1,"ExpansionArg_bool":false,"ExpansionArg_type_3":0,"Target_Switcher":0,"_bound":9} start 19.6552 took 1.1466s
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":5,"ExpansionArg_bool":false,"ExpansionArg_type_2":4,"ExpansionArg_bool_2":false,"_bound":13,"ExpansionArg_array_length":0,"ExpandedSwitcher":0} start 19.4625 took 1.3656s
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_0_int":0,"_bound":11} start 19.9458 took 0.9544s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_0_int":0,"_bound":11}
* Error: TypeError: Cannot read property 'join' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_0_int":0,"_bound":11}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_0_int":0,"ExpansionArg_type_2":0,"_bound":10} start 19.7174 took 1.2062s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_0_int":0,"ExpansionArg_type_2":0,"_bound":10}
* Error: TypeError: Cannot read property 'join' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_0_int":0,"ExpansionArg_type_2":0,"_bound":10}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":5,"ExpansionArg_bool":false,"ExpansionArg_type_2":3,"ExpansionArg_bool_2":false,"_bound":12,"ExpansionArg_string":"PureString","ExpandedSwitcher":0} start 19.4819 took 1.5501s
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_2":3,"ExpansionArg_int":0,"_bound":13,"ExpansionArg_string":"PureString"} start 19.9308 took 1.1333s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_2":3,"ExpansionArg_int":0,"_bound":13,"ExpansionArg_string":"PureString"}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_2":3,"ExpansionArg_int":0,"_bound":13}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_2":1,"ExpansionArg_int":0,"_bound":12} start 19.5153 took 1.5941s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_2":1,"ExpansionArg_int":0,"_bound":12}
* Error: TypeError: Cannot read property 'join' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_2":1,"ExpansionArg_int":0,"_bound":12}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":3,"ExpansionArg_type_2":0,"_bound":12,"ExpansionArg_array_element_1_string":"PureString"} start 20.3322 took 1.0382s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":3,"ExpansionArg_type_2":0,"_bound":12,"ExpansionArg_array_element_1_string":"PureString"}
* Error: TypeError: Cannot read property 'slice' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":3,"ExpansionArg_type_2":0,"_bound":12}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":12,"ExpansionArg_array_element_1_type":0} start 20.3858 took 1.0019s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":12,"ExpansionArg_array_element_1_type":0}
* Error: TypeError: Cannot read property 'join' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":12}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":3,"ExpansionArg_array_element_0_int":0,"_bound":12,"ExpansionArg_array_element_0_string":"PureString"} start 20.2025 took 1.235s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":3,"ExpansionArg_array_element_0_int":0,"_bound":12,"ExpansionArg_array_element_0_string":"PureString"}
* Error: TypeError: Cannot read property 'join' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":3,"ExpansionArg_array_element_0_int":0,"_bound":12}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":0,"ExpansionArg_type_3":5,"_bound":9,"ExpansionArg_bool":false} start 20.2787 took 1.2244s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":0,"ExpansionArg_type_3":5,"_bound":9,"ExpansionArg_bool":false}
* Error: TypeError: Cannot read property 'toLowerCase' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":0,"ExpansionArg_type_3":5,"_bound":9}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":4,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":0,"ExpandedSwitcher":0,"_bound":18,"ExpansionArg_array_element_3_type":0} start 20.4865 took 1.0878s
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"_bound":11,"ExpansionArg_array_element_0_type":0} start 20.3656 took 1.4463s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"_bound":11,"ExpansionArg_array_element_0_type":0}
* Error: TypeError: Cannot read property '0' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"_bound":11}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":3,"_bound":12,"ExpansionArg_array_element_0_string":"PureString"} start 20.8269 took 1.1044s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":3,"_bound":12,"ExpansionArg_array_element_0_string":"PureString"}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":3,"_bound":12}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":11,"ExpansionArg_array_element_2_type":0} start 20.9224 took 1.0407s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":11,"ExpansionArg_array_element_2_type":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":11}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":5,"ExpansionArg_array_element_0_string":"","ExpansionArg_type_2":0,"_bound":12,"ExpansionArg_array_element_0_bool":false} start 20.5146 took 1.6586s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":5,"ExpansionArg_array_element_0_string":"","ExpansionArg_type_2":0,"_bound":12,"ExpansionArg_array_element_0_bool":false}
* Error: TypeError: Cannot read property 'join' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":5,"ExpansionArg_array_element_0_string":"","ExpansionArg_type_2":0,"_bound":12}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"_bound":14,"ExpansionArg_array_element_2_type":0} start 21.1228 took 1.1332s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"_bound":14,"ExpansionArg_array_element_2_type":0}
* Error: TypeError: Cannot read property 'toLowerCase' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_type_3":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"_bound":14}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_type_2":3,"_bound":14,"ExpansionArg_string":"PureString","ExpandedSwitcher":0} start 20.9507 took 1.3327s
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":5,"ExpansionArg_array_element_1_string":"","ExpansionArg_type_2":0,"_bound":15,"ExpansionArg_array_element_1_bool":false} start 21.394 took 0.9415s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":5,"ExpansionArg_array_element_1_string":"","ExpansionArg_type_2":0,"_bound":15,"ExpansionArg_array_element_1_bool":false}
* Error: TypeError: Cannot read property 'slice' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":5,"ExpansionArg_array_element_1_string":"","ExpansionArg_type_2":0,"_bound":15}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":5,"ExpansionArg_array_element_0_string":"","_bound":13,"ExpansionArg_array_element_0_bool":false} start 21.4586 took 0.9049s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":5,"ExpansionArg_array_element_0_string":"","_bound":13,"ExpansionArg_array_element_0_bool":false}
* Error: TypeError: Cannot read property 'join' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":5,"ExpansionArg_array_element_0_string":"","_bound":13}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_2":5,"ExpansionArg_string":"","_bound":14,"ExpansionArg_bool":false} start 21.091 took 1.2725s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_2":5,"ExpansionArg_string":"","_bound":14,"ExpansionArg_bool":false}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_2":5,"ExpansionArg_string":"","_bound":14}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_0_int":0,"_bound":12} start 20.8388 took 1.6666s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_0_int":0,"_bound":12}
* Error: TypeError: Cannot read property '0' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_0_int":0,"_bound":12}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":3,"ExpansionArg_array_element_0_int":0,"_bound":13,"ExpansionArg_array_element_0_string":"PureString"} start 21.048 took 1.4718s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":3,"ExpansionArg_array_element_0_int":0,"_bound":13,"ExpansionArg_array_element_0_string":"PureString"}
* Error: TypeError: Cannot read property '0' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":3,"ExpansionArg_array_element_0_int":0,"_bound":13}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":5,"ExpansionArg_array_element_0_string":"","_bound":15,"ExpansionArg_array_element_0_bool":false} start 21.9427 took 1.0147s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":5,"ExpansionArg_array_element_0_string":"","_bound":15,"ExpansionArg_array_element_0_bool":false}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":5,"ExpansionArg_array_element_0_string":"","_bound":15}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":2,"ExpansionArg_array_element_1_string":"","ExpansionArg_type_2":0,"_bound":14,"ExpansionArg_array_element_1_int":0} start 21.3865 took 1.6641s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":2,"ExpansionArg_array_element_1_string":"","ExpansionArg_type_2":0,"_bound":14,"ExpansionArg_array_element_1_int":0}
* Error: TypeError: Cannot read property 'slice' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":2,"ExpansionArg_array_element_1_string":"","ExpansionArg_type_2":0,"_bound":14}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":4,"ExpansionArg_array_element_0_bool":false,"ExpansionArg_type_2":0,"_bound":13,"ExpansionArg_array_element_0_array_length":0} start 22.1914 took 0.909s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":4,"ExpansionArg_array_element_0_bool":false,"ExpansionArg_type_2":0,"_bound":13,"ExpansionArg_array_element_0_array_length":0}
* Error: TypeError: Cannot read property 'join' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":4,"ExpansionArg_array_element_0_bool":false,"ExpansionArg_type_2":0,"_bound":13}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":0,"ExpansionArg_type_3":3,"ExpansionArg_bool":false,"_bound":12,"ExpansionArg_string":"PureString"} start 21.8228 took 1.3769s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":0,"ExpansionArg_type_3":3,"ExpansionArg_bool":false,"_bound":12,"ExpansionArg_string":"PureString"}
* Error: TypeError: Cannot read property 'toLowerCase' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":0,"ExpansionArg_type_3":3,"ExpansionArg_bool":false,"_bound":12}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_0_string":"","_bound":13} start 22.2734 took 1.0706s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_0_string":"","_bound":13}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_0_string":"","_bound":13}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":0,"ExpansionArg_type_3":5,"ExpansionArg_bool":true,"_bound":14} start 21.5143 took 1.914s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":0,"ExpansionArg_type_3":5,"ExpansionArg_bool":true,"_bound":14}
* Error: TypeError: Cannot read property 'toLowerCase' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":0,"ExpansionArg_type_3":5,"ExpansionArg_bool":true,"_bound":14}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":1,"ExpansionArg_array_element_1_string":"","ExpansionArg_type_2":0,"_bound":13} start 21.9737 took 1.469s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":1,"ExpansionArg_array_element_1_string":"","ExpansionArg_type_2":0,"_bound":13}
* Error: TypeError: Cannot read property 'slice' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":1,"ExpansionArg_array_element_1_string":"","ExpansionArg_type_2":0,"_bound":13}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":4,"ExpansionArg_array_element_0_bool":false,"_bound":14,"ExpansionArg_array_element_0_array_length":0} start 22.3759 took 1.0848s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":4,"ExpansionArg_array_element_0_bool":false,"_bound":14,"ExpansionArg_array_element_0_array_length":0}
* Error: TypeError: Cannot read property 'join' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":4,"ExpansionArg_array_element_0_bool":false,"_bound":14}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_2":4,"ExpansionArg_bool":false,"_bound":15,"ExpansionArg_array_length_2":0,"ExpandedSwitcher":0} start 22.3976 took 1.1401s
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_type_2":5,"ExpansionArg_string":"","ExpandedSwitcher":0,"_bound":17,"ExpansionArg_bool":false} start 22.3066 took 1.2807s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_type_2":5,"ExpansionArg_string":"","ExpandedSwitcher":0,"_bound":17,"ExpansionArg_bool":false}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_type_2":5,"ExpansionArg_string":"","ExpandedSwitcher":0,"_bound":17}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":4,"ExpansionArg_array_element_1_bool":false,"ExpansionArg_type_2":0,"_bound":16,"ExpansionArg_array_element_1_array_length":0} start 22.3621 took 1.3601s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":4,"ExpansionArg_array_element_1_bool":false,"ExpansionArg_type_2":0,"_bound":16,"ExpansionArg_array_element_1_array_length":0}
* Error: TypeError: Cannot read property 'slice' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":4,"ExpansionArg_array_element_1_bool":false,"ExpansionArg_type_2":0,"_bound":16}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":0,"ExpansionArg_type_3":4,"ExpansionArg_bool":false,"_bound":13,"ExpansionArg_array_length_2":0} start 21.5963 took 2.1441s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":0,"ExpansionArg_type_3":4,"ExpansionArg_bool":false,"_bound":13,"ExpansionArg_array_length_2":0}
* Error: TypeError: Cannot read property 'toLowerCase' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":0,"ExpansionArg_type_3":4,"ExpansionArg_bool":false,"_bound":13}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_type_2":2,"ExpansionArg_string":"","ExpandedSwitcher":0,"_bound":16,"ExpansionArg_int":0} start 22.5509 took 1.4047s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_type_2":2,"ExpansionArg_string":"","ExpandedSwitcher":0,"_bound":16,"ExpansionArg_int":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_type_2":2,"ExpansionArg_string":"","ExpandedSwitcher":0,"_bound":16}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_type_2":1,"ExpansionArg_string":"","ExpandedSwitcher":0,"_bound":15} start 22.5187 took 1.6564s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_type_2":1,"ExpansionArg_string":"","ExpandedSwitcher":0,"_bound":15}
* Error: TypeError: Cannot read property 'slice' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_type_2":1,"ExpansionArg_string":"","ExpandedSwitcher":0,"_bound":15}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":4,"ExpansionArg_array_element_0_bool":false,"_bound":16,"ExpansionArg_array_element_0_array_length":0} start 22.9774 took 1.4179s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":4,"ExpansionArg_array_element_0_bool":false,"_bound":16,"ExpansionArg_array_element_0_array_length":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":4,"ExpansionArg_array_element_0_bool":false,"_bound":16}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"","_bound":13} start 23.2295 took 1.2374s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"","_bound":13}
* Error: TypeError: Cannot read property 'toLowerCase' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/home/blake/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"","_bound":13}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_type_3":0,"_bound":12,"ExpansionArg_array_element_2_type":0} start 23.127 took 1.392s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_type_3":0,"_bound":12,"ExpansionArg_array_element_2_type":0}