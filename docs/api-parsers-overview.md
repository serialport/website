---
id: api-parsers-overview
title: What are Parsers?
---

Parsers are used to take raw binary data and transform them into usable messages. This may include tasks such as converting the data to text, emitting useful chunks of data when they have been fully received, or even validating protocols.

Parsers are traditionally Transform streams, but Duplex streams and other non stream interfaces are acceptable.

- [ByteLengthParser](api-parser-byte-length.md)
- [CCTalkParser](api-parser-cctalk.md)
- [DelimiterParser](api-parser-delimiter.md)
- [InterByteTimeoutParser](api-parser-inter-byte-timeout.md)
- [PacketLengthParser](api-parser-packet-length.md)
- [ReadlineParser](api-parser-readline.md)
- [ReadyParser](api-parser-ready.md)
- [RegexParser](api-parser-regex.md)
- [SlipEncoder and SlipDecoder](api-parser-slip-encoder.md)
- [SpacePacketParser](api-parser-spacepacket.md)

Most parsers are [Transform streams](https://nodejs.org/api/stream.html#stream_class_stream_transform) that process incoming data. To use the parsers, you must create them and then pipe the Serialport to the parser. Be careful to only write to the SerialPort object and not the parser.

## Example

```ts
const { SerialPort } = require('serialport')
const { ReadlineParser } = require('@serialport/parser-readline')
const port = new SerialPort({ path: '/dev/ROBOT', baudRate: 14400 })
const parser = new ReadlineParser()
port.pipe(parser)
parser.on('data', console.log)
port.write('ROBOT PLEASE RESPOND\n')
```

Creating a stream based parser and piping can be shortened to
```ts
const parser = port.pipe(new ReadlineParser());
```
