/root/Targets/ikagaka.nar.js
└─┬ ikagaka.nar.js@3.0.3 
  ├── encoding-japanese@1.0.26 
  ├── ikagaka.wmdescript.js@0.0.0 
  ├─┬ jszip@3.1.4 
  │ ├── core-js@2.3.0 
  │ ├── es6-promise@3.0.2 
  │ ├─┬ lie@3.1.1 
  │ │ └── immediate@3.0.6 
  │ ├── pako@1.0.6 
  │ └─┬ readable-stream@2.0.6 
  │   ├── core-util-is@1.0.2 
  │   ├── inherits@2.0.3 
  │   ├── isarray@1.0.0 
  │   ├── process-nextick-args@1.0.7 
  │   ├── string_decoder@0.10.31 
  │   └── util-deprecate@1.0.2 
  └─┬ uupaa.xhrproxy.js@0.0.7 
    ├── uupaa.datatype.js@0.1.2 
    ├── uupaa.wmevent.js@0.0.2 
    └── uupaa.wmurl.js@0.1.9 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/ikagaka.nar.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000

*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","call","toString","apply","bound ","bound Nar","bound Loader","Error"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0,"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0} start 0.0672 took 5.9931s
*-- Errors occured in test {"_bound":0,"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":0}
* Error: TypeError: Cannot read property 'codeToString' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Test Case {"Switcher":true,"Target_Switch_Base":0,"ExpansionArg_type":0,"_bound":1} start 6.1621 took 3.6806s
*-- Errors occured in test {"Switcher":true,"Target_Switch_Base":0,"ExpansionArg_type":0,"_bound":1}
* Error: TypeError: Cannot read property 'install.txt' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"Target_Switch_Base":0,"ExpansionArg_type":0,"_bound":1}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":0,"_bound":2} start 6.1348 took 4.2247s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":0,"_bound":2}
* Error: TypeError: Cannot read property 'parse' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":0,"_bound":2}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"_bound":3} start 6.1222 took 5.6947s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"_bound":3}
* Error: TypeError: Cannot read property 'codeToString' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":1,"_bound":3}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":1,"_bound":2} start 9.8944 took 4.6447s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":1,"_bound":2}
* Error: TypeError: Cannot read property 'install.txt' of null
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":1,"_bound":2}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpansionArg_type":0,"_bound":3,"ExpandedSwitcher":0,"ExpansionArg_type_2":0} start 10.387 took 5.6628s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpansionArg_type":0,"_bound":3,"ExpandedSwitcher":0,"ExpansionArg_type_2":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpansionArg_type":0,"_bound":3}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":2,"_bound":4,"ExpansionArg_int":0} start 10.4023 took 6.5762s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":2,"_bound":4,"ExpansionArg_int":0}
* Error: TypeError: Cannot read property 'parse' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":2,"_bound":4}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"_bound":4,"ExpansionArg_int":0} start 11.8536 took 6.6508s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"_bound":4,"ExpansionArg_int":0}
* Error: TypeError: Cannot read property 'codeToString' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":2,"_bound":4}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"_bound":7,"ExpansionArg_string":"PureString"} start 16.0703 took 3.4137s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"_bound":7,"ExpansionArg_string":"PureString"}
* Error: TypeError: Function.prototype.apply was called on PureString, which is a string and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"_bound":7}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":3,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"_bound":4} start 16.0781 took 4.6053s
*-- Test Case {"Switcher":true,"ExpansionArg_type":2,"_bound":3,"ExpansionArg_int":0} start 14.5475 took 6.457s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":2,"_bound":3,"ExpansionArg_int":0}
* Error: Error: install.txt not found
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":2,"_bound":3}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":1,"ExpansionArg_int":0,"_bound":5} start 17.0118 took 5.3031s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":1,"ExpansionArg_int":0,"_bound":5}
* Error: TypeError: Cannot read property 'parse' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":1,"ExpansionArg_int":0,"_bound":5}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":3,"ExpansionArg_type_2":0,"_bound":6,"ExpansionArg_string":"PureString"} start 16.1103 took 6.9391s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":3,"ExpansionArg_type_2":0,"_bound":6,"ExpansionArg_string":"PureString"}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":3,"ExpansionArg_type_2":0,"_bound":6}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":3,"ExpansionArg_type":0,"ExpansionArg_type_2":0,"_bound":5} start 16.1006 took 7.0458s
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":3,"ExpansionArg_int":0,"_bound":6,"ExpansionArg_string":"PureString"} start 17.0027 took 6.2314s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":3,"ExpansionArg_int":0,"_bound":6,"ExpansionArg_string":"PureString"}
* Error: TypeError: Cannot read property 'parse' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":3,"ExpansionArg_int":0,"_bound":6}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_int":0,"_bound":5,"ExpansionArg_string":"PureString"} start 18.5185 took 5.4229s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_int":0,"_bound":5,"ExpansionArg_string":"PureString"}
* Error: TypeError: Cannot read property 'codeToString' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":3,"ExpansionArg_int":0,"_bound":5}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_int":0,"_bound":4,"ExpansionArg_string":"PureString"} start 21.0183 took 4.1468s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_int":0,"_bound":4,"ExpansionArg_string":"PureString"}
* Error: Error: install.txt not found
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":3,"ExpansionArg_int":0,"_bound":4}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_string":"","_bound":10,"ExpansionArg_array_length":0} start 19.5161 took 6.0964s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_string":"","_bound":10,"ExpansionArg_array_length":0}
* Error: TypeError: Function.prototype.apply was called on [object Array], which is a object and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_string":"","_bound":10}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_string":"","_bound":9,"ExpansionArg_int":0} start 19.5538 took 6.5181s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_string":"","_bound":9,"ExpansionArg_int":0}
* Error: TypeError: Function.prototype.apply was called on 0, which is a number and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_string":"","_bound":9}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":1,"ExpansionArg_string":"","ExpansionArg_type_2":0,"_bound":7} start 23.1073 took 3.4137s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":1,"ExpansionArg_string":"","ExpansionArg_type_2":0,"_bound":7}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":1,"ExpansionArg_string":"","ExpansionArg_type_2":0,"_bound":7}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_string":"","_bound":8} start 19.5756 took 6.9965s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_string":"","_bound":8}
* Error: TypeError: Function.prototype.apply was called on null, which is a object and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_string":"","_bound":8}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"_bound":7,"ExpansionArg_type":0,"ExpansionArg_type_2":0} start 23.1947 took 4.23s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"_bound":7,"ExpansionArg_type":0,"ExpansionArg_type_2":0}
* Error: ReferenceError: URL is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"_bound":7}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_string":"","ExpansionArg_type_2":0,"_bound":9,"ExpansionArg_array_length":0} start 23.0636 took 5.7217s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_string":"","ExpansionArg_type_2":0,"_bound":9,"ExpansionArg_array_length":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_string":"","ExpansionArg_type_2":0,"_bound":9}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"_bound":6,"ExpansionArg_type":0,"ExpansionArg_type_2":0} start 23.1662 took 5.9104s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"_bound":6,"ExpansionArg_type":0,"ExpansionArg_type_2":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"_bound":6}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_string":"","_bound":6,"ExpansionArg_array_length":0} start 23.9786 took 5.5989s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_string":"","_bound":6,"ExpansionArg_array_length":0}
* Error: TypeError: Cannot read property 'codeToString' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_string":"","_bound":6}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":11,"ExpansionArg_bool":false} start 25.662 took 4.5222s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":11,"ExpansionArg_bool":false}
* Error: TypeError: Function.prototype.apply was called on false, which is a boolean and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":11}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":4,"_bound":10,"ExpansionArg_array_length":0} start 23.1433 took 7.0774s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":4,"_bound":10,"ExpansionArg_array_length":0}
* Error: TypeError: Function.prototype.apply was called on [object Array], which is a object and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":4,"_bound":10}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":2,"ExpansionArg_string":"","ExpansionArg_type_2":0,"_bound":8,"ExpansionArg_int":0} start 23.087 took 7.1632s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":2,"ExpansionArg_string":"","ExpansionArg_type_2":0,"_bound":8,"ExpansionArg_int":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":2,"ExpansionArg_string":"","ExpansionArg_type_2":0,"_bound":8}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_string":"","_bound":7,"ExpansionArg_array_length":0} start 23.2909 took 7.2695s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_string":"","_bound":7,"ExpansionArg_array_length":0}
* Error: TypeError: Cannot read property 'parse' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_string":"","_bound":7}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":1,"ExpansionArg_type_2":3,"_bound":8,"ExpansionArg_string":"PureString"} start 26.5701 took 4.1815s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":1,"ExpansionArg_type_2":3,"_bound":8,"ExpansionArg_string":"PureString"}
* Error: TypeError: Function.prototype.apply was called on PureString, which is a string and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":1,"ExpansionArg_type_2":3,"_bound":8}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"_bound":12,"ExpansionArg_array_element_0_type":0} start 25.7381 took 5.2429s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"_bound":12,"ExpansionArg_array_element_0_type":0}
* Error: TypeError: Function.prototype.apply was called on [object Array], which is a object and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"_bound":12}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":5,"ExpansionArg_array_length":0,"_bound":7,"ExpansionArg_bool":false} start 29.6906 took 2.8062s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":5,"ExpansionArg_array_length":0,"_bound":7,"ExpansionArg_bool":false}
* Error: TypeError: Cannot read property 'codeToString' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":5,"ExpansionArg_array_length":0,"_bound":7}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_string":"","_bound":5,"ExpansionArg_array_length":0} start 25.2023 took 7.4462s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_string":"","_bound":5,"ExpansionArg_array_length":0}
* Error: Error: install.txt not found
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_string":"","_bound":5}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"_bound":8} start 27.4382 took 6.2868s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"_bound":8}
* Error: ReferenceError: URL is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":1,"ExpansionArg_type_2":0,"_bound":8}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"_bound":8,"ExpansionArg_array_element_0_type":0} start 29.5947 took 4.2502s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"_bound":8,"ExpansionArg_array_element_0_type":0}
* Error: TypeError: Cannot read property 'codeToString' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"_bound":8}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"_bound":9} start 27.4549 took 6.5491s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"_bound":9}
* Error: ReferenceError: URL is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"_bound":9}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_string":"","_bound":10,"ExpansionArg_int":0} start 30.8066 took 3.6385s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_string":"","_bound":10,"ExpansionArg_int":0}
* Error: TypeError: Function.prototype.apply was called on 0, which is a number and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_string":"","_bound":10}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_type_2":0,"_bound":11,"ExpansionArg_array_element_0_type":0} start 28.8323 took 6.0819s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_type_2":0,"_bound":11,"ExpansionArg_array_element_0_type":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_type_2":0,"_bound":11}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"_bound":8,"ExpansionArg_string":"PureString"} start 29.1026 took 5.9535s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"_bound":8,"ExpansionArg_string":"PureString"}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"_bound":8}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":1,"ExpansionArg_type_2":1,"ExpansionArg_string":"","_bound":9} start 31.0029 took 4.232s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":1,"ExpansionArg_type_2":1,"ExpansionArg_string":"","_bound":9}
* Error: TypeError: Function.prototype.apply was called on null, which is a object and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":1,"ExpansionArg_type_2":1,"ExpansionArg_string":"","_bound":9}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":5,"ExpansionArg_array_length":0,"ExpansionArg_type_2":0,"_bound":10,"ExpansionArg_bool":false} start 28.8588 took 6.6693s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":5,"ExpansionArg_array_length":0,"ExpansionArg_type_2":0,"_bound":10,"ExpansionArg_bool":false}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":5,"ExpansionArg_array_length":0,"ExpansionArg_type_2":0,"_bound":10}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":5,"_bound":12,"ExpansionArg_bool":false} start 28.8835 took 7.3905s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":5,"_bound":12,"ExpansionArg_bool":false}
* Error: TypeError: Function.prototype.apply was called on false, which is a boolean and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":5,"_bound":12}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":3,"ExpansionArg_type_2":0,"_bound":7,"ExpansionArg_string":"PureString"} start 29.1155 took 7.2414s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":3,"ExpansionArg_type_2":0,"_bound":7,"ExpansionArg_string":"PureString"}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":3,"ExpansionArg_type_2":0,"_bound":7}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":5,"ExpansionArg_array_length":0,"_bound":8,"ExpansionArg_bool":false} start 30.5948 took 6.6848s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":5,"ExpansionArg_array_length":0,"_bound":8,"ExpansionArg_bool":false}
* Error: TypeError: Cannot read property 'parse' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":5,"ExpansionArg_array_length":0,"_bound":8}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":3,"ExpansionArg_array_length":0,"_bound":13,"ExpansionArg_string_2":"PureString"} start 30.3034 took 7.6339s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":3,"ExpansionArg_array_length":0,"_bound":13,"ExpansionArg_string_2":"PureString"}
* Error: TypeError: Function.prototype.apply was called on PureString, which is a string and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":3,"ExpansionArg_array_length":0,"_bound":13}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"_bound":15,"ExpansionArg_array_element_0_type":0} start 30.2485 took 7.7551s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"_bound":15,"ExpansionArg_array_element_0_type":0}
* Error: TypeError: Function.prototype.apply was called on [object Array], which is a object and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"_bound":15}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":14,"ExpansionArg_bool":false} start 30.2306 took 8.1009s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":14,"ExpansionArg_bool":false}
* Error: TypeError: Function.prototype.apply was called on false, which is a boolean and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":14}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_string":"","_bound":10,"ExpansionArg_int":0} start 35.0809 took 3.455s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_string":"","_bound":10,"ExpansionArg_int":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_string":"","_bound":10}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"_bound":7,"ExpansionArg_array_element_0_type":0} start 34.0576 took 4.6142s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"_bound":7,"ExpansionArg_array_element_0_type":0}
* Error: Error: install.txt not found
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"_bound":7}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":5,"ExpansionArg_array_length":0,"_bound":6,"ExpansionArg_bool":false} start 32.7151 took 6.3603s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":5,"ExpansionArg_array_length":0,"_bound":6,"ExpansionArg_bool":false}
* Error: Error: install.txt not found
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":5,"ExpansionArg_array_length":0,"_bound":6}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":14,"ExpansionArg_array_element_1_type":0} start 35.2422 took 4.1291s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":14,"ExpansionArg_array_element_1_type":0}
* Error: TypeError: Function.prototype.apply was called on [object Array], which is a object and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":14}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":3,"ExpansionArg_type_2":0,"_bound":9,"ExpansionArg_string":"PureString"} start 33.8584 took 5.7504s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":3,"ExpansionArg_type_2":0,"_bound":9,"ExpansionArg_string":"PureString"}
* Error: ReferenceError: URL is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":3,"ExpansionArg_type_2":0,"_bound":9}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"_bound":9,"ExpansionArg_array_element_0_type":0} start 32.5294 took 7.4274s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"_bound":9,"ExpansionArg_array_element_0_type":0}
* Error: TypeError: Cannot read property 'parse' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"_bound":9}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":1,"ExpansionArg_array_length":0,"_bound":11} start 33.7623 took 7.1063s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":1,"ExpansionArg_array_length":0,"_bound":11}
* Error: TypeError: Function.prototype.apply was called on null, which is a object and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":1,"ExpansionArg_array_length":0,"_bound":11}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":2,"ExpansionArg_array_length":0,"_bound":12,"ExpansionArg_int":0} start 34.4544 took 6.5924s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":2,"ExpansionArg_array_length":0,"_bound":12,"ExpansionArg_int":0}
* Error: TypeError: Function.prototype.apply was called on 0, which is a number and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":2,"ExpansionArg_array_length":0,"_bound":12}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":4,"ExpansionArg_string":"","ExpansionArg_type_2":0,"_bound":10,"ExpansionArg_array_length":0} start 39.4827 took 2.6019s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":4,"ExpansionArg_string":"","ExpansionArg_type_2":0,"_bound":10,"ExpansionArg_array_length":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":4,"ExpansionArg_string":"","ExpansionArg_type_2":0,"_bound":10}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":10,"ExpansionArg_array_element_1_type":0} start 34.9554 took 7.253s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":10,"ExpansionArg_array_element_1_type":0}
* Error: TypeError: Cannot read property 'codeToString' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":10}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"_bound":16,"ExpansionArg_array_element_2_type":0} start 39.6489 took 2.9795s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"_bound":16,"ExpansionArg_array_element_2_type":0}
* Error: TypeError: Function.prototype.apply was called on [object Array], which is a object and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"_bound":16}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"_bound":10,"ExpansionArg_string":"PureString"} start 37.9745 took 4.6878s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"_bound":10,"ExpansionArg_string":"PureString"}
* Error: ReferenceError: URL is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":0,"ExpansionArg_type_2":3,"_bound":10}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":4,"ExpansionArg_bool":false,"_bound":16,"ExpansionArg_array_length_2":0} start 36.3146 took 7.1998s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":4,"ExpansionArg_bool":false,"_bound":16,"ExpansionArg_array_length_2":0}
* Error: TypeError: Function.prototype.apply was called on [object Array], which is a object and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":4,"ExpansionArg_bool":false,"_bound":16}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":3,"ExpansionArg_bool":false,"_bound":15,"ExpansionArg_string":"PureString"} start 37.3105 took 6.39s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":3,"ExpansionArg_bool":false,"_bound":15,"ExpansionArg_string":"PureString"}
* Error: TypeError: Function.prototype.apply was called on PureString, which is a string and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":3,"ExpansionArg_bool":false,"_bound":15}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":2,"ExpansionArg_bool":false,"_bound":14,"ExpansionArg_int":0} start 36.3863 took 7.7656s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":2,"ExpansionArg_bool":false,"_bound":14,"ExpansionArg_int":0}
* Error: TypeError: Function.prototype.apply was called on 0, which is a number and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":2,"ExpansionArg_bool":false,"_bound":14}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_2":0,"_bound":13,"ExpansionArg_array_element_1_type":0} start 38.3823 took 5.7901s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_2":0,"_bound":13,"ExpansionArg_array_element_1_type":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_2":0,"_bound":13}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":1,"ExpansionArg_type_2":4,"ExpansionArg_string":"","_bound":11,"ExpansionArg_array_length":0} start 35.5584 took 8.9619s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":1,"ExpansionArg_type_2":4,"ExpansionArg_string":"","_bound":11,"ExpansionArg_array_length":0}
* Error: TypeError: Function.prototype.apply was called on [object Array], which is a object and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":1,"ExpansionArg_type_2":4,"ExpansionArg_string":"","_bound":11}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":2,"ExpansionArg_string":"","ExpansionArg_type_2":0,"_bound":10,"ExpansionArg_int":0} start 42.6428 took 2.4558s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":2,"ExpansionArg_string":"","ExpansionArg_type_2":0,"_bound":10,"ExpansionArg_int":0}
* Error: ReferenceError: URL is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":2,"ExpansionArg_string":"","ExpansionArg_type_2":0,"_bound":10}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":1,"ExpansionArg_string":"","ExpansionArg_type_2":0,"_bound":8} start 38.0383 took 7.4871s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":1,"ExpansionArg_string":"","ExpansionArg_type_2":0,"_bound":8}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":1,"ExpansionArg_string":"","ExpansionArg_type_2":0,"_bound":8}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":1,"ExpansionArg_bool":false,"_bound":13} start 39.1096 took 6.459s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":1,"ExpansionArg_bool":false,"_bound":13}
* Error: TypeError: Function.prototype.apply was called on null, which is a object and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":1,"ExpansionArg_bool":false,"_bound":13}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_string":"","_bound":11,"ExpansionArg_array_length":0} start 38.5523 took 7.5171s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_string":"","_bound":11,"ExpansionArg_array_length":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_string":"","_bound":11}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":17,"ExpansionArg_array_element_1_type":0} start 40.8908 took 5.3542s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":17,"ExpansionArg_array_element_1_type":0}
* Error: TypeError: Function.prototype.apply was called on [object Array], which is a object and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":17}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":3,"_bound":13,"ExpansionArg_array_element_0_string":"PureString"} start 38.6809 took 7.7934s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":3,"_bound":13,"ExpansionArg_array_element_0_string":"PureString"}
* Error: TypeError: Function.prototype.apply was called on [object Array], which is a object and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":3,"_bound":13}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_string":"","_bound":11,"ExpansionArg_int":0} start 42.6922 took 4.0357s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_string":"","_bound":11,"ExpansionArg_int":0}
* Error: ReferenceError: URL is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":0,"ExpansionArg_type_2":2,"ExpansionArg_string":"","_bound":11}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":4,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":0,"_bound":18,"ExpansionArg_array_element_3_type":0} start 44.2018 took 2.9459s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":4,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":0,"_bound":18,"ExpansionArg_array_element_3_type":0}
* Error: TypeError: Function.prototype.apply was called on [object Array], which is a object and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":4,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":0,"_bound":18}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":2,"ExpansionArg_string":"","ExpansionArg_type_2":0,"_bound":9,"ExpansionArg_int":0} start 39.9868 took 7.3671s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":2,"ExpansionArg_string":"","ExpansionArg_type_2":0,"_bound":9,"ExpansionArg_int":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":2,"ExpansionArg_string":"","ExpansionArg_type_2":0,"_bound":9}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_string":"","_bound":9} start 41.0624 took 6.7339s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_string":"","_bound":9}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":0,"ExpansionArg_type_2":1,"ExpansionArg_string":"","_bound":9}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_string":"","_bound":12,"ExpansionArg_array_length":0} start 43.7307 took 5.455s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_string":"","_bound":12,"ExpansionArg_array_length":0}
* Error: ReferenceError: URL is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_string":"","_bound":12}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":1,"_bound":9} start 45.5669 took 3.898s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":1,"_bound":9}
* Error: TypeError: Function.prototype.apply was called on null, which is a object and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":1,"_bound":9}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":12,"ExpansionArg_bool":false} start 46.0964 took 3.4303s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":12,"ExpansionArg_bool":false}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":12}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":9,"ExpansionArg_array_element_1_type":0} start 43.5362 took 6.0295s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":9,"ExpansionArg_array_element_1_type":0}
* Error: Error: install.txt not found
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":9}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":4,"ExpansionArg_string":"","ExpansionArg_type_2":0,"_bound":11,"ExpansionArg_array_length":0} start 42.2347 took 8.1576s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":4,"ExpansionArg_string":"","ExpansionArg_type_2":0,"_bound":11,"ExpansionArg_array_length":0}
* Error: ReferenceError: URL is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":4,"ExpansionArg_string":"","ExpansionArg_type_2":0,"_bound":11}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":5,"ExpansionArg_array_length":0,"ExpansionArg_type_2":0,"_bound":11,"ExpansionArg_bool":false} start 42.1226 took 8.43s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":5,"ExpansionArg_array_length":0,"ExpansionArg_type_2":0,"_bound":11,"ExpansionArg_bool":false}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":5,"ExpansionArg_array_length":0,"ExpansionArg_type_2":0,"_bound":11}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":1,"ExpansionArg_type_2":3,"_bound":10,"ExpansionArg_string":"PureString"} start 44.1695 took 7.0295s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":1,"ExpansionArg_type_2":3,"_bound":10,"ExpansionArg_string":"PureString"}
* Error: ReferenceError: URL is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":1,"ExpansionArg_type_2":3,"_bound":10}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":1,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":12,"ExpansionArg_bool":false} start 44.5428 took 6.7992s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":1,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":12,"ExpansionArg_bool":false}
* Error: TypeError: Function.prototype.apply was called on false, which is a boolean and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":1,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":12}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length_2":1,"_bound":17,"ExpansionArg_array_element_0_type":0} start 47.3669 took 4.2711s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length_2":1,"_bound":17,"ExpansionArg_array_element_0_type":0}
* Error: TypeError: Function.prototype.apply was called on [object Array], which is a object and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length_2":1,"_bound":17}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_type_2":0,"_bound":12,"ExpansionArg_array_element_0_type":0} start 45.5856 took 6.0795s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_type_2":0,"_bound":12,"ExpansionArg_array_element_0_type":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_type_2":0,"_bound":12}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":11,"ExpansionArg_array_element_1_type":0} start 45.14 took 7.3512s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":11,"ExpansionArg_array_element_1_type":0}
* Error: TypeError: Cannot read property 'parse' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"_bound":11}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":1,"ExpansionArg_type_2":1,"ExpansionArg_string":"","_bound":11} start 51.6631 took 2.0185s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":1,"ExpansionArg_type_2":1,"ExpansionArg_string":"","_bound":11}
* Error: ReferenceError: URL is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":1,"ExpansionArg_type_2":1,"ExpansionArg_string":"","_bound":11}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"_bound":12,"ExpansionArg_array_element_2_type":0} start 46.2806 took 7.516s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"_bound":12,"ExpansionArg_array_element_2_type":0}
* Error: TypeError: Cannot read property 'codeToString' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"_bound":12}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":13,"ExpansionArg_bool":false} start 49.2002 took 4.6389s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":13,"ExpansionArg_bool":false}
* Error: ReferenceError: URL is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":13}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_0_string":"","_bound":14} start 46.4887 took 7.754s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_0_string":"","_bound":14}
* Error: TypeError: Function.prototype.apply was called on [object Array], which is a object and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_0_string":"","_bound":14}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":2,"_bound":9,"ExpansionArg_array_element_0_int":0} start 49.5441 took 5.1032s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":2,"_bound":9,"ExpansionArg_array_element_0_int":0}
* Error: TypeError: Cannot read property 'codeToString' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":2,"_bound":9}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":2,"ExpansionArg_array_element_0_string":"","_bound":15,"ExpansionArg_array_element_0_int":0} start 46.7428 took 8.1659s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":2,"ExpansionArg_array_element_0_string":"","_bound":15,"ExpansionArg_array_element_0_int":0}
* Error: TypeError: Function.prototype.apply was called on [object Array], which is a object and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":2,"ExpansionArg_array_element_0_string":"","_bound":15}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":5,"ExpansionArg_array_element_0_string":"","_bound":16,"ExpansionArg_array_element_0_bool":false} start 47.1827 took 7.881s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":5,"ExpansionArg_array_element_0_string":"","_bound":16,"ExpansionArg_array_element_0_bool":false}
* Error: TypeError: Function.prototype.apply was called on [object Array], which is a object and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":5,"ExpansionArg_array_element_0_string":"","_bound":16}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_type_2":0,"_bound":15,"ExpansionArg_array_element_2_type":0} start 47.8462 took 7.5501s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_type_2":0,"_bound":15,"ExpansionArg_array_element_2_type":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_type_2":0,"_bound":15}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"_bound":10,"ExpansionArg_string":"PureString"} start 49.5028 took 6.4629s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"_bound":10,"ExpansionArg_string":"PureString"}
* Error: TypeError: Function.prototype.apply was called on PureString, which is a string and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"_bound":10}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_string":"","_bound":12,"ExpansionArg_int":0} start 51.2477 took 4.8085s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_string":"","_bound":12,"ExpansionArg_int":0}
* Error: ReferenceError: URL is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_string":"","_bound":12}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":4,"_bound":11,"ExpansionArg_array_length":0} start 49.5854 took 6.7177s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":4,"_bound":11,"ExpansionArg_array_length":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":4,"_bound":11}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":5,"ExpansionArg_array_length":0,"ExpansionArg_type_2":0,"_bound":12,"ExpansionArg_bool":false} start 50.4472 took 6.0679s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":5,"ExpansionArg_array_length":0,"ExpansionArg_type_2":0,"_bound":12,"ExpansionArg_bool":false}
* Error: ReferenceError: URL is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":5,"ExpansionArg_array_length":0,"ExpansionArg_type_2":0,"_bound":12}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":3,"ExpansionArg_type_2":0,"_bound":12,"ExpansionArg_array_element_0_string":"PureString"} start 50.5735 took 7.482s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":3,"ExpansionArg_type_2":0,"_bound":12,"ExpansionArg_array_element_0_string":"PureString"}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":3,"ExpansionArg_type_2":0,"_bound":12}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":5,"ExpansionArg_bool":false,"ExpansionArg_type_2":6,"_bound":11,"ExpansionArg_bool_2":false} start 52.5248 took 5.7075s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":5,"ExpansionArg_bool":false,"ExpansionArg_type_2":6,"_bound":11,"ExpansionArg_bool_2":false}
* Error: TypeError: Function.prototype.apply was called on false, which is a boolean and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":5,"ExpansionArg_bool":false,"ExpansionArg_type_2":6,"_bound":11}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_2":3,"_bound":14,"ExpansionArg_string":"PureString"} start 51.7029 took 7.2265s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_2":3,"_bound":14,"ExpansionArg_string":"PureString"}
* Error: TypeError: Function.prototype.apply was called on PureString, which is a string and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_2":3,"_bound":14}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":1,"ExpansionArg_type_2":4,"ExpansionArg_string":"","_bound":13,"ExpansionArg_array_length":0} start 51.3753 took 7.6317s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":1,"ExpansionArg_type_2":4,"ExpansionArg_string":"","_bound":13,"ExpansionArg_array_length":0}
* Error: ReferenceError: URL is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":1,"ExpansionArg_type_2":4,"ExpansionArg_string":"","_bound":13}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":1,"ExpansionArg_array_length":0,"_bound":12} start 56.5352 took 2.854s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":1,"ExpansionArg_array_length":0,"_bound":12}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":1,"ExpansionArg_array_length":0,"_bound":12}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"_bound":13,"ExpansionArg_array_element_0_type":0} start 55.4253 took 3.992s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"_bound":13,"ExpansionArg_array_element_0_type":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"_bound":13}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":2,"_bound":8,"ExpansionArg_array_element_0_int":0} start 53.8685 took 6.6894s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":2,"_bound":8,"ExpansionArg_array_element_0_int":0}
* Error: Error: install.txt not found
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":2,"_bound":8}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_0_int":0,"_bound":10} start 54.975 took 5.7055s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_0_int":0,"_bound":10}
* Error: TypeError: Cannot read property 'codeToString' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_0_int":0,"_bound":10}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"_bound":13,"ExpansionArg_array_element_0_type":0} start 53.7112 took 7.3976s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"_bound":13,"ExpansionArg_array_element_0_type":0}
* Error: TypeError: Function.prototype.apply was called on [object Array], which is a object and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"_bound":13}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":15,"ExpansionArg_bool":false} start 56.3464 took 5.4455s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":15,"ExpansionArg_bool":false}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":15}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":4,"ExpansionArg_string":"","_bound":12,"ExpansionArg_array_length":0} start 56.0869 took 5.7979s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":4,"ExpansionArg_string":"","_bound":12,"ExpansionArg_array_length":0}
* Error: TypeError: Function.prototype.apply was called on [object Array], which is a object and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":4,"ExpansionArg_string":"","_bound":12}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":1,"_bound":15} start 53.8346 took 8.0503s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":1,"_bound":15}
* Error: TypeError: Function.prototype.apply was called on [object Array], which is a object and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":1,"_bound":15}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":3,"ExpansionArg_array_element_0_int":0,"_bound":11,"ExpansionArg_array_element_0_string":"PureString"} start 54.719 took 7.3132s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":3,"ExpansionArg_array_element_0_int":0,"_bound":11,"ExpansionArg_array_element_0_string":"PureString"}
* Error: TypeError: Cannot read property 'codeToString' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":3,"ExpansionArg_array_element_0_int":0,"_bound":11}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":4,"_bound":12,"ExpansionArg_array_length":0} start 54.3225 took 7.7582s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":4,"_bound":12,"ExpansionArg_array_length":0}
* Error: ReferenceError: URL is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":4,"_bound":12}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":2,"ExpansionArg_string":"","_bound":11,"ExpansionArg_int_2":0} start 56.0391 took 6.0897s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":2,"ExpansionArg_string":"","_bound":11,"ExpansionArg_int_2":0}
* Error: TypeError: Function.prototype.apply was called on 0, which is a number and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":2,"ExpansionArg_string":"","_bound":11}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":4,"ExpansionArg_array_element_0_bool":false,"_bound":17,"ExpansionArg_array_element_0_array_length":0} start 55.0934 took 7.7281s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":4,"ExpansionArg_array_element_0_bool":false,"_bound":17,"ExpansionArg_array_element_0_array_length":0}
* Error: TypeError: Function.prototype.apply was called on [object Array], which is a object and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":4,"ExpansionArg_array_element_0_bool":false,"_bound":17}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":3,"ExpansionArg_array_length":0,"_bound":14,"ExpansionArg_string_2":"PureString"} start 59.4155 took 4.7767s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":3,"ExpansionArg_array_length":0,"_bound":14,"ExpansionArg_string_2":"PureString"}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":3,"ExpansionArg_array_length":0,"_bound":14}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":5,"ExpansionArg_array_element_0_string":"","ExpansionArg_type_2":0,"_bound":15,"ExpansionArg_array_element_0_bool":false} start 58.0888 took 6.6756s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":5,"ExpansionArg_array_element_0_string":"","ExpansionArg_type_2":0,"_bound":15,"ExpansionArg_array_element_0_bool":false}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":5,"ExpansionArg_array_element_0_string":"","ExpansionArg_type_2":0,"_bound":15}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":2,"ExpansionArg_array_length":0,"_bound":13,"ExpansionArg_int":0} start 58.9552 took 7.3893s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":2,"ExpansionArg_array_length":0,"_bound":13,"ExpansionArg_int":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":2,"ExpansionArg_array_length":0,"_bound":13}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":13,"ExpansionArg_bool":false} start 61.931 took 4.7652s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":13,"ExpansionArg_bool":false}
* Error: TypeError: Function.prototype.apply was called on false, which is a boolean and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":13}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":5,"ExpansionArg_bool":false,"ExpansionArg_type_2":3,"ExpansionArg_bool_2":false,"_bound":14,"ExpansionArg_string":"PureString"} start 60.6033 took 6.4484s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":5,"ExpansionArg_bool":false,"ExpansionArg_type_2":3,"ExpansionArg_bool_2":false,"_bound":14,"ExpansionArg_string":"PureString"}
* Error: TypeError: Function.prototype.apply was called on PureString, which is a string and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":5,"ExpansionArg_bool":false,"ExpansionArg_type_2":3,"ExpansionArg_bool_2":false,"_bound":14}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":1,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":14,"ExpansionArg_bool":false} start 59.0331 took 8.2844s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":1,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":14,"ExpansionArg_bool":false}
* Error: ReferenceError: URL is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":1,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":14}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_2":2,"ExpansionArg_string":"","_bound":16,"ExpansionArg_int":0} start 62.8567 took 4.4795s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_2":2,"ExpansionArg_string":"","_bound":16,"ExpansionArg_int":0}
* Error: TypeError: Function.prototype.apply was called on 0, which is a number and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_2":2,"ExpansionArg_string":"","_bound":16}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":3,"ExpansionArg_array_element_0_int":0,"_bound":10,"ExpansionArg_array_element_0_string":"PureString"} start 62.0786 took 5.2966s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":3,"ExpansionArg_array_element_0_int":0,"_bound":10,"ExpansionArg_array_element_0_string":"PureString"}
* Error: Error: install.txt not found
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":3,"ExpansionArg_array_element_0_int":0,"_bound":10}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":16,"ExpansionArg_bool":false} start 62.1267 took 5.3743s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":16,"ExpansionArg_bool":false}
* Error: ReferenceError: URL is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":16}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":5,"ExpansionArg_bool":false,"ExpansionArg_type_2":2,"ExpansionArg_bool_2":false,"_bound":13,"ExpansionArg_int":0} start 61.8826 took 5.6501s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":5,"ExpansionArg_bool":false,"ExpansionArg_type_2":2,"ExpansionArg_bool_2":false,"_bound":13,"ExpansionArg_int":0}
* Error: TypeError: Function.prototype.apply was called on 0, which is a number and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":5,"ExpansionArg_bool":false,"ExpansionArg_type_2":2,"ExpansionArg_bool_2":false,"_bound":13}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":5,"ExpansionArg_bool":false,"ExpansionArg_type_2":4,"ExpansionArg_bool_2":false,"_bound":15,"ExpansionArg_array_length":0} start 58.2385 took 9.4745s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":5,"ExpansionArg_bool":false,"ExpansionArg_type_2":4,"ExpansionArg_bool_2":false,"_bound":15,"ExpansionArg_array_length":0}
* Error: TypeError: Function.prototype.apply was called on [object Array], which is a object and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":5,"ExpansionArg_bool":false,"ExpansionArg_type_2":4,"ExpansionArg_bool_2":false,"_bound":15}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_0_string":"","ExpansionArg_type_2":0,"_bound":13} start 59.4475 took 8.476s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_0_string":"","ExpansionArg_type_2":0,"_bound":13}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_0_string":"","ExpansionArg_type_2":0,"_bound":13}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":5,"ExpansionArg_bool":false,"ExpansionArg_type_2":1,"ExpansionArg_bool_2":false,"_bound":12} start 62.2106 took 6.206s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":5,"ExpansionArg_bool":false,"ExpansionArg_type_2":1,"ExpansionArg_bool_2":false,"_bound":12}
* Error: TypeError: Function.prototype.apply was called on null, which is a object and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":5,"ExpansionArg_bool":false,"ExpansionArg_type_2":1,"ExpansionArg_bool_2":false,"_bound":12}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":2,"ExpansionArg_array_element_0_string":"","ExpansionArg_type_2":0,"_bound":14,"ExpansionArg_array_element_0_int":0} start 60.7191 took 8.3453s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":2,"ExpansionArg_array_element_0_string":"","ExpansionArg_type_2":0,"_bound":14,"ExpansionArg_array_element_0_int":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":2,"ExpansionArg_array_element_0_string":"","ExpansionArg_type_2":0,"_bound":14}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_2":5,"ExpansionArg_string":"","_bound":17,"ExpansionArg_bool":false} start 61.9512 took 7.4369s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_2":5,"ExpansionArg_string":"","_bound":17,"ExpansionArg_bool":false}
* Error: TypeError: Function.prototype.apply was called on false, which is a boolean and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_2":5,"ExpansionArg_string":"","_bound":17}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_2":1,"ExpansionArg_string":"","_bound":15} start 61.1432 took 8.5141s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_2":1,"ExpansionArg_string":"","_bound":15}
* Error: TypeError: Function.prototype.apply was called on null, which is a object and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_2":1,"ExpansionArg_string":"","_bound":15}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":3,"_bound":16,"ExpansionArg_array_element_1_string":"PureString"} start 64.2266 took 5.5833s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":3,"_bound":16,"ExpansionArg_array_element_1_string":"PureString"}
* Error: TypeError: Function.prototype.apply was called on [object Array], which is a object and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":3,"_bound":16}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":2,"ExpansionArg_array_length":0,"_bound":14,"ExpansionArg_int":0} start 66.7378 took 4.643s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":2,"ExpansionArg_array_length":0,"_bound":14,"ExpansionArg_int":0}
* Error: ReferenceError: URL is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":2,"ExpansionArg_array_length":0,"_bound":14}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":5,"ExpansionArg_array_element_0_string":"","_bound":12,"ExpansionArg_array_element_0_bool":false} start 64.7838 took 7.685s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":5,"ExpansionArg_array_element_0_string":"","_bound":12,"ExpansionArg_array_element_0_bool":false}
* Error: TypeError: Cannot read property 'codeToString' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":5,"ExpansionArg_array_element_0_string":"","_bound":12}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":2,"_bound":10,"ExpansionArg_array_element_0_int":0} start 67.0864 took 5.4446s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":2,"_bound":10,"ExpansionArg_array_element_0_int":0}
* Error: TypeError: Cannot read property 'parse' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":2,"_bound":10}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":5,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":0,"ExpansionArg_array_element_3_type":0,"_bound":20,"ExpansionArg_array_element_4_type":0} start 67.531 took 5.2974s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":5,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":0,"ExpansionArg_array_element_3_type":0,"_bound":20,"ExpansionArg_array_element_4_type":0}
* Error: TypeError: Function.prototype.apply was called on [object Array], which is a object and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":5,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":0,"ExpansionArg_array_element_3_type":0,"_bound":20}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":4,"ExpansionArg_array_element_0_bool":false,"ExpansionArg_type_2":0,"_bound":16,"ExpansionArg_array_element_0_array_length":0} start 66.3599 took 6.9524s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":4,"ExpansionArg_array_element_0_bool":false,"ExpansionArg_type_2":0,"_bound":16,"ExpansionArg_array_element_0_array_length":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":4,"ExpansionArg_array_element_0_bool":false,"ExpansionArg_type_2":0,"_bound":16}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_2":4,"ExpansionArg_bool":false,"_bound":18,"ExpansionArg_array_length_2":0} start 69.4434 took 5.0332s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_2":4,"ExpansionArg_bool":false,"_bound":18,"ExpansionArg_array_length_2":0}
* Error: TypeError: Function.prototype.apply was called on [object Array], which is a object and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_2":4,"ExpansionArg_bool":false,"_bound":18}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"_bound":11,"ExpansionArg_array_element_2_type":0} start 67.9873 took 6.8586s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"_bound":11,"ExpansionArg_array_element_2_type":0}
* Error: Error: install.txt not found
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"_bound":11}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":5,"_bound":16,"ExpansionArg_array_element_0_bool":false} start 67.7792 took 7.103s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":5,"_bound":16,"ExpansionArg_array_element_0_bool":false}
* Error: TypeError: Function.prototype.apply was called on [object Array], which is a object and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":5,"_bound":16}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":3,"ExpansionArg_array_element_0_string":"","_bound":17,"ExpansionArg_array_element_1_type":0} start 67.3342 took 7.9804s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":3,"ExpansionArg_array_element_0_string":"","_bound":17,"ExpansionArg_array_element_1_type":0}
* Error: TypeError: Function.prototype.apply was called on [object Array], which is a object and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":3,"ExpansionArg_array_element_0_string":"","_bound":17}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":3,"ExpansionArg_array_length":0,"_bound":15,"ExpansionArg_string_2":"PureString"} start 67.3672 took 7.9957s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":3,"ExpansionArg_array_length":0,"_bound":15,"ExpansionArg_string_2":"PureString"}
* Error: ReferenceError: URL is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":3,"ExpansionArg_array_length":0,"_bound":15}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":4,"ExpansionArg_array_element_0_bool":false,"_bound":13,"ExpansionArg_array_element_0_array_length":0} start 72.4929 took 2.8701s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":4,"ExpansionArg_array_element_0_bool":false,"_bound":13,"ExpansionArg_array_element_0_array_length":0}
* Error: TypeError: Cannot read property 'codeToString' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":4,"ExpansionArg_array_element_0_bool":false,"_bound":13}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_type_2":0,"_bound":13,"ExpansionArg_array_element_0_type":0} start 69.6856 took 5.7392s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_type_2":0,"_bound":13,"ExpansionArg_array_element_0_type":0}
* Error: ReferenceError: URL is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_type_2":0,"_bound":13}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":1,"ExpansionArg_array_length":0,"_bound":13} start 73.3393 took 2.086s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":1,"ExpansionArg_array_length":0,"_bound":13}
* Error: ReferenceError: URL is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":1,"ExpansionArg_array_length":0,"_bound":13}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":5,"ExpansionArg_array_element_0_string":"","_bound":11,"ExpansionArg_array_element_0_bool":false} start 67.4088 took 8.2397s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":5,"ExpansionArg_array_element_0_string":"","_bound":11,"ExpansionArg_array_element_0_bool":false}
* Error: Error: install.txt not found
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":5,"ExpansionArg_array_element_0_string":"","_bound":11}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_0_int":0,"_bound":9} start 67.5844 took 8.2405s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_0_int":0,"_bound":9}
* Error: Error: install.txt not found
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_0_int":0,"_bound":9}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"_bound":14,"ExpansionArg_array_element_0_type":0} start 68.4397 took 7.7689s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"_bound":14,"ExpansionArg_array_element_0_type":0}
* Error: ReferenceError: URL is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"_bound":14}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":2,"ExpansionArg_array_element_1_string":"","_bound":17,"ExpansionArg_array_element_1_int":0} start 71.4062 took 6.1928s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":2,"ExpansionArg_array_element_1_string":"","_bound":17,"ExpansionArg_array_element_1_int":0}
* Error: TypeError: Function.prototype.apply was called on [object Array], which is a object and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":2,"ExpansionArg_array_element_1_string":"","_bound":17}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":2,"ExpansionArg_array_element_0_bool":false,"_bound":18,"ExpansionArg_array_element_0_int":0} start 75.3852 took 2.2536s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":2,"ExpansionArg_array_element_0_bool":false,"_bound":18,"ExpansionArg_array_element_0_int":0}
* Error: TypeError: Function.prototype.apply was called on [object Array], which is a object and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":2,"ExpansionArg_array_element_0_bool":false,"_bound":18}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"_bound":19,"ExpansionArg_array_element_2_type":0} start 69.0871 took 8.5735s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"_bound":19,"ExpansionArg_array_element_2_type":0}
* Error: TypeError: Function.prototype.apply was called on [object Array], which is a object and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"_bound":19}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":3,"ExpansionArg_array_element_0_bool":false,"_bound":19,"ExpansionArg_array_element_0_string":"PureString"} start 75.3608 took 2.3172s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":3,"ExpansionArg_array_element_0_bool":false,"_bound":19,"ExpansionArg_array_element_0_string":"PureString"}
* Error: TypeError: Function.prototype.apply was called on [object Array], which is a object and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":3,"ExpansionArg_array_element_0_bool":false,"_bound":19}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":5,"ExpansionArg_array_element_1_string":"","_bound":18,"ExpansionArg_array_element_1_bool":false} start 69.8345 took 8.7704s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":5,"ExpansionArg_array_element_1_string":"","_bound":18,"ExpansionArg_array_element_1_bool":false}
* Error: TypeError: Function.prototype.apply was called on [object Array], which is a object and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":5,"ExpansionArg_array_element_1_string":"","_bound":18}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_0_int":0,"_bound":11} start 72.5543 took 6.1345s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_0_int":0,"_bound":11}
* Error: TypeError: Cannot read property 'parse' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_0_int":0,"_bound":11}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_type_2":1,"_bound":16} start 75.4578 took 4.2473s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_type_2":1,"_bound":16}
* Error: TypeError: Function.prototype.apply was called on null, which is a object and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_type_2":1,"_bound":16}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":1,"_bound":11} start 77.6369 took 2.2989s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":1,"_bound":11}
* Error: ReferenceError: URL is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":1,"_bound":11}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length_2":2,"ExpansionArg_array_element_0_type":0,"_bound":19,"ExpansionArg_array_element_1_type":0} start 74.4912 took 5.7014s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length_2":2,"ExpansionArg_array_element_0_type":0,"_bound":19,"ExpansionArg_array_element_1_type":0}
* Error: TypeError: Function.prototype.apply was called on [object Array], which is a object and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length_2":2,"ExpansionArg_array_element_0_type":0,"_bound":19}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":4,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":0,"_bound":14,"ExpansionArg_array_element_3_type":0} start 74.8802 took 5.3761s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":4,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":0,"_bound":14,"ExpansionArg_array_element_3_type":0}
* Error: TypeError: Cannot read property 'codeToString' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":4,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":0,"_bound":14}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_2":0,"_bound":14,"ExpansionArg_array_element_1_type":0} start 77.7109 took 2.8534s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_2":0,"_bound":14,"ExpansionArg_array_element_1_type":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_type_2":0,"_bound":14}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":2,"ExpansionArg_array_element_0_int":0,"_bound":12,"ExpansionArg_array_element_1_type":0} start 77.659 took 3.0018s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":2,"ExpansionArg_array_element_0_int":0,"_bound":12,"ExpansionArg_array_element_1_type":0}
* Error: TypeError: Cannot read property 'codeToString' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":2,"ExpansionArg_array_element_0_int":0,"_bound":12}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_0_bool":false,"_bound":17} start 75.423 took 5.5344s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_0_bool":false,"_bound":17}
* Error: TypeError: Function.prototype.apply was called on [object Array], which is a object and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":1,"ExpansionArg_array_element_0_bool":false,"_bound":17}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":5,"_bound":13,"ExpansionArg_bool":false} start 75.8504 took 5.1502s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":5,"_bound":13,"ExpansionArg_bool":false}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":5,"_bound":13}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":3,"ExpansionArg_array_element_0_int":0,"_bound":12,"ExpansionArg_array_element_0_string":"PureString"} start 72.8551 took 8.2257s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":3,"ExpansionArg_array_element_0_int":0,"_bound":12,"ExpansionArg_array_element_0_string":"PureString"}
* Error: TypeError: Cannot read property 'parse' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":3,"ExpansionArg_array_element_0_int":0,"_bound":12}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":1,"_bound":11} start 76.2432 took 5.0112s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":1,"_bound":11}
* Error: TypeError: Cannot read property 'codeToString' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":1,"_bound":11}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":1,"_bound":15,"ExpansionArg_array_element_1_type":0} start 77.6762 took 4.0017s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":1,"_bound":15,"ExpansionArg_array_element_1_type":0}
* Error: TypeError: Function.prototype.apply was called on [object Array], which is a object and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":1,"_bound":15}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":1,"_bound":17} start 75.4659 took 6.599s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":1,"_bound":17}
* Error: TypeError: Function.prototype.apply was called on [object Array], which is a object and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":1,"_bound":17}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":4,"ExpansionArg_array_element_0_bool":false,"_bound":20,"ExpansionArg_array_element_0_array_length":0} start 74.8967 took 7.9882s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":4,"ExpansionArg_array_element_0_bool":false,"_bound":20,"ExpansionArg_array_element_0_array_length":0}
* Error: TypeError: Function.prototype.apply was called on [object Array], which is a object and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":4,"ExpansionArg_array_element_0_bool":false,"_bound":20}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":3,"ExpansionArg_bool":false,"_bound":16,"ExpansionArg_string":"PureString"} start 81.2671 took 2.1932s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":3,"ExpansionArg_bool":false,"_bound":16,"ExpansionArg_string":"PureString"}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":3,"ExpansionArg_bool":false,"_bound":16}'
*-- Test Case {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":4,"ExpansionArg_array_element_0_bool":false,"_bound":12,"ExpansionArg_array_element_0_array_length":0} start 75.6812 took 7.861s
*-- Errors occured in test {"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":4,"ExpansionArg_array_element_0_bool":false,"_bound":12,"ExpansionArg_array_element_0_array_length":0}
* Error: Error: install.txt not found
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":true,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":4,"ExpansionArg_array_element_0_bool":false,"_bound":12}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"_bound":12,"ExpansionArg_string":"PureString"} start 79.9622 took 4.3094s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"_bound":12,"ExpansionArg_string":"PureString"}
* Error: ReferenceError: URL is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"_bound":12}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":1,"_bound":18} start 80.967 took 4.0218s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":1,"_bound":18}
* Error: TypeError: Function.prototype.apply was called on [object Array], which is a object and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":1,"_bound":18}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":2,"ExpansionArg_bool":false,"_bound":15,"ExpansionArg_int":0} start 81.1352 took 3.9501s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":2,"ExpansionArg_bool":false,"_bound":15,"ExpansionArg_int":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":2,"ExpansionArg_bool":false,"_bound":15}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":2,"ExpansionArg_array_element_0_int":0,"_bound":16,"ExpansionArg_array_element_1_type":0} start 80.2887 took 5.2062s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":2,"ExpansionArg_array_element_0_int":0,"_bound":16,"ExpansionArg_array_element_1_type":0}
* Error: TypeError: Function.prototype.apply was called on [object Array], which is a object and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":2,"ExpansionArg_array_element_0_int":0,"_bound":16}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":3,"_bound":12,"ExpansionArg_array_element_1_string":"PureString"} start 82.9077 took 2.9209s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":3,"_bound":12,"ExpansionArg_array_element_1_string":"PureString"}
* Error: TypeError: Cannot read property 'codeToString' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":3,"_bound":12}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":4,"ExpansionArg_bool":false,"_bound":17,"ExpansionArg_array_length_2":0} start 81.079 took 5.3714s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":4,"ExpansionArg_bool":false,"_bound":17,"ExpansionArg_array_length_2":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":4,"ExpansionArg_bool":false,"_bound":17}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"_bound":13,"ExpansionArg_array_element_2_type":0} start 80.2067 took 6.4083s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"_bound":13,"ExpansionArg_array_element_2_type":0}
* Error: TypeError: Cannot read property 'parse' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"_bound":13}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":1,"ExpansionArg_bool":false,"_bound":14} start 82.1285 took 4.6523s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":1,"ExpansionArg_bool":false,"_bound":14}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":4,"ExpansionArg_array_length":0,"ExpansionArg_type_2":1,"ExpansionArg_bool":false,"_bound":14}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":4,"ExpansionArg_array_element_1_bool":false,"_bound":19,"ExpansionArg_array_element_1_array_length":0} start 78.6568 took 8.3425s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":4,"ExpansionArg_array_element_1_bool":false,"_bound":19,"ExpansionArg_array_element_1_array_length":0}
* Error: TypeError: Function.prototype.apply was called on [object Array], which is a object and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":4,"ExpansionArg_array_element_1_bool":false,"_bound":19}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":1,"ExpansionArg_type_2":0,"_bound":14} start 78.7435 took 8.3103s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":1,"ExpansionArg_type_2":0,"_bound":14}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":1,"ExpansionArg_type_2":0,"_bound":14}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":5,"ExpansionArg_array_element_0_string":"","_bound":13,"ExpansionArg_array_element_0_bool":false} start 81.7403 took 5.9324s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":5,"ExpansionArg_array_element_0_string":"","_bound":13,"ExpansionArg_array_element_0_bool":false}
* Error: TypeError: Cannot read property 'parse' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":5,"ExpansionArg_array_element_0_string":"","_bound":13}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_type_2":3,"_bound":17,"ExpansionArg_string":"PureString"} start 79.7609 took 8.0481s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_type_2":3,"_bound":17,"ExpansionArg_string":"PureString"}
* Error: TypeError: Function.prototype.apply was called on PureString, which is a string and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_type_2":3,"_bound":17}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":1,"ExpansionArg_type_2":3,"_bound":9,"ExpansionArg_string":"PureString"} start 80.6917 took 7.8451s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":1,"ExpansionArg_type_2":3,"_bound":9,"ExpansionArg_string":"PureString"}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":1,"ExpansionArg_type_2":3,"_bound":9}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":4,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":0,"ExpansionArg_array_element_3_type":1,"_bound":19} start 80.6217 took 8.179s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":4,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":0,"ExpansionArg_array_element_3_type":1,"_bound":19}
* Error: TypeError: Function.prototype.apply was called on [object Array], which is a object and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":4,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":0,"ExpansionArg_array_element_3_type":1,"_bound":19}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"_bound":15,"ExpansionArg_array_element_0_type":0} start 85.5073 took 4.1748s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"_bound":15,"ExpansionArg_array_element_0_type":0}
* Error: ReferenceError: URL is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":1,"ExpansionArg_type_2":4,"ExpansionArg_array_length":1,"_bound":15}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":4,"ExpansionArg_string":"","_bound":14,"ExpansionArg_array_length":0} start 85.111 took 4.6821s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":4,"ExpansionArg_string":"","_bound":14,"ExpansionArg_array_length":0}
* Error: ReferenceError: URL is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":4,"ExpansionArg_string":"","_bound":14}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":2,"ExpansionArg_array_element_1_string":"","_bound":13,"ExpansionArg_array_element_1_int":0} start 85.8434 took 4.3089s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":2,"ExpansionArg_array_element_1_string":"","_bound":13,"ExpansionArg_array_element_1_int":0}
* Error: TypeError: Cannot read property 'codeToString' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":2,"ExpansionArg_array_element_1_string":"","_bound":13}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":5,"_bound":18,"ExpansionArg_array_element_2_bool":false} start 83.5265 took 7.251s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":5,"_bound":18,"ExpansionArg_array_element_2_bool":false}
* Error: TypeError: Function.prototype.apply was called on [object Array], which is a object and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":5,"_bound":18}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":2,"ExpansionArg_string":"","_bound":13,"ExpansionArg_int_2":0} start 84.2833 took 6.7049s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":2,"ExpansionArg_string":"","_bound":13,"ExpansionArg_int_2":0}
* Error: ReferenceError: URL is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":2,"ExpansionArg_string":"","_bound":13}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"_bound":10,"ExpansionArg_string":"PureString"} start 87.0521 took 4.6922s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"_bound":10,"ExpansionArg_string":"PureString"}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":3,"_bound":10}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":5,"ExpansionArg_array_element_0_bool":false,"_bound":18,"ExpansionArg_array_element_1_type":0} start 83.5728 took 8.2s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":5,"ExpansionArg_array_element_0_bool":false,"_bound":18,"ExpansionArg_array_element_1_type":0}
* Error: TypeError: Function.prototype.apply was called on [object Array], which is a object and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":5,"ExpansionArg_array_element_0_bool":false,"_bound":18}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":3,"ExpansionArg_type_2":0,"_bound":15,"ExpansionArg_array_element_1_string":"PureString"} start 87.0766 took 5.6855s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":3,"ExpansionArg_type_2":0,"_bound":15,"ExpansionArg_array_element_1_string":"PureString"}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":3,"ExpansionArg_type_2":0,"_bound":15}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":4,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":0,"ExpansionArg_type_2":0,"_bound":17,"ExpansionArg_array_element_3_type":0} start 86.8229 took 5.9979s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":4,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":0,"ExpansionArg_type_2":0,"_bound":17,"ExpansionArg_array_element_3_type":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":4,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":0,"ExpansionArg_type_2":0,"_bound":17}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":5,"_bound":19,"ExpansionArg_array_element_1_bool":false} start 85.0264 took 7.9291s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":5,"_bound":19,"ExpansionArg_array_element_1_bool":false}
* Error: TypeError: Function.prototype.apply was called on [object Array], which is a object and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":5,"_bound":19}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":5,"ExpansionArg_array_element_1_string":"","_bound":14,"ExpansionArg_array_element_1_bool":false} start 86.4669 took 7.0407s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":5,"ExpansionArg_array_element_1_string":"","_bound":14,"ExpansionArg_array_element_1_bool":false}
* Error: TypeError: Cannot read property 'codeToString' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":5,"ExpansionArg_array_element_1_string":"","_bound":14}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":5,"ExpansionArg_bool":false,"ExpansionArg_type_2":6,"_bound":12,"ExpansionArg_bool_2":false} start 86.639 took 7.0546s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":5,"ExpansionArg_bool":false,"ExpansionArg_type_2":6,"_bound":12,"ExpansionArg_bool_2":false}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":5,"ExpansionArg_bool":false,"ExpansionArg_type_2":6,"_bound":12}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_type_2":2,"ExpansionArg_string":"","_bound":18,"ExpansionArg_int":0} start 87.8566 took 6.4517s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_type_2":2,"ExpansionArg_string":"","_bound":18,"ExpansionArg_int":0}
* Error: TypeError: Function.prototype.apply was called on 0, which is a number and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_type_2":2,"ExpansionArg_string":"","_bound":18}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":4,"ExpansionArg_array_element_0_bool":false,"_bound":14,"ExpansionArg_array_element_0_array_length":0} start 87.7413 took 7.0292s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":4,"ExpansionArg_array_element_0_bool":false,"_bound":14,"ExpansionArg_array_element_0_array_length":0}
* Error: TypeError: Cannot read property 'parse' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":1,"ExpansionArg_type":4,"ExpansionArg_array_length":1,"ExpansionArg_array_element_0_type":4,"ExpansionArg_array_element_0_bool":false,"_bound":14}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":4,"ExpansionArg_string":"","_bound":13,"ExpansionArg_array_length":0} start 92.8301 took 2.0343s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":4,"ExpansionArg_string":"","_bound":13,"ExpansionArg_array_length":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":4,"ExpansionArg_string":"","_bound":13}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_type_2":5,"ExpansionArg_string":"","_bound":19,"ExpansionArg_bool":false} start 88.8153 took 6.5574s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_type_2":5,"ExpansionArg_string":"","_bound":19,"ExpansionArg_bool":false}
* Error: TypeError: Function.prototype.apply was called on false, which is a boolean and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_type_2":5,"ExpansionArg_string":"","_bound":19}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_string":"","_bound":11,"ExpansionArg_int":0} start 88.5966 took 6.9164s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_string":"","_bound":11,"ExpansionArg_int":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":1,"ExpansionArg_type_2":2,"ExpansionArg_string":"","_bound":11}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":1,"ExpansionArg_type_2":1,"ExpansionArg_string":"","_bound":10} start 90.2 took 6.0844s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":1,"ExpansionArg_type_2":1,"ExpansionArg_string":"","_bound":10}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":1,"ExpansionArg_type_2":1,"ExpansionArg_string":"","_bound":10}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":4,"ExpansionArg_array_element_2_bool":false,"_bound":21,"ExpansionArg_array_element_2_array_length":0} start 90.7973 took 5.5457s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":4,"ExpansionArg_array_element_2_bool":false,"_bound":21,"ExpansionArg_array_element_2_array_length":0}
* Error: TypeError: Function.prototype.apply was called on [object Array], which is a object and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":4,"ExpansionArg_array_element_2_bool":false,"_bound":21}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":15,"ExpansionArg_bool":false} start 89.8275 took 7.4769s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":15,"ExpansionArg_bool":false}
* Error: ReferenceError: URL is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":2,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":15}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_type_2":4,"ExpansionArg_bool":false,"_bound":20,"ExpansionArg_array_length_2":0} start 95.4059 took 2.1198s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_type_2":4,"ExpansionArg_bool":false,"_bound":20,"ExpansionArg_array_length_2":0}
* Error: TypeError: Function.prototype.apply was called on [object Array], which is a object and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_type_2":4,"ExpansionArg_bool":false,"_bound":20}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":1,"ExpansionArg_type_2":4,"ExpansionArg_string":"","_bound":12,"ExpansionArg_array_length":0} start 89.6979 took 7.9955s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":1,"ExpansionArg_type_2":4,"ExpansionArg_string":"","_bound":12,"ExpansionArg_array_length":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":1,"ExpansionArg_type_2":4,"ExpansionArg_string":"","_bound":12}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":2,"ExpansionArg_array_element_2_bool":false,"_bound":19,"ExpansionArg_array_element_2_int":0} start 91.0335 took 7.1907s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":2,"ExpansionArg_array_element_2_bool":false,"_bound":19,"ExpansionArg_array_element_2_int":0}
* Error: TypeError: Function.prototype.apply was called on [object Array], which is a object and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":2,"ExpansionArg_array_element_2_bool":false,"_bound":19}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":3,"ExpansionArg_array_element_1_bool":false,"_bound":21,"ExpansionArg_array_element_1_string":"PureString"} start 94.7879 took 3.4365s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":3,"ExpansionArg_array_element_1_bool":false,"_bound":21,"ExpansionArg_array_element_1_string":"PureString"}
* Error: TypeError: Function.prototype.apply was called on [object Array], which is a object and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":3,"ExpansionArg_array_element_1_bool":false,"_bound":21}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":4,"ExpansionArg_array_element_1_bool":false,"_bound":15,"ExpansionArg_array_element_1_array_length":0} start 93.5477 took 5.1546s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":4,"ExpansionArg_array_element_1_bool":false,"_bound":15,"ExpansionArg_array_element_1_array_length":0}
* Error: TypeError: Cannot read property 'codeToString' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":0,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":4,"ExpansionArg_array_element_1_bool":false,"_bound":15}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":4,"ExpansionArg_array_element_1_bool":false,"_bound":22,"ExpansionArg_array_element_1_array_length":0} start 93.0552 took 5.7465s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":4,"ExpansionArg_array_element_1_bool":false,"_bound":22,"ExpansionArg_array_element_1_array_length":0}
* Error: TypeError: Function.prototype.apply was called on [object Array], which is a object and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":4,"ExpansionArg_array_element_1_bool":false,"_bound":22}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":2,"ExpansionArg_string":"","_bound":12,"ExpansionArg_int_2":0} start 91.8057 took 7.5866s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":2,"ExpansionArg_string":"","_bound":12,"ExpansionArg_int_2":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":2,"ExpansionArg_string":"","_bound":12}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":3,"ExpansionArg_array_element_2_bool":false,"_bound":20,"ExpansionArg_array_element_2_string":"PureString"} start 91.763 took 8.0899s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":3,"ExpansionArg_array_element_2_bool":false,"_bound":20,"ExpansionArg_array_element_2_string":"PureString"}
* Error: TypeError: Function.prototype.apply was called on [object Array], which is a object and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":0,"ExpansionArg_type_2":4,"ExpansionArg_array_length":3,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":0,"ExpansionArg_array_element_2_type":3,"ExpansionArg_array_element_2_bool":false,"_bound":20}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":5,"ExpansionArg_bool":false,"ExpansionArg_type_2":4,"ExpansionArg_bool_2":false,"_bound":16,"ExpansionArg_array_length":0} start 93.7398 took 6.9511s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":5,"ExpansionArg_bool":false,"ExpansionArg_type_2":4,"ExpansionArg_bool_2":false,"_bound":16,"ExpansionArg_array_length":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":5,"ExpansionArg_bool":false,"ExpansionArg_type_2":4,"ExpansionArg_bool_2":false,"_bound":16}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":5,"ExpansionArg_array_element_1_string":"","ExpansionArg_type_2":0,"_bound":17,"ExpansionArg_array_element_1_bool":false} start 92.8039 took 8.051s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":5,"ExpansionArg_array_element_1_string":"","ExpansionArg_type_2":0,"_bound":17,"ExpansionArg_array_element_1_bool":false}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":5,"ExpansionArg_array_element_1_string":"","ExpansionArg_type_2":0,"_bound":17}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":2,"ExpansionArg_array_element_1_string":"","ExpansionArg_type_2":0,"_bound":16,"ExpansionArg_array_element_1_int":0} start 95.5319 took 5.5821s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":2,"ExpansionArg_array_element_1_string":"","ExpansionArg_type_2":0,"_bound":16,"ExpansionArg_array_element_1_int":0}
* Error: TypeError: Function.prototype.apply was called on undefined, which is a undefined and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":2,"ExpansionArg_array_element_1_string":"","ExpansionArg_type_2":0,"_bound":16}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":14,"ExpansionArg_bool":false} start 94.8877 took 6.2496s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":14,"ExpansionArg_bool":false}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":2,"ExpansionArg_int":0,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":14}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":5,"ExpansionArg_bool":false,"ExpansionArg_type_2":2,"ExpansionArg_bool_2":false,"_bound":14,"ExpansionArg_int":0} start 97.3202 took 4.7923s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":5,"ExpansionArg_bool":false,"ExpansionArg_type_2":2,"ExpansionArg_bool_2":false,"_bound":14,"ExpansionArg_int":0}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":5,"ExpansionArg_bool":false,"ExpansionArg_type_2":2,"ExpansionArg_bool_2":false,"_bound":14}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":2,"ExpansionArg_array_element_1_bool":false,"_bound":20,"ExpansionArg_array_element_1_int":0} start 96.4366 took 5.7437s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":2,"ExpansionArg_array_element_1_bool":false,"_bound":20,"ExpansionArg_array_element_1_int":0}
* Error: TypeError: Function.prototype.apply was called on [object Array], which is a object and not a function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":0,"ExpansionArg_type":3,"ExpansionArg_string":"","ExpansionArg_type_2":4,"ExpansionArg_array_length":2,"ExpansionArg_array_element_0_type":0,"ExpansionArg_array_element_1_type":2,"ExpansionArg_array_element_1_bool":false,"_bound":20}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":5,"ExpansionArg_bool":false,"ExpansionArg_type_2":3,"ExpansionArg_bool_2":false,"_bound":15,"ExpansionArg_string":"PureString"} start 94.3438 took 7.9008s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":5,"ExpansionArg_bool":false,"ExpansionArg_type_2":3,"ExpansionArg_bool_2":false,"_bound":15,"ExpansionArg_string":"PureString"}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":5,"ExpansionArg_bool":false,"ExpansionArg_type_2":3,"ExpansionArg_bool_2":false,"_bound":15}'
*-- Test Case {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":1,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":13,"ExpansionArg_bool":false} start 97.7039 took 5.9006s
*-- Errors occured in test {"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":1,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":13,"ExpansionArg_bool":false}
* Error: TypeError: Constructor is not a constructor
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"Switcher":false,"Target_Switch_Base":2,"ExpandedSwitcher":1,"ExpansionArg_type":1,"ExpansionArg_type_2":5,"ExpansionArg_array_length":0,"_bound":13}'