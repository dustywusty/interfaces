var _   = require('underscore')
  , sh  = require('execSync')
  , os  = require('os');

module.exports = (function() {
  'use strict';

  var interfaces  = os.networkInterfaces()
    , regex       = /(([0-9a-f]{1,2}[\.:-]){5}([0-9a-f]{1,2}))/i;

  _.each(Object.keys(interfaces), function(interfaceName) {
    var ifconfig = sh.exec('ifconfig ' + interfaceName)
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
