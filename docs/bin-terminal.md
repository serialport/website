---
id: bin-terminal
title: 📦 @serialport/terminal
---

## SerialPort Terminal

```bash
$ npx @serialport/terminal  -p <port> -b <baudRate> [options]
# or
$ npm install -g @serialport/terminal
$ serialport-terminal  -p <port> -b <baudRate> [options]
```

The package `@serialport/terminal` will install the `serialport-terminal` cli tool which provides a basic terminal interface for communicating over a serial port. `ctrl+c` will exit.

```text
$ serialport-terminal -h

Usage: terminal --list OR -p <port> -b <baud rate> [options...]

A basic terminal interface for communicating over a serial port. Pressing ctrl+c exits.

Options:
  -V, --version          output the version number
  -l --list              List available ports then exit
  -p, --path <path>      Path of the serial port
  -b, --baud <baudrate>  Baud rate
  --databits <databits>  Data bits (default: 8)
  --parity <parity>      Parity (default: "none")
  --stopbits <bits>      Stop bits (default: 1)
  --no-echo              Don't print characters as you type them.
  --flow-ctl <mode>      Enable flow control {XONOFF | RTSCTS}.
  -h, --help             display help for command

$ serialport-terminal -l
/dev/tty.Bluetooth-Incoming-Port
/dev/tty.usbmodem1421    Arduino (www.arduino.cc)
```
