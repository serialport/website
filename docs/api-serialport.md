---
id: api-serialport
title: 📦 serialport
---
| [npm](https://www.npmjs.com/package/serialport) | [github](https://github.com/serialport/node-serialport/tree/master/packages/serialport) |

```ts
import { SerialPort } from 'serialport'
// or
const { SerialPort } = require('serialport')
```

This package provides everything you need to start talking over your serialport. It provides a high level [Stream Interface](api-stream), auto detecting [bindings](api-bindings-cpp), and a set of [parser streams](#serialportparsers).

> Most of the api is covered in the [Stream Interface](api-stream) docs.

Historically this was the only package involved and it contained everything. Since version 7 the internals have been split into their own modules and can be required separately, allowing a user to only install what they need.

This allows for smaller installs and alternative interfaces, bindings and parsers.

## `SerialPort`

This is the [Stream Interface](api-stream) constructor. It comes pre-populated with `Binding` and `Parsers`

```js
const serialport = new SerialPort(path)
serialport.write('ROBOT POWER ON')
```

## `SerialPort` and `SerialPortMock`

- The `SerialPort` export uses the [`@serialport/bindings-cpp`](api-bindings-cpp) binding.
- The `SerialPortMock` export includes the [`@serialport/binding-mock`](api-binding-mock.md) binding.

## Parsers

This package exports the following parsers;

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

```js
import { SerialPort, SpacePacketParser } from 'serialport'
```

These `Parsers` are all [Transform streams](https://nodejs.org/api/stream.html#stream_class_stream_transform) that process incoming data. To use the parsers, you must create them and then pipe the Serialport to the parser. Be careful to only write to the SerialPort object and not the parser.

```js
const { SerialPort, ReadlineParser } = require('serialport')
const port = new SerialPort({ path, baudRate })
const parser = new ReadlineParser()
port.pipe(parser)
parser.on('data', console.log)
port.write('ROBOT PLEASE RESPOND\n')
// ROBOT ONLINE

// Creating the parser and piping can be shortened to
const parser = port.pipe(new ReadlineParser())
```
