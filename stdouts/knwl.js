/root/Targets/knwl.js
└── knwl.js@1.0.2 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/knwl.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000

*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","toString","apply","bound Knwl","Date","bound "]
*-- regex: 36
*-- Stat Module Done --*
*-- Test Case {"_bound":0,"Switcher":false,"Target_Switch_Base":0} start 0.1227 took 9.3614s
*-- Test Case {"Switcher":true,"Target_Switch_Base":0,"_bound":1,"ExpansionArg_type":0,"Target_Switcher":0,"ExpansionArg_type_2":0} start 9.6418 took 5.1696s
*-- Errors occured in test {"Switcher":true,"Target_Switch_Base":0,"_bound":1,"ExpansionArg_type":0,"Target_Switcher":0,"ExpansionArg_type_2":0}
* Error: TypeError: Cannot read property 'toLowerCase' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"Target_Switch_Base":0,"_bound":1}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":0,"_bound":3} start 14.98 took 11.5456s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":0,"_bound":3}
* Error: TypeError: Cannot read property 'undefined' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":0,"_bound":3}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":0,"ExpansionArg_type_2":0,"_bound":2} start 14.8892 took 12.3898s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":0,"ExpansionArg_type_2":0,"_bound":2}
* Error: TypeError: Cannot read property 'toLowerCase' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":0,"ExpansionArg_type_2":0,"_bound":2}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":0,"ExpansionArg_type_2":1,"_bound":4} start 14.9477 took 12.6277s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":0,"ExpansionArg_type_2":1,"_bound":4}
* Error: TypeError: Cannot read property 'toLowerCase' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":0,"ExpansionArg_type_2":1,"_bound":4}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":0,"_bound":4,"ExpansionArg_type_3":0} start 26.6486 took 13.8526s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":0,"_bound":4,"ExpansionArg_type_3":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":0,"_bound":4}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":0,"ExpansionArg_type_2":2,"_bound":5,"ExpansionArg_int":0} start 27.4257 took 13.4931s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":0,"ExpansionArg_type_2":2,"_bound":5,"ExpansionArg_int":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":0,"ExpansionArg_type_2":2,"_bound":5}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":0,"_bound":4,"ExpansionArg_type_3":0} start 27.3151 took 15.5859s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":0,"_bound":4,"ExpansionArg_type_3":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":0,"_bound":4}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":0,"ExpansionArg_type_2":2,"_bound":5,"ExpansionArg_int":0} start 27.6098 took 15.7757s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":0,"ExpansionArg_type_2":2,"_bound":5,"ExpansionArg_int":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":0,"ExpansionArg_type_2":2,"_bound":5}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"Target_Switcher":0,"ExpansionArg_type_2":0,"_bound":3,"ExpansionArg_int":0} start 27.3898 took 18.4785s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"Target_Switcher":0,"ExpansionArg_type_2":0,"_bound":3,"ExpansionArg_int":0}
* Error: TypeError: Cannot read property 'toLowerCase' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"Target_Switcher":0,"ExpansionArg_type_2":0,"_bound":3}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":2,"_bound":5,"ExpansionArg_int":0} start 26.5978 took 19.5557s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":2,"_bound":5,"ExpansionArg_int":0}
* Error: TypeError: Cannot read property '[object Object]' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":2,"_bound":5}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":1,"ExpansionArg_int":0,"_bound":6} start 46.2148 took 5.5409s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":1,"ExpansionArg_int":0,"_bound":6}
* Error: TypeError: Cannot read property 'null' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":1,"ExpansionArg_int":0,"_bound":6}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"_bound":7,"ExpansionArg_string":"PureString"} start 40.682 took 11.935s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"_bound":7,"ExpansionArg_string":"PureString"}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"_bound":7}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_2":0,"_bound":4,"ExpansionArg_string":"PureString"} start 45.891 took 8.0926s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_2":0,"_bound":4,"ExpansionArg_string":"PureString"}
* Error: TypeError: Cannot read property 'toLowerCase' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_int":0,"Target_Switcher":0,"ExpansionArg_type_2":0,"_bound":4}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":5} start 42.9864 took 12.6918s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":5}
* Error: TypeError: Cannot read property 'undefined' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":5}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":3,"ExpansionArg_type_3":0,"_bound":6,"ExpansionArg_string":"PureString"} start 40.586 took 15.262s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":3,"ExpansionArg_type_3":0,"_bound":6,"ExpansionArg_string":"PureString"}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":3,"ExpansionArg_type_3":0,"_bound":6}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":3,"ExpansionArg_int":0,"_bound":7,"ExpansionArg_string":"PureString"} start 46.2703 took 9.6481s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":3,"ExpansionArg_int":0,"_bound":7,"ExpansionArg_string":"PureString"}
* Error: TypeError: Cannot read property '[object Object]' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":3,"ExpansionArg_int":0,"_bound":7}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"_bound":8,"ExpansionArg_string":"PureString"} start 43.0862 took 13.0579s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"_bound":8,"ExpansionArg_string":"PureString"}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":3,"_bound":8}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":3,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":6} start 43.0466 took 13.7592s
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":3,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":5} start 40.7547 took 16.2774s
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":0,"ExpansionArg_type_2":1,"ExpansionArg_int":0,"_bound":6} start 40.9747 took 17.1694s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":0,"ExpansionArg_type_2":1,"ExpansionArg_int":0,"_bound":6}
* Error: TypeError: Cannot read property 'toLowerCase' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":0,"ExpansionArg_type_2":1,"ExpansionArg_int":0,"_bound":6}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"ExpansionArg_string":"","_bound":9,"ExpansionArg_int":0} start 52.6903 took 8.2536s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"ExpansionArg_string":"","_bound":9,"ExpansionArg_int":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"ExpansionArg_string":"","_bound":9}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":3,"ExpansionArg_type_3":0,"_bound":7,"ExpansionArg_string":"PureString"} start 43.0179 took 18.0648s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":3,"ExpansionArg_type_3":0,"_bound":7,"ExpansionArg_string":"PureString"}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":3,"ExpansionArg_type_3":0,"_bound":7}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"unknown","Target_Switcher":0,"ExpansionArg_type_2":0,"_bound":6} start 54.0324 took 8.0895s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"unknown","Target_Switcher":0,"ExpansionArg_type_2":0,"_bound":6}
* Error: TypeError: Cannot read property 'toLowerCase' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"unknown","Target_Switcher":0,"ExpansionArg_type_2":0,"_bound":6}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"Target_Switcher":3,"ExpansionArg_type_2":0,"_bound":5} start 45.9587 took 19.2413s
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":1,"ExpansionArg_string":"","_bound":8} start 52.7104 took 14.7857s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":1,"ExpansionArg_string":"","_bound":8}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":1,"ExpansionArg_string":"","_bound":8}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_2":0,"_bound":5,"ExpansionArg_array_length":0} start 55.9036 took 11.7672s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_2":0,"_bound":5,"ExpansionArg_array_length":0}
* Error: TypeError: Cannot read property 'toLowerCase' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_string":"","Target_Switcher":0,"ExpansionArg_type_2":0,"_bound":5}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_string":"","ExpansionArg_type_3":0,"_bound":9,"ExpansionArg_array_length":0} start 56.871 took 10.9379s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_string":"","ExpansionArg_type_3":0,"_bound":9,"ExpansionArg_array_length":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_string":"","ExpansionArg_type_3":0,"_bound":9}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":10,"ExpansionArg_array_length":0} start 52.6544 took 15.9304s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":10,"ExpansionArg_array_length":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":10}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":1,"ExpansionArg_string":"","ExpansionArg_type_3":0,"_bound":7} start 56.1825 took 12.7977s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":1,"ExpansionArg_string":"","ExpansionArg_type_3":0,"_bound":7}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":1,"ExpansionArg_string":"","ExpansionArg_type_3":0,"_bound":7}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"english","Target_Switcher":0,"ExpansionArg_type_2":0,"_bound":7} start 55.7408 took 13.8898s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"english","Target_Switcher":0,"ExpansionArg_type_2":0,"_bound":7}
* Error: TypeError: Cannot read property 'toLowerCase' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"english","Target_Switcher":0,"ExpansionArg_type_2":0,"_bound":7}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":4,"ExpansionArg_string":"","_bound":8,"ExpansionArg_array_length":0} start 56.0307 took 13.8156s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":4,"ExpansionArg_string":"","_bound":8,"ExpansionArg_array_length":0}
* Error: TypeError: Cannot read property '[object Array]' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":4,"ExpansionArg_string":"","_bound":8}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"ExpansionArg_string":"","_bound":10,"ExpansionArg_int":0} start 61.1373 took 10.2329s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"ExpansionArg_string":"","_bound":10,"ExpansionArg_int":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":2,"ExpansionArg_string":"","_bound":10}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"!0!","Target_Switcher":4,"ExpansionArg_type_2":0,"_bound":18} start 58.2226 took 14.536s
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":2,"ExpansionArg_string":"","ExpansionArg_type_3":0,"_bound":8,"ExpansionArg_int":0} start 62.1946 took 11.2932s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":2,"ExpansionArg_string":"","ExpansionArg_type_3":0,"_bound":8,"ExpansionArg_int":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":2,"ExpansionArg_string":"","ExpansionArg_type_3":0,"_bound":8}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":11,"ExpansionArg_array_length":0} start 57.0749 took 18.7397s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":11,"ExpansionArg_array_length":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":11}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"_bound":10,"ExpansionArg_array_element_0_type":0} start 71.4409 took 5.9607s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"_bound":10,"ExpansionArg_array_element_0_type":0}
* Error: TypeError: Cannot read property '[object Array]' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"_bound":10}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":1,"ExpansionArg_string":"","ExpansionArg_type_3":0,"_bound":8} start 65.2397 took 14.9871s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":1,"ExpansionArg_string":"","ExpansionArg_type_3":0,"_bound":8}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":1,"ExpansionArg_string":"","ExpansionArg_type_3":0,"_bound":8}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"ExpansionArg_type_3":0,"_bound":10,"ExpansionArg_bool":false} start 68.6335 took 12.2297s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"ExpansionArg_type_3":0,"_bound":10,"ExpansionArg_bool":false}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"ExpansionArg_type_3":0,"_bound":10}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":1,"ExpansionArg_string":"","_bound":9} start 60.9909 took 21.491s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":1,"ExpansionArg_string":"","_bound":9}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":1,"ExpansionArg_string":"","_bound":9}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":1,"ExpansionArg_type_2":2,"_bound":6,"ExpansionArg_int":0} start 67.5867 took 14.9957s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":1,"ExpansionArg_type_2":2,"_bound":6,"ExpansionArg_int":0}
* Error: TypeError: Cannot read property '[object Object]' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":1,"ExpansionArg_type_2":2,"_bound":6}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":5,"ExpansionArg_array_length":0,"Target_Switcher":0,"ExpansionArg_type_2":0,"_bound":6,"ExpansionArg_bool":false} start 67.865 took 15.2495s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":5,"ExpansionArg_array_length":0,"Target_Switcher":0,"ExpansionArg_type_2":0,"_bound":6,"ExpansionArg_bool":false}
* Error: TypeError: Cannot read property 'toLowerCase' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":5,"ExpansionArg_array_length":0,"Target_Switcher":0,"ExpansionArg_type_2":0,"_bound":6}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":11,"ExpansionArg_bool":false} start 69.0807 took 14.1729s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":11,"ExpansionArg_bool":false}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":11}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"_bound":12,"ExpansionArg_array_element_0_type":0} start 69.6727 took 14.732s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"_bound":12,"ExpansionArg_array_element_0_type":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"_bound":12}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":12,"ExpansionArg_array_element_1_type":0} start 77.4752 took 7.113s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":12,"ExpansionArg_array_element_1_type":0}
* Error: TypeError: Cannot read property '[object Array]' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":12}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":9,"ExpansionArg_bool":false} start 72.853 took 11.8254s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":9,"ExpansionArg_bool":false}
* Error: TypeError: Cannot read property '[object Object]' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":9}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_type_3":0,"_bound":11,"ExpansionArg_array_element_0_type":0} start 69.8987 took 15.395s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_type_3":0,"_bound":11,"ExpansionArg_array_element_0_type":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_type_3":0,"_bound":11}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"Target_Switcher":0,"ExpansionArg_type_2":0,"_bound":7,"ExpansionArg_array_element_0_type":0} start 67.8018 took 17.8743s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"Target_Switcher":0,"ExpansionArg_type_2":0,"_bound":7,"ExpansionArg_array_element_0_type":0}
* Error: TypeError: Cannot read property 'toLowerCase' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"Target_Switcher":0,"ExpansionArg_type_2":0,"_bound":7}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_string":"","ExpansionArg_type_3":0,"_bound":10,"ExpansionArg_array_length":0} start 73.5392 took 15.3603s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_string":"","ExpansionArg_type_3":0,"_bound":10,"ExpansionArg_array_length":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_string":"","ExpansionArg_type_3":0,"_bound":10}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"unknown","Target_Switcher":1,"ExpansionArg_type_2":0,"_bound":12} start 80.9348 took 9.0293s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"unknown","Target_Switcher":1,"ExpansionArg_type_2":0,"_bound":12}
* Error: TypeError: Cannot read property 'undefined' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"unknown","Target_Switcher":1,"ExpansionArg_type_2":0,"_bound":12}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":2,"ExpansionArg_string":"","ExpansionArg_type_3":0,"_bound":9,"ExpansionArg_int":0} start 83.1787 took 7.1582s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":2,"ExpansionArg_string":"","ExpansionArg_type_3":0,"_bound":9,"ExpansionArg_int":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":2,"ExpansionArg_string":"","ExpansionArg_type_3":0,"_bound":9}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":12,"ExpansionArg_bool":false} start 75.8574 took 14.7023s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":12,"ExpansionArg_bool":false}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":12}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":14,"ExpansionArg_array_element_1_type":0} start 84.4832 took 6.9231s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":14,"ExpansionArg_array_element_1_type":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":14}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":1,"ExpansionArg_type_2":1,"ExpansionArg_int":0,"_bound":7} start 85.7355 took 10.7198s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":1,"ExpansionArg_type_2":1,"ExpansionArg_int":0,"_bound":7}
* Error: TypeError: Cannot read property 'null' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":1,"ExpansionArg_type_2":1,"ExpansionArg_int":0,"_bound":7}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"Target_Switcher":5,"ExpansionArg_type_2":0,"_bound":8} start 84.7546 took 12.5751s
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"_bound":13,"ExpansionArg_array_element_0_type":0} start 80.2512 took 17.1297s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"_bound":13,"ExpansionArg_array_element_0_type":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"_bound":13}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":4,"_bound":10,"ExpansionArg_array_length":0} start 82.5062 took 15.2852s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":4,"_bound":10,"ExpansionArg_array_length":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":4,"_bound":10}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_3":0,"_bound":13,"ExpansionArg_array_element_1_type":0} start 85.3551 took 12.7906s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_3":0,"_bound":13,"ExpansionArg_array_element_1_type":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_3":0,"_bound":13}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_type_3":0,"_bound":12,"ExpansionArg_array_element_0_type":0} start 90.0317 took 8.272s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_type_3":0,"_bound":12,"ExpansionArg_array_element_0_type":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_type_3":0,"_bound":12}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"!0!","Target_Switcher":1,"ExpansionArg_type_2":0,"_bound":24} start 83.3478 took 16.0889s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"!0!","Target_Switcher":1,"ExpansionArg_type_2":0,"_bound":24}
* Error: Exception E: SyntaxError: Unexpected end of JSON input of test data on 
* Error: Exception E: SyntaxError: Unexpected end of JSON input of coverage data on 
* Error: Error extracting final output - a fatal error must have occured
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"!0!","Target_Switcher":1,"ExpansionArg_type_2":0,"_bound":24}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":1,"ExpansionArg_type_2":3,"ExpansionArg_int":0,"_bound":8,"ExpansionArg_string":"PureString"} start 82.6418 took 17.0582s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":1,"ExpansionArg_type_2":3,"ExpansionArg_int":0,"_bound":8,"ExpansionArg_string":"PureString"}
* Error: TypeError: Cannot read property '[object Object]' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":1,"ExpansionArg_type_2":3,"ExpansionArg_int":0,"_bound":8}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"_bound":14,"ExpansionArg_array_element_2_type":0} start 84.6715 took 17.0847s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"_bound":14,"ExpansionArg_array_element_2_type":0}
* Error: TypeError: Cannot read property '[object Array]' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"_bound":14}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"_bound":16,"ExpansionArg_array_element_2_type":0} start 91.4913 took 11.1191s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"_bound":16,"ExpansionArg_array_element_2_type":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"_bound":16}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"!0!","Target_Switcher":0,"ExpansionArg_type_2":4,"_bound":19,"ExpansionArg_array_length":0} start 97.5108 took 6.8777s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"!0!","Target_Switcher":0,"ExpansionArg_type_2":4,"_bound":19,"ExpansionArg_array_length":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"!0!","Target_Switcher":0,"ExpansionArg_type_2":4,"_bound":19}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":3,"ExpansionArg_array_length":0,"_bound":13,"ExpansionArg_string_2":"PureString"} start 97.86 took 6.9698s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":3,"ExpansionArg_array_length":0,"_bound":13,"ExpansionArg_string_2":"PureString"}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":3,"ExpansionArg_array_length":0,"_bound":13}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":1,"ExpansionArg_array_length":0,"_bound":11} start 98.1818 took 6.8834s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":1,"ExpansionArg_array_length":0,"_bound":11}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":1,"ExpansionArg_array_length":0,"_bound":11}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":1,"ExpansionArg_type_2":4,"ExpansionArg_string":"","_bound":9,"ExpansionArg_array_length":0} start 99.7759 took 5.7377s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":1,"ExpansionArg_type_2":4,"ExpansionArg_string":"","_bound":9,"ExpansionArg_array_length":0}
* Error: TypeError: Cannot read property '[object Array]' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":1,"ExpansionArg_type_2":4,"ExpansionArg_string":"","_bound":9}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"Target_Switcher":0,"ExpansionArg_type_2":5,"_bound":9,"ExpansionArg_bool":false} start 90.6153 took 15.4297s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"Target_Switcher":0,"ExpansionArg_type_2":5,"_bound":9,"ExpansionArg_bool":false}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"Target_Switcher":0,"ExpansionArg_type_2":5,"_bound":9}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":2,"ExpansionArg_array_length":0,"_bound":12,"ExpansionArg_int":0} start 99.5261 took 7.2415s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":2,"ExpansionArg_array_length":0,"_bound":12,"ExpansionArg_int":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":2,"ExpansionArg_array_length":0,"_bound":12}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"ExpansionArg_type_3":0,"_bound":11,"ExpansionArg_bool":false} start 88.9742 took 17.9868s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"ExpansionArg_type_3":0,"_bound":11,"ExpansionArg_bool":false}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"ExpansionArg_type_3":0,"_bound":11}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"Target_Switcher":1,"_bound":6,"ExpansionArg_type_2":0} start 97.3674 took 10.873s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"Target_Switcher":1,"_bound":6,"ExpansionArg_type_2":0}
* Error: TypeError: Cannot read property 'undefined' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"Target_Switcher":1,"_bound":6}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":14,"ExpansionArg_bool":false} start 98.3672 took 10.5246s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":14,"ExpansionArg_bool":false}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":14}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"Target_Switcher":0,"ExpansionArg_type_2":0,"_bound":9,"ExpansionArg_array_element_1_type":0} start 96.5369 took 12.4392s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"Target_Switcher":0,"ExpansionArg_type_2":0,"_bound":9,"ExpansionArg_array_element_1_type":0}
* Error: TypeError: Cannot read property 'toLowerCase' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"Target_Switcher":0,"ExpansionArg_type_2":0,"_bound":9}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"unknown","Target_Switcher":0,"ExpansionArg_type_2":1,"_bound":13} start 90.4123 took 20.3236s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"unknown","Target_Switcher":0,"ExpansionArg_type_2":1,"_bound":13}
* Error: TypeError: Cannot read property 'toLowerCase' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"unknown","Target_Switcher":0,"ExpansionArg_type_2":1,"_bound":13}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":1,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":10,"ExpansionArg_bool":false} start 105.5874 took 8.3684s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":1,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":10,"ExpansionArg_bool":false}
* Error: TypeError: Cannot read property '[object Object]' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":1,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":10}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"Target_Switcher":0,"ExpansionArg_type_2":4,"ExpansionArg_bool":false,"_bound":13,"ExpansionArg_array_length_2":0} start 108.9595 took 5.5725s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"Target_Switcher":0,"ExpansionArg_type_2":4,"ExpansionArg_bool":false,"_bound":13,"ExpansionArg_array_length_2":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"Target_Switcher":0,"ExpansionArg_type_2":4,"ExpansionArg_bool":false,"_bound":13}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"!0!","Target_Switcher":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":23,"ExpansionArg_bool":false} start 104.4073 took 12.859s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"!0!","Target_Switcher":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":23,"ExpansionArg_bool":false}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"!0!","Target_Switcher":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":23}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"_bound":15,"ExpansionArg_array_element_0_type":0} start 101.8067 took 15.7765s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"_bound":15,"ExpansionArg_array_element_0_type":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"_bound":15}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"!0!","Target_Switcher":0,"ExpansionArg_type_2":1,"ExpansionArg_array_length":0,"_bound":20} start 105.0967 took 13.1787s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"!0!","Target_Switcher":0,"ExpansionArg_type_2":1,"ExpansionArg_array_length":0,"_bound":20}
* Error: TypeError: Cannot read property 'toLowerCase' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"!0!","Target_Switcher":0,"ExpansionArg_type_2":1,"ExpansionArg_array_length":0,"_bound":20}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"!0!","Target_Switcher":0,"ExpansionArg_type_2":2,"ExpansionArg_array_length":0,"_bound":21,"ExpansionArg_int":0} start 106.0773 took 12.7566s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"!0!","Target_Switcher":0,"ExpansionArg_type_2":2,"ExpansionArg_array_length":0,"_bound":21,"ExpansionArg_int":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"!0!","Target_Switcher":0,"ExpansionArg_type_2":2,"ExpansionArg_array_length":0,"_bound":21}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":15,"ExpansionArg_array_element_1_type":0} start 102.6267 took 16.6881s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":15,"ExpansionArg_array_element_1_type":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":15}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"!0!","Target_Switcher":2,"_bound":20,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0} start 114.6199 took 6.1318s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"!0!","Target_Switcher":2,"_bound":20,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"!0!","Target_Switcher":2,"_bound":20}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"Target_Switcher":0,"ExpansionArg_type_2":1,"ExpansionArg_bool":false,"_bound":10} start 106.8143 took 16.2982s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"Target_Switcher":0,"ExpansionArg_type_2":1,"ExpansionArg_bool":false,"_bound":10}
* Error: TypeError: Cannot read property 'toLowerCase' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"Target_Switcher":0,"ExpansionArg_type_2":1,"ExpansionArg_bool":false,"_bound":10}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"!0!","Target_Switcher":1,"_bound":19,"ExpansionArg_type_2":0} start 117.6672 took 6.76s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"!0!","Target_Switcher":1,"_bound":19,"ExpansionArg_type_2":0}
* Error: TypeError: Cannot read property 'undefined' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"!0!","Target_Switcher":1,"_bound":19}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"Target_Switcher":0,"ExpansionArg_type_2":2,"ExpansionArg_bool":false,"_bound":11,"ExpansionArg_int":0} start 108.2872 took 16.4912s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"Target_Switcher":0,"ExpansionArg_type_2":2,"ExpansionArg_bool":false,"_bound":11,"ExpansionArg_int":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"Target_Switcher":0,"ExpansionArg_type_2":2,"ExpansionArg_bool":false,"_bound":11}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"!0!","Target_Switcher":0,"ExpansionArg_type_2":1,"_bound":25} start 118.8814 took 7.5004s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"!0!","Target_Switcher":0,"ExpansionArg_type_2":1,"_bound":25}
* Error: Exception E: SyntaxError: Unexpected end of JSON input of test data on 
* Error: Exception E: SyntaxError: Unexpected end of JSON input of coverage data on 
* Error: Error extracting final output - a fatal error must have occured
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"!0!","Target_Switcher":0,"ExpansionArg_type_2":1,"_bound":25}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"unknown","Target_Switcher":0,"ExpansionArg_type_2":2,"_bound":14,"ExpansionArg_int":0} start 110.7833 took 15.7239s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"unknown","Target_Switcher":0,"ExpansionArg_type_2":2,"_bound":14,"ExpansionArg_int":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"unknown","Target_Switcher":0,"ExpansionArg_type_2":2,"_bound":14}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":4,"_bound":11,"ExpansionArg_array_length":0} start 109.1368 took 19.5514s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":4,"_bound":11,"ExpansionArg_array_length":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":4,"_bound":11}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_type_3":0,"_bound":15,"ExpansionArg_array_element_2_type":0} start 117.3114 took 12.4581s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_type_3":0,"_bound":15,"ExpansionArg_array_element_2_type":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_type_3":0,"_bound":15}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"Target_Switcher":2,"_bound":7,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0} start 114.0082 took 16.7619s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"Target_Switcher":2,"_bound":7,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"ExpansionArg_int":0,"Target_Switcher":2,"_bound":7}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"unknown","Target_Switcher":0,"ExpansionArg_type_2":4,"ExpansionArg_int":0,"_bound":15,"ExpansionArg_array_length":0} start 126.5433 took 4.7056s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"unknown","Target_Switcher":0,"ExpansionArg_type_2":4,"ExpansionArg_int":0,"_bound":15,"ExpansionArg_array_length":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"unknown","Target_Switcher":0,"ExpansionArg_type_2":4,"ExpansionArg_int":0,"_bound":15}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_3":0,"_bound":14,"ExpansionArg_array_element_1_type":0} start 118.367 took 13.3093s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_3":0,"_bound":14,"ExpansionArg_array_element_1_type":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_3":0,"_bound":14}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"unknown","Target_Switcher":2,"ExpansionArg_type_2":0,"_bound":13,"ExpansionArg_type_3":0} start 120.8114 took 12.7076s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"unknown","Target_Switcher":2,"ExpansionArg_type_2":0,"_bound":13,"ExpansionArg_type_3":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"unknown","Target_Switcher":2,"ExpansionArg_type_2":0,"_bound":13}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"Target_Switcher":1,"_bound":9,"ExpansionArg_type_2":0} start 123.1535 took 11.4708s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"Target_Switcher":1,"_bound":9,"ExpansionArg_type_2":0}
* Error: TypeError: Cannot read property 'undefined' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"Target_Switcher":1,"_bound":9}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":4,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":0,"_bound":16,"ExpansionArg_array_element_3_type":0} start 119.3592 took 16.4285s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":4,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":0,"_bound":16,"ExpansionArg_array_element_3_type":0}
* Error: TypeError: Cannot read property '[object Array]' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":4,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":0,"_bound":16}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":1,"ExpansionArg_type_3":3,"_bound":8,"ExpansionArg_string":"PureString"} start 124.8194 took 11.692s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":1,"ExpansionArg_type_3":3,"_bound":8,"ExpansionArg_string":"PureString"}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":1,"ExpansionArg_type_3":3,"_bound":8}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":0,"Target_Switcher":2,"ExpansionArg_type_2":0,"_bound":10,"ExpansionArg_type_3":0} start 126.407 took 11.0278s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":0,"Target_Switcher":2,"ExpansionArg_type_2":0,"_bound":10,"ExpansionArg_type_3":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":0,"Target_Switcher":2,"ExpansionArg_type_2":0,"_bound":10}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":15,"ExpansionArg_bool":false} start 129.7878 took 11.9281s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":15,"ExpansionArg_bool":false}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":15}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":4,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":0,"_bound":18,"ExpansionArg_array_element_3_type":0} start 124.4714 took 18.2598s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":4,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":0,"_bound":18,"ExpansionArg_array_element_3_type":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":4,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":0,"_bound":18}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":2,"ExpansionArg_array_length":0,"_bound":13,"ExpansionArg_int":0} start 130.8593 took 12.0364s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":2,"ExpansionArg_array_length":0,"_bound":13,"ExpansionArg_int":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":2,"ExpansionArg_array_length":0,"_bound":13}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":3,"ExpansionArg_array_length":0,"_bound":14,"ExpansionArg_string_2":"PureString"} start 128.7114 took 14.9688s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":3,"ExpansionArg_array_length":0,"_bound":14,"ExpansionArg_string_2":"PureString"}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":3,"ExpansionArg_array_length":0,"_bound":14}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":1,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":11,"ExpansionArg_array_length":0} start 136.5355 took 8.4934s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":1,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":11,"ExpansionArg_array_length":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":1,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":11}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_array_length":0,"ExpansionArg_type_3":5,"_bound":12,"ExpansionArg_bool":false} start 135.818 took 9.6171s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_array_length":0,"ExpansionArg_type_3":5,"_bound":12,"ExpansionArg_bool":false}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_array_length":0,"ExpansionArg_type_3":5,"_bound":12}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"!0!","Target_Switcher":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"_bound":24,"ExpansionArg_array_element_0_type":0} start 134.7075 took 11.8823s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"!0!","Target_Switcher":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"_bound":24,"ExpansionArg_array_element_0_type":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"!0!","Target_Switcher":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"_bound":24}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"unknown","Target_Switcher":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":17,"ExpansionArg_bool":false} start 131.3275 took 17.2528s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"unknown","Target_Switcher":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":17,"ExpansionArg_bool":false}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"unknown","Target_Switcher":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":17}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":1,"ExpansionArg_array_length":0,"_bound":12} start 133.6127 took 16.2318s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":1,"ExpansionArg_array_length":0,"_bound":12}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":1,"ExpansionArg_array_length":0,"_bound":12}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"_bound":11,"ExpansionArg_array_element_0_type":0} start 142.8387 took 7.618s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"_bound":11,"ExpansionArg_array_element_0_type":0}
* Error: TypeError: Cannot read property '[object Array]' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"_bound":11}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":1,"ExpansionArg_type_3":2,"ExpansionArg_string":"","_bound":10,"ExpansionArg_int":0} start 141.7587 took 9.9802s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":1,"ExpansionArg_type_3":2,"ExpansionArg_string":"","_bound":10,"ExpansionArg_int":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":1,"ExpansionArg_type_3":2,"ExpansionArg_string":"","_bound":10}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":1,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":12,"ExpansionArg_bool":false} start 145.0714 took 8.8382s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":1,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":12,"ExpansionArg_bool":false}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":1,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":12}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":1,"ExpansionArg_type_3":1,"ExpansionArg_string":"","_bound":9} start 137.4703 took 17.9196s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":1,"ExpansionArg_type_3":1,"ExpansionArg_string":"","_bound":9}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":1,"ExpansionArg_type_3":1,"ExpansionArg_string":"","_bound":9}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":5,"ExpansionArg_bool":false,"Target_Switcher":6,"ExpansionArg_type_2":0,"_bound":7} start 142.9278 took 13.6765s
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_array_length":0,"ExpansionArg_type_3":2,"ExpansionArg_bool":false,"_bound":14,"ExpansionArg_int":0} start 146.6479 took 10.4096s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_array_length":0,"ExpansionArg_type_3":2,"ExpansionArg_bool":false,"_bound":14,"ExpansionArg_int":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_array_length":0,"ExpansionArg_type_3":2,"ExpansionArg_bool":false,"_bound":14}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":5,"ExpansionArg_bool":false,"ExpansionArg_type_3":6,"_bound":11,"ExpansionArg_bool_2":false} start 143.7429 took 13.5044s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":5,"ExpansionArg_bool":false,"ExpansionArg_type_3":6,"_bound":11,"ExpansionArg_bool_2":false}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":5,"ExpansionArg_bool":false,"ExpansionArg_type_3":6,"_bound":11}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_array_length":0,"ExpansionArg_type_3":4,"ExpansionArg_bool":false,"_bound":16,"ExpansionArg_array_length_2":0} start 149.8995 took 8.7006s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_array_length":0,"ExpansionArg_type_3":4,"ExpansionArg_bool":false,"_bound":16,"ExpansionArg_array_length_2":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_array_length":0,"ExpansionArg_type_3":4,"ExpansionArg_bool":false,"_bound":16}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_array_length":0,"ExpansionArg_type_3":3,"ExpansionArg_bool":false,"_bound":15,"ExpansionArg_string":"PureString"} start 145.5105 took 13.8369s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_array_length":0,"ExpansionArg_type_3":3,"ExpansionArg_bool":false,"_bound":15,"ExpansionArg_string":"PureString"}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_array_length":0,"ExpansionArg_type_3":3,"ExpansionArg_bool":false,"_bound":15}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_array_length":0,"ExpansionArg_type_3":1,"ExpansionArg_bool":false,"_bound":13} start 148.6071 took 12.8117s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_array_length":0,"ExpansionArg_type_3":1,"ExpansionArg_bool":false,"_bound":13}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_array_length":0,"ExpansionArg_type_3":1,"ExpansionArg_bool":false,"_bound":13}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":1,"ExpansionArg_type_3":3,"_bound":9,"ExpansionArg_string":"PureString"} start 155.4522 took 6.1339s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":1,"ExpansionArg_type_3":3,"_bound":9,"ExpansionArg_string":"PureString"}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":1,"ExpansionArg_type_3":3,"_bound":9}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":1,"_bound":9} start 151.8401 took 9.9906s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":1,"_bound":9}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":1,"_bound":9}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":5,"ExpansionArg_bool":false,"ExpansionArg_type_3":4,"ExpansionArg_bool_2":false,"_bound":15,"ExpansionArg_array_length":0} start 157.3192 took 6.8723s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":5,"ExpansionArg_bool":false,"ExpansionArg_type_3":4,"ExpansionArg_bool_2":false,"_bound":15,"ExpansionArg_array_length":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":5,"ExpansionArg_bool":false,"ExpansionArg_type_3":4,"ExpansionArg_bool_2":false,"_bound":15}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":2,"_bound":11,"ExpansionArg_array_element_0_int":0} start 150.4792 took 16.6977s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":2,"_bound":11,"ExpansionArg_array_element_0_int":0}
* Error: TypeError: Cannot read property '[object Array]' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":2,"_bound":11}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"Target_Switcher":0,"ExpansionArg_type_2":0,"_bound":11,"ExpansionArg_array_element_2_type":0} start 153.9352 took 13.7372s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"Target_Switcher":0,"ExpansionArg_type_2":0,"_bound":11,"ExpansionArg_array_element_2_type":0}
* Error: TypeError: Cannot read property 'toLowerCase' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"Target_Switcher":0,"ExpansionArg_type_2":0,"_bound":11}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":5,"ExpansionArg_bool":false,"ExpansionArg_type_3":2,"ExpansionArg_bool_2":false,"_bound":13,"ExpansionArg_int":0} start 159.401 took 8.5951s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":5,"ExpansionArg_bool":false,"ExpansionArg_type_3":2,"ExpansionArg_bool_2":false,"_bound":13,"ExpansionArg_int":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":5,"ExpansionArg_bool":false,"ExpansionArg_type_3":2,"ExpansionArg_bool_2":false,"_bound":13}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":1,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":12,"ExpansionArg_array_length":0} start 161.8615 took 6.5526s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":1,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":12,"ExpansionArg_array_length":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":1,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":12}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"Target_Switcher":2,"_bound":10,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0} start 157.1268 took 11.4234s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"Target_Switcher":2,"_bound":10,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"Target_Switcher":2,"_bound":10}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":5,"ExpansionArg_bool":false,"ExpansionArg_type_3":3,"ExpansionArg_bool_2":false,"_bound":14,"ExpansionArg_string":"PureString"} start 158.6312 took 10.3004s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":5,"ExpansionArg_bool":false,"ExpansionArg_type_3":3,"ExpansionArg_bool_2":false,"_bound":14,"ExpansionArg_string":"PureString"}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":5,"ExpansionArg_bool":false,"ExpansionArg_type_3":3,"ExpansionArg_bool_2":false,"_bound":14}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"Target_Switcher":1,"ExpansionArg_type_2":0,"_bound":12} start 156.6676 took 14.9559s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"Target_Switcher":1,"ExpansionArg_type_2":0,"_bound":12}
* Error: TypeError: Cannot read property 'undefined' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"Target_Switcher":1,"ExpansionArg_type_2":0,"_bound":12}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":5,"ExpansionArg_bool":false,"ExpansionArg_type_3":1,"ExpansionArg_bool_2":false,"_bound":12} start 161.4996 took 10.3483s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":5,"ExpansionArg_bool":false,"ExpansionArg_type_3":1,"ExpansionArg_bool_2":false,"_bound":12}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":5,"ExpansionArg_bool":false,"ExpansionArg_type_3":1,"ExpansionArg_bool_2":false,"_bound":12}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":3,"_bound":10,"ExpansionArg_string":"PureString"} start 167.3406 took 5.3751s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":3,"_bound":10,"ExpansionArg_string":"PureString"}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":3,"_bound":10}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":1,"ExpansionArg_type_3":2,"ExpansionArg_string":"","_bound":11,"ExpansionArg_int":0} start 164.2607 took 9.9997s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":1,"ExpansionArg_type_3":2,"ExpansionArg_string":"","_bound":11,"ExpansionArg_int":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":1,"ExpansionArg_type_3":2,"ExpansionArg_string":"","_bound":11}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":5,"ExpansionArg_bool":false,"Target_Switcher":2,"_bound":9,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0} start 168.6567 took 7.8791s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":5,"ExpansionArg_bool":false,"Target_Switcher":2,"_bound":9,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":5,"ExpansionArg_bool":false,"Target_Switcher":2,"_bound":9}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":3,"ExpansionArg_array_element_0_int":0,"_bound":13,"ExpansionArg_array_element_0_string":"PureString"} start 167.7162 took 9.3441s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":3,"ExpansionArg_array_element_0_int":0,"_bound":13,"ExpansionArg_array_element_0_string":"PureString"}
* Error: TypeError: Cannot read property '[object Array]' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":3,"ExpansionArg_array_element_0_int":0,"_bound":13}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":1,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":13,"ExpansionArg_bool":false} start 168.4767 took 11.754s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":1,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":13,"ExpansionArg_bool":false}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":1,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":13}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":3,"_bound":13,"ExpansionArg_array_element_0_string":"PureString"} start 168.96 took 11.9156s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":3,"_bound":13,"ExpansionArg_array_element_0_string":"PureString"}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":3,"_bound":13}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":1,"ExpansionArg_type_3":1,"ExpansionArg_string":"","_bound":10} start 161.6638 took 19.3255s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":1,"ExpansionArg_type_3":1,"ExpansionArg_string":"","_bound":10}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":1,"ExpansionArg_type_3":1,"ExpansionArg_string":"","_bound":10}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":2,"ExpansionArg_string":"","_bound":11,"ExpansionArg_int_2":0} start 174.3311 took 8.3074s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":2,"ExpansionArg_string":"","_bound":11,"ExpansionArg_int_2":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":2,"ExpansionArg_string":"","_bound":11}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_array_length":4,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":0,"ExpansionArg_type_3":0,"_bound":17,"ExpansionArg_array_element_3_type":0} start 171.9492 took 12.3229s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_array_length":4,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":0,"ExpansionArg_type_3":0,"_bound":17,"ExpansionArg_array_element_3_type":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_array_length":4,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":0,"ExpansionArg_type_3":0,"_bound":17}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_0_int":0,"_bound":12} start 168.0315 took 17.274s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_0_int":0,"_bound":12}
* Error: TypeError: Cannot read property '[object Array]' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_0_int":0,"_bound":12}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"Target_Switcher":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length_2":1,"_bound":14,"ExpansionArg_array_element_0_type":0} start 171.7212 took 14.207s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"Target_Switcher":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length_2":1,"_bound":14,"ExpansionArg_array_element_0_type":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"Target_Switcher":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length_2":1,"_bound":14}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":5,"ExpansionArg_array_element_0_string":"","_bound":14,"ExpansionArg_array_element_0_bool":false} start 177.1759 took 12.8255s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":5,"ExpansionArg_array_element_0_string":"","_bound":14,"ExpansionArg_array_element_0_bool":false}
* Error: TypeError: Cannot read property '[object Array]' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":5,"ExpansionArg_array_element_0_string":"","_bound":14}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":2,"ExpansionArg_array_element_0_string":"","_bound":15,"ExpansionArg_array_element_0_int":0} start 181.0323 took 9.2054s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":2,"ExpansionArg_array_element_0_string":"","_bound":15,"ExpansionArg_array_element_0_int":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":2,"ExpansionArg_array_element_0_string":"","_bound":15}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":12,"ExpansionArg_array_length":0} start 172.7474 took 17.6631s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":12,"ExpansionArg_array_length":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":12}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"unknown","Target_Switcher":4,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":14} start 176.5915 took 13.9043s
*-- Test Case {"Switcher":true,"ExpansionArg_type":5,"ExpansionArg_bool":false,"Target_Switcher":0,"ExpansionArg_type_2":6,"_bound":8,"ExpansionArg_bool_2":false} start 180.3299 took 12.109s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":5,"ExpansionArg_bool":false,"Target_Switcher":0,"ExpansionArg_type_2":6,"_bound":8,"ExpansionArg_bool_2":false}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":5,"ExpansionArg_bool":false,"Target_Switcher":0,"ExpansionArg_type_2":6,"_bound":8}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":0,"Target_Switcher":3,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":12} start 185.3747 took 7.1675s
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":5,"ExpansionArg_array_element_0_string":"","_bound":16,"ExpansionArg_array_element_0_bool":false} start 180.9021 took 11.91s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":5,"ExpansionArg_array_element_0_string":"","_bound":16,"ExpansionArg_array_element_0_bool":false}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":5,"ExpansionArg_array_element_0_string":"","_bound":16}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_0_string":"","_bound":14} start 182.6551 took 11.8304s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_0_string":"","_bound":14}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_0_string":"","_bound":14}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":3,"ExpansionArg_type_3":0,"_bound":12,"ExpansionArg_array_element_0_string":"PureString"} start 184.3192 took 12.7192s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":3,"ExpansionArg_type_3":0,"_bound":12,"ExpansionArg_array_element_0_string":"PureString"}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":3,"ExpansionArg_type_3":0,"_bound":12}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"_bound":17,"ExpansionArg_array_element_2_type":0} start 190.5949 took 8.99s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"_bound":17,"ExpansionArg_array_element_2_type":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"_bound":17}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":5,"ExpansionArg_bool":false,"Target_Switcher":0,"ExpansionArg_type_2":2,"ExpansionArg_bool_2":false,"_bound":10,"ExpansionArg_int":0} start 194.5071 took 5.575s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":5,"ExpansionArg_bool":false,"Target_Switcher":0,"ExpansionArg_type_2":2,"ExpansionArg_bool_2":false,"_bound":10,"ExpansionArg_int":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":5,"ExpansionArg_bool":false,"Target_Switcher":0,"ExpansionArg_type_2":2,"ExpansionArg_bool_2":false,"_bound":10}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":5,"ExpansionArg_bool":false,"Target_Switcher":0,"ExpansionArg_type_2":4,"ExpansionArg_bool_2":false,"_bound":12,"ExpansionArg_array_length":0} start 192.5348 took 7.7338s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":5,"ExpansionArg_bool":false,"Target_Switcher":0,"ExpansionArg_type_2":4,"ExpansionArg_bool_2":false,"_bound":12,"ExpansionArg_array_length":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":5,"ExpansionArg_bool":false,"Target_Switcher":0,"ExpansionArg_type_2":4,"ExpansionArg_bool_2":false,"_bound":12}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":17,"ExpansionArg_array_element_1_type":0} start 190.2672 took 10.5825s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":17,"ExpansionArg_array_element_1_type":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":17}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":4,"ExpansionArg_array_element_0_bool":false,"_bound":15,"ExpansionArg_array_element_0_array_length":0} start 190.067 took 11.9967s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":4,"ExpansionArg_array_element_0_bool":false,"_bound":15,"ExpansionArg_array_element_0_array_length":0}
* Error: TypeError: Cannot read property '[object Array]' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":4,"ExpansionArg_array_element_0_bool":false,"_bound":15}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":0,"Target_Switcher":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":11} start 186.0059 took 21.3006s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":0,"Target_Switcher":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":11}
* Error: TypeError: Cannot read property 'undefined' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":0,"Target_Switcher":1,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0,"_bound":11}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":13,"ExpansionArg_bool":false} start 190.4516 took 16.9149s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":13,"ExpansionArg_bool":false}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":5,"ExpansionArg_array_length":0,"_bound":13}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"_bound":16,"ExpansionArg_array_element_0_type":0} start 200.8942 took 7.1061s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"_bound":16,"ExpansionArg_array_element_0_type":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":3,"ExpansionArg_string":"","ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"_bound":16}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":5,"ExpansionArg_bool":false,"Target_Switcher":0,"ExpansionArg_type_2":1,"ExpansionArg_bool_2":false,"_bound":9} start 200.143 took 8.8748s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":5,"ExpansionArg_bool":false,"Target_Switcher":0,"ExpansionArg_type_2":1,"ExpansionArg_bool_2":false,"_bound":9}
* Error: TypeError: Cannot read property 'toLowerCase' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":5,"ExpansionArg_bool":false,"Target_Switcher":0,"ExpansionArg_type_2":1,"ExpansionArg_bool_2":false,"_bound":9}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":4,"ExpansionArg_array_element_0_bool":false,"_bound":17,"ExpansionArg_array_element_0_array_length":0} start 192.8391 took 16.5687s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":4,"ExpansionArg_array_element_0_bool":false,"_bound":17,"ExpansionArg_array_element_0_array_length":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":0,"ExpansionArg_type_3":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":4,"ExpansionArg_array_element_0_bool":false,"_bound":17}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_0_string":"","ExpansionArg_type_3":0,"_bound":13} start 200.3593 took 10.2133s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_0_string":"","ExpansionArg_type_3":0,"_bound":13}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_0_string":"","ExpansionArg_type_3":0,"_bound":13}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":5,"ExpansionArg_array_element_0_string":"","ExpansionArg_type_3":0,"_bound":15,"ExpansionArg_array_element_0_bool":false} start 197.1006 took 14.278s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":5,"ExpansionArg_array_element_0_string":"","ExpansionArg_type_3":0,"_bound":15,"ExpansionArg_array_element_0_bool":false}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":5,"ExpansionArg_array_element_0_string":"","ExpansionArg_type_3":0,"_bound":15}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":3,"_bound":13,"ExpansionArg_array_element_1_string":"PureString"} start 202.1393 took 12.3488s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":3,"_bound":13,"ExpansionArg_array_element_1_string":"PureString"}
* Error: TypeError: Cannot read property '[object Array]' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":3,"_bound":13}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":0,"Target_Switcher":1,"ExpansionArg_type_2":0,"_bound":14} start 207.5009 took 8.2093s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":0,"Target_Switcher":1,"ExpansionArg_type_2":0,"_bound":14}
* Error: TypeError: Cannot read property 'undefined' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":0,"Target_Switcher":1,"ExpansionArg_type_2":0,"_bound":14}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_3":3,"_bound":14,"ExpansionArg_string":"PureString"} start 208.0498 took 8.0537s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_3":3,"_bound":14,"ExpansionArg_string":"PureString"}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_3":3,"_bound":14}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":2,"ExpansionArg_array_element_0_string":"","ExpansionArg_type_3":0,"_bound":14,"ExpansionArg_array_element_0_int":0} start 199.6411 took 16.943s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":2,"ExpansionArg_array_element_0_string":"","ExpansionArg_type_3":0,"_bound":14,"ExpansionArg_array_element_0_int":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":2,"ExpansionArg_array_element_0_string":"","ExpansionArg_type_3":0,"_bound":14}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"Target_Switcher":3,"ExpansionArg_type_2":0,"_bound":13} start 209.4453 took 8.1751s
*-- Test Case {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"unknown","Target_Switcher":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"_bound":18,"ExpansionArg_array_element_0_type":0} start 209.0841 took 10.1605s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"unknown","Target_Switcher":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"_bound":18,"ExpansionArg_array_element_0_type":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"unknown","Target_Switcher":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"_bound":18}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":5,"ExpansionArg_bool":false,"Target_Switcher":1,"_bound":8,"ExpansionArg_type_2":0} start 207.3592 took 14.0634s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":5,"ExpansionArg_bool":false,"Target_Switcher":1,"_bound":8,"ExpansionArg_type_2":0}
* Error: TypeError: Cannot read property 'undefined' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":5,"ExpansionArg_bool":false,"Target_Switcher":1,"_bound":8}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":4,"ExpansionArg_array_element_0_bool":false,"ExpansionArg_type_3":0,"_bound":16,"ExpansionArg_array_element_0_array_length":0} start 211.4275 took 10.3048s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":4,"ExpansionArg_array_element_0_bool":false,"ExpansionArg_type_3":0,"_bound":16,"ExpansionArg_array_element_0_array_length":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":4,"ExpansionArg_array_element_0_bool":false,"ExpansionArg_type_3":0,"_bound":16}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":3,"_bound":10,"ExpansionArg_string":"PureString"} start 210.6195 took 14.1053s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":3,"_bound":10,"ExpansionArg_string":"PureString"}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":3,"_bound":10}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":1,"ExpansionArg_array_element_1_string":"","_bound":14} start 216.6024 took 8.2555s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":1,"ExpansionArg_array_element_1_string":"","_bound":14}
* Error: TypeError: Cannot read property '[object Array]' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":1,"ExpansionArg_array_element_1_string":"","_bound":14}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_3":5,"ExpansionArg_string":"","_bound":17,"ExpansionArg_bool":false} start 216.1551 took 8.9978s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_3":5,"ExpansionArg_string":"","_bound":17,"ExpansionArg_bool":false}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_3":5,"ExpansionArg_string":"","_bound":17}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":5,"ExpansionArg_array_element_1_string":"","_bound":16,"ExpansionArg_array_element_1_bool":false} start 214.5595 took 10.6198s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":5,"ExpansionArg_array_element_1_string":"","_bound":16,"ExpansionArg_array_element_1_bool":false}
* Error: TypeError: Cannot read property '[object Array]' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":5,"ExpansionArg_array_element_1_string":"","_bound":16}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_3":1,"ExpansionArg_string":"","_bound":15} start 219.2847 took 7.9123s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_3":1,"ExpansionArg_string":"","_bound":15}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_3":1,"ExpansionArg_string":"","_bound":15}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"!0!","Target_Switcher":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":26,"ExpansionArg_array_element_1_type":0} start 221.8122 took 5.7393s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"!0!","Target_Switcher":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":26,"ExpansionArg_array_element_1_type":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_string":"!0!","Target_Switcher":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":26}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_3":2,"ExpansionArg_string":"","_bound":16,"ExpansionArg_int":0} start 217.6645 took 10.6005s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_3":2,"ExpansionArg_string":"","_bound":16,"ExpansionArg_int":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_3":2,"ExpansionArg_string":"","_bound":16}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":2,"ExpansionArg_array_element_1_string":"","_bound":15,"ExpansionArg_array_element_1_int":0} start 215.7682 took 16.0612s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":2,"ExpansionArg_array_element_1_string":"","_bound":15,"ExpansionArg_array_element_1_int":0}
* Error: TypeError: Cannot read property '[object Array]' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":2,"ExpansionArg_array_element_1_string":"","_bound":15}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":0,"Target_Switcher":2,"ExpansionArg_type_2":0,"_bound":15,"ExpansionArg_type_3":0} start 221.4876 took 11.1614s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":0,"Target_Switcher":2,"ExpansionArg_type_2":0,"_bound":15,"ExpansionArg_type_3":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":0,"Target_Switcher":2,"ExpansionArg_type_2":0,"_bound":15}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_3":4,"ExpansionArg_bool":false,"_bound":18,"ExpansionArg_array_length_2":0} start 225.1675 took 8.0332s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_3":4,"ExpansionArg_bool":false,"_bound":18,"ExpansionArg_array_length_2":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_3":4,"ExpansionArg_bool":false,"_bound":18}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":4,"ExpansionArg_array_element_1_bool":false,"_bound":17,"ExpansionArg_array_element_1_array_length":0} start 225.2074 took 9.8748s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":4,"ExpansionArg_array_element_1_bool":false,"_bound":17,"ExpansionArg_array_element_1_array_length":0}
* Error: TypeError: Cannot read property '[object Array]' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":4,"ExpansionArg_array_element_1_bool":false,"_bound":17}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_type_3":0,"_bound":16,"ExpansionArg_array_element_2_type":0} start 227.5825 took 9.9063s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_type_3":0,"_bound":16,"ExpansionArg_array_element_2_type":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_type_3":0,"_bound":16}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":13,"ExpansionArg_array_length":0} start 224.8085 took 13.5672s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":13,"ExpansionArg_array_length":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":4,"ExpansionArg_string":"","_bound":13}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":1,"ExpansionArg_string":"","_bound":11} start 227.2476 took 11.2224s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":1,"ExpansionArg_string":"","_bound":11}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":1,"ExpansionArg_string":"","_bound":11}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":2,"ExpansionArg_string":"","_bound":12,"ExpansionArg_int_2":0} start 225.0127 took 13.5682s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":2,"ExpansionArg_string":"","_bound":12,"ExpansionArg_int_2":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":2,"ExpansionArg_int":0,"ExpansionArg_type_3":2,"ExpansionArg_string":"","_bound":12}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_array_length":0,"ExpansionArg_type_3":5,"_bound":13,"ExpansionArg_bool":false} start 232.6903 took 7.8034s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_array_length":0,"ExpansionArg_type_3":5,"_bound":13,"ExpansionArg_bool":false}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":2,"ExpansionArg_type_2":4,"ExpansionArg_array_length":0,"ExpansionArg_type_3":5,"_bound":13}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"Target_Switcher":2,"_bound":14,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0} start 238.7126 took 4.1725s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"Target_Switcher":2,"_bound":14,"ExpansionArg_type_2":0,"ExpansionArg_type_3":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"Target_Switcher":2,"_bound":14}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":2,"Target_Switcher":0,"ExpansionArg_type_2":0,"_bound":8,"ExpansionArg_array_element_0_int":0} start 228.2887 took 15.8403s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":2,"Target_Switcher":0,"ExpansionArg_type_2":0,"_bound":8,"ExpansionArg_array_element_0_int":0}
* Error: TypeError: Cannot read property 'toLowerCase' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":2,"Target_Switcher":0,"ExpansionArg_type_2":0,"_bound":8}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":13,"ExpansionArg_array_element_1_type":0} start 233.3035 took 11.9118s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":13,"ExpansionArg_array_element_1_type":0}
* Error: TypeError: Cannot read property '[object Array]' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"Target_Switcher":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":13}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":5,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":0,"ExpansionArg_array_element_3_type":0,"_bound":18,"ExpansionArg_array_element_4_type":0} start 237.5555 took 8.5888s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":5,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":0,"ExpansionArg_array_element_3_type":0,"_bound":18,"ExpansionArg_array_element_4_type":0}
* Error: TypeError: Cannot read property '[object Array]' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":0,"Target_Switcher":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":5,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":0,"ExpansionArg_array_element_3_type":0,"_bound":18}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":0,"Target_Switcher":0,"ExpansionArg_type_2":2,"_bound":11,"ExpansionArg_int":0} start 231.8912 took 16.5085s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":0,"Target_Switcher":0,"ExpansionArg_type_2":2,"_bound":11,"ExpansionArg_int":0}