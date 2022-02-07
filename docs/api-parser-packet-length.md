---
id: api-parser-packet-length
title: 📦 parser-packet-length
---
| [npm](https://www.npmjs.com/package/@serialport/parser-packet-length) | [github](https://github.com/serialport/node-serialport/tree/master/packages/parser-packet-length) |

```ts
import { PacketLengthParser } from '@serialport/parser-packet-length'
// or
const { PacketLengthParser } = require('@serialport/parser-packet-length')
```

A transform stream that emits data after a delimiter and number of bytes is received.  The length in bytes of the packet follows the delimiter at a specified byte offset. To use the `PacketLength` parser, provide a delimiter (defaults to 0xaa), packetOverhead (defaults to 2), number of length bytes (defaults to 1) and the lengthOffset (defaults to 1). Data is emitted as a buffer.

## Constructor Arguments

```ts
interface PacketLengthOptions extends TransformOptions {
  /** delimiter to use defaults to 0xaa */
  delimiter?: number
  /** overhead of packet (including length, delimiter and any checksum / packet footer) defaults to 2 */
  packetOverhead?: number
  /** number of bytes containing length defaults to 1 */
  lengthBytes?: number
  /** offset of length field defaults to 1 */
  lengthOffset?: number
  /**  max packet length defaults to 0xff */
  maxLen?: number
}
```

## Example

```ts
// Parse length encoded packets received on the serial port in the form:
// [delimiter][0][len 0][len 1][cargo 0]...[cargo n][footer 0]

const { SerialPort } = require('serialport')
const { PacketLengthParser } = require('@serialport/parser-packet-length')
const port = new SerialPort('/dev/tty-usbserial1')
const parser = port.pipe(new PacketLengthParser({
  delimiter: 0xbc,
  packetOverhead: 5,
  lengthBytes: 2,
  lengthOffset: 2,
}))
