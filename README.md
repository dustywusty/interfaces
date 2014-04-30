### Hmm?

* Produces output similar to `os.networkInterfaces()`, but with an added MAC address per interface
* `os.networkInterfaces()` is being changed in v0.12 to include this functionality [See #6686](https://github.com/joyent/node/issues/6686), but I needed it **tonight**
 

### Usage

```javascript
var interfaces = require('interfaces');

console.log(interfaces());
```
```
$ node test.js             
{ lo0: 
   [ { address: '::1',
       family: 'IPv6',
       internal: true,
       mac: '00:00:00:00:00:00' },
     { address: '127.0.0.1',
       family: 'IPv4',
       internal: true,
       mac: '00:00:00:00:00:00' },
     { address: 'fe80::1',
       family: 'IPv6',
       internal: true,
       mac: '00:00:00:00:00:00' } ],
  en0: 
   [ { address: 'fe80::baf6:b1ff:fe1c:2e07',
       family: 'IPv6',
       internal: false,
       mac: 'b8:f6:b1:1c:2e:07' },
     { address: '10.0.1.7',
       family: 'IPv4',
       internal: false,
       mac: 'b8:f6:b1:1c:2e:07' } ] }
```
