/root/Targets/pilot-lang.js
└── pilot-lang.js@0.1.1 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/pilot-lang.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000

*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","toString","apply","bound ","bind","charCodeAt","reduce","Array","sort","join","captureStackTrace","toUpperCase"]
*-- regex: 9073
*-- Stat Module Done --*
*-- Test Case {"_bound":0,"Switcher":false,"Target_Switch_Base":0} start 0.046 took 2.9731s
*-- Test Case {"Switcher":true,"Target_Switch_Base":0,"_bound":1,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":0} start 3.0812 took 11.9749s
*-- Errors occured in test {"Switcher":true,"Target_Switch_Base":0,"_bound":1,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":0}
* Error: TypeError: Cannot read property 'charAt' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"Target_Switch_Base":0,"_bound":1}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"Target_Switcher":1,"ExpansionArg_type_3":0,"_bound":4} start 15.2789 took 12.0214s
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":2} start 15.409 took 11.9993s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":2}
* Error: TypeError: Cannot read property 'charAt' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":2}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":3} start 15.345 took 12.4236s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":3}
* Error: TypeError: Cannot read property 'charAt' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":3}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":1,"_bound":5} start 15.1808 took 13.6148s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":1,"_bound":5}
* Error: TypeError: Cannot read property 'charAt' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":1,"_bound":5}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":2,"_bound":6,"ExpansionArg_int":0} start 27.6632 took 13.5477s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":2,"_bound":6,"ExpansionArg_int":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":2,"_bound":6}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":2,"ExpansionArg_type_3":0,"_bound":5} start 28.0159 took 13.5421s
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":2,"ExpansionArg_type_3":0,"_bound":5} start 27.6016 took 14.221s
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":2,"_bound":6,"ExpansionArg_int":0} start 28.0632 took 13.826s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":2,"_bound":6,"ExpansionArg_int":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":2,"_bound":6}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":3,"ExpansionArg_int":0} start 27.5357 took 14.6303s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":3,"ExpansionArg_int":0}
* Error: TypeError: Cannot read property 'charAt' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":3}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":4,"ExpansionArg_int":0} start 27.7132 took 14.891s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":4,"ExpansionArg_int":0}
* Error: TypeError: Cannot read property 'charAt' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":4}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":4,"ExpansionArg_int":0} start 27.9077 took 14.6968s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":4,"ExpansionArg_int":0}
* Error: TypeError: Cannot read property 'charAt' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":4}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":2,"_bound":6,"ExpansionArg_int":0} start 28.8794 took 14.5867s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":2,"_bound":6,"ExpansionArg_int":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":2,"_bound":6}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":1,"ExpansionArg_int":0,"_bound":7} start 41.4166 took 16.4229s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":1,"ExpansionArg_int":0,"_bound":7}
* Error: TypeError: Cannot read property 'charAt' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":1,"ExpansionArg_int":0,"_bound":7}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":1,"ExpansionArg_int":0,"_bound":7} start 42.0754 took 16.1551s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":1,"ExpansionArg_int":0,"_bound":7}
* Error: TypeError: Cannot read property 'charAt' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":1,"ExpansionArg_int":0,"_bound":7}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":3,"ExpansionArg_type_3":0,"_bound":6} start 42.41 took 16.3258s
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":3,"ExpansionArg_type_3":0,"_bound":7} start 42.8979 took 16.0887s
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":5,"ExpansionArg_string":"PureString"} start 42.4621 took 16.5921s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":5,"ExpansionArg_string":"PureString"}
* Error: TypeError: Cannot read property 'charAt' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":5}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":4,"ExpansionArg_string":"PureString"} start 42.3117 took 17.2361s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":4,"ExpansionArg_string":"PureString"}
* Error: TypeError: Cannot read property 'charAt' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":4}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":5,"ExpansionArg_string":"PureString"} start 43.27 took 16.2846s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":5,"ExpansionArg_string":"PureString"}
* Error: TypeError: Cannot read property 'charAt' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":5}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":3,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":6,"ExpansionArg_string":"PureString"} start 42.7855 took 17.4809s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":3,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":6,"ExpansionArg_string":"PureString"}
* Error: TypeError: Cannot read property 'charAt' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":3,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":6}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":1,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":5} start 42.9646 took 17.4749s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":1,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":5}
* Error: TypeError: Cannot read property 'charAt' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":1,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":5}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":3,"ExpansionArg_type_3":0,"_bound":6} start 43.353 took 18.7781s
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","Target_Switcher":4,"ExpansionArg_type_3":0,"_bound":9} start 59.2222 took 17.199s
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":4,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":8,"ExpansionArg_array_length":0} start 59.1747 took 17.6246s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":4,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":8,"ExpansionArg_array_length":0}
* Error: TypeError: Cannot read property 'charAt' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":4,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":8}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":1,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":6} start 59.2914 took 17.7176s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":1,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":6}
* Error: TypeError: Cannot read property 'charAt' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":1,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":6}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":2,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":7,"ExpansionArg_int_2":0} start 59.3939 took 17.8174s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":2,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":7,"ExpansionArg_int_2":0}
* Error: TypeError: Cannot read property 'charAt' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":2,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":7}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_3":4,"_bound":10,"ExpansionArg_array_length":0} start 59.4461 took 18.1258s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_3":4,"_bound":10,"ExpansionArg_array_length":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_3":4,"_bound":10}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_string":"","ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":5,"ExpansionArg_array_length":0} start 59.7084 took 18.1696s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_string":"","ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":5,"ExpansionArg_array_length":0}
* Error: TypeError: Cannot read property 'charAt' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_string":"","ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":5}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":0,"Target_Switcher":4,"ExpansionArg_type_3":0,"_bound":7} start 60.5943 took 17.4852s
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":6,"ExpansionArg_array_length":0} start 59.9819 took 18.3261s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":6,"ExpansionArg_array_length":0}
* Error: TypeError: Cannot read property 'charAt' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":6}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":4,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":7,"ExpansionArg_array_length":0} start 60.3378 took 18.2109s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":4,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":7,"ExpansionArg_array_length":0}
* Error: TypeError: Cannot read property 'charAt' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":4,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":7}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","Target_Switcher":4,"ExpansionArg_type_3":0,"_bound":7} start 62.1974 took 17.5623s
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":9,"ExpansionArg_bool":false} start 76.9046 took 17.681s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":9,"ExpansionArg_bool":false}
* Error: TypeError: Cannot read property 'charAt' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":9}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":1,"Target_Switcher":2,"ExpansionArg_type_3":0,"_bound":6} start 76.497 took 18.3035s
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":10,"ExpansionArg_array_element_0_type":0} start 77.1089 took 17.9224s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":10,"ExpansionArg_array_element_0_type":0}
* Error: TypeError: Cannot read property 'charAt' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":10}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":7,"ExpansionArg_array_element_0_type":0} start 78.4458 took 16.8096s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":7,"ExpansionArg_array_element_0_type":0}
* Error: TypeError: Cannot read property 'charAt' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":7}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":5,"ExpansionArg_array_length":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":6,"ExpansionArg_bool":false} start 77.9692 took 17.5494s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":5,"ExpansionArg_array_length":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":6,"ExpansionArg_bool":false}
* Error: TypeError: Cannot read property 'charAt' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":5,"ExpansionArg_array_length":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":6}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":14,"ExpansionArg_bool":false} start 78.203 took 17.75s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":14,"ExpansionArg_bool":false}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":14}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":4,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":6,"ExpansionArg_array_length":0} start 77.3667 took 18.8195s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":4,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":6,"ExpansionArg_array_length":0}
* Error: TypeError: Cannot read property 'charAt' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":4,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":6}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"_bound":15,"ExpansionArg_array_element_0_type":0} start 77.6981 took 19.4262s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"_bound":15,"ExpansionArg_array_element_0_type":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"_bound":15}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":9,"ExpansionArg_array_element_0_type":0} start 79.8335 took 18.545s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":9,"ExpansionArg_array_element_0_type":0}
* Error: TypeError: Cannot read property 'charAt' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":9}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_int":0,"_bound":8,"ExpansionArg_string":"PureString"} start 41.3312 took 63.4616s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_int":0,"_bound":8,"ExpansionArg_string":"PureString"}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "P" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_int":0,"_bound":8}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"_bound":7,"ExpansionArg_string":"PureString"} start 42.4945 took 68.0842s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"_bound":7,"ExpansionArg_string":"PureString"}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "P" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"_bound":7}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"_bound":8,"ExpansionArg_string":"PureString"} start 43.0642 took 67.764s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"_bound":8,"ExpansionArg_string":"PureString"}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "P" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"_bound":8}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":9,"ExpansionArg_array_element_1_type":0} start 95.3941 took 16.8724s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":9,"ExpansionArg_array_element_1_type":0}
* Error: TypeError: Cannot read property 'charAt' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":9}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":12,"ExpansionArg_array_element_1_type":0} start 95.1717 took 17.2846s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":12,"ExpansionArg_array_element_1_type":0}
* Error: TypeError: Cannot read property 'charAt' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":12}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":8,"ExpansionArg_array_element_0_type":0} start 94.6681 took 18.1725s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":8,"ExpansionArg_array_element_0_type":0}
* Error: TypeError: Cannot read property 'charAt' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":8}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"_bound":7,"ExpansionArg_string":"PureString"} start 43.4051 took 69.5517s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"_bound":7,"ExpansionArg_string":"PureString"}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "P" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"_bound":7}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_int":0,"_bound":8,"ExpansionArg_string":"PureString"} start 42.0115 took 71.5121s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_int":0,"_bound":8,"ExpansionArg_string":"PureString"}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "P" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_int":0,"_bound":8}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":7,"ExpansionArg_bool":false} start 96.0917 took 17.6563s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":7,"ExpansionArg_bool":false}
* Error: TypeError: Cannot read property 'charAt' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":7}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":8,"ExpansionArg_bool":false} start 94.9259 took 19.4491s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":8,"ExpansionArg_bool":false}
* Error: TypeError: Cannot read property 'charAt' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":8}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":10,"ExpansionArg_bool":false} start 96.3567 took 18.2157s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":10,"ExpansionArg_bool":false}
* Error: TypeError: Cannot read property 'charAt' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":10}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_3":1,"ExpansionArg_array_length":0,"_bound":11} start 95.6382 took 18.9343s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_3":1,"ExpansionArg_array_length":0,"_bound":11}
* Error: TypeError: Cannot read property 'charAt' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_3":1,"ExpansionArg_array_length":0,"_bound":11}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_int":0,"_bound":7,"ExpansionArg_string":"PureString"} start 43.5548 took 71.4775s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_int":0,"_bound":7,"ExpansionArg_string":"PureString"}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "P" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_int":0,"_bound":7}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":2,"ExpansionArg_array_length":0,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":8,"ExpansionArg_int":0} start 97.1959 took 18.2046s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":2,"ExpansionArg_array_length":0,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":8,"ExpansionArg_int":0}
* Error: TypeError: Cannot read property 'charAt' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":2,"ExpansionArg_array_length":0,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":8}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":11,"ExpansionArg_array_element_1_type":0} start 98.4716 took 17.7056s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":11,"ExpansionArg_array_element_1_type":0}
* Error: TypeError: Cannot read property 'charAt' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"Target_Switcher":0,"ExpansionArg_type_3":0,"_bound":11}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"g","_bound":104,"ExpandedSwitcher":0} start 112.6311 took 29.3602s
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"c","_bound":75} start 115.2666 took 30.5998s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"c","_bound":75}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "c" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"c","_bound":75}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"u","_bound":69} start 112.9088 took 33.8887s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"u","_bound":69}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "u" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"u","_bound":69}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":92} start 113.1264 took 35.5728s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":92}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":92}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"e","_bound":57} start 113.6663 took 35.706s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"e","_bound":57}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "e" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"e","_bound":57}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"k","_bound":77} start 104.9623 took 44.8778s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"k","_bound":77}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "k" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"k","_bound":77}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_array_length":0,"_bound":13,"ExpansionArg_string_2":"PureString"} start 78.6799 took 74.1999s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_array_length":0,"_bound":13,"ExpansionArg_string_2":"PureString"}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "P" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_array_length":0,"_bound":13}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":89} start 116.2464 took 36.8833s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":89}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":89}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"e","_bound":52} start 112.3789 took 43.8932s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"e","_bound":52}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "e" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"e","_bound":52}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"e","_bound":54} start 115.5091 took 43.0115s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"e","_bound":54}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "e" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"e","_bound":54}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":42} start 113.9237 took 47.176s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":42}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":42}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"f","_bound":32,"ExpandedSwitcher":0} start 114.4663 took 48.7451s
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"yes","_bound":27} start 110.9604 took 57.6341s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"yes","_bound":27}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "y" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"yes","_bound":27}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"cy","_bound":77} start 146.0348 took 24.2669s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"cy","_bound":77}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "c" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"cy","_bound":77}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":17} start 114.9237 took 57.9068s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":17}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":17}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0004","_bound":47} start 114.7027 took 59.1014s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0004","_bound":47}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\x04" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0004","_bound":47}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"e","_bound":65} start 149.4718 took 33.0779s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"e","_bound":65}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "e" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"e","_bound":65}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"u","_bound":70} start 153.0197 took 31.5043s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"u","_bound":70}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "u" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"u","_bound":70}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"a","_bound":45} start 142.1118 took 42.6223s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"a","_bound":45}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "a" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"a","_bound":45}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":86} start 149.9943 took 36.2615s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":86}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":86}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":88} start 146.8823 took 39.8532s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":88}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":88}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":80} start 148.8386 took 38.5528s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":80}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":80}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":85} start 156.338 took 36.903s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":85}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":85}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"}","_bound":72} start 153.3381 took 41.2186s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"}","_bound":72}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "}" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"}","_bound":72}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"l","_bound":98,"ExpandedSwitcher":0} start 170.5225 took 25.4214s
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":63} start 158.6503 took 43.7053s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":63}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":63}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":" ","_bound":12,"ExpandedSwitcher":0} start 186.986 took 19.7596s
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"i","_bound":54} start 163.3587 took 44.5157s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"i","_bound":54}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "i" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"i","_bound":54}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":48} start 161.3082 took 48.7314s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":48}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":48}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"m","_bound":49} start 168.7623 took 41.6113s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"m","_bound":49}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "m" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"m","_bound":49}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0004","_bound":100} start 184.9301 took 27.6127s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0004","_bound":100}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\x04" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0004","_bound":100}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"g","_bound":79,"ExpandedSwitcher":0} start 187.5246 took 34.6174s
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":33} start 172.9565 took 49.7031s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":33}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":33}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"a","_bound":44} start 182.762 took 40.5409s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"a","_bound":44}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "a" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"a","_bound":44}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"$","_bound":53} start 173.9963 took 52.0134s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"$","_bound":53}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "$" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"$","_bound":53}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":84} start 186.3784 took 40.3256s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":84}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":84}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":39} start 184.6413 took 46.9262s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":39}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":39}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"l","_bound":97,"ExpandedSwitcher":0} start 210.5357 took 23.2954s
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"q","_bound":73} start 194.782 took 39.3178s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"q","_bound":73}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "q" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"q","_bound":73}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"","_bound":12,"ExpandedSwitcher":0} start 202.5343 took 37.278s
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":90} start 210.1941 took 35.17s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":90}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":90}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u001b","_bound":37} start 196.0524 took 49.9036s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u001b","_bound":37}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\x1B" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u001b","_bound":37}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"�","_bound":34} start 193.3742 took 54.5136s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"�","_bound":34}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "�" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"�","_bound":34}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":91} start 212.673 took 36.4999s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":91}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":91}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":43} start 206.9215 took 42.9653s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":43}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":43}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":18} start 208.014 took 53.769s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":18}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":18}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":84} start 234.2315 took 30.2119s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":84}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":84}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"a","_bound":46} start 222.2956 took 43.0045s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"a","_bound":46}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "a" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"a","_bound":46}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"f","_bound":103,"ExpandedSwitcher":0} start 246.1022 took 22.1068s
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":83} start 233.9718 took 35.2656s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":83}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":83}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0003","_bound":78} start 231.7467 took 37.6894s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0003","_bound":78}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\x03" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0003","_bound":78}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"d\u0000","_bound":22} start 223.5238 took 46.7413s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"d\u0000","_bound":22}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "d" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"d\u0000","_bound":22}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"$","_bound":55} start 226.1077 took 47.6525s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"$","_bound":55}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "$" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"$","_bound":55}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"","ExpandedSwitcher":0,"_bound":32} start 240.0264 took 34.577s
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":28} start 222.8143 took 52.5235s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":28}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":28}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0003","_bound":24} start 226.8597 took 49.8366s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0003","_bound":24}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\x03" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0003","_bound":24}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"","ExpandedSwitcher":0,"_bound":17} start 245.5466 took 34.7451s
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"l","_bound":53,"ExpandedSwitcher":0} start 249.3678 took 36.4364s
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"u","_bound":70} start 268.3262 took 27.6192s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"u","_bound":70}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "u" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"u","_bound":70}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"�","_bound":44} start 248.0444 took 50.2325s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"�","_bound":44}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "�" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"�","_bound":44}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"e","_bound":64} start 269.3584 took 29.4975s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"e","_bound":64}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "e" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"e","_bound":64}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"y","_bound":31} start 261.9818 took 37.2415s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"y","_bound":31}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "y" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"y","_bound":31}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"c","_bound":74} start 275.6581 took 25.0084s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"c","_bound":74}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "c" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"c","_bound":74}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"�","_bound":39} start 250.1024 took 52.4345s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"�","_bound":39}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "�" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"�","_bound":39}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":94} start 273.9376 took 29.2403s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":94}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":94}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"i","_bound":67} start 264.6023 took 40.7004s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"i","_bound":67}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "i" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"i","_bound":67}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"r","_bound":15} start 265.4502 took 41.4856s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"r","_bound":15}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "r" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"r","_bound":15}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"r","_bound":14} start 270.4703 took 48.0676s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"r","_bound":14}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "r" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"r","_bound":14}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"","ExpandedSwitcher":0,"_bound":32} start 280.5217 took 38.8968s
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":49} start 276.9782 took 49.4815s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":49}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":49}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"ey","_bound":66} start 303.3156 took 25.4396s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"ey","_bound":66}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "e" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"ey","_bound":66}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"(","_bound":29} start 274.805 took 55.3637s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"(","_bound":29}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "(" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"(","_bound":29}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"","ExpandedSwitcher":0,"_bound":22} start 299.4384 took 37.889s
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":62} start 296.1226 took 45.7673s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":62}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":62}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"y","_bound":30} start 300.811 took 43.5927s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"y","_bound":30}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "y" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"y","_bound":30}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"x","_bound":32} start 286.0472 took 60.134s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"x","_bound":32}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "x" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"x","_bound":32}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"r","_bound":14} start 298.4673 took 52.3279s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"r","_bound":14}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "r" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"r","_bound":14}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":40} start 299.0338 took 53.9218s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":40}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":40}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"@","_bound":58} start 307.0561 took 48.389s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"@","_bound":58}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "@" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"@","_bound":58}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"g","_bound":106,"ExpandedSwitcher":0} start 328.9322 took 28.2325s
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":38} start 302.7705 took 54.6163s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":38}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":38}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"m","_bound":51} start 319.6742 took 41.1935s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"m","_bound":51}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "m" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"m","_bound":51}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\r","_bound":138} start 344.6664 took 16.5561s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\r","_bound":138}
* Error: Exception E: SyntaxError: Unexpected end of JSON input of test data on 
* Error: Exception E: SyntaxError: Unexpected end of JSON input of coverage data on 
* Error: Error extracting final output - a fatal error must have occured
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\r","_bound":138}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":88} start 318.6824 took 44.4491s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":88}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":88}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"j","_bound":60} start 326.6584 took 37.7067s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"j","_bound":60}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "j" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"j","_bound":60}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":27} start 305.4905 took 60.5961s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":27}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":27}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"c","_bound":74} start 342.1366 took 29.9673s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"c","_bound":74}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "c" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"c","_bound":74}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":" ","_bound":10,"ExpandedSwitcher":0} start 353.2056 took 19.8748s
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"]","_bound":74} start 330.5306 took 46.7533s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"]","_bound":74}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "]" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"]","_bound":74}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\n","_bound":134} start 363.3837 took 18.3907s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\n","_bound":134}
* Error: Exception E: SyntaxError: Unexpected end of JSON input of test data on 
* Error: Exception E: SyntaxError: Unexpected end of JSON input of coverage data on 
* Error: Error extracting final output - a fatal error must have occured
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\n","_bound":134}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"f","_bound":102,"ExpandedSwitcher":0} start 361.0823 took 28.1228s
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":47} start 337.5782 took 56.8503s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":47}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":47}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":95} start 357.3261 took 37.6957s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":95}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":95}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":86} start 357.6062 took 37.7629s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":86}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":86}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":84} start 355.7526 took 43.1218s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":84}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":84}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"m","_bound":49} start 361.2827 took 39.801s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"m","_bound":49}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "m" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"m","_bound":49}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":90} start 364.5994 took 40.243s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":90}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":90}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"[","_bound":19} start 350.9183 took 60.9708s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"[","_bound":19}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "[" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"[","_bound":19}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":89} start 373.2307 took 39.2798s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":89}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":89}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"t","_bound":10} start 366.3796 took 48.0638s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"t","_bound":10}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "t" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"t","_bound":10}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"[","_bound":20} start 346.5597 took 70.6572s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"[","_bound":20}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "[" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"[","_bound":20}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"l","_bound":96,"ExpandedSwitcher":0} start 395.7037 took 27.9686s
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":37} start 372.3176 took 56.2679s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":37}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":37}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000\u0000","_bound":68} start 381.8799 took 48.3298s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000\u0000","_bound":68}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000\u0000","_bound":68}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"y","_bound":30} start 394.7262 took 41.4267s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"y","_bound":30}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "y" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"y","_bound":30}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0005","_bound":73} start 401.4243 took 41.4502s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0005","_bound":73}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\x05" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0005","_bound":73}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":22} start 377.5729 took 65.8368s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":22}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":22}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":41} start 389.3257 took 55.3747s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":41}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":41}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"","ExpandedSwitcher":0,"_bound":22} start 405.0819 took 43.7253s
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"  ","ExpandedSwitcher":0,"_bound":13} start 430.5265 took 21.905s
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":83} start 414.5805 took 38.3417s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":83}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":83}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":79} start 412.405 took 40.9363s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":79}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":79}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"y\u0000","_bound":29} start 412.8258 took 40.5282s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"y\u0000","_bound":29}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "y" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"y\u0000","_bound":29}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":48} start 399.1028 took 56.819s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":48}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":48}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":82} start 417.8023 took 38.7241s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":82}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":82}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"g\u0000","ExpandedSwitcher":0,"_bound":105} start 428.9905 took 29.1293s
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\b","_bound":23} start 395.2185 took 63.2837s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\b","_bound":23}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\x08" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\b","_bound":23}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\t","_bound":130} start 444.0185 took 16.3781s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\t","_bound":130}
* Error: Exception E: SyntaxError: Unexpected end of JSON input of test data on 
* Error: Exception E: SyntaxError: Unexpected end of JSON input of coverage data on 
* Error: Error extracting final output - a fatal error must have occured
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\t","_bound":130}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"  ","ExpandedSwitcher":0,"_bound":11} start 454.2911 took 20.5425s
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"e","_bound":65} start 436.5107 took 39.4626s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"e","_bound":65}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "e" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"e","_bound":65}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"r","_bound":15} start 423.7704 took 53.6581s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"r","_bound":15}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "r" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"r","_bound":15}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":81} start 443.2676 took 42.8445s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":81}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":81}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"g\u0000\u0000","ExpandedSwitcher":0,"_bound":106} start 458.327 took 28.2586s
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"j","_bound":59} start 453.1966 took 35.7771s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"j","_bound":59}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "j" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"j","_bound":59}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":85} start 453.7844 took 37.3081s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":85}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":85}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"j","_bound":61} start 456.4309 took 35.0495s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"j","_bound":61}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "j" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"j","_bound":61}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":88} start 460.4266 took 37.0453s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":88}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":88}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"�","_bound":51} start 452.5586 took 48.013s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"�","_bound":51}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "�" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"�","_bound":51}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"[","_bound":19} start 449.3873 took 60.4806s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"[","_bound":19}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "[" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"[","_bound":19}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"l\u0000","ExpandedSwitcher":0,"_bound":99} start 486.8426 took 26.1887s
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":",","_bound":24} start 459.0465 took 54.3402s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":",","_bound":24}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "," found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":",","_bound":24}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":43} start 456.8663 took 57.9902s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":43}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":43}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":90} start 476.2904 took 39.0792s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":90}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":90}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"m","_bound":48} start 475.0866 took 41.3936s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"m","_bound":48}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "m" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"m","_bound":48}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"f\u0000","ExpandedSwitcher":0,"_bound":103} start 497.6544 took 24.7622s
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":94} start 486.4546 took 36.1927s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":94}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":94}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"j","_bound":59} start 491.8482 took 34.0005s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"j","_bound":59}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "j" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"j","_bound":59}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"g","_bound":105,"ExpandedSwitcher":0} start 500.9525 took 25.1824s
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"@","_bound":21} start 477.5959 took 53.1604s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"@","_bound":21}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "@" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"@","_bound":21}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"9","_bound":33} start 489.2745 took 50.8874s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"9","_bound":33}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "9" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"9","_bound":33}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"�","_bound":41} start 491.3307 took 50.3096s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"�","_bound":41}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "�" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"�","_bound":41}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"f\u0000","_bound":102,"ExpandedSwitcher":0} start 516.8071 took 25.676s
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"c","_bound":97} start 522.8698 took 20.621s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"c","_bound":97}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "c" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"c","_bound":97}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"h","_bound":101} start 515.5594 took 28.2252s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"h","_bound":101}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "h" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"h","_bound":101}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"f\u0000\u0000","ExpandedSwitcher":0,"_bound":104} start 522.5745 took 24.2971s
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":87} start 515.2866 took 34.1405s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":87}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":87}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"t","_bound":11} start 510.3036 took 42.6806s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"t","_bound":11}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "t" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"t","_bound":11}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"","_bound":13,"ExpandedSwitcher":0} start 513.275 took 41.4602s
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"l","_bound":95,"ExpandedSwitcher":0} start 531.2908 took 24.2021s
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":62} start 513.8813 took 43.6722s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":62}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":62}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"","ExpandedSwitcher":0,"_bound":32} start 526.255 took 36.2882s
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"xs","_bound":100,"ExpandedSwitcher":0} start 540.6378 took 25.7258s
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"g","_bound":104,"ExpandedSwitcher":0} start 543.9826 took 26.4245s
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"g\u0000\u0000\u0000","ExpandedSwitcher":0,"_bound":107} start 543.6158 took 27.0223s
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"c","_bound":84} start 555.7257 took 26.3214s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"c","_bound":84}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "c" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"c","_bound":84}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000\u0000","_bound":28} start 526.0503 took 58.6378s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000\u0000","_bound":28}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000\u0000","_bound":28}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"m","_bound":50} start 542.0605 took 44.9155s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"m","_bound":50}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "m" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"m","_bound":50}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"l","_bound":96,"ExpandedSwitcher":0} start 563.0484 took 26.1998s
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"","ExpandedSwitcher":0,"_bound":33} start 555.3727 took 34.5165s
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string_2":"d","_bound":43} start 542.7031 took 49.5926s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string_2":"d","_bound":43}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "d" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string_2":"d","_bound":43}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"c","_bound":75} start 566.5568 took 27.7167s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"c","_bound":75}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "c" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"c","_bound":75}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"h","_bound":61} start 547.0193 took 48.0886s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"h","_bound":61}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "h" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"h","_bound":61}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"z","_bound":64} start 549.6923 took 45.9038s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"z","_bound":64}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "z" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"z","_bound":64}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"uy","_bound":71} start 570.7953 took 25.9503s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"uy","_bound":71}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "u" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"uy","_bound":71}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\n","_bound":135} start 585.4037 took 14.3286s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\n","_bound":135}
* Error: Exception E: SyntaxError: Unexpected end of JSON input of test data on 
* Error: Exception E: SyntaxError: Unexpected end of JSON input of coverage data on 
* Error: Error extracting final output - a fatal error must have occured
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\n","_bound":135}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":9,"ExpansionArg_array_length":0} start 587.4156 took 14.3527s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":9,"ExpansionArg_array_length":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":9}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"�","_bound":68} start 557.8788 took 47.6897s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"�","_bound":68}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "�" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"�","_bound":68}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"","_bound":14,"ExpandedSwitcher":0} start 570.5508 took 37.4049s
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"f","_bound":104,"ExpandedSwitcher":0} start 590.3535 took 23.8769s
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":93} start 582.3252 took 33.2357s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":93}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":93}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string_2":"u\u0000","_bound":73} start 589.3903 took 26.4328s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string_2":"u\u0000","_bound":73}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "u" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string_2":"u\u0000","_bound":73}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"h","_bound":99} start 592.807 took 27.7069s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"h","_bound":99}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "h" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"h","_bound":99}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"h","_bound":102} start 595.4709 took 26.1942s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"h","_bound":102}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "h" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"h","_bound":102}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"f","_bound":103,"ExpandedSwitcher":0} start 601.8822 took 23.8588s
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"e","_bound":66} start 596.0008 took 31.8528s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"e","_bound":66}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "e" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"e","_bound":66}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"u","_bound":71} start 599.8189 took 29.6545s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"u","_bound":71}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "u" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"u","_bound":71}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"m","_bound":50} start 594.5468 took 36.4354s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"m","_bound":50}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "m" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"m","_bound":50}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0004","_bound":78} start 597.0331 took 36.9308s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0004","_bound":78}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\x04" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0004","_bound":78}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"","ExpandedSwitcher":0,"_bound":24} start 608.5747 took 32.247s
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":93} start 616.0429 took 33.3527s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":93}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":93}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":40} start 605.9006 took 48.6231s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":40}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":40}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"}","_bound":72} start 614.3711 took 42.745s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"}","_bound":72}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "}" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"}","_bound":72}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":81} start 625.9109 took 34.5089s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":81}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":81}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"j","_bound":59} start 629.8159 took 31.0908s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"j","_bound":59}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "j" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"j","_bound":59}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":77} start 621.8715 took 39.4796s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":77}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":77}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":87} start 628.2274 took 33.6352s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":87}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":87}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":36} start 620.7426 took 44.0968s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":36}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":36}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":38} start 615.7561 took 50.6909s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":38}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":38}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string_2":"e","_bound":58} start 634.4113 took 32.8164s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string_2":"e","_bound":58}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "e" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string_2":"e","_bound":58}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":96} start 641.4598 took 33.8851s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":96}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":96}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"g","_bound":105,"ExpandedSwitcher":0} start 655.147 took 23.1981s
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":95} start 649.5847 took 32.1311s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":95}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":95}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":53} start 631.3388 took 51.0769s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":53}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":53}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"c","_bound":89} start 667.747 took 22.9246s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"c","_bound":89}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "c" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"c","_bound":89}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0001","_bound":80} start 657.5065 took 38.2091s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0001","_bound":80}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\x01" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0001","_bound":80}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"j","_bound":58} start 665.3206 took 32.0335s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"j","_bound":58}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "j" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"j","_bound":58}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":83} start 661.2488 took 40.18s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":83}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":83}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"b","_bound":63} start 661.7348 took 43.8093s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"b","_bound":63}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "b" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"b","_bound":63}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"u","_bound":69} start 678.4587 took 27.5822s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"u","_bound":69}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "u" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"u","_bound":69}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"f","_bound":101,"ExpandedSwitcher":0} start 682.9828 took 23.4362s
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"i","_bound":59} start 662.1188 took 45.003s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"i","_bound":59}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "i" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"i","_bound":59}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"q","_bound":69} start 660.733 took 46.9954s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"q","_bound":69}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "q" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"q","_bound":69}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":56} start 667.0389 took 46.4895s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":56}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":56}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string_2":"y","_bound":33} start 681.947 took 37.3292s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string_2":"y","_bound":33}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "y" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string_2":"y","_bound":33}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"","ExpandedSwitcher":0,"_bound":15} start 690.891 took 31.807s
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":39} start 675.6158 took 48.5374s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":39}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":39}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"ey","_bound":66} start 701.7657 took 23.1883s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"ey","_bound":66}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "e" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"ey","_bound":66}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"","_bound":13,"ExpandedSwitcher":0} start 697.7238 took 34.4097s
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"e","_bound":64} start 705.9614 took 34.5648s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"e","_bound":64}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "e" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"e","_bound":64}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"y","_bound":29} start 706.3508 took 35.4012s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"y","_bound":29}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "y" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"y","_bound":29}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":57} start 696.099 took 46.3462s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":57}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":57}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"h","_bound":100} start 713.9517 took 29.0677s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"h","_bound":100}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "h" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"h","_bound":100}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"c","_bound":87} start 723.4398 took 22.1752s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"c","_bound":87}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "c" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"c","_bound":87}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string_2":"c","_bound":78} start 725.1949 took 25.4662s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string_2":"c","_bound":78}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "c" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string_2":"c","_bound":78}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"","ExpandedSwitcher":0,"_bound":32} start 719.7427 took 31.4781s
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":19} start 708.2446 took 50.4368s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":19}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":19}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"u","_bound":102} start 740.9717 took 18.7118s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"u","_bound":102}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "u" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"u","_bound":102}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"c","_bound":105} start 742.9431 took 18.0961s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"c","_bound":105}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "c" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"c","_bound":105}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string_2":"�","_bound":26} start 707.632 took 53.8559s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string_2":"�","_bound":26}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "�" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string_2":"�","_bound":26}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"gn","ExpandedSwitcher":0,"_bound":107} start 745.8908 took 23.6801s
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":",","_bound":97} start 742.3653 took 28.3211s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":",","_bound":97}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "," found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":",","_bound":97}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"l\u0000","ExpandedSwitcher":0,"_bound":98} start 751.025 took 23.3631s
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":17} start 724.8712 took 50.9801s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":17}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":17}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"c","_bound":76} start 751.8469 took 27.507s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"c","_bound":76}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "c" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"c","_bound":76}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"","_bound":11,"ExpandedSwitcher":0} start 743.2484 took 36.6119s
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"r","_bound":16} start 733.011 took 47.7868s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"r","_bound":16}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "r" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"r","_bound":16}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"g\u0000\u0000","ExpandedSwitcher":0,"_bound":107} start 759.3503 took 24.7566s
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"an","_bound":47} start 759.8911 took 28.3461s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"an","_bound":47}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "a" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"an","_bound":47}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"l","_bound":55,"ExpandedSwitcher":0} start 761.2229 took 37.2542s
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"f","_bound":102,"ExpandedSwitcher":0} start 774.5127 took 25.023s
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"l\u0000\u0000","ExpandedSwitcher":0,"_bound":100} start 776.4677 took 23.372s
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"d","_bound":98} start 780.6856 took 27.822s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"d","_bound":98}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "d" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"d","_bound":98}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":" t ","ExpandedSwitcher":0,"_bound":14} start 784.2879 took 24.612s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":" t ","ExpandedSwitcher":0,"_bound":14}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "t" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":" t ","ExpandedSwitcher":0,"_bound":14}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":91} start 770.9837 took 41.2174s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":91}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":91}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":64} start 769.7112 took 46.7378s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":64}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":64}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":92} start 779.7713 took 37.275s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":92}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":92}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"","ExpandedSwitcher":0,"_bound":23} start 780.9874 took 36.2749s
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":22} start 762.1516 took 57.6004s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":22}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":22}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string_2":"j\u0000","_bound":63} start 798.95 took 30.179s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string_2":"j\u0000","_bound":63}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "j" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string_2":"j\u0000","_bound":63}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"z","_bound":62} start 788.5837 took 42.76s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"z","_bound":62}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "z" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"z","_bound":62}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":79} start 800.043 took 37.2699s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":79}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":79}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"f\u0000\u0000\u0000","ExpandedSwitcher":0,"_bound":105} start 812.4717 took 25.8674s
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"","ExpandedSwitcher":0,"_bound":23} start 808.7512 took 31.5304s
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":85} start 809.1187 took 32.6132s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":85}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":85}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"g","_bound":103,"ExpandedSwitcher":0} start 818.0192 took 24.2927s
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"f\u0000","ExpandedSwitcher":0,"_bound":104} start 820.5951 took 24.3788s
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string_2":"e\u0000","_bound":68} start 816.9517 took 29.4874s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string_2":"e\u0000","_bound":68}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "e" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string_2":"e\u0000","_bound":68}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"i","_bound":56} start 799.7229 took 49.5347s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"i","_bound":56}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "i" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"i","_bound":56}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"   ","ExpandedSwitcher":0,"_bound":12} start 832.0031 took 18.0102s
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":94} start 817.1966 took 33.1321s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":94}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":94}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"l","_bound":97,"ExpandedSwitcher":0} start 829.5829 took 25.1781s
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"g\u0000","ExpandedSwitcher":0,"_bound":107} start 837.6349 took 25.9081s
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"c","_bound":99} start 845.1596 took 19.9833s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"c","_bound":99}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "c" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"c","_bound":99}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"u","_bound":88} start 846.9243 took 24.7546s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"u","_bound":88}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "u" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"u","_bound":88}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"c","_bound":95} start 850.6468 took 22.3202s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"c","_bound":95}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "c" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"c","_bound":95}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"l","_bound":58,"ExpandedSwitcher":0} start 838.536 took 37.7983s
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"l\u0000","ExpandedSwitcher":0,"_bound":98} start 849.9296 took 27.1484s
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":91} start 842.1653 took 36.2661s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":91}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":91}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"j","_bound":60} start 850.225 took 33.775s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"j","_bound":60}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "j" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"j","_bound":60}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string_2":"\u0005\u0000","_bound":71} start 842.5392 took 42.7844s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string_2":"\u0005\u0000","_bound":71}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\x05" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string_2":"\u0005\u0000","_bound":71}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":82} start 841.007 took 47.2527s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":82}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":82}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string_2":"l","_bound":100,"ExpandedSwitcher":0} start 865.347 took 26.6939s
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":99} start 863.7183 took 33.0605s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":99}
* Error: SyntaxError: Expected Accept, Compute, End, Jump, JumpMatch, Label, Match, Pause, Remark, Type, Use, a-non-implemented-instruction, or end of input but "\0" found.
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_3":3,"ExpansionArg_string":"\u0000","_bound":99}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 96% Coverage (LOC): 97%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 51% Coverage (LOC): 66%
*- File /root/Targets/pilot-lang.js/node_modules/pilot-lang.js/main.js. Coverage (Term): 95% Coverage (LOC): 100%
*- File /root/Targets/pilot-lang.js/node_modules/pilot-lang.js/instructions/index.js. Coverage (Term): 75% Coverage (LOC): 84%
*- File /root/Targets/pilot-lang.js/node_modules/pilot-lang.js/grammar/parser.js. Coverage (Term): 42% Coverage (LOC): 38%
*- File /root/Targets/pilot-lang.js/node_modules/pilot-lang.js/lib/checkCondition.js. Coverage (Term): 10% Coverage (LOC): 13%
*- File /root/Targets/pilot-lang.js/node_modules/pilot-lang.js/lib/math.js. Coverage (Term): 11% Coverage (LOC): 16%
*- File /root/Targets/pilot-lang.js/node_modules/pilot-lang.js/instructions/accept.js. Coverage (Term): 17% Coverage (LOC): 22%
*- File /root/Targets/pilot-lang.js/node_modules/pilot-lang.js/instructions/type.js. Coverage (Term): 52% Coverage (LOC): 67%
*- File /root/Targets/pilot-lang.js/node_modules/pilot-lang.js/lib/prepareText.js. Coverage (Term): 20% Coverage (LOC): 29%
*- File /root/Targets/pilot-lang.js/node_modules/pilot-lang.js/instructions/match.js. Coverage (Term): 8% Coverage (LOC): 11%
*- File /root/Targets/pilot-lang.js/node_modules/pilot-lang.js/instructions/jump.js. Coverage (Term): 54% Coverage (LOC): 83%
*- File /root/Targets/pilot-lang.js/node_modules/pilot-lang.js/instructions/compute.js. Coverage (Term): 34% Coverage (LOC): 38%
*- File /root/Targets/pilot-lang.js/node_modules/pilot-lang.js/instructions/end.js. Coverage (Term): 39% Coverage (LOC): 45%
*- File /root/Targets/pilot-lang.js/node_modules/pilot-lang.js/instructions/use.js. Coverage (Term): 40% Coverage (LOC): 63%
*- File /root/Targets/pilot-lang.js/node_modules/pilot-lang.js/instructions/jumponmatch.js. Coverage (Term): 35% Coverage (LOC): 56%
*- File /root/Targets/pilot-lang.js/node_modules/pilot-lang.js/instructions/pause.js. Coverage (Term): 39% Coverage (LOC): 50%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 321 paths with 248 errors **