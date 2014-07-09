var child_process = require('child_process')
  , fs = require('fs')
  , os = require('os');

/**
 * based on http://strongloop.com/strongblog/whats-new-in-node-js-v0-12-execsync-a-synchronous-api-for-child-processes/
 */

exports.getInterfaceInfo = (function(interfaceName) {
  'use strict';

  var execCommand = '';
  switch(os.platform()) {
    case 'win32':
    case 'win64':
      execCommand = 'getmac /fo csv /nh /v | find "' + interfaceName + '"' + ' 2>&1 1>output & echo done! > done';
      break;
    case 'linux':
    case 'darwin':
    default:
      execCommand = 'ifconfig ' + interfaceName + ' 2>&1 1>output ; ln -s output done';
      break;
  }

  child_process.exec(execCommand);

  while (!fs.existsSync('done')) {
  }

  var output = fs.readFileSync('output');

  fs.unlinkSync('output');
  fs.unlinkSync('done');

  return output;
});