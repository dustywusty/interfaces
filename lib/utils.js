var child_process = require('child_process')
  , fs = require('fs')
  , os = require('os');

/**
 * based on http://strongloop.com/strongblog/whats-new-in-node-js-v0-12-execsync-a-synchronous-api-for-child-processes/
 */

exports.execSync = (function (command) {
  'use strict';

  switch(os.platform()) {
    case 'win32':
    case 'win64':
      command = command + ' 2>&1 1>output & echo done! > done';
    break;
    case 'linux':
    case 'darwin':
    default:
      command = command + ' 2>&1 1>output ; echo done! > done';
    break;
   }

  child_process.exec(command);

  while (!fs.existsSync('done')) {
  }

  var output = fs.readFileSync('output');

  fs.unlinkSync('output');
  fs.unlinkSync('done');

  return output;
});
