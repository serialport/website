---
id: guide-about
title: About SerialPort
slug: /
---

Node SerialPort is a JavaScript library for connecting to serial ports that works in NodeJS and Electron.

## Quick Answers

- **For support**, you're in the right place. Have a look around and if you're stuck open a [GitHub issue or Discussion](https://github.com/serialport/node-serialport/issues/new/choose).
- **To contribute**, please review our [contribution guide](https://github.com/serialport/node-serialport/blob/master/CONTRIBUTING.md) and [Code of Conduct](code-of-conduct). We also have issues tagged ["good first PR"](https://github.com/serialport/node-serialport/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22), if you'd like to start somewhere specific. We'll do our best to support you until we merge your PR.

## Core Packages

The core packages provide cross platform serial port hardware access to a javascript environment (eg, NodeJS and Electron). Chances are you're looking for the [`serialport`](api-serialport.md) package which provides a good set of defaults. However it is quite easy to mix and match the parts of serialport you need.

- [`serialport`](api-serialport.md) provides a good set of defaults for most projects with a node stream api. It includes cross platform and mock bindings for testing.

Interfaces take a binding interface and provide a different API on top of it. Currently we only ship a Node Stream Interface.

- [`@serialport/stream`](api-stream) a Node.js Stream interface for any binding

The Bindings provide a common interface to work with your serialport cross platform.

- [`@serialport/bindings-cpp`](api-bindings-cpp) bindings for Linux, Mac and Windows supported in NodeJS and Electron.
- [`@serialport/binding-mock`](api-binding-mock.md) for a mock binding package for testing
- [`@serialport/bindings-interface`](api-bindings-interface.md) a typescript interface you need to use match if you're making your own bindings

## Parser Packages

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

### Command Line Tools

The Command Line Tools provide helpful utilities for working with serial ports.

- [`@serialport/list`](bin-list.md)
- [`@serialport/repl`](bin-repl.md)
- [`@serialport/terminal`](bin-terminal.md)

## Helpful Resources for Getting Started with Node-SerialPort

In addition to reading the [article mentioned above](http://www.voodootikigod.com/nodebots-the-rise-of-js-robotics), these others might help you:

- [Johnny-Five](http://johnny-five.io/#hello-world): The Johnny-Five Robotics and IoT platform's six-line "Hello World" (awesome).
- [Arduino Node Security Sensor Hacking](http://nexxylove.tumblr.com/post/20159263403/arduino-node-security-sensor-hacking): A great all-around "how do I use this" article.

## License

SerialPort is [MIT licensed](https://github.com/serialport/node-serialport/blob/master/LICENSE) but in order to receive support you must follow our [code of conduct](code-of-conduct.md) which includes a "don't build evil robots" clause.
