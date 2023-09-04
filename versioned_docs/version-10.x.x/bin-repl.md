---
id: bin-repl
title: 📦 repl
---
| [npm](https://www.npmjs.com/package/@serialport/repl) | [github](https://github.com/serialport/node-serialport/tree/master/packages/repl) |

```bash
$ npx @serialport/repl <port>
# or
$ npm install -g @serialport/repl
$ serialport-repl <port>
```

The package `@serialport/repl` will install the `serialport-repl` cli tool which provides a nodejs repl for working with serialport. This is valuable when debugging.

You can make use of the `serialport-repl` command with;

```bash
$ serialport-repl # to auto detect an arduino
$ serialport-repl /dev/tty.usbmodem1421 9600 # to connect to a specific port and baud rate
$ DEBUG=serialport* serialport-repl  # to enable
```

It will load a serialport object with debugging turned on.

```bash
$ DEBUG=serialport* serialport-repl
DEBUG=serialport* # enable debugging with DEBUG=serialport*
port = SerialPort({ path: "/dev/tty.usbmodem2101", baudRate: 9600, autoOpen: false })
globals { SerialPort, SerialPortMock, path, port }
> SerialPort.list()
  serialport/bindings-cpp loading DarwinBinding +0ms
  serialport/bindings-cpp list +0ms
[
  {
    path: '/dev/tty.usbmodem2101',
    manufacturer: 'Arduino LLC',
    serialNumber: undefined,
    pnpId: undefined,
    locationId: '02100000',
    vendorId: '2341',
    productId: '8036',
    friendlyName: undefined
  }
]
> port.open()
  serialport/stream opening path: /dev/tty.usbmodem2101 +0ms
  serialport/bindings-cpp open +53s
  serialport/bindings-cpp/poller Creating poller +0ms
  serialport/stream opened path: /dev/tty.usbmodem2101 +27ms
undefined
> port.write('Calling all Autobots!')
  serialport/stream _write 21 bytes of data +20s
  serialport/bindings-cpp write 21 bytes +20s
  serialport/bindings-cpp/unixWrite Starting write 21 bytes offset 0 bytesToWrite 21 +0ms
true
  serialport/bindings-cpp/unixWrite write returned: wrote 21 bytes +0ms
  serialport/bindings-cpp/unixWrite Finished writing 21 bytes +0ms
  serialport/stream binding.write write finished +2ms
> port.read()
  serialport/stream _read reading { start: 0, toRead: 65536 } +46s
  serialport/bindings-cpp read +46s
  serialport/bindings-cpp/unixRead Starting read +0ms
null
```
