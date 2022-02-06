---
id: api-parser-inter-byte-timeout
title: 📦 InterByteTimeout Parser
---
```ts
new InterByteTimeout(options)
```
Emits data if there is a pause between packets for the specified amount of time.

A transform stream that emits data as a buffer after not receiving any bytes for the specified amount of time.

Arguments
- `options.interval: number` the period of silence in milliseconds after which data is emitted.
- `options.maxBufferSize: number` the maximum number of bytes after which data will be emitted. Defaults to 65536.

## Example
```js
const SerialPort = require('serialport')
const InterByteTimeout = require('@serialport/parser-inter-byte-timeout')
const port = new SerialPort('/dev/tty-usbserial1')
const parser = port.pipe(new InterByteTimeout({interval: 30}))
parser.on('data', console.log) // will emit data if there is a pause between packets of at least 30ms
```
