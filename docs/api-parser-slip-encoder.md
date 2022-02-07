---
id: api-parser-slip-encoder
title: 📦 parser-slip-encoder
---
| [npm](https://www.npmjs.com/package/@serialport/parser-slip-encoder) | [github](https://github.com/serialport/node-serialport/tree/master/packages/parser-slip-encoder) |

```ts
new SlipEncoder(options)
```

A transform stream that emits SLIP-encoded data for each incoming packet. Unlike most parsers this one is useful for processing input to the serialport instead of output.

Runs in O(n) time, adding a 0xC0 character at the end of each received packet and escaping characters, according to RFC 1055. Runs in O(n) time.

Arguments

- `options.bluetoothQuirk: boolean` Adds another 0xC0 character at the beginning if the `bluetoothQuirk` option is truthy (as per the Bluetooth Core Specification 4.0, Volume 4, Part D, Chapter 3 "SLIP Layer")

```ts
// Read lines from a text file, then SLIP-encode each and send them to a serial port
const { SerialPort } = require('serialport')
const SlipEncoder = require('@serialport/parser-slip-encoder')
const Readline = require('parser-readline')
const fileReader = require('fs').createReadStream('/tmp/some-file.txt')

const port = new SerialPort({ path: '/dev/ROBOT', baudRate: 14400 })
const lineParser = fileReader.pipe(new Readline({ delimiter: '\r\n' }))
const encoder = fileReader.pipe(new SlipEncoder({ bluetoothQuirk: false }))
encoder.pipe(port)
```
