---
id: api-parser-ready
title: 📦 parser-ready
---
| [npm](https://www.npmjs.com/package/@serialport/parser-ready) | [github](https://github.com/serialport/node-serialport/tree/master/packages/parser-ready) |

```ts
import { ReadyParser } from '@serialport/parser-ready'
//or
const { ReadyParser } = require('@serialport/parser-ready')
```

A transform stream that waits for a sequence of "ready" bytes before emitting a ready event and emitting data events

To use the `Ready` parser provide a byte start sequence. After the bytes have been received, a ready event is fired and data events are passed through.

## Constructor Argument

```ts
interface ReadyParserOptions extends TransformOptions {
  /** delimiter to use to detect the input is ready */
  delimiter: string | Buffer | number[]
}
```

## Example

```ts
const { SerialPort } = require('serialport')
const { ReadyParser } = require('@serialport/parser-ready')
const port = new SerialPort({ path: '/dev/ROBOT', baudRate: 14400 })

const parser = port.pipe(new ReadyParser({ delimiter: 'READY' }))
parser.on('ready', () => console.log('the ready byte sequence has been received'))
parser.on('data', console.log) // all data after READY is received
```
