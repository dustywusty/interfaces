var os = require('os');

module.exports = (function() {
  return {
    getInterfaceInfo: function(interfaceName) {
      return require('./' + os.platform() + '.js').commandStdout[interfaceName];
    }
  }
}());
