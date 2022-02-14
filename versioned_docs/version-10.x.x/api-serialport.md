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

:::tip

Most of the api is covered in the [Stream Interface](api-stream) docs.

:::

Historically this was the only package involved and it contained everything. Since version 7 the internals have been split into their own modules and can be required separately, allowing a user to only install what they need.

This allows for smaller installs and alternative interfaces, bindings and parsers.

## SerialPort

The `SerialPort` class uses the [`@serialport/bindings-cpp`](api-bindings-cpp) binding with the [Stream Interface](api-stream) class.

```ts
import { SerialPort } from 'serialport'

const serialport = new SerialPort({ path: '/dev/example', baudRate: 9600 })
serialport.write('ROBOT POWER ON')
```

### list

```ts
SerialPort.list()
```

Calls the [bindings-cpp `list()`](api-bindings-cpp#list) function directly.

### binding

```ts
SerialPort.binding
```

The detected platform binding.

### port

```ts
const port = new SerialPort({ path: '/dev/robot', baudRate: 9600 })
port.port // instance of platform specific bindings
```

The [PortBinding](api-bindings-cpp#bindingport) object opened for the port.


## SerialPortMock

The `SerialPortMock` class includes the [`@serialport/binding-mock`](api-binding-mock) binding with the [Stream Interface](api-stream) class.

```ts
import { SerialPortMock } from 'serialport'

const path = '/dev/example'
SerialPortMock.binding.createPort(path)
const serialport = new SerialPortMock({ path, baudRate: 9600 })
serialport.write('ROBOT POWER ON')
```

### list

```ts
SerialPortMock.list() // Promise<PortInfo[]>
```

Calls the [mock binding list](api-binding-mock#list) function directly which returns all created ports.

### binding

```ts
SerialPortMock.binding
```

The `MockBinding` class being used by the port.

### port

```ts
SerialPortMock.binding.createPort('/dev/robot')
const port = new SerialPortMock({ path: '/dev/robot', baudRate: 9600 })
port.port.emitData('data')
```

The [MockPortBinding](api-binding-mock#mockportbinding) object opened for the port.

## Parsers

This package exports the following parsers;

- [ByteLengthParser](api-parser-byte-length)
- [CCTalkParser](api-parser-cctalk)
- [DelimiterParser](api-parser-delimiter)
- [InterByteTimeoutParser](api-parser-inter-byte-timeout)
- [PacketLengthParser](api-parser-packet-length)
- [ReadlineParser](api-parser-readline)
- [ReadyParser](api-parser-ready)
- [RegexParser](api-parser-regex)
- [SlipEncoder and SlipDecoder](api-parser-slip-encoder)
- [SpacePacketParser](api-parser-spacepacket)

```ts
// for example
import { SerialPort, SpacePacketParser } from 'serialport'
```

These `Parsers` are all [Transform streams](https://nodejs.org/api/stream.html#stream_class_stream_transform) that process incoming data. To use the parsers, you must create them and then pipe the Serialport to the parser. Be careful to only write to the SerialPort object and not the parser.

```ts
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
