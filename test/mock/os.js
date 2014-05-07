/**
 *
 * @param os
 * @returns {{networkInterfaces: networkInterfaces, platform: platform}}
 */

module.exports = function(os) {
  return {
    networkInterfaces : function() {
      return require('./' + os + '.js').interfaces;
    },
    platform : function(){
      return os;
    }
  };
};
