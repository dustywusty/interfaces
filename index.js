module.exports = (function() {
  'use strict';

  var _     = require('underscore')
    , os    = require('os')
    // ..
    , interfaces  = os.networkInterfaces()
    , regex       = /(([0-9a-f]{1,2}[\.:-]){5}([0-9a-f]{1,2}))/i
    , utils = require('./lib/utils');

  _.each(Object.keys(interfaces), function(interfaceName) {
    var ifconfig = utils.getInterfaceInfo(interfaceName)
      , macAddress  = '00:00:00:00:00:00'
      , matches = regex.exec(ifconfig);

    if (matches && matches.length > 0) {
      macAddress = matches[0];
    }

    for(var address in interfaces[interfaceName]) {
      interfaces[interfaceName][address]['mac'] = macAddress;
    }
  });
  return interfaces;
});
