---
id: api-parser-byte-length
title: 📦 parser-byte-length
---
| [npm](https://www.npmjs.com/package/@serialport/parser-byte-length) | [github](https://github.com/serialport/node-serialport/tree/master/packages/parser-byte-length) |

```ts
import { ByteLengthParser } from '@serialport/parser-byte-length'
// or
const { ByteLengthParser } = require('@serialport/parser-byte-length')
```

Emit data every number of bytes.

A transform stream that emits data as a buffer after a specific number of bytes are received. Runs in O(n) time.

### Constructor Arguments

```ts
interface ByteLengthOptions extends TransformOptions {
  /** the number of bytes on each data event */
  length: number
}
```

### Example

```ts
const { SerialPort } = require('serialport')
const { ByteLengthParser } = require('@serialport/parser-byte-length')
const port = new SerialPort({ path: '/dev/ROBOT', baudRate: 14400 })

const parser = port.pipe(new ByteLengthParser({ length: 8 }))
parser.on('data', console.log) // will have 8 bytes per data event
```
