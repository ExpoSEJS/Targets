
> sleep@3.0.1 install /root/Targets/sitespeed.io/node_modules/sleep
> node-gyp rebuild

make: Entering directory '/root/Targets/sitespeed.io/node_modules/sleep/build'
  CXX(target) Release/obj.target/node_sleep/sleep.o
  SOLINK_MODULE(target) Release/obj.target/node_sleep.node
  COPY Release/node_sleep.node
make: Leaving directory '/root/Targets/sitespeed.io/node_modules/sleep/build'

> alto-saxophone@2.31.0 install /root/Targets/sitespeed.io/node_modules/alto-saxophone
> node install.js


> soprano-saxophone@0.18.0 install /root/Targets/sitespeed.io/node_modules/soprano-saxophone
> node install.js

/root/Targets/sitespeed.io
└─┬ sitespeed.io@5.6.2 
  ├── bluebird@3.5.0 
  ├─┬ browsertime@1.8.1 
  │ ├─┬ adbkit@2.8.1 
  │ │ ├── adbkit-logcat@1.1.0 
  │ │ ├─┬ adbkit-monkey@1.0.1 
  │ │ │ └── async@0.2.10 
  │ │ ├── bluebird@2.9.34 
  │ │ ├─┬ debug@2.6.9 
  │ │ │ └── ms@2.0.0 
  │ │ ├── node-forge@0.6.49 
  │ │ └── split@0.3.3 
  │ ├─┬ alto-saxophone@2.31.0 
  │ │ ├─┬ download@4.4.3 
  │ │ │ ├─┬ caw@1.2.0 
  │ │ │ │ ├─┬ get-proxy@1.1.0 
  │ │ │ │ │ └─┬ rc@1.2.1 
  │ │ │ │ │   ├── deep-extend@0.4.2 
  │ │ │ │ │   ├── ini@1.3.4 
  │ │ │ │ │   └── strip-json-comments@2.0.1 
  │ │ │ │ ├── is-obj@1.0.1 
  │ │ │ │ ├── object-assign@3.0.0 
  │ │ │ │ └── tunnel-agent@0.4.3 
  │ │ │ ├─┬ concat-stream@1.6.0 
  │ │ │ │ └── typedarray@0.0.6 
  │ │ │ ├─┬ each-async@1.1.1 
  │ │ │ │ ├── onetime@1.1.0 
  │ │ │ │ └── set-immediate-shim@1.0.1 
  │ │ │ ├─┬ filenamify@1.2.1 
  │ │ │ │ ├── filename-reserved-regex@1.0.0 
  │ │ │ │ ├── strip-outer@1.0.0 
  │ │ │ │ └── trim-repeated@1.0.0 
  │ │ │ ├─┬ got@5.7.1 
  │ │ │ │ ├── create-error-class@3.0.2 
  │ │ │ │ ├── duplexer2@0.1.4 
  │ │ │ │ ├── is-redirect@1.0.0 
  │ │ │ │ ├── is-retry-allowed@1.1.0 
  │ │ │ │ ├── lowercase-keys@1.0.0 
  │ │ │ │ ├── node-status-codes@1.0.0 
  │ │ │ │ ├─┬ parse-json@2.2.0 
  │ │ │ │ │ └─┬ error-ex@1.3.1 
  │ │ │ │ │   └── is-arrayish@0.2.1 
  │ │ │ │ ├── timed-out@3.1.3 
  │ │ │ │ ├── unzip-response@1.0.2 
  │ │ │ │ └─┬ url-parse-lax@1.0.0 
  │ │ │ │   └── prepend-http@1.0.4 
  │ │ │ ├─┬ gulp-decompress@1.2.0 
  │ │ │ │ ├─┬ archive-type@3.2.0 
  │ │ │ │ │ └── file-type@3.9.0 
  │ │ │ │ ├─┬ decompress@3.0.0 
  │ │ │ │ │ ├─┬ buffer-to-vinyl@1.1.0 
  │ │ │ │ │ │ └── uuid@2.0.3 
  │ │ │ │ │ ├─┬ decompress-tar@3.1.0 
  │ │ │ │ │ │ ├── is-tar@1.0.0 
  │ │ │ │ │ │ ├── object-assign@2.1.1 
  │ │ │ │ │ │ ├─┬ strip-dirs@1.1.1 
  │ │ │ │ │ │ │ ├─┬ is-absolute@0.1.7 
  │ │ │ │ │ │ │ │ └── is-relative@0.1.3 
  │ │ │ │ │ │ │ ├── is-natural-number@2.1.1 
  │ │ │ │ │ │ │ └── sum-up@1.0.3 
  │ │ │ │ │ │ ├─┬ tar-stream@1.5.4 
  │ │ │ │ │ │ │ └── bl@1.2.1 
  │ │ │ │ │ │ └─┬ vinyl@0.4.6 
  │ │ │ │ │ │   └── clone@0.2.0 
  │ │ │ │ │ ├─┬ decompress-tarbz2@3.1.0 
  │ │ │ │ │ │ ├── is-bzip2@1.0.0 
  │ │ │ │ │ │ ├── object-assign@2.1.1 
  │ │ │ │ │ │ ├─┬ seek-bzip@1.0.5 
  │ │ │ │ │ │ │ └── commander@2.8.1 
  │ │ │ │ │ │ └─┬ vinyl@0.4.6 
  │ │ │ │ │ │   └── clone@0.2.0 
  │ │ │ │ │ ├─┬ decompress-targz@3.1.0 
  │ │ │ │ │ │ ├── is-gzip@1.0.0 
  │ │ │ │ │ │ ├── object-assign@2.1.1 
  │ │ │ │ │ │ └─┬ vinyl@0.4.6 
  │ │ │ │ │ │   └── clone@0.2.0 
  │ │ │ │ │ ├─┬ decompress-unzip@3.4.0 
  │ │ │ │ │ │ ├── is-zip@1.0.0 
  │ │ │ │ │ │ ├── stat-mode@0.2.2 
  │ │ │ │ │ │ ├── through2@2.0.3 
  │ │ │ │ │ │ └─┬ yauzl@2.8.0 
  │ │ │ │ │ │   └── buffer-crc32@0.2.13 
  │ │ │ │ │ └── vinyl-assign@1.2.1 
  │ │ │ │ └─┬ gulp-util@3.0.8 
  │ │ │ │   ├── array-differ@1.0.0 
  │ │ │ │   ├── array-uniq@1.0.3 
  │ │ │ │   ├── beeper@1.1.1 
  │ │ │ │   ├── dateformat@2.2.0 
  │ │ │ │   ├─┬ fancy-log@1.3.0 
  │ │ │ │   │ └── time-stamp@1.1.0 
  │ │ │ │   ├─┬ gulplog@1.0.0 
  │ │ │ │   │ └── glogg@1.0.0 
  │ │ │ │   ├─┬ has-gulplog@0.1.0 
  │ │ │ │   │ └── sparkles@1.0.0 
  │ │ │ │   ├── lodash._reescape@3.0.0 
  │ │ │ │   ├── lodash._reevaluate@3.0.0 
  │ │ │ │   ├── lodash._reinterpolate@3.0.0 
  │ │ │ │   ├─┬ lodash.template@3.6.2 
  │ │ │ │   │ ├── lodash._basetostring@3.0.1 
  │ │ │ │   │ ├── lodash._basevalues@3.0.0 
  │ │ │ │   │ ├─┬ lodash.escape@3.2.0 
  │ │ │ │   │ │ └── lodash._root@3.0.1 
  │ │ │ │   │ ├── lodash.restparam@3.6.1 
  │ │ │ │   │ └── lodash.templatesettings@3.1.1 
  │ │ │ │   ├─┬ multipipe@0.1.2 
  │ │ │ │   │ └─┬ duplexer2@0.0.2 
  │ │ │ │   │   └─┬ readable-stream@1.1.14 
  │ │ │ │   │     ├── isarray@0.0.1 
  │ │ │ │   │     └── string_decoder@0.10.31 
  │ │ │ │   ├── object-assign@3.0.0 
  │ │ │ │   ├── through2@2.0.3 
  │ │ │ │   └── vinyl@0.5.3 
  │ │ │ ├── gulp-rename@1.2.2 
  │ │ │ ├── is-url@1.2.2 
  │ │ │ ├── read-all-stream@3.1.0 
  │ │ │ ├─┬ readable-stream@2.3.3 
  │ │ │ │ ├── core-util-is@1.0.2 
  │ │ │ │ ├── isarray@1.0.0 
  │ │ │ │ ├── process-nextick-args@1.0.7 
  │ │ │ │ ├── string_decoder@1.0.3 
  │ │ │ │ └── util-deprecate@1.0.2 
  │ │ │ ├── stream-combiner2@1.1.1 
  │ │ │ ├─┬ vinyl@1.2.0 
  │ │ │ │ ├── clone@1.0.2 
  │ │ │ │ ├── clone-stats@0.0.1 
  │ │ │ │ └── replace-ext@0.0.1 
  │ │ │ ├─┬ vinyl-fs@2.4.4 
  │ │ │ │ ├─┬ duplexify@3.5.1 
  │ │ │ │ │ ├── end-of-stream@1.4.0 
  │ │ │ │ │ └── stream-shift@1.0.0 
  │ │ │ │ ├─┬ glob-stream@5.3.5 
  │ │ │ │ │ ├── glob@5.0.15 
  │ │ │ │ │ ├─┬ glob-parent@3.1.0 
  │ │ │ │ │ │ ├─┬ is-glob@3.1.0 
  │ │ │ │ │ │ │ └── is-extglob@2.1.1 
  │ │ │ │ │ │ └── path-dirname@1.0.2 
  │ │ │ │ │ ├─┬ micromatch@2.3.11 
  │ │ │ │ │ │ ├─┬ arr-diff@2.0.0 
  │ │ │ │ │ │ │ └── arr-flatten@1.1.0 
  │ │ │ │ │ │ ├── array-unique@0.2.1 
  │ │ │ │ │ │ ├─┬ braces@1.8.5 
  │ │ │ │ │ │ │ ├─┬ expand-range@1.8.2 
  │ │ │ │ │ │ │ │ └─┬ fill-range@2.2.3 
  │ │ │ │ │ │ │ │   ├── is-number@2.1.0 
  │ │ │ │ │ │ │ │   ├── isobject@2.1.0 
  │ │ │ │ │ │ │ │   └─┬ randomatic@1.1.7 
  │ │ │ │ │ │ │ │     ├─┬ is-number@3.0.0 
  │ │ │ │ │ │ │ │     │ └── kind-of@3.2.2 
  │ │ │ │ │ │ │ │     └── kind-of@4.0.0 
  │ │ │ │ │ │ │ ├── preserve@0.2.0 
  │ │ │ │ │ │ │ └── repeat-element@1.1.2 
  │ │ │ │ │ │ ├─┬ expand-brackets@0.1.5 
  │ │ │ │ │ │ │ └── is-posix-bracket@0.1.1 
  │ │ │ │ │ │ ├─┬ extglob@0.3.2 
  │ │ │ │ │ │ │ └── is-extglob@1.0.0 
  │ │ │ │ │ │ ├── filename-regex@2.0.1 
  │ │ │ │ │ │ ├── is-extglob@1.0.0 
  │ │ │ │ │ │ ├── is-glob@2.0.1 
  │ │ │ │ │ │ ├─┬ kind-of@3.2.2 
  │ │ │ │ │ │ │ └── is-buffer@1.1.5 
  │ │ │ │ │ │ ├─┬ normalize-path@2.1.1 
  │ │ │ │ │ │ │ └── remove-trailing-separator@1.1.0 
  │ │ │ │ │ │ ├─┬ object.omit@2.0.1 
  │ │ │ │ │ │ │ ├─┬ for-own@0.1.5 
  │ │ │ │ │ │ │ │ └── for-in@1.0.2 
  │ │ │ │ │ │ │ └── is-extendable@0.1.1 
  │ │ │ │ │ │ ├─┬ parse-glob@3.0.4 
  │ │ │ │ │ │ │ ├─┬ glob-base@0.3.0 
  │ │ │ │ │ │ │ │ ├── glob-parent@2.0.0 
  │ │ │ │ │ │ │ │ └─┬ is-glob@2.0.1 
  │ │ │ │ │ │ │ │   └── is-extglob@1.0.0 
  │ │ │ │ │ │ │ ├── is-dotfile@1.0.3 
  │ │ │ │ │ │ │ ├── is-extglob@1.0.0 
  │ │ │ │ │ │ │ └── is-glob@2.0.1 
  │ │ │ │ │ │ └─┬ regex-cache@0.4.4 
  │ │ │ │ │ │   └─┬ is-equal-shallow@0.1.3 
  │ │ │ │ │ │     └── is-primitive@2.0.0 
  │ │ │ │ │ ├── ordered-read-streams@0.3.0 
  │ │ │ │ │ ├─┬ through2@0.6.5 
  │ │ │ │ │ │ └─┬ readable-stream@1.0.34 
  │ │ │ │ │ │   ├── isarray@0.0.1 
  │ │ │ │ │ │   └── string_decoder@0.10.31 
  │ │ │ │ │ ├─┬ to-absolute-glob@0.1.1 
  │ │ │ │ │ │ └── extend-shallow@2.0.1 
  │ │ │ │ │ └── unique-stream@2.2.1 
  │ │ │ │ ├─┬ gulp-sourcemaps@1.6.0 
  │ │ │ │ │ ├── convert-source-map@1.5.0 
  │ │ │ │ │ └── through2@2.0.3 
  │ │ │ │ ├── is-valid-glob@0.3.0 
  │ │ │ │ ├── lazystream@1.0.0 
  │ │ │ │ ├── lodash.isequal@4.5.0 
  │ │ │ │ ├── merge-stream@1.0.1 
  │ │ │ │ ├─┬ strip-bom@2.0.0 
  │ │ │ │ │ └── is-utf8@0.2.1 
  │ │ │ │ ├─┬ strip-bom-stream@1.0.0 
  │ │ │ │ │ └── first-chunk-stream@1.0.0 
  │ │ │ │ ├── through2@2.0.3 
  │ │ │ │ ├─┬ through2-filter@2.0.0 
  │ │ │ │ │ ├── through2@2.0.3 
  │ │ │ │ │ └── xtend@4.0.1 
  │ │ │ │ └── vali-date@1.0.0 
  │ │ │ └─┬ ware@1.3.0 
  │ │ │   └─┬ wrap-fn@0.1.5 
  │ │ │     └── co@3.1.0 
  │ │ └─┬ download-status@2.2.1 
  │ │   ├─┬ chalk@0.5.1 
  │ │   │ ├── ansi-styles@1.1.0 
  │ │   │ ├─┬ has-ansi@0.1.0 
  │ │   │ │ └── ansi-regex@0.2.1 
  │ │   │ ├── strip-ansi@0.3.0 
  │ │   │ └── supports-color@0.2.0 
  │ │   ├─┬ lpad-align@1.1.2 
  │ │   │ ├── get-stdin@4.0.1 
  │ │   │ ├─┬ indent-string@2.1.0 
  │ │   │ │ └─┬ repeating@2.0.1 
  │ │   │ │   └── is-finite@1.0.2 
  │ │   │ ├── longest@1.0.1 
  │ │   │ └─┬ meow@3.7.0 
  │ │   │   ├─┬ camelcase-keys@2.1.0 
  │ │   │   │ └── camelcase@2.1.1 
  │ │   │   ├─┬ loud-rejection@1.6.0 
  │ │   │   │ └─┬ currently-unhandled@0.4.1 
  │ │   │   │   └── array-find-index@1.0.2 
  │ │   │   ├── map-obj@1.0.1 
  │ │   │   ├─┬ redent@1.0.0 
  │ │   │   │ └── strip-indent@1.0.1 
  │ │   │   └── trim-newlines@1.0.0 
  │ │   ├── object-assign@2.1.1 
  │ │   └── progress@1.1.8 
  │ ├─┬ chrome-har@0.2.2 
  │ │ ├── debug@2.6.8 
  │ │ ├── moment@2.18.1 
  │ │ └─┬ tough-cookie@2.3.3 
  │ │   └── punycode@1.4.1 
  │ ├─┬ execa@0.6.1 
  │ │ ├─┬ cross-spawn@5.1.0 
  │ │ │ ├─┬ lru-cache@4.1.1 
  │ │ │ │ ├── pseudomap@1.0.2 
  │ │ │ │ └── yallist@2.1.2 
  │ │ │ ├─┬ shebang-command@1.2.0 
  │ │ │ │ └── shebang-regex@1.0.0 
  │ │ │ └─┬ which@1.3.0 
  │ │ │   └── isexe@2.0.0 
  │ │ ├── get-stream@3.0.0 
  │ │ ├── is-stream@1.1.0 
  │ │ ├─┬ npm-run-path@2.0.2 
  │ │ │ └── path-key@2.0.1 
  │ │ ├── p-finally@1.0.0 
  │ │ ├── signal-exit@3.0.2 
  │ │ └── strip-eof@1.0.0 
  │ ├─┬ hasbin@1.2.3 
  │ │ └── async@1.5.2 
  │ ├─┬ intel@1.2.0 
  │ │ └── strftime@0.10.0 
  │ ├── lodash.groupby@4.6.0 
  │ ├── lodash.remove@4.7.0 
  │ ├── moment@2.18.1 
  │ ├─┬ selenium-webdriver@3.5.0 
  │ │ ├─┬ jszip@3.1.4 
  │ │ │ ├── core-js@2.3.0 
  │ │ │ ├── es6-promise@3.0.2 
  │ │ │ ├─┬ lie@3.1.1 
  │ │ │ │ └── immediate@3.0.6 
  │ │ │ ├── pako@1.0.6 
  │ │ │ └─┬ readable-stream@2.0.6 
  │ │ │   └── string_decoder@0.10.31 
  │ │ ├─┬ rimraf@2.6.2 
  │ │ │ └── glob@7.1.2 
  │ │ └─┬ tmp@0.0.30 
  │ │   └── os-tmpdir@1.0.2 
  │ ├─┬ sltc@0.6.0 
  │ │ └─┬ hasbin@1.2.2 
  │ │   └── async@1.5.2 
  │ ├── soprano-saxophone@0.18.0 
  │ ├── valid-url@1.0.9 
  │ ├─┬ xvfb@0.2.3 
  │ │ └─┬ sleep@3.0.1 
  │ │   └── nan@2.7.0 
  │ └─┬ yargs@7.1.0 
  │   ├── camelcase@3.0.0 
  │   └─┬ yargs-parser@5.0.0 
  │     └── camelcase@3.0.0 
  ├─┬ cli-color@1.1.0 
  │ ├── ansi-regex@2.1.1 
  │ ├── d@0.1.1 
  │ ├─┬ es5-ext@0.10.30 
  │ │ └─┬ es6-symbol@3.1.1 
  │ │   └── d@1.0.0 
  │ ├─┬ es6-iterator@2.0.1 
  │ │ └── d@1.0.0 
  │ ├─┬ memoizee@0.3.10 
  │ │ ├─┬ es6-weak-map@0.1.4 
  │ │ │ ├── es6-iterator@0.1.3 
  │ │ │ └── es6-symbol@2.0.1 
  │ │ ├─┬ event-emitter@0.3.5 
  │ │ │ └── d@1.0.0 
  │ │ ├── lru-queue@0.1.0 
  │ │ └── next-tick@0.2.2 
  │ └─┬ timers-ext@0.1.2 
  │   └── next-tick@1.0.0 
  ├─┬ concurrent-queue@7.0.1 
  │ ├── afterward@2.0.0 
  │ ├─┬ define-error@1.0.0 
  │ │ └── capture-stack-trace@1.0.0 
  │ ├─┬ eventuate@4.0.0 
  │ │ ├── object-assign@3.0.0 
  │ │ └── shallow-copy@0.0.1 
  │ ├── object-assign@4.0.1 
  │ ├── on-error@2.1.0 
  │ ├─┬ once@1.3.3 
  │ │ └── wrappy@1.0.2 
  │ └── promise-polyfill@2.1.4 
  ├── fast-stats@0.0.3 
  ├─┬ fs-extra@2.1.2 
  │ ├── graceful-fs@4.1.11 
  │ └── jsonfile@2.4.0 
  ├─┬ gpagespeed@4.0.2 
  │ └─┬ googleapis@16.1.0 
  │   ├── async@2.1.5 
  │   ├─┬ google-auth-library@0.10.0 
  │   │ ├─┬ gtoken@1.2.2 
  │   │ │ ├─┬ google-p12-pem@0.1.2 
  │   │ │ │ └── node-forge@0.7.1 
  │   │ │ └── mime@1.4.1 
  │   │ ├─┬ jws@3.1.4 
  │   │ │ ├── base64url@2.0.0 
  │   │ │ └─┬ jwa@1.1.5 
  │   │ │   ├── buffer-equal-constant-time@1.0.1 
  │   │ │   └── ecdsa-sig-formatter@1.0.9 
  │   │ └── lodash.noop@3.0.1 
  │   └── string-template@1.0.0 
  ├── influx@5.0.4 
  ├─┬ intel@1.1.2 
  │ ├─┬ chalk@1.1.3 
  │ │ ├── ansi-styles@2.2.1 
  │ │ ├── escape-string-regexp@1.0.5 
  │ │ ├── has-ansi@2.0.0 
  │ │ ├── strip-ansi@3.0.1 
  │ │ └── supports-color@2.0.0 
  │ ├── dbug@0.4.2 
  │ ├── stack-trace@0.0.10 
  │ ├── strftime@0.9.2 
  │ ├── symbol@0.3.1 
  │ └── utcstring@0.1.0 
  ├─┬ junit-report-builder@1.1.1 
  │ ├── date-format@0.0.2 
  │ ├── lodash@3.10.1 
  │ └── xmlbuilder@2.6.5 
  ├── lodash.chunk@4.2.0 
  ├── lodash.clonedeep@4.5.0 
  ├── lodash.difference@4.5.0 
  ├── lodash.flatten@4.4.0 
  ├── lodash.foreach@4.5.0 
  ├── lodash.get@4.4.2 
  ├── lodash.isempty@4.4.0 
  ├── lodash.merge@4.6.0 
  ├── lodash.pick@4.4.0 
  ├── lodash.pullall@4.2.0 
  ├── lodash.reduce@4.6.0 
  ├── lodash.set@4.3.2 
  ├── lodash.union@4.6.0 
  ├─┬ longjohn@0.2.12 
  │ └─┬ source-map-support@0.4.18 
  │   └── source-map@0.5.7 
  ├─┬ mkdirp@0.5.1 
  │ └── minimist@0.0.8 
  ├── moment@2.17.1 
  ├─┬ node-slack@0.0.7 
  │ ├── deferred@0.7.1 
  │ └─┬ request@2.83.0 
  │   ├── aws-sign2@0.7.0 
  │   ├── aws4@1.6.0 
  │   ├── caseless@0.12.0 
  │   ├─┬ combined-stream@1.0.5 
  │   │ └── delayed-stream@1.0.0 
  │   ├── extend@3.0.1 
  │   ├── forever-agent@0.6.1 
  │   ├─┬ form-data@2.3.1 
  │   │ └── asynckit@0.4.0 
  │   ├─┬ har-validator@5.0.3 
  │   │ ├─┬ ajv@5.2.3 
  │   │ │ ├── co@4.6.0 
  │   │ │ ├── fast-deep-equal@1.0.0 
  │   │ │ └── json-schema-traverse@0.3.1 
  │   │ └── har-schema@2.0.0 
  │   ├─┬ hawk@6.0.2 
  │   │ ├── boom@4.3.1 
  │   │ ├─┬ cryptiles@3.1.2 
  │   │ │ └── boom@5.2.0 
  │   │ ├── hoek@4.2.0 
  │   │ └── sntp@2.0.2 
  │   ├─┬ http-signature@1.2.0 
  │   │ ├── assert-plus@1.0.0 
  │   │ ├─┬ jsprim@1.4.1 
  │   │ │ ├── extsprintf@1.3.0 
  │   │ │ ├── json-schema@0.2.3 
  │   │ │ └── verror@1.10.0 
  │   │ └─┬ sshpk@1.13.1 
  │   │   ├── asn1@0.2.3 
  │   │   ├── bcrypt-pbkdf@1.0.1 
  │   │   ├── dashdash@1.14.1 
  │   │   ├── ecc-jsbn@0.1.1 
  │   │   ├── getpass@0.1.7 
  │   │   ├── jsbn@0.1.1 
  │   │   └── tweetnacl@0.14.5 
  │   ├── is-typedarray@1.0.0 
  │   ├── isstream@0.1.2 
  │   ├── json-stringify-safe@5.0.1 
  │   ├─┬ mime-types@2.1.17 
  │   │ └── mime-db@1.30.0 
  │   ├── oauth-sign@0.8.2 
  │   ├── performance-now@2.1.0 
  │   ├── qs@6.5.1 
  │   ├── safe-buffer@5.1.1 
  │   ├── stringstream@0.0.5 
  │   └── tunnel-agent@0.6.0 
  ├─┬ pagexray@0.14.3 
  │ └── minimist@1.2.0 
  ├─┬ pug@2.0.0-rc.2 
  │ ├─┬ pug-code-gen@1.1.1 
  │ │ ├─┬ constantinople@3.1.0 
  │ │ │ ├── acorn@3.3.0 
  │ │ │ └── is-expression@2.1.0 
  │ │ ├── doctypes@1.1.0 
  │ │ ├── js-stringify@1.0.2 
  │ │ ├── pug-attrs@2.0.2 
  │ │ ├── pug-error@1.3.2 
  │ │ ├── void-elements@2.0.1 
  │ │ └─┬ with@5.1.1 
  │ │   └─┬ acorn-globals@3.1.0 
  │ │     └── acorn@4.0.13 
  │ ├─┬ pug-filters@2.1.5 
  │ │ ├─┬ clean-css@3.4.28 
  │ │ │ ├── commander@2.8.1 
  │ │ │ └─┬ source-map@0.4.4 
  │ │ │   └── amdefine@1.0.1 
  │ │ ├─┬ jstransformer@1.0.0 
  │ │ │ ├── is-promise@2.1.0 
  │ │ │ └─┬ promise@7.3.1 
  │ │ │   └── asap@2.0.6 
  │ │ ├── pug-walk@1.1.5 
  │ │ ├─┬ resolve@1.4.0 
  │ │ │ └── path-parse@1.0.5 
  │ │ └─┬ uglify-js@2.8.29 
  │ │   ├── uglify-to-browserify@1.0.2 
  │ │   └─┬ yargs@3.10.0 
  │ │     ├── camelcase@1.2.1 
  │ │     ├─┬ cliui@2.1.0 
  │ │     │ ├─┬ center-align@0.1.3 
  │ │     │ │ ├─┬ align-text@0.1.4 
  │ │     │ │ │ └── repeat-string@1.6.1 
  │ │     │ │ └── lazy-cache@1.0.4 
  │ │     │ ├── right-align@0.1.3 
  │ │     │ └── wordwrap@0.0.2 
  │ │     └── window-size@0.1.0 
  │ ├─┬ pug-lexer@3.1.0 
  │ │ ├─┬ character-parser@2.2.0 
  │ │ │ └── is-regex@1.0.4 
  │ │ └─┬ is-expression@3.0.0 
  │ │   └── acorn@4.0.13 
  │ ├── pug-linker@3.0.3 
  │ ├─┬ pug-load@2.0.9 
  │ │ └── object-assign@4.1.1 
  │ ├─┬ pug-parser@3.0.1 
  │ │ └── token-stream@0.0.1 
  │ ├── pug-runtime@2.0.3 
  │ └── pug-strip-comments@1.0.2 
  ├─┬ s3@4.4.0 
  │ ├─┬ aws-sdk@2.0.31 
  │ │ ├─┬ xml2js@0.2.6 
  │ │ │ └── sax@0.4.2 
  │ │ └── xmlbuilder@0.4.2 
  │ ├── fd-slicer@1.0.1 
  │ ├── findit2@2.2.3 
  │ ├─┬ graceful-fs@3.0.11 
  │ │ └── natives@1.1.0 
  │ ├── mime@1.2.11 
  │ ├── pend@1.2.0 
  │ ├── rimraf@2.2.8 
  │ └── streamsink@1.2.0 
  ├─┬ simplecrawler@1.1.0 
  │ ├─┬ async@2.5.0 
  │ │ └── lodash@4.17.4 
  │ ├── iconv-lite@0.4.19 
  │ ├── robots-parser@1.0.1 
  │ └── urijs@1.18.12 
  ├─┬ tape@4.6.3 
  │ ├── deep-equal@1.0.1 
  │ ├── defined@1.0.0 
  │ ├─┬ for-each@0.3.2 
  │ │ └── is-function@1.0.1 
  │ ├── function-bind@1.1.1 
  │ ├─┬ glob@7.1.2 
  │ │ ├── fs.realpath@1.0.0 
  │ │ ├── inflight@1.0.6 
  │ │ ├─┬ minimatch@3.0.4 
  │ │ │ └─┬ brace-expansion@1.1.8 
  │ │ │   ├── balanced-match@1.0.0 
  │ │ │   └── concat-map@0.0.1 
  │ │ ├── once@1.4.0 
  │ │ └── path-is-absolute@1.0.1 
  │ ├── has@1.0.1 
  │ ├── inherits@2.0.3 
  │ ├── object-inspect@1.2.2 
  │ ├── resolve@1.1.7 
  │ ├── resumer@0.0.0 
  │ ├─┬ string.prototype.trim@1.1.2 
  │ │ ├─┬ define-properties@1.1.2 
  │ │ │ ├── foreach@2.0.5 
  │ │ │ └── object-keys@1.0.11 
  │ │ └─┬ es-abstract@1.8.2 
  │ │   ├─┬ es-to-primitive@1.1.1 
  │ │   │ ├── is-date-object@1.0.1 
  │ │   │ └── is-symbol@1.0.1 
  │ │   └── is-callable@1.1.3 
  │ └── through@2.3.8 
  ├── text-table@0.2.0 
  ├── uuid@3.1.0 
  ├─┬ webcoach@0.36.0 
  │ ├─┬ browsertime@1.6.0 
  │ │ ├── intel@1.2.0 
  │ │ ├── moment@2.18.1 
  │ │ └── yargs@7.1.0 
  │ ├─┬ cli-table2@0.2.0 
  │ │ ├── colors@1.1.2 
  │ │ └── lodash@3.10.1 
  │ ├─┬ filter-files@0.4.0 
  │ │ ├── async@0.9.2 
  │ │ └── is-directory@0.2.3 
  │ ├─┬ json-stable-stringify@1.0.1 
  │ │ └── jsonify@0.0.0 
  │ ├── lodash.sortby@4.7.0 
  │ ├── word-wrap@1.2.2 
  │ └─┬ yargs@7.0.2 
  │   └── camelcase@3.0.0 
  ├─┬ webpagetest@0.3.5 
  │ ├── commander@2.11.0 
  │ ├─┬ csv@1.1.1 
  │ │ ├── csv-generate@1.0.0 
  │ │ ├── csv-parse@1.2.3 
  │ │ ├── csv-stringify@1.0.4 
  │ │ └── stream-transform@0.1.2 
  │ ├── entities@1.1.1 
  │ ├─┬ mocha@3.5.3 
  │ │ ├── browser-stdout@1.3.0 
  │ │ ├─┬ commander@2.9.0 
  │ │ │ └── graceful-readlink@1.0.1 
  │ │ ├── debug@2.6.8 
  │ │ ├── diff@3.2.0 
  │ │ ├── glob@7.1.1 
  │ │ ├── growl@1.9.2 
  │ │ ├── he@1.1.1 
  │ │ ├── json3@3.3.2 
  │ │ ├─┬ lodash.create@3.1.1 
  │ │ │ ├─┬ lodash._baseassign@3.2.0 
  │ │ │ │ ├── lodash._basecopy@3.0.1 
  │ │ │ │ └─┬ lodash.keys@3.1.2 
  │ │ │ │   ├── lodash._getnative@3.9.1 
  │ │ │ │   ├── lodash.isarguments@3.1.0 
  │ │ │ │   └── lodash.isarray@3.0.4 
  │ │ │ ├── lodash._basecreate@3.0.3 
  │ │ │ └── lodash._isiterateecall@3.0.9 
  │ │ └─┬ supports-color@3.1.2 
  │ │   └── has-flag@1.0.0 
  │ └─┬ xml2js@0.4.19 
  │   ├── sax@1.2.4 
  │   └── xmlbuilder@9.0.4 
  └─┬ yargs@6.6.0 
    ├── camelcase@3.0.0 
    ├─┬ cliui@3.2.0 
    │ └── wrap-ansi@2.1.0 
    ├── decamelize@1.2.0 
    ├── get-caller-file@1.0.2 
    ├─┬ os-locale@1.4.0 
    │ └─┬ lcid@1.0.0 
    │   └── invert-kv@1.0.0 
    ├─┬ read-pkg-up@1.0.1 
    │ ├─┬ find-up@1.1.2 
    │ │ ├── path-exists@2.1.0 
    │ │ └─┬ pinkie-promise@2.0.1 
    │ │   └── pinkie@2.0.4 
    │ └─┬ read-pkg@1.1.0 
    │   ├─┬ load-json-file@1.1.0 
    │   │ └── pify@2.3.0 
    │   ├─┬ normalize-package-data@2.4.0 
    │   │ ├── hosted-git-info@2.5.0 
    │   │ ├─┬ is-builtin-module@1.0.0 
    │   │ │ └── builtin-modules@1.1.1 
    │   │ ├── semver@5.4.1 
    │   │ └─┬ validate-npm-package-license@3.0.1 
    │   │   ├─┬ spdx-correct@1.0.2 
    │   │   │ └── spdx-license-ids@1.2.2 
    │   │   └── spdx-expression-parse@1.0.4 
    │   └── path-type@1.1.0 
    ├── require-directory@2.1.1 
    ├── require-main-filename@1.0.1 
    ├── set-blocking@2.0.0 
    ├─┬ string-width@1.0.2 
    │ ├── code-point-at@1.1.0 
    │ └─┬ is-fullwidth-code-point@1.0.0 
    │   └── number-is-nan@1.0.1 
    ├── which-module@1.0.0 
    ├── y18n@3.2.1 
    └── yargs-parser@4.2.1 

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/sitespeed.io/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000

*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0438 took 4.9535s
*-- Errors occured in test {"_bound":0}
* Error: TypeError: Cannot read property 'length' of undefined
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **