/root/Targets/vox.js
└── vox.js@1.0.1 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/vox.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000

*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","Array","toString","apply","bound ","Promise","then","bind","bound MD5_hexhash","fromCharCode","Error","charCodeAt"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0,"Switcher":false,"Target_Switch_Base":0,"ExpandedSwitcher":0} start 0.0819 took 6.2791s
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpandedSwitcher":0,"_bound":1,"ExpansionArg_type":0,"ExpandedSwitcher_2":0} start 6.4763 took 6.755s
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpandedSwitcher":0,"ExpansionArg_type":2,"ExpandedSwitcher_2":0,"_bound":4,"ExpansionArg_int":0} start 13.292 took 6.3126s
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpandedSwitcher_2":0,"_bound":2} start 13.3651 took 7.0388s
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpandedSwitcher":2,"ExpansionArg_type":0,"ExpandedSwitcher_2":0,"_bound":3} start 13.32 took 7.6037s
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpandedSwitcher":0,"ExpansionArg_type":1,"ExpansionArg_int":0,"ExpandedSwitcher_2":0,"_bound":5} start 19.685 took 6.6729s
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpandedSwitcher":0,"ExpansionArg_type":3,"ExpansionArg_int":0,"ExpandedSwitcher_2":0,"_bound":6,"ExpansionArg_string":"PureString"} start 19.6614 took 7.0086s
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":3,"ExpansionArg_type":0,"ExpandedSwitcher_2":0,"_bound":4} start 20.4735 took 6.7577s
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":3,"ExpandedSwitcher_2":0,"_bound":5,"ExpansionArg_string":"PureString"} start 20.4504 took 6.8603s
*-- Test Case {"Switcher":false,"Target_Switch_Base":3,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpandedSwitcher_2":0,"_bound":3,"ExpansionArg_type_2":0} start 20.4975 took 7.3334s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":3,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpandedSwitcher_2":0,"_bound":3,"ExpansionArg_type_2":0}
* Error: ReferenceError: THREE is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":3,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpandedSwitcher_2":0,"_bound":3}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_string":"","ExpandedSwitcher_2":0,"_bound":7,"ExpansionArg_array_length":0} start 26.7204 took 6.9628s
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":1,"ExpansionArg_string":"","ExpandedSwitcher_2":0,"_bound":6} start 27.3765 took 6.9674s
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"_bound":5,"ExpansionArg_type":0,"ExpansionArg_type_2":0} start 27.2719 took 7.1542s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"_bound":5,"ExpansionArg_type":0,"ExpansionArg_type_2":0}
* Error: TypeError: path must be a string or Buffer
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"_bound":5}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_string":"","ExpandedSwitcher_2":0,"_bound":8,"ExpansionArg_array_length":0} start 27.4701 took 7.0855s
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"_bound":6,"ExpansionArg_type":0,"ExpansionArg_type_2":0} start 27.2976 took 7.3367s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"_bound":6,"ExpansionArg_type":0,"ExpansionArg_type_2":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"_bound":6}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":2,"ExpansionArg_string":"","ExpandedSwitcher_2":0,"_bound":7,"ExpansionArg_int":0} start 27.4101 took 7.7093s
*-- Test Case {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_type_2":0,"_bound":5,"ExpansionArg_array_length":0} start 27.9162 took 7.3428s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_type_2":0,"_bound":5,"ExpansionArg_array_length":0}
* Error: ReferenceError: THREE is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_type_2":0,"_bound":5}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"_bound":4,"ExpandedSwitcher":0} start 27.9975 took 7.5968s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"_bound":4,"ExpandedSwitcher":0}
* Error: ReferenceError: document is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":4,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"_bound":4}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"_bound":6,"ExpansionArg_array_length":0} start 27.951 took 7.7917s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"_bound":6,"ExpansionArg_array_length":0}
* Error: ReferenceError: THREE is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"_bound":6}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpandedSwitcher_2":0,"_bound":9,"ExpansionArg_array_element_0_type":0} start 33.7574 took 8.3437s
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"_bound":7} start 34.7379 took 7.465s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"_bound":7}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"_bound":7}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"_bound":8} start 34.7027 took 7.5133s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"_bound":8}
* Error: TypeError: Function.prototype.apply was called on null, which is a object and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"_bound":8}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":3,"ExpansionArg_type_2":0,"_bound":6,"ExpansionArg_string":"PureString"} start 34.4669 took 7.9538s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":3,"ExpansionArg_type_2":0,"_bound":6,"ExpansionArg_string":"PureString"}
* Error: TypeError: path must be a string or Buffer
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":3,"ExpansionArg_type_2":0,"_bound":6}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpandedSwitcher_2":0,"_bound":10,"ExpansionArg_array_element_0_type":0} start 34.604 took 7.9197s
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpandedSwitcher":0,"ExpansionArg_type":5,"ExpansionArg_array_length":0,"ExpandedSwitcher_2":0,"_bound":8,"ExpansionArg_bool":false} start 33.7277 took 8.8964s
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"_bound":7,"ExpansionArg_string":"PureString"} start 34.5024 took 8.265s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"_bound":7,"ExpansionArg_string":"PureString"}
* Error: TypeError: path must be a string or Buffer
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"_bound":7}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":1,"ExpansionArg_array_length":0,"ExpansionArg_type_2":0,"_bound":6} start 35.3923 took 7.539s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":1,"ExpansionArg_array_length":0,"ExpansionArg_type_2":0,"_bound":6}
* Error: ReferenceError: THREE is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":1,"ExpansionArg_array_length":0,"ExpansionArg_type_2":0,"_bound":6}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_type_2":0,"_bound":10,"ExpansionArg_array_element_0_type":0} start 35.435 took 7.641s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_type_2":0,"_bound":10,"ExpansionArg_array_element_0_type":0}
* Error: ReferenceError: THREE is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_type_2":0,"_bound":10}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":3,"ExpansionArg_array_length":0,"ExpansionArg_type_2":0,"_bound":8,"ExpansionArg_string":"PureString"} start 35.4151 took 7.9001s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":3,"ExpansionArg_array_length":0,"ExpansionArg_type_2":0,"_bound":8,"ExpansionArg_string":"PureString"}
* Error: ReferenceError: THREE is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":3,"ExpansionArg_array_length":0,"ExpansionArg_type_2":0,"_bound":8}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":5,"_bound":11,"ExpansionArg_bool":false} start 35.4899 took 8.0176s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":5,"_bound":11,"ExpansionArg_bool":false}
* Error: ReferenceError: THREE is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":5,"_bound":11}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":5,"ExpansionArg_array_length":0,"ExpandedSwitcher_2":0,"_bound":9,"ExpansionArg_bool":false} start 34.5821 took 9.0688s
*-- Test Case {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":5,"ExpansionArg_array_length":0,"ExpansionArg_type_2":0,"_bound":9,"ExpansionArg_bool":false} start 35.3603 took 8.3222s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":5,"ExpansionArg_array_length":0,"ExpansionArg_type_2":0,"_bound":9,"ExpansionArg_bool":false}
* Error: ReferenceError: THREE is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":5,"ExpansionArg_array_length":0,"ExpansionArg_type_2":0,"_bound":9}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":5,"ExpandedSwitcher":0,"ExpansionArg_type":0,"_bound":5} start 35.6278 took 8.0569s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":5,"ExpandedSwitcher":0,"ExpansionArg_type":0,"_bound":5}
* Error: TypeError: Cannot read property 'length' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":5,"ExpandedSwitcher":0,"ExpansionArg_type":0,"_bound":5}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":2,"ExpansionArg_array_length":0,"ExpansionArg_type_2":0,"_bound":7,"ExpansionArg_int":0} start 35.346 took 8.7024s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":2,"ExpansionArg_array_length":0,"ExpansionArg_type_2":0,"_bound":7,"ExpansionArg_int":0}
* Error: ReferenceError: THREE is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":2,"ExpansionArg_array_length":0,"ExpansionArg_type_2":0,"_bound":7}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_array_length":0,"_bound":7} start 35.8148 took 8.3146s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_array_length":0,"_bound":7}
* Error: ReferenceError: THREE is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_array_length":0,"_bound":7}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":2,"ExpansionArg_string":"","ExpansionArg_type_2":0,"_bound":8,"ExpansionArg_int":0} start 42.5019 took 7.5171s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":2,"ExpansionArg_string":"","ExpansionArg_type_2":0,"_bound":8,"ExpansionArg_int":0}
* Error: TypeError: path must be a string or Buffer
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":2,"ExpansionArg_string":"","ExpansionArg_type_2":0,"_bound":8}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"_bound":9,"ExpansionArg_string":"PureString"} start 42.3823 took 7.8209s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"_bound":9,"ExpansionArg_string":"PureString"}
* Error: TypeError: Function.prototype.apply was called on PureString, which is a string and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"_bound":9}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"_bound":11,"ExpansionArg_array_element_0_type":0} start 42.3028 took 8.2367s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"_bound":11,"ExpansionArg_array_element_0_type":0}
* Error: ReferenceError: THREE is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"_bound":11}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":4,"ExpansionArg_string":"","ExpansionArg_type_2":0,"_bound":9,"ExpansionArg_array_length":0} start 42.6928 took 8.5396s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":4,"ExpansionArg_string":"","ExpansionArg_type_2":0,"_bound":9,"ExpansionArg_array_length":0}
* Error: TypeError: path must be a string or Buffer
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":4,"ExpansionArg_string":"","ExpansionArg_type_2":0,"_bound":9}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":3,"ExpansionArg_type_2":0,"_bound":8,"ExpansionArg_string":"PureString"} start 42.9664 took 8.3479s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":3,"ExpansionArg_type_2":0,"_bound":8,"ExpansionArg_string":"PureString"}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":3,"ExpansionArg_type_2":0,"_bound":8}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":2,"ExpansionArg_bool":false,"_bound":13,"ExpansionArg_int":0} start 43.908 took 7.5001s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":2,"ExpansionArg_bool":false,"_bound":13,"ExpansionArg_int":0}
* Error: ReferenceError: THREE is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":2,"ExpansionArg_bool":false,"_bound":13}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_2":0,"_bound":12,"ExpansionArg_array_element_1_type":0} start 43.1263 took 8.3413s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_2":0,"_bound":12,"ExpansionArg_array_element_1_type":0}
* Error: ReferenceError: THREE is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_2":0,"_bound":12}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":5,"ExpansionArg_bool":true,"_bound":16} start 43.6057 took 7.8863s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":5,"ExpansionArg_bool":true,"_bound":16}
* Error: ReferenceError: THREE is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":5,"ExpansionArg_bool":true,"_bound":16}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_array_length":0,"_bound":8,"ExpansionArg_int":0} start 42.587 took 9.0921s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_array_length":0,"_bound":8,"ExpansionArg_int":0}
* Error: ReferenceError: THREE is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_array_length":0,"_bound":8}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_string":"","_bound":10,"ExpansionArg_array_length":0} start 42.832 took 8.8562s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_string":"","_bound":10,"ExpansionArg_array_length":0}
* Error: TypeError: path must be a string or Buffer
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_string":"","_bound":10}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":4,"ExpansionArg_bool":false,"_bound":15,"ExpansionArg_array_length_2":0} start 43.7671 took 7.9214s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":4,"ExpansionArg_bool":false,"_bound":15,"ExpansionArg_array_length_2":0}
* Error: ReferenceError: THREE is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":4,"ExpansionArg_bool":false,"_bound":15}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_string":"","_bound":8} start 44.1024 took 7.8973s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_string":"","_bound":8}
* Error: TypeError: path must be a string or Buffer
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_string":"","_bound":8}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":3,"ExpansionArg_bool":false,"_bound":14,"ExpansionArg_string":"PureString"} start 44.0192 took 7.9806s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":3,"ExpansionArg_bool":false,"_bound":14,"ExpansionArg_string":"PureString"}
* Error: ReferenceError: THREE is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":3,"ExpansionArg_bool":false,"_bound":14}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpandedSwitcher_2":0,"_bound":11,"ExpansionArg_array_element_1_type":0} start 42.1603 took 10.0617s
*-- Test Case {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"ExpansionArg_array_length":0,"_bound":9,"ExpansionArg_string":"PureString"} start 44.2023 took 8.0278s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"ExpansionArg_array_length":0,"_bound":9,"ExpansionArg_string":"PureString"}
* Error: ReferenceError: THREE is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"ExpansionArg_array_length":0,"_bound":9}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":1,"ExpansionArg_string":"","ExpansionArg_type_2":0,"_bound":7} start 43.352 took 9.1983s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":1,"ExpansionArg_string":"","ExpansionArg_type_2":0,"_bound":7}
* Error: TypeError: path must be a string or Buffer
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":1,"ExpansionArg_string":"","ExpansionArg_type_2":0,"_bound":7}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":10,"ExpansionArg_bool":false} start 50.0613 took 7.799s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":10,"ExpansionArg_bool":false}
* Error: ReferenceError: THREE is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":10}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpandedSwitcher_2":0,"_bound":12,"ExpansionArg_array_element_1_type":0} start 50.571 took 7.3972s
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_string":"","_bound":10,"ExpansionArg_int":0} start 51.2805 took 7.7272s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_string":"","_bound":10,"ExpansionArg_int":0}
* Error: TypeError: Function.prototype.apply was called on 0, which is a number and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_string":"","_bound":10}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_string":"","_bound":11,"ExpansionArg_array_length":0} start 50.2582 took 8.8293s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_string":"","_bound":11,"ExpansionArg_array_length":0}
* Error: TypeError: Function.prototype.apply was called on [object Array], which is a object and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_string":"","_bound":11}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":1,"_bound":9} start 51.7584 took 7.4226s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":1,"_bound":9}
* Error: ReferenceError: THREE is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":1,"_bound":9}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":2,"ExpansionArg_int":1,"_bound":14} start 51.4563 took 7.8071s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":2,"ExpansionArg_int":1,"_bound":14}
* Error: ReferenceError: THREE is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":2,"ExpansionArg_int":1,"_bound":14}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":5,"ExpansionArg_array_length":0,"ExpansionArg_type_2":0,"_bound":10,"ExpansionArg_bool":false} start 51.5383 took 7.8799s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":5,"ExpansionArg_array_length":0,"ExpansionArg_type_2":0,"_bound":10,"ExpansionArg_bool":false}
* Error: TypeError: path must be a string or Buffer
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":5,"ExpansionArg_array_length":0,"ExpansionArg_type_2":0,"_bound":10}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":1,"ExpansionArg_bool":false,"_bound":12} start 51.6424 took 7.8504s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":1,"ExpansionArg_bool":false,"_bound":12}
* Error: ReferenceError: THREE is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":1,"ExpansionArg_bool":false,"_bound":12}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":4,"ExpansionArg_string":"","ExpansionArg_type_2":0,"_bound":10,"ExpansionArg_array_length":0} start 51.3664 took 8.3338s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":4,"ExpansionArg_string":"","ExpansionArg_type_2":0,"_bound":10,"ExpansionArg_array_length":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":4,"ExpansionArg_string":"","ExpansionArg_type_2":0,"_bound":10}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":11,"ExpansionArg_bool":false} start 51.8683 took 8.0767s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":11,"ExpansionArg_bool":false}
* Error: TypeError: path must be a string or Buffer
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":11}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_type_2":0,"_bound":14,"ExpansionArg_array_element_2_type":0} start 52.0988 took 8.0981s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_type_2":0,"_bound":14,"ExpansionArg_array_element_2_type":0}
* Error: ReferenceError: THREE is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_type_2":0,"_bound":14}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","_bound":15} start 52.1984 took 8.0683s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","_bound":15}
* Error: ReferenceError: THREE is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","_bound":15}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_string":"","_bound":9,"ExpansionArg_int":0} start 51.952 took 8.443s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_string":"","_bound":9,"ExpansionArg_int":0}
* Error: TypeError: path must be a string or Buffer
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_string":"","_bound":9}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":2,"ExpandedSwitcher_2":0,"_bound":10,"ExpansionArg_array_element_0_int":0} start 52.2982 took 8.2897s
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpandedSwitcher":0,"ExpansionArg_type":5,"_bound":7,"ExpansionArg_bool":false} start 52.5821 took 8.1583s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":4,"ExpandedSwitcher":0,"ExpansionArg_type":5,"_bound":7,"ExpansionArg_bool":false}
* Error: ReferenceError: document is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":4,"ExpandedSwitcher":0,"ExpansionArg_type":5,"_bound":7}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","_bound":10} start 52.4104 took 9.2453s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","_bound":10}
* Error: ReferenceError: THREE is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"ExpansionArg_string":"","_bound":10}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_bool":true,"_bound":11} start 57.9095 took 8.6818s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_bool":true,"_bound":11}
* Error: ReferenceError: THREE is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_bool":true,"_bound":11}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":1,"ExpansionArg_type_2":3,"_bound":9,"ExpansionArg_string":"PureString"} start 60.5519 took 6.2397s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":1,"ExpansionArg_type_2":3,"_bound":9,"ExpansionArg_string":"PureString"}
* Error: TypeError: Function.prototype.apply was called on PureString, which is a string and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":1,"ExpansionArg_type_2":3,"_bound":9}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_type_2":0,"_bound":11,"ExpansionArg_array_element_0_type":0} start 58.055 took 8.8806s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_type_2":0,"_bound":11,"ExpansionArg_array_element_0_type":0}
* Error: TypeError: path must be a string or Buffer
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_type_2":0,"_bound":11}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length_2":1,"_bound":16,"ExpansionArg_array_element_0_type":0} start 59.4798 took 7.5373s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length_2":1,"_bound":16,"ExpansionArg_array_element_0_type":0}
* Error: ReferenceError: THREE is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length_2":1,"_bound":16}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpandedSwitcher_2":0,"_bound":13,"ExpansionArg_array_element_2_type":0} start 59.344 took 7.6732s
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":3,"ExpansionArg_array_element_0_int":0,"ExpandedSwitcher_2":0,"_bound":12,"ExpansionArg_array_element_0_string":"PureString"} start 60.703 took 6.5012s
*-- Test Case {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":13,"ExpansionArg_array_element_1_type":0} start 59.0548 took 8.1496s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":13,"ExpansionArg_array_element_1_type":0}
* Error: ReferenceError: THREE is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":13}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpandedSwitcher_2":0,"_bound":14,"ExpansionArg_array_element_2_type":0} start 59.9985 took 7.4332s
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":2,"ExpansionArg_string":"","ExpansionArg_type_2":0,"_bound":9,"ExpansionArg_int":0} start 59.2521 took 8.5084s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":2,"ExpansionArg_string":"","ExpansionArg_type_2":0,"_bound":9,"ExpansionArg_int":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":2,"ExpansionArg_string":"","ExpansionArg_type_2":0,"_bound":9}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"_bound":7,"ExpansionArg_int":0} start 60.3622 took 7.4712s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"_bound":7,"ExpansionArg_int":0}
* Error: ReferenceError: THREE is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"_bound":7}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":6,"ExpansionArg_type":0,"_bound":6} start 59.556 took 9.03s
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":12,"ExpansionArg_bool":false} start 59.1646 took 9.5158s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":12,"ExpansionArg_bool":false}
* Error: TypeError: Function.prototype.apply was called on false, which is a boolean and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":12}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":5,"ExpansionArg_array_length":0,"ExpansionArg_type_2":0,"_bound":11,"ExpansionArg_bool":false} start 59.7582 took 9.313s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":5,"ExpansionArg_array_length":0,"ExpansionArg_type_2":0,"_bound":11,"ExpansionArg_bool":false}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":5,"ExpansionArg_array_length":0,"ExpansionArg_type_2":0,"_bound":11}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpandedSwitcher":5,"ExpansionArg_type":0,"_bound":6} start 60.2392 took 9.6738s
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpandedSwitcher":0,"ExpansionArg_type":2,"ExpansionArg_bool":false,"_bound":9,"ExpansionArg_int":0} start 60.776 took 9.259s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":4,"ExpandedSwitcher":0,"ExpansionArg_type":2,"ExpansionArg_bool":false,"_bound":9,"ExpansionArg_int":0}
* Error: ReferenceError: document is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":4,"ExpandedSwitcher":0,"ExpansionArg_type":2,"ExpansionArg_bool":false,"_bound":9}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpandedSwitcher":0,"ExpansionArg_type":1,"ExpansionArg_bool":false,"_bound":8} start 61.7027 took 8.7935s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":4,"ExpandedSwitcher":0,"ExpansionArg_type":1,"ExpansionArg_bool":false,"_bound":8}
* Error: ReferenceError: document is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":4,"ExpandedSwitcher":0,"ExpansionArg_type":1,"ExpansionArg_bool":false,"_bound":8}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_0_int":0,"ExpandedSwitcher_2":0,"_bound":11} start 66.6374 took 7.1901s
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":1,"ExpansionArg_type_2":4,"ExpansionArg_string":"","_bound":12,"ExpansionArg_array_length":0} start 66.872 took 7.2088s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":1,"ExpansionArg_type_2":4,"ExpansionArg_string":"","_bound":12,"ExpansionArg_array_length":0}
* Error: TypeError: Function.prototype.apply was called on [object Array], which is a object and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":1,"ExpansionArg_type_2":4,"ExpansionArg_string":"","_bound":12}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"_bound":12,"ExpansionArg_array_element_0_type":0} start 67.4788 took 6.7528s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"_bound":12,"ExpansionArg_array_element_0_type":0}
* Error: TypeError: path must be a string or Buffer
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"_bound":12}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpandedSwitcher":0,"ExpansionArg_type":3,"ExpansionArg_bool":false,"_bound":10,"ExpansionArg_string":"PureString"} start 67.0951 took 7.6121s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":4,"ExpandedSwitcher":0,"ExpansionArg_type":3,"ExpansionArg_bool":false,"_bound":10,"ExpansionArg_string":"PureString"}
* Error: ReferenceError: document is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":4,"ExpandedSwitcher":0,"ExpansionArg_type":3,"ExpansionArg_bool":false,"_bound":10}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_type_2":0,"_bound":12,"ExpansionArg_array_element_0_type":0} start 67.8225 took 7.0771s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_type_2":0,"_bound":12,"ExpansionArg_array_element_0_type":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_type_2":0,"_bound":12}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_string":"","_bound":11,"ExpansionArg_int":0} start 67.1925 took 7.8107s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_string":"","_bound":11,"ExpansionArg_int":0}
* Error: TypeError: Function.prototype.apply was called on 0, which is a number and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_string":"","_bound":11}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_bool":false,"_bound":11,"ExpansionArg_array_length":0} start 67.2983 took 7.7548s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":4,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_bool":false,"_bound":11,"ExpansionArg_array_length":0}
* Error: ReferenceError: document is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":4,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_bool":false,"_bound":11}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":1,"ExpansionArg_type_2":1,"ExpansionArg_string":"","_bound":10} start 67.0056 took 8.4047s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":1,"ExpansionArg_type_2":1,"ExpansionArg_string":"","_bound":10}
* Error: TypeError: Function.prototype.apply was called on null, which is a object and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":1,"ExpansionArg_type_2":1,"ExpansionArg_string":"","_bound":10}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":2,"ExpansionArg_type_2":0,"_bound":11,"ExpansionArg_array_element_0_int":0} start 67.392 took 8.0872s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":2,"ExpansionArg_type_2":0,"_bound":11,"ExpansionArg_array_element_0_int":0}
* Error: ReferenceError: THREE is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":2,"ExpansionArg_type_2":0,"_bound":11}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":1,"ExpansionArg_type_2":1,"ExpansionArg_int":0,"_bound":8} start 68.633 took 7.3043s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":1,"ExpansionArg_type_2":1,"ExpansionArg_int":0,"_bound":8}
* Error: ReferenceError: THREE is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":1,"ExpansionArg_type_2":1,"ExpansionArg_int":0,"_bound":8}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":4,"_bound":10} start 67.9 took 8.1359s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":4,"_bound":10}
* Error: ReferenceError: THREE is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_int":4,"_bound":10}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":1,"ExpansionArg_type_2":4,"ExpansionArg_int":0,"_bound":9,"ExpansionArg_array_length":0} start 68.7796 took 7.9405s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":1,"ExpansionArg_type_2":4,"ExpansionArg_int":0,"_bound":9,"ExpansionArg_array_length":0}
* Error: ReferenceError: THREE is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":1,"ExpansionArg_type_2":4,"ExpansionArg_int":0,"_bound":9}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":5,"ExpansionArg_array_element_0_string":"","ExpandedSwitcher_2":0,"_bound":13,"ExpansionArg_array_element_0_bool":false} start 69.1142 took 7.7162s
*-- Test Case {"Switcher":false,"Target_Switch_Base":4,"ExpandedSwitcher":1,"_bound":7,"ExpansionArg_type":0} start 69.9645 took 7.6458s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":4,"ExpandedSwitcher":1,"_bound":7,"ExpansionArg_type":0}
* Error: TypeError: Cannot read property 'palette' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":4,"ExpandedSwitcher":1,"_bound":7}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":3,"ExpandedSwitcher_2":0,"_bound":11,"ExpansionArg_array_element_0_string":"PureString"} start 70.0838 took 8.382s
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":4,"_bound":10,"ExpansionArg_array_length":0} start 70.5295 took 8.2909s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":4,"_bound":10,"ExpansionArg_array_length":0}
* Error: TypeError: path must be a string or Buffer
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":4,"_bound":10}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":5,"ExpansionArg_bool":false,"ExpansionArg_type_2":6,"_bound":10,"ExpansionArg_bool_2":false} start 73.8983 took 7.9953s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":5,"ExpansionArg_bool":false,"ExpansionArg_type_2":6,"_bound":10,"ExpansionArg_bool_2":false}
* Error: ReferenceError: THREE is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":5,"ExpansionArg_bool":false,"ExpansionArg_type_2":6,"_bound":10}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":1,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":13,"ExpansionArg_bool":false} start 74.149 took 7.8148s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":1,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":13,"ExpansionArg_bool":false}
* Error: TypeError: Function.prototype.apply was called on false, which is a boolean and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":1,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":13}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":1,"_bound":9} start 74.9442 took 7.5169s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":1,"_bound":9}
* Error: ReferenceError: THREE is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":1,"_bound":9}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_2":0,"_bound":13,"ExpansionArg_array_element_1_type":0} start 74.3155 took 8.291s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_2":0,"_bound":13,"ExpansionArg_array_element_1_type":0}
* Error: TypeError: path must be a string or Buffer
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_2":0,"_bound":13}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":4,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":0,"ExpansionArg_type_2":0,"_bound":16,"ExpansionArg_array_element_3_type":0} start 75.1265 took 7.679s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":4,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":0,"ExpansionArg_type_2":0,"_bound":16,"ExpansionArg_array_element_3_type":0}
* Error: ReferenceError: THREE is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":4,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":0,"ExpansionArg_type_2":0,"_bound":16}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":5,"ExpansionArg_array_element_0_int":0,"ExpansionArg_type_2":0,"_bound":13,"ExpansionArg_array_element_0_bool":false} start 75.5666 took 7.4036s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":5,"ExpansionArg_array_element_0_int":0,"ExpansionArg_type_2":0,"_bound":13,"ExpansionArg_array_element_0_bool":false}
* Error: ReferenceError: THREE is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":5,"ExpansionArg_array_element_0_int":0,"ExpansionArg_type_2":0,"_bound":13}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_2":2,"_bound":13,"ExpansionArg_int":0} start 75.0424 took 8.1472s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_2":2,"_bound":13,"ExpansionArg_int":0}
* Error: ReferenceError: THREE is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_2":2,"_bound":13}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"_bound":13,"ExpansionArg_array_element_0_type":0} start 74.7563 took 8.9321s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"_bound":13,"ExpansionArg_array_element_0_type":0}
* Error: TypeError: Function.prototype.apply was called on [object Array], which is a object and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"_bound":13}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":5,"ExpansionArg_type":6,"_bound":7,"ExpansionArg_bool":false,"ExpandedSwitcher":0} start 75.4385 took 8.3269s
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"_bound":9,"ExpansionArg_string":"PureString"} start 76.0906 took 8.0976s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"_bound":9,"ExpansionArg_string":"PureString"}
* Error: TypeError: path must be a string or Buffer
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"_bound":9}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_0_int":0,"ExpansionArg_type_2":0,"_bound":12} start 75.973 took 8.2709s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_0_int":0,"ExpansionArg_type_2":0,"_bound":12}
* Error: ReferenceError: THREE is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_0_int":0,"ExpansionArg_type_2":0,"_bound":12}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":1,"ExpansionArg_type_2":3,"ExpansionArg_array_length":0,"_bound":10,"ExpansionArg_string":"PureString"} start 76.7537 took 8.1189s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":1,"ExpansionArg_type_2":3,"ExpansionArg_array_length":0,"_bound":10,"ExpansionArg_string":"PureString"}
* Error: ReferenceError: THREE is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":1,"ExpansionArg_type_2":3,"ExpansionArg_array_length":0,"_bound":10}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":4,"ExpansionArg_array_element_0_bool":false,"ExpandedSwitcher_2":0,"_bound":14,"ExpansionArg_array_element_0_array_length":0} start 77.6425 took 7.9578s
*-- Test Case {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":1,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":11,"ExpansionArg_bool":false} start 76.922 took 9.1763s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":1,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":11,"ExpansionArg_bool":false}
* Error: ReferenceError: THREE is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":1,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":11}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":3,"ExpansionArg_array_length":0,"_bound":13,"ExpansionArg_string_2":"PureString"} start 78.8849 took 7.3341s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":3,"ExpansionArg_array_length":0,"_bound":13,"ExpansionArg_string_2":"PureString"}
* Error: TypeError: path must be a string or Buffer
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":3,"ExpansionArg_array_length":0,"_bound":13}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":2,"ExpansionArg_array_element_0_string":"","ExpandedSwitcher_2":0,"_bound":13,"ExpansionArg_array_element_0_int":0} start 78.4922 took 7.915s
*-- Test Case {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":5,"ExpansionArg_bool":false,"ExpansionArg_type_2":6,"ExpansionArg_bool_2":true,"_bound":15} start 81.9313 took 8.1198s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":5,"ExpansionArg_bool":false,"ExpansionArg_type_2":6,"ExpansionArg_bool_2":true,"_bound":15}
* Error: ReferenceError: THREE is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":5,"ExpansionArg_bool":false,"ExpansionArg_type_2":6,"ExpansionArg_bool_2":true,"_bound":15}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":2,"ExpansionArg_array_length":0,"_bound":12,"ExpansionArg_int":0} start 82.8357 took 7.5396s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":2,"ExpansionArg_array_length":0,"_bound":12,"ExpansionArg_int":0}
* Error: TypeError: path must be a string or Buffer
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":2,"ExpansionArg_array_length":0,"_bound":12}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":5,"ExpansionArg_array_element_0_string":"","ExpandedSwitcher_2":0,"_bound":14,"ExpansionArg_array_element_0_bool":false} start 82.675 took 7.7661s
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":1,"ExpansionArg_array_length":0,"_bound":11} start 82.53 took 8.0253s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":1,"ExpansionArg_array_length":0,"_bound":11}
* Error: TypeError: path must be a string or Buffer
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":1,"ExpansionArg_array_length":0,"_bound":11}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_0_string":"","ExpandedSwitcher_2":0,"_bound":12} start 82.0466 took 8.6055s
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":14,"ExpansionArg_bool":false} start 83.0142 took 8.1106s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":14,"ExpansionArg_bool":false}
* Error: TypeError: path must be a string or Buffer
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":14}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":5,"ExpansionArg_bool":false,"ExpansionArg_type_2":4,"ExpansionArg_bool_2":false,"_bound":14,"ExpansionArg_array_length":0} start 84.2316 took 7.4061s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":5,"ExpansionArg_bool":false,"ExpansionArg_type_2":4,"ExpansionArg_bool_2":false,"_bound":14,"ExpansionArg_array_length":0}
* Error: ReferenceError: THREE is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":5,"ExpansionArg_bool":false,"ExpansionArg_type_2":4,"ExpansionArg_bool_2":false,"_bound":14}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":3,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_2":2,"ExpansionArg_int":5,"_bound":16} start 83.2093 took 8.6369s