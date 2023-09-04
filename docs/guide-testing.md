---
id: guide-testing
title: Testing
---

Testing is an important feature of any library. To aid in our own tests we've developed a [`MockBinding`](api-binding-mock) a fake hardware binding that doesn't actually need any hardware to run. This class passes all of the same tests as our hardware based bindings and provides a few additional test related interfaces.

```ts
const { SerialPortMock } = require('serialport');

// Create a port and enable the echo and recording.
SerialPortMock.binding.createPort('/dev/ROBOT', { echo: true, record: true })
const port = new SerialPortMock({ path: '/dev/ROBOT', baudRate: 14400 })

port.on('open', () => {
  port.port?.emitData('pretend data from device')
})
```

It should also be noted that the [`SerialPortMock` class from the `serialport`](api-serialport#serialportmock) package has the `MockBinding` setup for you.

The code can be found in the [`@serialport/binding-mock`](api-binding-mock) package.
