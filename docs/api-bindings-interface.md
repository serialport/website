---
id: api-bindings-interface
title: 📦 bindings-interface
---
| [npm](https://www.npmjs.com/package/@serialport/bindings-interface) | [github](https://github.com/serialport/bindings-interface) |

Typescript interface for all bindings. At it's core a binding has two functions and a class. The types have been simplified for explanation. The actual types leverage generics to allow for different options for different platforms.

```ts
interface BindingInterface {
  /**
    Retrieves a list of available serial ports with metadata.
   */
  list(): Promise<PortInfo>
  /**
   * Opens a connection to the serial port referenced by the path.
   */
  open(options: OpenOptions): Promise<BindingPortInterface>
}

```

These functions are required. `list()` must resolve an array of ports and `open()` must return an open port object.

The `BindingPortInterface` is an open port. You can read and write to it, update a few settings and close it. Once it's closed it can't be opened again. (You can however open a new one.)

For the full types take a look at the package's [github](https://github.com/serialport/bindings-interface) repository.
