/root/Targets/sumologic.js
└─┬ sumologic.js@1.0.8 
  └── jquery@2.2.4 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/sumologic.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000

*-- Stat Module Output --*
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.045 took 23.1371s
*-- Errors occured in test {"_bound":0}
* Error: Exception E: SyntaxError: Unexpected end of JSON input of coverage data on 
* Error: Exception E: SyntaxError: Unexpected end of JSON input of test data on 
* Error: Error extracting final output - a fatal error must have occured
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **