---
id: api-parser-readline
title: 📦 parser-readline
---
| [npm](https://www.npmjs.com/package/@serialport/parser-readline) | [github](https://github.com/serialport/node-serialport/tree/master/packages/parser-readline) |

```ts
new Readline(options?)
```

A transform stream that emits data after a newline delimiter is received. To use the `Readline` parser, provide a delimiter (defaults to `\n`). Data is emitted as string controllable by the `encoding` option (defaults to `utf8`).

Arguments

- `options.delimiter?: string` delimiter to use
- `options.encoding?: string` text encoding for the stream

## Example

```ts
const { SerialPort } = require('serialport')
const Readline = require('@serialport/parser-readline')
const port = new SerialPort({ path: '/dev/ROBOT', baudRate: 14400 })

const parser = port.pipe(new Readline({ delimiter: '\r\n' }))
parser.on('data', console.log)
```
