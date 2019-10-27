---
id: version-8.x.x-guide-virtual-serial-ports
title: Virtual Serial Ports
original_id: guide-virtual-serial-ports
---

Sometimes you need to develope and test your software without being able to use a real serial port or without having access to the target device. In those situations you can use virtual serial ports.

### Free Virtual Serial Ports

On Windows you can use e.g. [Free* Virtual Serial Ports](https://freevirtualserialports.com/) to create virtual ports and then [Free* Serial Analyzer](https://freeserialanalyzer.com/) to view and monitor the port traffic.

**Free meaning trial mode in this case*

Use the "Create New Bridge" feature to create two virtual serial ports which then are linked together (you can even configure the wiring between the ports if you need).

![free virtual serial ports screenshot](/img/free-virtual-serial-ports.png)

After you have bridged your new virtual ports e.g. COM5 and COM6, you are able to write data to COM5 port and monitor the traffic from port COM6 with the Free Serial Analyzer.

![free serial analyzer screenshot](/img/free-serial-analyzer.png)
