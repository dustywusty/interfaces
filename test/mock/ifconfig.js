module.export = (function() {
  return {
    //Mac OS X 10.9.2 Build: 13C64
    darwin: {
      en0 : //ifconfig en0
        'en0: flags=8863<UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST> mtu 1500'
          + 'ether b8:f6:b1:1c:2e:07'
          + 'inet6 fe80::baf6:b1ff:fe1c:2e07%en0 prefixlen 64 scopeid 0x4'
          + 'inet 10.56.1.252 netmask 0xffffff00 broadcast 10.56.1.255'
          + 'nd6 options=1<PERFORMNUD>'
          + '  media: autoselect'
          + 'status: active',
      lo0 : // ifconfig lo0
        'lo0: flags=8049<UP,LOOPBACK,RUNNING,MULTICAST> mtu 16384'
          + 'options=3<RXCSUM,TXCSUM>'
          + '  inet6 ::1 prefixlen 128'
          + 'inet 127.0.0.1 netmask 0xff000000'
          + 'inet6 fe80::1%lo0 prefixlen 64 scopeid 0x1'
          + 'nd6 options=1<PERFORMNUD>'
    },
    //Ubuntu 12.04 LTS (GNU/Linux 3.2.0-23-generic-pae i686)
    linux: {
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
    //Windows 7 Enterprise, Service Pack 1
    win32: { //getmac /fo csv /nh /v | find "Local Area Connection 2"
      'Local Area Connection 2' : '"Local Area Connection 2","Intel(R) PRO/1000 MT Desktop Adapter","08-00-27-3C-31-98","\Device\Tcpip_{953A9528-4226-46A7-86D9-2ABD5E01EE09}"'
    },
    win64: this.win32
  }
}());

