---
id: api-parser-regex
title: 📦 parser-regex
---
| [npm](https://www.npmjs.com/package/@serialport/parser-regex) | [github](https://github.com/serialport/node-serialport/tree/master/packages/parser-regex) |

```ts
new Regex(options)
```

A transform stream that uses a regular expression to split the incoming text upon.

To use the `Regex` parser provide a regular expression to split the incoming text upon. Data is emitted as a string controllable by the `encoding` option (defaults to `utf8`).

Arguments

- `options.regex: RegExp` The regular expression to use to split incoming text
- `options.encoding?: string` Text encoding for the stream

```ts
const { SerialPort } = require('serialport')
const Regex = require('@serialport/parser-regex')
const port = new SerialPort({ path: '/dev/ROBOT', baudRate: 14400 })

const parser = port.pipe(new Regex({ regex: /[\r\n]+/ }))
parser.on('data', console.log)
```
