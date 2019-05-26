---
id: guide-testing
title: Testing
---

Testing is an important feature of any library. To aid in our own tests we've developed a [`MockBinding`](api-binding-mock.md) a fake hardware binding that doesn't actually need any hardware to run. This class passes all of the same tests as our hardware based bindings and provides a few additional test related interfaces.

```js
const SerialPort = require('@serialport/stream')
const MockBinding = require('@serialport/binding-mock')

SerialPort.Binding = MockBinding

// Create a port and enable the echo and recording.
MockBinding.createPort('/dev/ROBOT', { echo: true, record: true })
const port = new SerialPort('/dev/ROBOT')
```

The code can be found in the [`@serialport/binding-mock`](api-binding-mock.md) package.

## Virtual Serial Ports

Sometimes you need to develope and test your software without being able to use a real serial port or without having access to the target device. In those situations you can use virtual serial ports.

### Free Virtual Serial Ports

On Windows you can use e.g. [Free* Virtual Serial Ports](https://freevirtualserialports.com/) to create virtual ports and then [Free* Serial Analyzer](https://freeserialanalyzer.com/) to view and monitor the port traffic.

**Free meaning trial mode in this case*

Use the "Create New Bridge" feature to create two virtual serial ports which then are linked together (you can even configure the wiring between the ports if you need).

![free virtual serial ports screenshot](/img/free-virtual-serial-ports.png)

After you have bridged your new virtual ports e.g. COM5 and COM6, you are able to write data to COM5 port and monitor the traffic from port COM6 with the Free Serial Analyzer.

![free serial analyzer screenshot](/img/free-serial-analyzer.png)
