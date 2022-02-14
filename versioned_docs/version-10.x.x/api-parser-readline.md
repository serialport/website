---
id: api-parser-readline
title: 📦 parser-readline
---
| [npm](https://www.npmjs.com/package/@serialport/parser-readline) | [github](https://github.com/serialport/node-serialport/tree/master/packages/parser-readline) |

```ts
import { ReadlineParser } from '@serialport/parser-readline'
//or
const { ReadlineParser } = require('@serialport/parser-readline')
```

A transform stream that emits data after a newline delimiter is received. To use the `Readline` parser, provide a delimiter (defaults to `\n`). Data is emitted as string controllable by the `encoding` option (defaults to `utf8`).

### Constructor Arguments

```ts
interface ReadlineOptions extends TransformOptions {
  /** delimiter to use defaults to \n */
  delimiter?: string | Buffer | number[]
  /** include the delimiter at the end of the packet defaults to false */
  includeDelimiter?: boolean
  /** Defaults to utf8 */
  encoding?: BufferEncoding
}
```

## Example

```ts
const { SerialPort } = require('serialport')
const { ReadlineParser } = require('@serialport/parser-readline')
const port = new SerialPort({ path: '/dev/ROBOT', baudRate: 14400 })

const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }))
parser.on('data', console.log)
```
