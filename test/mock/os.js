/**
 *
 * @returns {{networkInterfaces: networkInterfaces, platform: platform}}
 */

module.exports = (function() {
  var config = require('config')
    , os = config.platform
    , macAddress = config.macAddress;
  return {
    networkInterfaces : function() {
      return require('./' + os + '.js')(macAddress).interfaces;
    },
    platform : function(){
      return os;
    }
  };
}());
