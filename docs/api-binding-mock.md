---
id: api-binding-mock
title: 📦 binding-mock
---
| [npm](https://www.npmjs.com/package/@serialport/binding-mock) | [github](https://github.com/serialport/binding-mock) |

## Mock Binding

```ts
import { MockBinding } from '@serialport/binding-mock'
// or
const { MockBinding } = require('@serialport/binding-mock')
```

Testing is an important feature of any library. To aid in our own tests, we've developed a `MockBinding`, a fake hardware binding that doesn't actually need any hardware to run. This class passes all of the same tests as our hardware based bindings and provides a few additional test related interfaces.

This class is used in the [`SerialPortMock`](api-serialport.md) class if you wish to test the stream interface.

### createPort(options: CreatePortOptions)

```ts
interface CreatePortOptions {
  echo?: boolean;
  record?: boolean;
  readyData?: Buffer;
  maxReadSize?: number;
  manufacturer?: string;
  vendorId?: string;
  productId?: string;
  friendlyName?: string;
}

// Create a port and enable the echo and recording.
MockBinding.createPort('/dev/ROBOT', { echo: true, record: true })
```

### reset

This removes all created ports.

```ts
MockBinding.reset()
```

### open(opt: OpenOptions): MockPortBinding

Open a port and return it.

## MockPortBinding

### emitData

Emits data from an open port.

```ts
port.emitData(data: Buffer | string): void
```

### serialNumber

A unique number for each port returned from `open()`

### recording

If the port was created with `record: true` this will contain all data written to the port. If recording is disabled it will be a 0 length buffer.

```ts
port.recording // Buffer
```

### lastWrite

Contains the contents of the last write to the port.

```ts
port.lastWrite // null | Buffer
```

## Example

```ts
const { MockBinding } = require('@serialport/binding-mock')
const { SerialPortStream } = require('@serialport/stream')
const {ReadlineParser} = require("@serialport/parser-readline");

// Create a port and enable the echo and recording.
MockBinding.createPort('/dev/ROBOT', { echo: true, record: true })
const port = new SerialPortStream({ binding: MockBinding, path: '/dev/ROBOT', baudRate: 14400 })

/* Add some action for incoming data. For example,
** print each incoming line in uppercase */
const parser = new ReadlineParser()
port.pipe(parser).on('data', line => {
  console.log(line.toUpperCase())
})

// wait for port to open...
port.on('open', () => {
  // ...then test by simulating incoming data
  port.port.emitData("Hello, world!\n")
})

/* Expected output:
HELLO, WORLD!
*/
```
