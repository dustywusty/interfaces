module.exports = (function() {
  /**
   * Windows 7 Enterprise, Service Pack 1
   */
  return {
    //mock command output
    commandStdout: {
      'Local Area Connection 2' : //getmac /fo csv /nh /v | find <interface>
        '"Local Area Connection 2","Intel(R) PRO/1000 MT Desktop Adapter","08-00-27-3C-31-98","\Device\Tcpip_{953A9528-4226-46A7-86D9-2ABD5E01EE09}"'
    },
    //mock os.networkInterfaces() output
    interfaces: {
      'Local Area Connection 2':[
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