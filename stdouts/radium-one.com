
> radium-one.com@0.18.1-patch3 postinstall /root/Targets/radium-one.com/node_modules/radium-one.com
> cd lib || npm run lib

/root/Targets/radium-one.com
└── radium-one.com@0.18.1-patch3 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/radium-one.com/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000

*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0345 took 3.1895s
*-- Errors occured in test {"_bound":0}
* Error: Error: Cannot find module 'react'
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/radium-one.com/node_modules/radium-one.com/lib/index.js. Coverage (Term): 22% Coverage (LOC): 23%
*- File /root/Targets/radium-one.com/node_modules/radium-one.com/lib/enhancer.js. Coverage (Term): 8% Coverage (LOC): 12%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **