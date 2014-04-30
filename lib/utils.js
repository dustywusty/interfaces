var child_process = require('child_process')
  , fs = require('fs');

/**
 * Credit: http://strongloop.com/strongblog/whats-new-in-node-js-v0-12-execsync-a-synchronous-api-for-child-processes/
 */

exports.execSync = (function (command) {
  'use strict';
  // Run the command in a subshell
  child_process.exec(command + ' 2>&1 1>output & echo done! > done');

  // Block the event loop until the command has executed.
  while (!fs.existsSync('done')) {
    // Do nothing
  }

  // Read the output
  var output = fs.readFileSync('output');

  // Delete temporary files.
  fs.unlinkSync('output');
  fs.unlinkSync('done');

  return output;
});
