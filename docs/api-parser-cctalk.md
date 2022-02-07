---
id: api-parser-cctalk
title: 📦 parser-cctalk
---

| [npm](https://www.npmjs.com/package/@serialport/parser-cctalk) | [github](https://github.com/serialport/node-serialport/tree/master/packages/parser-cctalk) |

## CCTalk Parser

```ts
import { CCTalkParser } from '@serialport/parser-cctalk'
// or
const { CCTalkParser } = require('@serialport/parser-cctalk')
```

A transform stream that emits [ccTalk](https://en.wikipedia.org/wiki/CcTalk) packets as they are received.

### Constructor Argument

```ts
maxDelayBetweenBytesMs: number = 50
```

### Example

```ts
const { SerialPort } = require('serialport')
const { CCTalkParser } = require('@serialport/parser-cctalk')
const port = new SerialPort({ path: '/dev/ROBOT', baudRate: 14400 })

const parser = port.pipe(new CCTalkParser(100))
parser.on('data', console.log) // emits a buffer with a complete CCTalk packet
```
