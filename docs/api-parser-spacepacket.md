---
id: api-parser-spacepacket
title: Space Packet Parser
---
```typescript
new SpacePacketParser(options)
```

A transform stream that emits data each time a complete, correctly formatted [Space Packet](https://public.ccsds.org/Pubs/133x0b2e1.pdf) is received. Configure the parser with the lengths of the Time Code Field and Ancillary Data Field. (These don't need to be present on every packet received; their presence should be indicated in the individual packet header; however their length should be standardized between the sender and receiver.)

Arguments
- `[options]: object` The optional configuration object, only needed if either of the two fields of the secondary header need their length defined
- `options.timeCodeFieldLength: number` The length of the Time Code Field in octets, if present
- `options.ancillaryDataFieldLength: number` The length of the Ancillary Data Field in octets, if present

```js
const SerialPort = require('serialport')
const SpacePacketParser = require('@serialport/parser-spacepacket')
const port = new SerialPort('/dev/tty-usbserial1')

const parser = port.pipe(new SpacePacketParser({ timeCodeFieldLength: 8 }))
parser.on('data', console.log)
// emits data once a complete Space Packet has been received
```
