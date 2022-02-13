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

The `PortInfo` interface is pretty simple, only the path is guaranteed.

```ts
interface PortInfo {
  path: string
  manufacturer: string | undefined
  serialNumber: string | undefined
  pnpId: string | undefined
  locationId: string | undefined
  productId: string | undefined
  vendorId: string | undefined
}
```

The `BindingPortInterface` is an open port. You can read and write to it, update a few settings and close it. Once it's closed it can't be opened again. (You can however open a new one.)

```ts
interface BindingPortInterface {
  readonly openOptions: Required<OpenOptions>
  /**
   * Required property. `true` if the port is open, `false` otherwise. Should be read-only.
   */
  isOpen: boolean

  /**
   * Closes an open connection
   */
  close(): Promise<void>

  /**
    Request a number of bytes from the SerialPort. This function is similar to Node's [`fs.read`](http://nodejs.org/api/fs.html#fs_fs_read_fd_buffer_offset_length_position_callback) as it will attempt to read up to `length` number of bytes. This function has a guarantee that it will always return at least one byte. This leverages os specific polling or async reads so you don't have to.

    The in progress reads must error when the port is closed with an error object that has the property `canceled` equal to `true`. Any other error will cause a disconnection.

   * @param buffer - The Buffer to read data into.
   * @param offset - The offset in the buffer to start writing at.
   * @param length - Specifies the maximum number of bytes to read.
   * @returns Promise - Resolves with the number of bytes read after a read operation.
   */
  read(buffer: Buffer, offset: number, length: number): Promise<{ buffer: Buffer; bytesRead: number }>

  /**
  Write bytes to the SerialPort. Only called when there is no pending write operation.

  The in progress writes must error when the port is closed with an error object that has the property `canceled` equal to `true`. Any other error will cause a disconnection.

  Resolves after the data is passed to the operating system for writing.
   */
  write(buffer: Buffer): Promise<void>

  /**
    Changes connection settings on an open port.
   */
  update(options: UpdateOptions): Promise<void>

  /**
   * Set control flags on an open port.
   * All options are operating system default when the port is opened. Every flag is set on each call to the provided or default values.
   */
  set(options: SetOptions): Promise<void>

  /**
   * Get the control flags (CTS, DSR, DCD) on the open port.
   */
  get(): Promise<PortStatus>

  /**
   * Get the OS reported baud rate for the open port.
   * Used mostly for debugging custom baud rates.
   */
  getBaudRate(): Promise<{ baudRate: number }>

  /**
   * Flush (discard) data received but not read, and written but not transmitted.
   * Resolves once the flush operation finishes.
   */
  flush(): Promise<void>

  /**
   * Drain waits until all output data is transmitted to the serial port. An in progress write should be completed before this returns.
   * Resolves once the drain operation finishes.
   */
  drain(): Promise<void>
}
```

For the full types take a look at the package's [github](https://github.com/serialport/bindings-interface) repository.

### List I guess

## `SerialPort.list()`

```ts
SerialPort.list(): Promise<PortInfo[]>
```
