---
id: guide-platform-support
title: Supported Environments
---

## Node.js Support

SerialPort officially supports all Active, Maintenance and Current LTS releases of Node.js. For information on what versions this currently covers see the [Node.js Release Schedule](https://github.com/nodejs/Release#release-schedule).

## Electron Support

SerialPort officially supports the last 3 versions of Electron per it's [8 week release cadence](https://www.electronjs.org/blog/8-week-cadence). We usually lag a few weeks behind releases while build tools are updated.

## Supported Platforms and Architectures

The platforms, architectures that `serialport` supports are the following;

| Platform / Arch | Supported |
|       ---       | --- |
| Linux / ia32¹   |  ☐  |
| Linux / x64     |  ☑  |
| Linux / ARM v6⁴ |  ☐  |
| Linux / ARM v7⁴ |  ☐  |
| Linux / ARM v8⁴ |  ☐  |
| Linux / MIPSel⁴ |  ☐  |
| Linux / PPC64⁴  |  ☐  |
| OSX / x64³      |  ☑  |
| Windows² / x86  |  ☑  |
| Windows² / x64  |  ☑  |


- ¹ NodeJS has dropped prebuilt binaries for NodeJS 10 and above for 32bit linux. As a result it's too difficult to maintain support. However if you build nodejs and serialport yourself it will probably work.
- ² Windows 7, 8, 10, and 10 IoT are supported, but our CI tests only Microsoft Windows Server 2019.
- ³ OSX 10.4 Tiger and above are supported, but our CI tests only Mac OS X 10.15.7 with Xcode 12.4
- ⁴ ARM, MIPSel and PPC64¹ platforms are not currently part of our testing or build matrix, but will probably work. Since node 12 MIPSel⁴ and ARM v6⁴ support has been dropped by the official nodejs builds.
- M1 builds are not yet supported but will be as soon as [Github Actions provides them](https://github.com/actions/virtual-environments/issues/2187).

## Last known versions for unsupported versions of Node.js

- For Node.js versions `0.10` and `0.12`, the last functioning release was `serialport@4`.
- For Node.js version `4.0`, the last functioning release was `serialport@6`.
- For Node.js version `8.0`, the last functioning release was `serialport@8`.
- For Node.js version `10.0`, the last functioning release was `serialport@9`.
