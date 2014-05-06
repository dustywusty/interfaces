module.exports = (function() {
  return {
    //Mac OS X 10.9.2 Build: 13C64
    commandStdout: {
      eth0 : //ifconfig eth0
        'eth0      Link encap:Ethernet  HWaddr 08:00:27:12:96:98'
          + 'inet addr:10.0.2.15  Bcast:10.0.2.255  Mask:255.255.255.0'
          + 'inet6 addr: fe80::a00:27ff:fe12:9698/64 Scope:Link'
          + 'UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1'
          + 'RX packets:305 errors:0 dropped:0 overruns:0 frame:0'
          + 'TX packets:214 errors:0 dropped:0 overruns:0 carrier:0'
          + 'collisions:0 txqueuelen:1000'
          + 'RX bytes:34975 (34.9 KB)  TX bytes:28069 (28.0 KB)'
      , lo : //ifconfig lo
        'lo        Link encap:Local Loopback'
          + 'inet addr:127.0.0.1  Mask:255.0.0.0'
          + 'inet6 addr: ::1/128 Scope:Host'
          + 'UP LOOPBACK RUNNING  MTU:16436  Metric:1'
          + 'RX packets:0 errors:0 dropped:0 overruns:0 frame:0'
          + 'TX packets:0 errors:0 dropped:0 overruns:0 carrier:0'
          + 'collisions:0 txqueuelen:0'
          + 'RX bytes:0 (0.0 B)  TX bytes:0 (0.0 B)'
    },
    interfaces: {
      'Local Area Connection 2': [
        {
          address: 'fe80::a180:55b3:da45:fbc0',
          family: 'IPv6',
          internal: false
        }
      , {
          address: '169.254.251.192',
          family: 'IPv4',
          internal: false
        }
      ]
    , 'Loopback Pseudo-Interface 1': [
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
      ]
    }
  }
}());

