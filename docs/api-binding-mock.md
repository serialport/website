---
id: api-binding-mock
title: 📦 @serialport/binding-mock
---

## Mock Binding

```ts
import { MockBinding } from '@serialport/binding-mock'
// or
const { MockBinding } = require('@serialport/binding-mock')
```

Testing is an important feature of any library. To aid in our own tests, we've developed a `MockBinding`, a fake hardware binding that doesn't actually need any hardware to run. This class passes all of the same tests as our hardware based bindings and provides a few additional test related interfaces.

This class is ued in the [`SerialPortMock`](api-serialport.md) class if you wish to test the stream interface.

### `createPort(options: CreatePortOptions)`

```ts
interface CreatePortOptions {
  echo?: boolean;
  record?: boolean;
  readyData?: Buffer;
  maxReadSize?: number;
  manufacturer?: string;
  vendorId?: string;
  productId?: string;
}

// Create a port and enable the echo and recording.
MockBinding.createPort('/dev/ROBOT', { echo: true, record: true })
```

### `reset()`

This removes all created ports.

```ts
MockBinding.reset()
```

### `open(opt: OpenOptions): MockPortBinding`

Open a port and return it.

## MockPortBinding

### `emitData(data: Buffer | string)`

### `serialNumber`

### `recording`

### `lastWrite`

### Example

```ts
const { MockBinding } = require('@serialport/binding-mock')

// Create a port and enable the echo and recording.
MockBinding.createPort('/dev/ROBOT', { echo: true, record: true })
const port = new SerialPort('/dev/ROBOT')

/* Add some action for incoming data. For example,
** print each incoming line in uppercase */
const parser = new Readline()
port.pipe(parser).on('data', line => {
  console.log(line.toUpperCase())
})

// wait for port to open...
port.on('open', () => {
  // ...then test by simulating incoming data
  port.binding.emitData("Hello, world!\n")
})

/* Expected output:
HELLO, WORLD!
*/
```

```ts

```
