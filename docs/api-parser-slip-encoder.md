---
id: api-parser-slip-encoder
title: 📦 parser-slip-encoder
---
| [npm](https://www.npmjs.com/package/@serialport/parser-slip-encoder) | [github](https://github.com/serialport/node-serialport/tree/master/packages/parser-slip-encoder) |

```ts
import { SlipEncoder, SlipDecoder } from '@serialport/parser-slip-encoder'
//or
const { SlipEncoder, SlipDecoder } = require('@serialport/parser-slip-encoder')
```

This package exports two classes.

## SlipEncoder

A transform stream that emits SLIP-encoded data for each incoming packet. Unlike most parsers this one is useful for processing input to the serialport instead of output.

Runs in O(n) time, adding a 0xC0 character at the end of each received packet and escaping characters, according to RFC 1055. Runs in O(n) time.

### Constructor Arguments

```ts
interface SlipEncoderOptions extends TransformOptions {
  /** Custom start byte */
  START?: number
  /** Custom start escape byte */
  ESC_START?: number
  /** custom escape byte */
  ESC?: number
  /** custom end byte */
  END?: number
  /** custom escape end byte */
  ESC_END?: number
  /** custom escape escape byte */
  ESC_ESC?: number
  /** Adds an END character at the beginning of each packet per the Bluetooth Core Specification 4.0, Volume 4, Part D, Chapter 3 "SLIP Layer" and allowed by RFC 1055 */
  bluetoothQuirk?: boolean
}
```

```ts
// Read lines from a text file, then SLIP-encode each and send them to a serial port
const { SerialPort } = require('serialport')
const { SlipEncoder } = require('@serialport/parser-slip-encoder')
const { ReadlineParser } = require('@serialport/parser-readline')

const fileReader = require('fs').createReadStream('/tmp/some-file.txt')
const port = new SerialPort({ path: '/dev/ROBOT', baudRate: 14400 })
const lineParser = fileReader.pipe(new Readline({ delimiter: '\r\n' }))
const encoder = fileReader.pipe(new SlipEncoder())
encoder.pipe(port)
```

## Slip Decoder

Runs in O(n) time, stripping out slip encoding and emitting decoded data. Optionally custom slip escape and delimiters can be provided.

### Constructor Arguments

```ts
interface SlipDecoderOptions extends TransformOptions {
  /** Custom start byte */
  START?: number
  /** Custom start escape byte */
  ESC_START?: number
  /** custom escape byte */
  ESC?: number
  /** custom end byte */
  END?: number
  /** custom escape end byte */
  ESC_END?: number
  /** custom escape escape byte */
  ESC_ESC?: number
}
```

### Example

```ts
// Receive slip encoded data from a serialport and log decoded data
const { SerialPort } = require('serialport')
const { SlipDecoder } = require('@serialport/parser-slip-encoder')
const port = new SerialPort({ path: '/dev/ROBOT', baudRate: 14400 })
const parser = port.pipe(new SlipDecoder())
parser.on('data', console.log)
```
