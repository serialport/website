---
id: api-parser-regex
title: 📦 parser-regex
---
| [npm](https://www.npmjs.com/package/@serialport/parser-regex) | [github](https://github.com/serialport/node-serialport/tree/master/packages/parser-regex) |

```ts
import { RegexParser } from '@serialport/parser-regex'
//or
const { RegexParser } = require('@serialport/parser-regex')
```

A transform stream that uses a regular expression to split the incoming text upon.

To use the `Regex` parser provide a regular expression to split the incoming text upon. Data is emitted as a string controllable by the `encoding` option (defaults to `utf8`).

### Constructor Arguments

```ts
interface RegexParserOptions extends TransformOptions {
  /** The regular expression to use to split incoming text */
  regex: RegExp | string | Buffer
  /** Defaults to utf8 */
  encoding?: BufferEncoding
}
```

### Example

```ts
const { SerialPort } = require('serialport')
const { RegexParser } = require('@serialport/parser-regex')
const port = new SerialPort({ path: '/dev/ROBOT', baudRate: 14400 })

const parser = port.pipe(new RegexParser({ regex: /[\r\n]+/ }))
parser.on('data', console.log)
```
