---
id: guide-usage
title: SerialPort Usage
---

```ts
const { SerialPort } = require('serialport')
// or
import { SerialPort } from 'serialport'

// Create a port
const port = new SerialPort({
  path: '/dev/tty-usbserial1',
  baudRate: 57600,
})
```

When opening a serial port, specify;

1. Path to serial port
1. Baud Rate of the port


:::tip

Check [`serialport`](api-serialport)'s docs for the full api.

:::

Constructing a `SerialPort` object immediately opens a port. While you can read and write at any time (actions will be queued until the port is open), most port functions require an open port. There are three ways to detect when a port is opened.

- The `open` event is always emitted when the port is opened.
- The constructor's openCallback is passed to `.open()`, if you haven't disabled the `autoOpen` option. If you have disabled it, the callback is ignored.
- The `.open()` function takes a callback that is called after the port is opened. You can use this if you've disabled the `autoOpen` option or have previously closed an open port.

```ts
const { SerialPort } = require('serialport')
const port = new SerialPort({ path: '/dev/tty-usbserial1', baudRate: 57600 })

port.write('main screen turn on', function(err) {
  if (err) {
    return console.log('Error on write: ', err.message)
  }
  console.log('message written')
})

// Open errors will be emitted as an error event
port.on('error', function(err) {
  console.log('Error: ', err.message)
})
```

Detecting open-related errors can be moved to the constructor's callback.

```ts
const { SerialPort } = require('serialport')
const port = new SerialPort({ path: '/dev/tty-usbserial1', baudRate: 9600 }, function (err) {
  if (err) {
    return console.log('Error: ', err.message)
  }
})

port.write('main screen turn on', function(err) {
  if (err) {
    return console.log('Error on write: ', err.message)
  }
  console.log('message written')
})

```

## Auto Open

If you disable the `autoOpen` option, you'll need to open the port on your own.

```ts
const { SerialPort } = require('serialport')
const port = new SerialPort({
  path: '/dev/tty-usbserial1',
  baudRate: 9600,
  autoOpen: false,
})

port.open(function (err) {
  if (err) {
    return console.log('Error opening port: ', err.message)
  }

  // Because there's no callback to write, write errors will be emitted on the port:
  port.write('main screen turn on')
})

// The open event is always emitted
port.on('open', function() {
  // open logic
})
```

## Reading Data

Get updates about new data arriving through the serial port as follows:

```ts
// Read data that is available but keep the stream in "paused mode"
port.on('readable', function () {
  console.log('Data:', port.read())
})

// Switches the port into "flowing mode"
port.on('data', function (data) {
  console.log('Data:', data)
})

// Pipe the data into another stream (like a parser or standard out)
const lineStream = port.pipe(new Readline())
```

You can write to the serial port by sending a string or buffer to the `write` method:

```ts
port.write('Hi Mom!')
port.write(Buffer.from('Hi Mom!'))
```

Enjoy and do cool things with this code.
