module.exports = (function(macAddress) {
  /**
   * Mac OS X 10.9.2 Build: 13C64
   */
  return {
    //mock command output
    commandStdout: {
      en0 : //ifconfig en0
        'en0: flags=8863<UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST> mtu 1500'
          + 'ether ' + macAddress
          + 'inet6 fe80::baf6:b1ff:fe1c:2e07%en0 prefixlen 64 scopeid 0x4'
          + 'inet 10.56.1.252 netmask 0xffffff00 broadcast 10.56.1.255'
          + 'nd6 options=1<PERFORMNUD>'
          + '  media: autoselect'
          + 'status: active'
      , lo0 : //ifconfig lo0
        'lo0: flags=8049<UP,LOOPBACK,RUNNING,MULTICAST> mtu 16384'
          + 'options=3<RXCSUM,TXCSUM>'
          + '  inet6 ::1 prefixlen 128'
          + 'inet 127.0.0.1 netmask 0xff000000'
          + 'inet6 fe80::1%lo0 prefixlen 64 scopeid 0x1'
          + 'nd6 options=1<PERFORMNUD>'
    },
    //mock os.networkInterfaces() output
    interfaces: {
      lo0: [
        {
          address: '::1',
          family: 'IPv6',
          internal: true
        }
      , {
          address: '127.0.0.1',
          family: 'IPv4',
          internal: true
        }
      , {
          address: 'fe80::1',
          family: 'IPv6',
          internal: true
        }
      ]
    , en0: [
        {
          address: 'fe80::baf6:b1ff:fe1c:2e07',
          family: 'IPv6',
          internal: false
        }
      , {
          address: '10.56.1.252',
          family: 'IPv4',
          internal: false
        }
      ]
    }
  }
});