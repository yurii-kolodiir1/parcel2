'use strict';

/**
 * Kills parcel when stdin closes
 * @param bindler
 * @return nothing
 */
module.exports = function(bundler) {
  if(bundler.options.watch) {
    process.stdin.on('end', () => process.exit(0));
    process.stdin.resume();
  }
};
