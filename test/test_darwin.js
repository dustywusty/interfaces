var _           = require('underscore')
  , assert      = require('assert')
  , interfaces  = require('..')
  , mocha       = require('mocha')
  , mockery     = require('mockery');

mockery.enable({
  useCleanCache: true,
  warnOnReplace: false,
  warnOnUnregistered: false
});

/**
 * TEST DARWIN INTERFACE en0
 */

describe('interface() - darwin', function() {

  var config = {
    interface: 'en0',
    platform: 'darwin',
    macAddress:'b8:f6:b1:1c:2e:a7'
  };

  mockery.registerMock('config', config);
  mockery.registerMock('os', require('./mock/os.js'));
  mockery.registerMock('./lib/utils', require('./mock/lib-utils.js'));

  _.each(interfaces()[config.interface], function(address) {
    it('- mac address should equal ' + config.macAddress, function() {
      assert.equal(config.macAddress, address.mac);
    });
  });

  mockery.deregisterMock('os');
  mockery.deregisterMock('./lib/utils');
});

/**
 * TEST DARWIN INTERFACE lo0
 */

describe('interface() - darwin', function() {

  var config = {
    interface: 'lo0',
    platform: 'darwin',
    macAddress:'00:00:00:00:00:00'
  };

  mockery.registerMock('config', config);
  mockery.registerMock('os', require('./mock/os.js'));
  mockery.registerMock('./lib/utils', require('./mock/lib-utils.js'));

  _.each(interfaces()[config.interface], function(address) {
    it('- mac address should equal ' + config.macAddress, function() {
      assert.equal(config.macAddress, address.mac);
    });
  });

  mockery.deregisterMock('os');
  mockery.deregisterMock('./lib/utils');
});
