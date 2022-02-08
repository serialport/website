---
id: api-parser-inter-byte-timeout
title: 📦 parser-inter-byte-timeout
---
| [npm](https://www.npmjs.com/package/@serialport/parser-inter-byte-timeout) | [github](https://github.com/serialport/node-serialport/tree/master/packages/parser-inter-byte-timeout) |

```ts
import { InterByteTimeoutParser } from '@serialport/parser-inter-byte-timeout'
//or
const { InterByteTimeoutParser } = require('@serialport/parser-inter-byte-timeout')
```

A transform stream that buffers data and emits it after not receiving any bytes for the specified amount of time or hitting a max buffer size

### Constructor Arguments

```ts
export interface InterByteTimeoutOptions extends TransformOptions {
  /** the period of silence in milliseconds after which data is emitted */
  interval: number
  /** the maximum number of bytes after which data will be emitted. Defaults to 65536 */
  maxBufferSize?: number
}
```

### Example

```ts
const { SerialPort } = require('serialport')
const { InterByteTimeoutParser } = require('@serialport/parser-inter-byte-timeout')
const port = new SerialPort({ path: '/dev/ROBOT', baudRate: 14400 })
const parser = port.pipe(new InterByteTimeoutParser({ interval: 30 }))
parser.on('data', console.log) // will emit data if there is a pause between packets of at least 30ms
```
