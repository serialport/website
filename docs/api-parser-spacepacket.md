---
id: api-parser-spacepacket
title: 📦 parser-spacepacket
---
| [npm](https://www.npmjs.com/package/@serialport/parser-spacepacket) | [github](https://github.com/serialport/node-serialport/tree/master/packages/parser-spacepacket) |

```ts
import { SpacePacketParser } from '@serialport/parser-spacepacket'
// or
const { SpacePacketParser } = require('@serialport/parser-spacepacket')
```

A transform stream that emits data each time a complete, correctly formatted [Space Packet](https://public.ccsds.org/Pubs/133x0b2e1.pdf) is received. Configure the parser with the lengths of the Time Code Field and Ancillary Data Field. (These don't need to be present on every packet received; their presence should be indicated in the individual packet header; however their length should be standardized between the sender and receiver.)

The shape of each packet is as follows;

```ts
interface SpacePacket {
  header: {
    versionNumber: string | number
    identification: {
      apid: number
      secondaryHeader: number
      type: number
    }
    sequenceControl: {
      packetName: number
      sequenceFlags: number
    }
    dataLength: number
  }
  secondaryHeader?: {
    timeCode?: string
    ancillaryData?: string
  }
  data: string
}
```

### Constructor Arguments

```ts
interface SpacePacketOptions extends Omit<TransformOptions, 'objectMode'> {
  /** The length of the Time Code Field in octets, if present */
  timeCodeFieldLength?: number
  /** The length of the Ancillary Data Field in octets, if present */
  ancillaryDataFieldLength?: number
}
```

### Example

```ts
const { SerialPort } = require('serialport')
const { SpacePacketParser } = require('@serialport/parser-spacepacket')
const port = new SerialPort({ path: '/dev/ROBOT', baudRate: 14400 })

const parser = port.pipe(new SpacePacketParser({ timeCodeFieldLength: 8 }))
parser.on('data', console.log)
// emits data once a complete Space Packet has been received
```
