---
id: api-core-overview
title: What are core packages?
---

The core packages provide cross platform serial port hardware access to a javascript environment (eg, NodeJS and Electron). Chances are you're looking for the [`serialport`](api-serialport.md) package which provides a good set of defaults. However it is quite easy to mix and match the parts of serialport you need.

- [`serialport`](api-serialport.md) provides a good set of defaults for most projects with a node stream api. It includes cross platform and mock bindings for testing.

Interfaces take a binding interface and provide a different API on top of it. Currently we only ship a Node Stream Interface.

- [`@serialport/stream`](api-stream) a Node.js Stream interface for any binding

The Bindings provide a common interface to work with your serialport cross platform.

- [`@serialport/bindings-cpp`](api-bindings-cpp) bindings for Linux, Mac and Windows supported in NodeJS and Electron.
- [`@serialport/binding-mock`](api-binding-mock.md) for a mock binding package for testing
- [`@serialport/bindings-interface`](api-bindings-interface.md) a typescript interface you need to use match if you're making your own bindings
