var child_process = require('child_process')
  , fs = require('fs')
  , os = require('os');

/**
 * based on http://strongloop.com/strongblog/whats-new-in-node-js-v0-12-execsync-a-synchronous-api-for-child-processes/
 */

exports.getInterfaceInfo = (function(interfaceName) {
  'use strict';

  var execCommand = '';
  var fn = 'output.' + Math.random().toString();
  switch(os.platform()) {
    case 'win32':
    case 'win64':
      execCommand = 'getmac /fo csv /nh /v | find "' + interfaceName + '"' + ' 2>&1 1>' + fn + ' & echo done! > done.' + fn;
      break;
    case 'linux':
    case 'darwin':
    default:
      execCommand = 'ifconfig ' + interfaceName + ' 2>&1 1>' + fn + ' ; ln -s ' + fn + ' done.' + fn;
      break;
  }

  child_process.exec(execCommand);

  while (!fs.existsSync('done.' + fn)) {
  }

  var output = fs.readFileSync(fn);

  fs.unlinkSync(fn);
  fs.unlinkSync('done.' + fn);

  return output;
});