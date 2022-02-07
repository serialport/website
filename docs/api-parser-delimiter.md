---
id: api-parser-delimiter
title: 📦 parser-delimiter
---
| [npm](https://www.npmjs.com/package/@serialport/parser-delimiter) | [github](https://github.com/serialport/node-serialport/tree/master/packages/parser-delimiter) |

```ts
import { DelimiterParser } from '@serialport/parser-delimiter'
// or
const { DelimiterParser } = require('@serialport/parser-delimiter')
```

A transform stream that emits data each time a byte sequence is received. To use the `Delimiter` parser, provide a delimiter as a string, buffer, or array of bytes. Runs in O(n) time.

### Constructor Arguments

```ts
interface DelimiterOptions extends TransformOptions {
  /** The delimiter on which to split incoming data. */
  delimiter: string | Buffer | number[]
  /** Should the delimiter be included at the end of data. Defaults to `false` */
  includeDelimiter?: boolean
}
```

### Example

```ts
const { SerialPort } = require('serialport')
const { DelimiterParser } = require('@serialport/parser-delimiter')
const port = new SerialPort({ path: '/dev/ROBOT', baudRate: 14400 })

const parser = port.pipe(new DelimiterParser({ delimiter: '\n' }))
parser.on('data', console.log) // emits data after every '\n'
```
