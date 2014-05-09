### Hm?

[![Build Status](https://travis-ci.org/clarkda/interfaces.svg?branch=master)](https://travis-ci.org/clarkda/interfaces)

This plugin will hold me over until v0.12 is released and stable -- and adds needed functionality for those can't or wont update

* Produces output similar to `os.networkInterfaces()`, but with an added MAC address per interface
* `os.networkInterfaces()` was changed in `master` and will be first released in v0.12 to include this functionality See [#6686](https://github.com/joyent/node/issues/6686)
* `lib/utils.js` also includes a synchronous execute that has been added `master` and will be released in v0.12 See [Changeset](https://github.com/joyent/node/compare/joyent:d58c206...joyent:e8df267)
* I've tried to keep the output and usage as close as I can to what is in `master` -- so you should /knockonwood/ just be able to switch your call when you update

### Tested On
| OS               | Node    |
| ---------------- | ------- |
| OS X 10.9.2      | 0.10.26 |
| Ubuntu 12.04 LTS | 0.10.26 |
| Win 7 Ent. Sp1   | 0.10.26 |


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
