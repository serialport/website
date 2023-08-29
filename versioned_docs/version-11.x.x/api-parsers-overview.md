---
id: api-parsers-overview
title: What are Parsers?
---

Parsers are used to take raw binary data and transform them into usable messages. This may include tasks such as converting the data to text, emitting useful chunks of data when they have been fully received, or even validating protocols.

Parsers are traditionally Transform streams, but Duplex streams and other non stream interfaces are acceptable.

- [`@serialport/parser-byte-length`](api-parser-byte-length)
- [`@serialport/parser-cctalk`](api-parser-cctalk)
- [`@serialport/parser-delimiter`](api-parser-delimiter)
- [`@serialport/parser-inter-byte-timeout`](api-parser-inter-byte-timeout)
- [`@serialport/parser-packet-length`](api-parser-packet-length)
- [`@serialport/parser-readline`](api-parser-readline)
- [`@serialport/parser-ready`](api-parser-ready)
- [`@serialport/parser-regex`](api-parser-regex)
- [`@serialport/parser-slip-encoder`](api-parser-slip-encoder)
- [`@serialport/parser-spacepacket`](api-parser-spacepacket)

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
