var _   = require('underscore')
  , os  = require('os')
  , sh  = require('execSync');

module.exports = (function() {
  'use strict';

  var command     = undefined
    , interfaces  = os.networkInterfaces()
    , regex       = /(([0-9a-f]{1,2}[\.:-]){5}([0-9a-f]{1,2}))/i;

  switch(os.platform()) {
    case 'linux':
    case 'darwin':
      command = 'ifconfig';
      break;
    case 'win32':
    case 'win64':
      command = 'ipconfig';
      break;
    default:
      command = 'ipconfig';
      break;
  }

  _.each(Object.keys(interfaces), function(interfaceName) {
    var ifconfig = sh.exec(command + ' ' + interfaceName)
      , macAddress = '00:00:00:00:00:00'
      , matches = regex.exec(ifconfig.stdout);
    // ..
    if (matches && matches.length > 0) {
      macAddress = matches[0];
    }
    // ..
    for(var address in interfaces[interfaceName]) {
      interfaces[interfaceName][address]['mac'] = macAddress;
    }
  });

  return interfaces;
});
