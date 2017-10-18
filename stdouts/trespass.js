/root/Targets/trespass.js
└─┬ trespass.js@0.31.5 
  ├── async@0.9.2 
  ├─┬ form-data@1.0.1 
  │ ├─┬ async@2.5.0 
  │ │ └── lodash@4.17.4 
  │ ├─┬ combined-stream@1.0.5 
  │ │ └── delayed-stream@1.0.0 
  │ └─┬ mime-types@2.1.17 
  │   └── mime-db@1.30.0 
  ├─┬ immutability-helper@2.4.0 
  │ └─┬ invariant@2.2.2 
  │   └─┬ loose-envify@1.3.1 
  │     └── js-tokens@3.0.2 
  ├── lodash@3.10.1 
  ├── moment@2.18.1 
  ├── mout@1.1.0 
  ├── pretty-data@0.40.0 
  ├─┬ query-string@4.3.4 
  │ ├── object-assign@4.1.1 
  │ └── strict-uri-encode@1.1.0 
  ├── ramda@0.21.0 
  ├── revalidator@0.3.1 
  ├── url-join@1.1.0 
  └─┬ xml2js@0.4.19 
    ├── sax@1.2.4 
    └── xmlbuilder@9.0.4 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/trespass.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000

*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","assign","call","RegExp","WeakMap","max","Array","apply","isArray","min","reverse","Function"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0834 took 68.4233s
*-- Errors occured in test {"_bound":0}
* Error: ReferenceError: require is not defined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/trespass.js/node_modules/trespass.js/dist/index.js. Coverage (Term): 37% Coverage (LOC): 63%
*- File /root/Targets/trespass.js/node_modules/trespass.js/dist/model/index.js. Coverage (Term): 4% Coverage (LOC): 4%
*- File /root/Targets/trespass.js/node_modules/immutability-helper/index.js. Coverage (Term): 13% Coverage (LOC): 29%
*- File /root/Targets/trespass.js/node_modules/invariant/invariant.js. Coverage (Term): 24% Coverage (LOC): 20%
*- File /root/Targets/trespass.js/node_modules/lodash/index.js. Coverage (Term): 20% Coverage (LOC): 31%
*- File /root/Targets/trespass.js/node_modules/ramda/dist/ramda.js. Coverage (Term): 25% Coverage (LOC): 40%
*- File /root/Targets/trespass.js/node_modules/revalidator/lib/revalidator.js. Coverage (Term): 7% Coverage (LOC): 17%
*- File /root/Targets/trespass.js/node_modules/async/lib/async.js. Coverage (Term): 10% Coverage (LOC): 14%
*- File /root/Targets/trespass.js/node_modules/moment/moment.js. Coverage (Term): 21% Coverage (LOC): 37%
*- File /root/Targets/trespass.js/node_modules/mout/index.js. Coverage (Term): 50% Coverage (LOC): 56%
*- File /root/Targets/trespass.js/node_modules/mout/array.js. Coverage (Term): 99% Coverage (LOC): 100%
*- File /root/Targets/trespass.js/node_modules/mout/array/append.js. Coverage (Term): 28% Coverage (LOC): 33%
*- File /root/Targets/trespass.js/node_modules/mout/array/collect.js. Coverage (Term): 32% Coverage (LOC): 32%
*- File /root/Targets/trespass.js/node_modules/mout/function/makeIterator_.js. Coverage (Term): 33% Coverage (LOC): 33%
*- File /root/Targets/trespass.js/node_modules/mout/function/identity.js. Coverage (Term): 68% Coverage (LOC): 80%
*- File /root/Targets/trespass.js/node_modules/mout/function/prop.js. Coverage (Term): 50% Coverage (LOC): 67%
*- File /root/Targets/trespass.js/node_modules/mout/object/deepMatches.js. Coverage (Term): 19% Coverage (LOC): 24%
*- File /root/Targets/trespass.js/node_modules/mout/object/forOwn.js. Coverage (Term): 96% Coverage (LOC): 100%
*- File /root/Targets/trespass.js/node_modules/mout/object/hasOwn.js. Coverage (Term): 94% Coverage (LOC): 100%
*- File /root/Targets/trespass.js/node_modules/mout/object/forIn.js. Coverage (Term): 65% Coverage (LOC): 81%
*- File /root/Targets/trespass.js/node_modules/mout/lang/isArray.js. Coverage (Term): 69% Coverage (LOC): 86%
*- File /root/Targets/trespass.js/node_modules/mout/lang/isKind.js. Coverage (Term): 64% Coverage (LOC): 83%
*- File /root/Targets/trespass.js/node_modules/mout/lang/kindOf.js. Coverage (Term): 50% Coverage (LOC): 80%
*- File /root/Targets/trespass.js/node_modules/mout/array/combine.js. Coverage (Term): 32% Coverage (LOC): 33%
*- File /root/Targets/trespass.js/node_modules/mout/array/indexOf.js. Coverage (Term): 23% Coverage (LOC): 25%
*- File /root/Targets/trespass.js/node_modules/mout/array/compact.js. Coverage (Term): 53% Coverage (LOC): 63%
*- File /root/Targets/trespass.js/node_modules/mout/array/filter.js. Coverage (Term): 28% Coverage (LOC): 28%
*- File /root/Targets/trespass.js/node_modules/mout/array/contains.js. Coverage (Term): 61% Coverage (LOC): 83%
*- File /root/Targets/trespass.js/node_modules/mout/array/difference.js. Coverage (Term): 51% Coverage (LOC): 60%
*- File /root/Targets/trespass.js/node_modules/mout/array/unique.js. Coverage (Term): 30% Coverage (LOC): 35%
*- File /root/Targets/trespass.js/node_modules/mout/array/some.js. Coverage (Term): 30% Coverage (LOC): 29%
*- File /root/Targets/trespass.js/node_modules/mout/array/slice.js. Coverage (Term): 17% Coverage (LOC): 18%
*- File /root/Targets/trespass.js/node_modules/mout/array/equals.js. Coverage (Term): 34% Coverage (LOC): 44%
*- File /root/Targets/trespass.js/node_modules/mout/lang/is.js. Coverage (Term): 36% Coverage (LOC): 50%
*- File /root/Targets/trespass.js/node_modules/mout/array/every.js. Coverage (Term): 30% Coverage (LOC): 29%
*- File /root/Targets/trespass.js/node_modules/mout/array/find.js. Coverage (Term): 48% Coverage (LOC): 71%
*- File /root/Targets/trespass.js/node_modules/mout/array/findIndex.js. Coverage (Term): 31% Coverage (LOC): 31%
*- File /root/Targets/trespass.js/node_modules/mout/array/findLast.js. Coverage (Term): 48% Coverage (LOC): 71%
*- File /root/Targets/trespass.js/node_modules/mout/array/findLastIndex.js. Coverage (Term): 33% Coverage (LOC): 31%
*- File /root/Targets/trespass.js/node_modules/mout/array/flatten.js. Coverage (Term): 26% Coverage (LOC): 28%
*- File /root/Targets/trespass.js/node_modules/mout/array/forEach.js. Coverage (Term): 30% Coverage (LOC): 33%
*- File /root/Targets/trespass.js/node_modules/mout/array/groupBy.js. Coverage (Term): 38% Coverage (LOC): 35%
*- File /root/Targets/trespass.js/node_modules/mout/array/indicesOf.js. Coverage (Term): 21% Coverage (LOC): 22%
*- File /root/Targets/trespass.js/node_modules/mout/array/insert.js. Coverage (Term): 48% Coverage (LOC): 55%
*- File /root/Targets/trespass.js/node_modules/mout/array/intersection.js. Coverage (Term): 51% Coverage (LOC): 60%
*- File /root/Targets/trespass.js/node_modules/mout/array/invoke.js. Coverage (Term): 30% Coverage (LOC): 33%
*- File /root/Targets/trespass.js/node_modules/mout/array/join.js. Coverage (Term): 44% Coverage (LOC): 67%
*- File /root/Targets/trespass.js/node_modules/mout/array/last.js. Coverage (Term): 41% Coverage (LOC): 50%
*- File /root/Targets/trespass.js/node_modules/mout/array/lastIndexOf.js. Coverage (Term): 21% Coverage (LOC): 24%
*- File /root/Targets/trespass.js/node_modules/mout/array/map.js. Coverage (Term): 30% Coverage (LOC): 33%
*- File /root/Targets/trespass.js/node_modules/mout/array/max.js. Coverage (Term): 21% Coverage (LOC): 23%
*- File /root/Targets/trespass.js/node_modules/mout/array/min.js. Coverage (Term): 21% Coverage (LOC): 23%
*- File /root/Targets/trespass.js/node_modules/mout/array/pick.js. Coverage (Term): 23% Coverage (LOC): 32%
*- File /root/Targets/trespass.js/node_modules/mout/random/randInt.js. Coverage (Term): 47% Coverage (LOC): 70%
*- File /root/Targets/trespass.js/node_modules/mout/number/MIN_INT.js. Coverage (Term): 95% Coverage (LOC): 100%
*- File /root/Targets/trespass.js/node_modules/mout/number/MAX_INT.js. Coverage (Term): 94% Coverage (LOC): 100%
*- File /root/Targets/trespass.js/node_modules/mout/random/rand.js. Coverage (Term): 51% Coverage (LOC): 70%
*- File /root/Targets/trespass.js/node_modules/mout/random/random.js. Coverage (Term): 71% Coverage (LOC): 83%
*- File /root/Targets/trespass.js/node_modules/mout/array/pluck.js. Coverage (Term): 66% Coverage (LOC): 83%
*- File /root/Targets/trespass.js/node_modules/mout/array/range.js. Coverage (Term): 30% Coverage (LOC): 31%
*- File /root/Targets/trespass.js/node_modules/mout/math/countSteps.js. Coverage (Term): 41% Coverage (LOC): 44%
*- File /root/Targets/trespass.js/node_modules/mout/array/reduce.js. Coverage (Term): 19% Coverage (LOC): 20%
*- File /root/Targets/trespass.js/node_modules/mout/array/reduceRight.js. Coverage (Term): 20% Coverage (LOC): 19%
*- File /root/Targets/trespass.js/node_modules/mout/array/reject.js. Coverage (Term): 28% Coverage (LOC): 28%
*- File /root/Targets/trespass.js/node_modules/mout/array/remove.js. Coverage (Term): 49% Coverage (LOC): 63%
*- File /root/Targets/trespass.js/node_modules/mout/array/removeAll.js. Coverage (Term): 43% Coverage (LOC): 50%
*- File /root/Targets/trespass.js/node_modules/mout/array/reverse.js. Coverage (Term): 50% Coverage (LOC): 57%
*- File /root/Targets/trespass.js/node_modules/mout/array/shuffle.js. Coverage (Term): 26% Coverage (LOC): 26%
*- File /root/Targets/trespass.js/node_modules/mout/array/sort.js. Coverage (Term): 12% Coverage (LOC): 18%
*- File /root/Targets/trespass.js/node_modules/mout/array/sortBy.js. Coverage (Term): 37% Coverage (LOC): 50%
*- File /root/Targets/trespass.js/node_modules/mout/array/split.js. Coverage (Term): 16% Coverage (LOC): 20%
*- File /root/Targets/trespass.js/node_modules/mout/array/take.js. Coverage (Term): 25% Coverage (LOC): 27%
*- File /root/Targets/trespass.js/node_modules/mout/array/toLookup.js. Coverage (Term): 25% Coverage (LOC): 24%
*- File /root/Targets/trespass.js/node_modules/mout/lang/isFunction.js. Coverage (Term): 68% Coverage (LOC): 83%
*- File /root/Targets/trespass.js/node_modules/mout/array/union.js. Coverage (Term): 44% Coverage (LOC): 50%
*- File /root/Targets/trespass.js/node_modules/mout/array/xor.js. Coverage (Term): 38% Coverage (LOC): 47%
*- File /root/Targets/trespass.js/node_modules/mout/array/zip.js. Coverage (Term): 30% Coverage (LOC): 47%
*- File /root/Targets/trespass.js/node_modules/mout/collection.js. Coverage (Term): 98% Coverage (LOC): 100%
*- File /root/Targets/trespass.js/node_modules/mout/collection/contains.js. Coverage (Term): 97% Coverage (LOC): 100%
*- File /root/Targets/trespass.js/node_modules/mout/collection/make_.js. Coverage (Term): 44% Coverage (LOC): 55%
*- File /root/Targets/trespass.js/node_modules/mout/object/contains.js. Coverage (Term): 52% Coverage (LOC): 63%
*- File /root/Targets/trespass.js/node_modules/mout/object/some.js. Coverage (Term): 41% Coverage (LOC): 40%
*- File /root/Targets/trespass.js/node_modules/mout/collection/every.js. Coverage (Term): 97% Coverage (LOC): 100%
*- File /root/Targets/trespass.js/node_modules/mout/object/every.js. Coverage (Term): 40% Coverage (LOC): 40%
*- File /root/Targets/trespass.js/node_modules/mout/collection/filter.js. Coverage (Term): 37% Coverage (LOC): 35%
*- File /root/Targets/trespass.js/node_modules/mout/collection/forEach.js. Coverage (Term): 97% Coverage (LOC): 100%
*- File /root/Targets/trespass.js/node_modules/mout/collection/find.js. Coverage (Term): 97% Coverage (LOC): 100%
*- File /root/Targets/trespass.js/node_modules/mout/object/find.js. Coverage (Term): 42% Coverage (LOC): 43%
*- File /root/Targets/trespass.js/node_modules/mout/collection/map.js. Coverage (Term): 47% Coverage (LOC): 53%
*- File /root/Targets/trespass.js/node_modules/mout/lang/isObject.js. Coverage (Term): 68% Coverage (LOC): 83%
*- File /root/Targets/trespass.js/node_modules/mout/object/values.js. Coverage (Term): 46% Coverage (LOC): 50%
*- File /root/Targets/trespass.js/node_modules/mout/collection/max.js. Coverage (Term): 97% Coverage (LOC): 100%
*- File /root/Targets/trespass.js/node_modules/mout/object/max.js. Coverage (Term): 67% Coverage (LOC): 86%
*- File /root/Targets/trespass.js/node_modules/mout/collection/min.js. Coverage (Term): 97% Coverage (LOC): 100%
*- File /root/Targets/trespass.js/node_modules/mout/object/min.js. Coverage (Term): 67% Coverage (LOC): 86%
*- File /root/Targets/trespass.js/node_modules/mout/collection/pluck.js. Coverage (Term): 52% Coverage (LOC): 63%
*- File /root/Targets/trespass.js/node_modules/mout/collection/reduce.js. Coverage (Term): 97% Coverage (LOC): 100%
*- File /root/Targets/trespass.js/node_modules/mout/object/reduce.js. Coverage (Term): 32% Coverage (LOC): 33%
*- File /root/Targets/trespass.js/node_modules/mout/object/size.js. Coverage (Term): 48% Coverage (LOC): 50%
*- File /root/Targets/trespass.js/node_modules/mout/collection/reject.js. Coverage (Term): 46% Coverage (LOC): 60%
*- File /root/Targets/trespass.js/node_modules/mout/collection/size.js. Coverage (Term): 53% Coverage (LOC): 46%
*- File /root/Targets/trespass.js/node_modules/mout/collection/some.js. Coverage (Term): 97% Coverage (LOC): 100%
*- File /root/Targets/trespass.js/node_modules/mout/date.js. Coverage (Term): 98% Coverage (LOC): 100%
*- File /root/Targets/trespass.js/node_modules/mout/date/dayOfTheYear.js. Coverage (Term): 43% Coverage (LOC): 83%
*- File /root/Targets/trespass.js/node_modules/mout/lang/isDate.js. Coverage (Term): 68% Coverage (LOC): 83%
*- File /root/Targets/trespass.js/node_modules/mout/date/diff.js. Coverage (Term): 12% Coverage (LOC): 21%
*- File /root/Targets/trespass.js/node_modules/mout/date/totalDaysInMonth.js. Coverage (Term): 58% Coverage (LOC): 73%
*- File /root/Targets/trespass.js/node_modules/mout/date/isLeapYear.js. Coverage (Term): 42% Coverage (LOC): 56%
*- File /root/Targets/trespass.js/node_modules/mout/date/totalDaysInYear.js. Coverage (Term): 63% Coverage (LOC): 83%
*- File /root/Targets/trespass.js/node_modules/mout/time/convert.js. Coverage (Term): 18% Coverage (LOC): 19%
*- File /root/Targets/trespass.js/node_modules/mout/date/i18n_.js. Coverage (Term): 78% Coverage (LOC): 89%
*- File /root/Targets/trespass.js/node_modules/mout/object/mixIn.js. Coverage (Term): 96% Coverage (LOC): 100%
*- File /root/Targets/trespass.js/node_modules/mout/date/i18n/en-US.js. Coverage (Term): 98% Coverage (LOC): 100%
*- File /root/Targets/trespass.js/node_modules/mout/date/isSame.js. Coverage (Term): 44% Coverage (LOC): 50%
*- File /root/Targets/trespass.js/node_modules/mout/date/startOf.js. Coverage (Term): 17% Coverage (LOC): 16%
*- File /root/Targets/trespass.js/node_modules/mout/lang/clone.js. Coverage (Term): 25% Coverage (LOC): 34%
*- File /root/Targets/trespass.js/node_modules/mout/lang/isPlainObject.js. Coverage (Term): 48% Coverage (LOC): 80%
*- File /root/Targets/trespass.js/node_modules/mout/date/parseIso.js. Coverage (Term): 11% Coverage (LOC): 27%
*- File /root/Targets/trespass.js/node_modules/mout/date/quarter.js. Coverage (Term): 33% Coverage (LOC): 33%
*- File /root/Targets/trespass.js/node_modules/mout/date/strftime.js. Coverage (Term): 15% Coverage (LOC): 23%
*- File /root/Targets/trespass.js/node_modules/mout/number/pad.js. Coverage (Term): 56% Coverage (LOC): 75%
*- File /root/Targets/trespass.js/node_modules/mout/string/lpad.js. Coverage (Term): 46% Coverage (LOC): 67%
*- File /root/Targets/trespass.js/node_modules/mout/lang/toString.js. Coverage (Term): 53% Coverage (LOC): 80%
*- File /root/Targets/trespass.js/node_modules/mout/string/repeat.js. Coverage (Term): 34% Coverage (LOC): 30%
*- File /root/Targets/trespass.js/node_modules/mout/number/toInt.js. Coverage (Term): 63% Coverage (LOC): 80%
*- File /root/Targets/trespass.js/node_modules/mout/lang/toNumber.js. Coverage (Term): 35% Coverage (LOC): 36%
*- File /root/Targets/trespass.js/node_modules/mout/date/timezoneOffset.js. Coverage (Term): 32% Coverage (LOC): 50%
*- File /root/Targets/trespass.js/node_modules/mout/date/timezoneAbbr.js. Coverage (Term): 49% Coverage (LOC): 71%
*- File /root/Targets/trespass.js/node_modules/mout/date/weekOfTheYear.js. Coverage (Term): 32% Coverage (LOC): 50%
*- File /root/Targets/trespass.js/node_modules/mout/function.js. Coverage (Term): 99% Coverage (LOC): 100%
*- File /root/Targets/trespass.js/node_modules/mout/function/after.js. Coverage (Term): 44% Coverage (LOC): 57%
*- File /root/Targets/trespass.js/node_modules/mout/function/awaitDelay.js. Coverage (Term): 45% Coverage (LOC): 47%
*- File /root/Targets/trespass.js/node_modules/mout/time/now.js. Coverage (Term): 61% Coverage (LOC): 75%
*- File /root/Targets/trespass.js/node_modules/mout/function/timeout.js. Coverage (Term): 45% Coverage (LOC): 56%
*- File /root/Targets/trespass.js/node_modules/mout/function/bind.js. Coverage (Term): 42% Coverage (LOC): 63%
*- File /root/Targets/trespass.js/node_modules/mout/function/compose.js. Coverage (Term): 32% Coverage (LOC): 36%
*- File /root/Targets/trespass.js/node_modules/mout/function/constant.js. Coverage (Term): 54% Coverage (LOC): 67%
*- File /root/Targets/trespass.js/node_modules/mout/function/debounce.js. Coverage (Term): 18% Coverage (LOC): 18%
*- File /root/Targets/trespass.js/node_modules/mout/function/func.js. Coverage (Term): 49% Coverage (LOC): 67%
*- File /root/Targets/trespass.js/node_modules/mout/function/memoize.js. Coverage (Term): 26% Coverage (LOC): 32%
*- File /root/Targets/trespass.js/node_modules/mout/function/partial.js. Coverage (Term): 35% Coverage (LOC): 50%
*- File /root/Targets/trespass.js/node_modules/mout/function/series.js. Coverage (Term): 31% Coverage (LOC): 36%
*- File /root/Targets/trespass.js/node_modules/mout/function/throttle.js. Coverage (Term): 21% Coverage (LOC): 20%
*- File /root/Targets/trespass.js/node_modules/mout/function/times.js. Coverage (Term): 40% Coverage (LOC): 44%
*- File /root/Targets/trespass.js/node_modules/mout/function/wrap.js. Coverage (Term): 66% Coverage (LOC): 83%
*- File /root/Targets/trespass.js/node_modules/mout/lang.js. Coverage (Term): 14% Coverage (LOC): 14%
*- File /root/Targets/trespass.js/node_modules/mout/lang/GLOBAL.js. Coverage (Term): 76% Coverage (LOC): 100%
*- File evalIndirect. Coverage (Term): 17% Coverage (LOC): 25%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **