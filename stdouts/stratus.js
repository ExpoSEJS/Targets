/root/Targets/stratus.js
└─┬ stratus.js@0.7.0 
  ├── bower@1.8.2 
  └── underscore@1.8.3 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/stratus.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000

*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0485 took 3.6484s
*-- Errors occured in test {"_bound":0}
* Error: Tropigate failed because SyntaxError: Unexpected token (1:78) on program <html>
<head>
    <title>Stratus</title>
</head>
<body>
    Coming soon!
</body>
</html> at SyntaxError: Unexpected token (1:78)
    at Parser.pp$4.raise (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:2221:15)
    at Parser.pp.unexpected (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:603:10)
    at Parser.pp$3.parseExprAtom (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:1822:12)
    at Parser.parseExprAtom (/root/ExpoSE/lib/Tropigate/bin/Expression.js:28:30)
    at Parser.pp$3.parseExprSubscripts (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:1715:21)
    at Parser.parseMaybeUnary (/root/ExpoSE/lib/Tropigate/bin/Unary.js:34:29)
    at Parser.pp$3.parseExprOps (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:1637:21)
    at Parser.pp$3.parseMaybeConditional (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:1620:21)
    at Parser.pp$3.parseMaybeAssign (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:1597:21)
    at Parser.pp$3.parseExpression (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:1573:21)
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **