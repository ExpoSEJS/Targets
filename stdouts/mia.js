
> kerberos@0.0.23 install /root/Targets/mia.js/node_modules/kerberos
> (node-gyp rebuild) || (exit 0)

make: Entering directory '/root/Targets/mia.js/node_modules/kerberos/build'
  CXX(target) Release/obj.target/kerberos/lib/kerberos.o
kerberos.target.mk:98: recipe for target 'Release/obj.target/kerberos/lib/kerberos.o' failed
make: Leaving directory '/root/Targets/mia.js/node_modules/kerberos/build'

> fibers@1.0.7 install /root/Targets/mia.js/node_modules/fibers
> node build.js || nodejs build.js

make: Entering directory '/root/Targets/mia.js/node_modules/fibers/build'
  CXX(target) Release/obj.target/fibers/src/fibers.o
fibers.target.mk:101: recipe for target 'Release/obj.target/fibers/src/fibers.o' failed
make: Leaving directory '/root/Targets/mia.js/node_modules/fibers/build'
/root/Targets/mia.js
├─┬ apn@1.7.3 
│ ├── node-forge@0.6.49 
│ └── q@1.4.1 
├── async@0.2.9 
├─┬ compression@1.5.2 
│ ├─┬ accepts@1.2.13 
│ │ ├── mime-types@2.1.17 
│ │ └── negotiator@0.5.3 
│ ├── bytes@2.1.0 
│ ├─┬ compressible@2.0.11 
│ │ └── mime-db@1.30.0 
│ ├─┬ debug@2.2.0 
│ │ └── ms@0.7.1 
│ ├── on-headers@1.0.1 
│ └── vary@1.0.1 
├── cron@1.0.3 
├── deep-diff@0.1.4 
├─┬ emailjs@0.3.11 
│ ├── bufferjs@1.1.0 
│ ├─┬ mimelib@0.2.14 
│ │ ├── addressparser@0.2.1 
│ │ └─┬ encoding@0.1.12 
│ │   └── iconv-lite@0.4.19 
│ └── moment@1.7.0 
├─┬ express@4.4.2 
│ ├─┬ accepts@1.0.2 
│ │ └── negotiator@0.4.5 
│ ├── buffer-crc32@0.2.1 
│ ├── cookie@0.1.2 
│ ├── cookie-signature@1.0.3 
│ ├─┬ debug@1.0.1 
│ │ └── ms@0.6.2 
│ ├── escape-html@1.0.1 
│ ├── fresh@0.2.2 
│ ├── merge-descriptors@0.0.2 
│ ├── parseurl@1.0.1 
│ ├── path-to-regexp@0.1.2 
│ ├─┬ proxy-addr@1.0.1 
│ │ └── ipaddr.js@0.1.2 
│ ├── qs@0.6.6 
│ ├── range-parser@1.0.0 
│ ├─┬ send@0.4.2 
│ │ ├─┬ debug@1.0.1 
│ │ │ └── ms@0.6.2 
│ │ └── finished@1.2.1 
│ ├── serve-static@1.2.2 
│ ├─┬ type-is@1.2.1 
│ │ └── mime-types@1.0.0 
│ ├── utils-merge@1.0.0 
│ └── vary@0.1.0 
├── fbgraphapi@0.5.0 
├── ip@1.1.0 
├─┬ jasmine-node@1.11.0 
│ ├── coffee-script@1.12.7 
│ ├─┬ gaze@0.3.4 
│ │ └─┬ fileset@0.1.8 
│ │   └─┬ glob@3.2.11 
│ │     └── minimatch@0.3.0 
│ ├─┬ jasmine-growl-reporter@0.0.3 
│ │ └── growl@1.7.0 
│ ├─┬ jasmine-reporters@2.2.1 
│ │ ├─┬ mkdirp@0.5.1 
│ │ │ └── minimist@0.0.8 
│ │ └── xmldom@0.1.27 
│ ├── mkdirp@0.3.5 
│ ├── requirejs@2.3.5 
│ ├── underscore@1.5.2 
│ └── walkdir@0.0.12 
├── lodash@2.4.0 
├─┬ memcached@2.2.0 
│ ├─┬ hashring@3.2.0 
│ │ ├── connection-parse@0.0.7 
│ │ └── simple-lru-cache@0.0.2 
│ └─┬ jackpot@0.0.6 
│   └── retry@0.6.0 
├── mia-js-core@0.8.2 
├─┬ mongodb@2.0.46 
│ ├── es6-promise@2.1.1 
│ ├─┬ mongodb-core@1.2.19 
│ │ ├── bson@0.4.23 
│ │ └─┬ kerberos@0.0.23 
│ │   └── nan@2.5.1 
│ └── readable-stream@1.0.31 
├─┬ morgan@1.1.1 
│ └── bytes@1.0.0 
├─┬ node-jsx@0.13.3 
│ └─┬ jstransform@11.0.3 
│   ├── base62@1.2.0 
│   ├─┬ commoner@0.10.8 
│   │ ├─┬ detective@4.5.0 
│   │ │ ├── acorn@4.0.13 
│   │ │ └── defined@1.0.0 
│   │ ├─┬ glob@5.0.15 
│   │ │ └── minimatch@3.0.4 
│   │ ├── graceful-fs@4.1.11 
│   │ ├── mkdirp@0.5.1 
│   │ ├── private@0.1.7 
│   │ └─┬ recast@0.11.23 
│   │   ├── ast-types@0.9.6 
│   │   ├── esprima@3.1.3 
│   │   └── source-map@0.5.7 
│   ├── esprima-fb@15001.1.0-dev-harmony-fb 
│   └─┬ source-map@0.4.4 
│     └── amdefine@1.0.1 
├─┬ nodemon@1.0.17 
│ ├─┬ minimatch@0.2.14 
│ │ ├── lru-cache@2.7.3 
│ │ └── sigmund@1.0.1 
│ └─┬ update-notifier@0.1.10 
│   ├─┬ chalk@0.4.0 
│   │ ├── has-color@0.1.7 
│   │ └── strip-ansi@0.1.1 
│   ├─┬ configstore@0.3.2 
│   │ ├─┬ graceful-fs@3.0.11 
│   │ │ └── natives@1.1.0 
│   │ ├─┬ js-yaml@3.10.0 
│   │ │ └── esprima@4.0.0 
│   │ ├── mkdirp@0.5.1 
│   │ ├─┬ osenv@0.1.4 
│   │ │ ├── os-homedir@1.0.2 
│   │ │ └── os-tmpdir@1.0.2 
│   │ ├── user-home@1.1.1 
│   │ ├── uuid@2.0.3 
│   │ └── xdg-basedir@1.0.1 
│   ├─┬ request@2.83.0 
│   │ ├── aws-sign2@0.7.0 
│   │ ├── aws4@1.6.0 
│   │ ├── caseless@0.12.0 
│   │ ├─┬ combined-stream@1.0.5 
│   │ │ └── delayed-stream@1.0.0 
│   │ ├── extend@3.0.1 
│   │ ├── forever-agent@0.6.1 
│   │ ├─┬ form-data@2.3.1 
│   │ │ └── asynckit@0.4.0 
│   │ ├─┬ har-validator@5.0.3 
│   │ │ ├─┬ ajv@5.2.3 
│   │ │ │ ├── co@4.6.0 
│   │ │ │ ├── fast-deep-equal@1.0.0 
│   │ │ │ ├── json-schema-traverse@0.3.1 
│   │ │ │ └─┬ json-stable-stringify@1.0.1 
│   │ │ │   └── jsonify@0.0.0 
│   │ │ └── har-schema@2.0.0 
│   │ ├─┬ hawk@6.0.2 
│   │ │ ├── boom@4.3.1 
│   │ │ ├─┬ cryptiles@3.1.2 
│   │ │ │ └── boom@5.2.0 
│   │ │ ├── hoek@4.2.0 
│   │ │ └── sntp@2.0.2 
│   │ ├─┬ http-signature@1.2.0 
│   │ │ ├── assert-plus@1.0.0 
│   │ │ ├─┬ jsprim@1.4.1 
│   │ │ │ ├── extsprintf@1.3.0 
│   │ │ │ ├── json-schema@0.2.3 
│   │ │ │ └── verror@1.10.0 
│   │ │ └─┬ sshpk@1.13.1 
│   │ │   ├── asn1@0.2.3 
│   │ │   ├── bcrypt-pbkdf@1.0.1 
│   │ │   ├── dashdash@1.14.1 
│   │ │   ├── ecc-jsbn@0.1.1 
│   │ │   ├── getpass@0.1.7 
│   │ │   ├── jsbn@0.1.1 
│   │ │   └── tweetnacl@0.14.5 
│   │ ├── is-typedarray@1.0.0 
│   │ ├── isstream@0.1.2 
│   │ ├── json-stringify-safe@5.0.1 
│   │ ├── oauth-sign@0.8.2 
│   │ ├── performance-now@2.1.0 
│   │ ├── qs@6.5.1 
│   │ ├── safe-buffer@5.1.1 
│   │ ├── stringstream@0.0.5 
│   │ ├─┬ tough-cookie@2.3.3 
│   │ │ └── punycode@1.4.1 
│   │ ├── tunnel-agent@0.6.0 
│   │ └── uuid@3.1.0 
│   └── semver@2.3.2 
├── object-hash@0.5.0 
├── react@0.13.3 
├─┬ react-async@2.1.0 
│ └── ascii-json@0.2.0 
├─┬ react-router@0.13.3 
│ ├── object-assign@2.1.1 
│ └── qs@2.4.1 
├─┬ react-router-component@0.26.0 
│ ├─┬ envify@3.4.1 
│ │ └── through@2.3.8 
│ ├─┬ object.assign@3.0.1 
│ │ ├─┬ define-properties@1.1.2 
│ │ │ └── foreach@2.0.5 
│ │ └── object-keys@1.0.11 
│ ├── qs@4.0.0 
│ ├── url-pattern@0.9.0 
│ └─┬ urllite@0.5.0 
│   └── xtend@4.0.1 
├─┬ restler@3.2.2 
│ ├── iconv-lite@0.2.11 
│ ├── qs@0.6.6 
│ ├─┬ xml2js@0.4.0 
│ │ └── sax@0.5.8 
│ └── yaml@0.2.3 
├─┬ superagent@0.18.2 
│ ├── component-emitter@1.1.2 
│ ├── cookiejar@2.0.1 
│ ├─┬ debug@1.0.5 
│ │ └── ms@2.0.0 
│ ├── extend@1.2.1 
│ ├─┬ form-data@0.1.3 
│ │ ├── async@0.9.2 
│ │ └─┬ combined-stream@0.0.7 
│ │   └── delayed-stream@0.0.5 
│ ├── formidable@1.0.14 
│ ├── methods@1.0.1 
│ ├── mime@1.2.11 
│ ├── qs@0.6.6 
│ ├─┬ readable-stream@1.0.27-1 
│ │ ├── core-util-is@1.0.2 
│ │ ├── inherits@2.0.3 
│ │ ├── isarray@0.0.1 
│ │ └── string_decoder@0.10.31 
│ └── reduce-component@1.0.1 
├─┬ swagger-tools@0.8.1 
│ ├── async@0.9.2 
│ ├─┬ body-parser@1.12.3 
│ │ ├── content-type@1.0.4 
│ │ ├── depd@1.0.1 
│ │ ├── iconv-lite@0.4.8 
│ │ ├─┬ on-finished@2.2.1 
│ │ │ └── ee-first@1.1.0 
│ │ ├── raw-body@1.3.4 
│ │ └─┬ type-is@1.6.15 
│ │   └── media-typer@0.3.0 
│ ├── commander@2.11.0 
│ ├─┬ json-refs@0.1.10 
│ │ ├── async@0.9.2 
│ │ ├── lodash-compat@3.10.2 
│ │ └─┬ superagent@0.21.0 
│ │   ├── extend@1.2.1 
│ │   ├─┬ form-data@0.1.3 
│ │   │ └─┬ combined-stream@0.0.7 
│ │   │   └── delayed-stream@0.0.5 
│ │   ├── qs@1.2.0 
│ │   └── readable-stream@1.0.27-1 
│ ├── lodash@3.10.1 
│ ├── parseurl@1.3.2 
│ ├── path-to-regexp@1.7.0 
│ ├─┬ serve-static@1.13.1 
│ │ ├── encodeurl@1.0.1 
│ │ ├── escape-html@1.0.3 
│ │ └─┬ send@0.16.1 
│ │   ├── depd@1.1.1 
│ │   ├── destroy@1.0.4 
│ │   ├── etag@1.8.1 
│ │   ├── fresh@0.5.2 
│ │   ├─┬ http-errors@1.6.2 
│ │   │ ├── depd@1.1.1 
│ │   │ └── setprototypeof@1.0.3 
│ │   ├── mime@1.4.1 
│ │   ├── ms@2.0.0 
│ │   ├─┬ on-finished@2.3.0 
│ │   │ └── ee-first@1.1.1 
│ │   ├── range-parser@1.2.0 
│ │   └── statuses@1.3.1 
│ ├── spark-md5@0.0.5 
│ ├── string@3.3.3 
│ ├─┬ superagent@0.21.0 
│ │ ├── debug@2.6.9 
│ │ ├── extend@1.2.1 
│ │ ├─┬ form-data@0.1.3 
│ │ │ ├─┬ combined-stream@0.0.7 
│ │ │ │ └── delayed-stream@0.0.5 
│ │ │ └── mime@1.2.11 
│ │ ├── mime@1.2.11 
│ │ ├── qs@1.2.0 
│ │ └── readable-stream@1.0.27-1 
│ ├─┬ swagger-converter@0.1.0 
│ │ └─┬ lodash.clonedeep@2.4.1 
│ │   ├─┬ lodash._baseclone@2.4.1 
│ │   │ ├─┬ lodash._getarray@2.4.1 
│ │   │ │ └── lodash._arraypool@2.4.1 
│ │   │ ├─┬ lodash._releasearray@2.4.1 
│ │   │ │ └── lodash._maxpoolsize@2.4.1 
│ │   │ ├── lodash._slice@2.4.1 
│ │   │ ├─┬ lodash.assign@2.4.1 
│ │   │ │ ├── lodash._objecttypes@2.4.1 
│ │   │ │ └─┬ lodash.keys@2.4.1 
│ │   │ │   └── lodash._shimkeys@2.4.1 
│ │   │ ├── lodash.foreach@2.4.1 
│ │   │ ├── lodash.forown@2.4.1 
│ │   │ ├─┬ lodash.isarray@2.4.1 
│ │   │ │ └── lodash._isnative@2.4.1 
│ │   │ └── lodash.isobject@2.4.1 
│ │   └─┬ lodash._basecreatecallback@2.4.1 
│ │     ├─┬ lodash._setbinddata@2.4.1 
│ │     │ └── lodash.noop@2.4.1 
│ │     ├─┬ lodash.bind@2.4.1 
│ │     │ └─┬ lodash._createwrapper@2.4.1 
│ │     │   ├─┬ lodash._basebind@2.4.1 
│ │     │   │ └── lodash._basecreate@2.4.1 
│ │     │   ├── lodash._basecreatewrapper@2.4.1 
│ │     │   └── lodash.isfunction@2.4.1 
│ │     ├── lodash.identity@2.4.1 
│ │     └── lodash.support@2.4.1 
│ ├── traverse@0.6.6 
│ ├─┬ yamljs@0.2.10 
│ │ ├─┬ argparse@1.0.9 
│ │ │ └── sprintf-js@1.0.3 
│ │ └─┬ glob@7.1.2 
│ │   ├── fs.realpath@1.0.0 
│ │   ├─┬ inflight@1.0.6 
│ │   │ └── wrappy@1.0.2 
│ │   ├─┬ minimatch@3.0.4 
│ │   │ └─┬ brace-expansion@1.1.8 
│ │   │   ├── balanced-match@1.0.0 
│ │   │   └── concat-map@0.0.1 
│ │   ├── once@1.4.0 
│ │   └── path-is-absolute@1.0.1 
│ └─┬ z-schema@3.18.4 
│   ├── lodash.get@4.4.2 
│   ├── lodash.isequal@4.5.0 
│   └── validator@8.2.0 
├─┬ time@0.11.3 
│ ├── bindings@1.2.0 
│ ├─┬ debug@2.1.3 
│ │ └── ms@0.7.0 
│ └── nan@1.8.4 
├── toobusy-js@0.4.2 
├─┬ trycatch@1.5.11 
│ ├── ansi-styles@1.0.0 
│ └── hookit@0.1.3 
├── underscore.string@2.3.3 
├─┬ util@0.10.3 
│ └── inherits@2.0.1 
├── vhost@3.0.1 
└─┬ xml2js@0.4.15 
  ├── sax@1.2.4 
  └── xmlbuilder@9.0.4 
