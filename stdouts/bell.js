
> sqlite3@3.1.1 install /root/Targets/bell.js/node_modules/sqlite3
> node-pre-gyp install --fallback-to-build

make: Entering directory '/root/Targets/bell.js/node_modules/sqlite3/build'
  ACTION deps_sqlite3_gyp_action_before_build_target_unpack_sqlite_dep Release/obj/gen/sqlite-autoconf-3090100/sqlite3.c
  TOUCH Release/obj.target/deps/action_before_build.stamp
  CC(target) Release/obj.target/sqlite3/gen/sqlite-autoconf-3090100/sqlite3.o
  AR(target) Release/obj.target/deps/sqlite3.a
  COPY Release/sqlite3.a
  CXX(target) Release/obj.target/node_sqlite3/src/database.o
node_sqlite3.target.mk:112: recipe for target 'Release/obj.target/node_sqlite3/src/database.o' failed
make: Leaving directory '/root/Targets/bell.js/node_modules/sqlite3/build'
Failed to execute '/root/.nvm/versions/node/v7.5.0/bin/node /root/.nvm/versions/node/v7.5.0/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js build --fallback-to-build --module=/root/Targets/bell.js/node_modules/sqlite3/lib/binding/node-v51-linux-x64/node_sqlite3.node --module_name=node_sqlite3 --module_path=/root/Targets/bell.js/node_modules/sqlite3/lib/binding/node-v51-linux-x64' (1)