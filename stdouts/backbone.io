
> ws@0.4.32 install /root/Targets/backbone.io/node_modules/ws
> (node-gyp rebuild 2> builderror.log) || (exit 0)

make: Entering directory '/root/Targets/backbone.io/node_modules/ws/build'
  CXX(target) Release/obj.target/bufferutil/src/bufferutil.o
bufferutil.target.mk:96: recipe for target 'Release/obj.target/bufferutil/src/bufferutil.o' failed
make: Leaving directory '/root/Targets/backbone.io/node_modules/ws/build'
/root/Targets/backbone.io
└─┬ backbone.io@0.4.2 
  ├── cookie@0.1.5 
  ├── cookie-signature@1.0.6 
  └─┬ socket.io@0.9.19 
    ├── base64id@0.1.0 
    ├── policyfile@0.0.4 
    ├── redis@0.7.3 
    └─┬ socket.io-client@0.9.16 
      ├─┬ active-x-obfuscator@0.0.1 
      │ └── zeparser@0.0.5 
      ├── uglify-js@1.2.5 
      ├─┬ ws@0.4.32 
      │ ├── commander@2.1.0 
      │ ├── nan@1.0.0 
      │ ├── options@0.0.6 
      │ └── tinycolor@0.0.1 
      └── xmlhttprequest@1.4.2 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/backbone.io/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000

*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","RegExp","create"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0638 took 40.0323s
*-- Errors occured in test {"_bound":0}
* Error: TypeError: Object.prototype.__defineGetter__: Expecting function
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/backbone.io/node_modules/backbone.io/lib/index.js. Coverage (Term): 8% Coverage (LOC): 8%
*- File /root/Targets/backbone.io/node_modules/socket.io/index.js. Coverage (Term): 80% Coverage (LOC): 100%
*- File /root/Targets/backbone.io/node_modules/socket.io/lib/socket.io.js. Coverage (Term): 20% Coverage (LOC): 26%
*- File /root/Targets/backbone.io/node_modules/socket.io-client/lib/io.js. Coverage (Term): 51% Coverage (LOC): 59%
*- File /root/Targets/backbone.io/node_modules/socket.io-client/lib/util.js. Coverage (Term): 25% Coverage (LOC): 44%
*- File /root/Targets/backbone.io/node_modules/socket.io-client/lib/json.js. Coverage (Term): 8% Coverage (LOC): 11%
*- File /root/Targets/backbone.io/node_modules/socket.io-client/lib/parser.js. Coverage (Term): 15% Coverage (LOC): 25%
*- File /root/Targets/backbone.io/node_modules/socket.io-client/lib/events.js. Coverage (Term): 16% Coverage (LOC): 19%
*- File /root/Targets/backbone.io/node_modules/socket.io-client/lib/namespace.js. Coverage (Term): 18% Coverage (LOC): 21%
*- File /root/Targets/backbone.io/node_modules/socket.io-client/lib/transport.js. Coverage (Term): 24% Coverage (LOC): 36%
*- File /root/Targets/backbone.io/node_modules/socket.io-client/lib/transports/xhr.js. Coverage (Term): 20% Coverage (LOC): 31%
*- File /root/Targets/backbone.io/node_modules/socket.io-client/lib/transports/websocket.js. Coverage (Term): 28% Coverage (LOC): 38%
*- File /root/Targets/backbone.io/node_modules/socket.io-client/lib/transports/xhr-polling.js. Coverage (Term): 29% Coverage (LOC): 30%
*- File /root/Targets/backbone.io/node_modules/socket.io-client/lib/socket.js. Coverage (Term): 9% Coverage (LOC): 14%
*- File /root/Targets/backbone.io/node_modules/socket.io-client/bin/builder.js. Coverage (Term): 21% Coverage (LOC): 28%
*- File /root/Targets/backbone.io/node_modules/uglify-js/uglify-js.js. Coverage (Term): 34% Coverage (LOC): 43%
*- File /root/Targets/backbone.io/node_modules/uglify-js/lib/parse-js.js. Coverage (Term): 12% Coverage (LOC): 25%
*- File /root/Targets/backbone.io/node_modules/uglify-js/lib/process.js. Coverage (Term): 2% Coverage (LOC): 4%
*- File /root/Targets/backbone.io/node_modules/uglify-js/lib/squeeze-more.js. Coverage (Term): 15% Coverage (LOC): 5%
*- File /root/Targets/backbone.io/node_modules/active-x-obfuscator/index.js. Coverage (Term): 23% Coverage (LOC): 30%
*- File /root/Targets/backbone.io/node_modules/zeparser/index.js. Coverage (Term): 95% Coverage (LOC): 100%
*- File /root/Targets/backbone.io/node_modules/zeparser/ZeParser.js. Coverage (Term): 4% Coverage (LOC): 11%
*- File /root/Targets/backbone.io/node_modules/zeparser/Tokenizer.js. Coverage (Term): 10% Coverage (LOC): 25%
*- File /root/Targets/backbone.io/node_modules/zeparser/unicodecategories.js. Coverage (Term): 97% Coverage (LOC): 100%
*- File /root/Targets/backbone.io/node_modules/socket.io/lib/manager.js. Coverage (Term): 2% Coverage (LOC): 1%
*- File /root/Targets/backbone.io/node_modules/socket.io/lib/util.js. Coverage (Term): 19% Coverage (LOC): 44%
*- File /root/Targets/backbone.io/node_modules/socket.io/lib/store.js. Coverage (Term): 28% Coverage (LOC): 42%
*- File /root/Targets/backbone.io/node_modules/socket.io/lib/transports/index.js. Coverage (Term): 48% Coverage (LOC): 56%
*- File /root/Targets/backbone.io/node_modules/socket.io/lib/transports/websocket.js. Coverage (Term): 20% Coverage (LOC): 38%
*- File /root/Targets/backbone.io/node_modules/socket.io/lib/transports/websocket/index.js. Coverage (Term): 53% Coverage (LOC): 63%
*- File /root/Targets/backbone.io/node_modules/socket.io/lib/transports/websocket/hybi-07-12.js. Coverage (Term): 1% Coverage (LOC): 2%
*- File /root/Targets/backbone.io/node_modules/socket.io/lib/transport.js. Coverage (Term): 3% Coverage (LOC): 3%
*- File /root/Targets/backbone.io/node_modules/socket.io/lib/parser.js. Coverage (Term): 13% Coverage (LOC): 24%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **