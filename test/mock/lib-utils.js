var config = require('config')
  , os = require('os');

module.exports = (function() {
  return {
    getInterfaceInfo: function(interfaceName) {
      return require('./' + os.platform() + '.js')(config.macAddress).commandStdout[interfaceName];
    }
  }
}());
