---
id: guide-platform-support
title: Supported Environments
---

## Node-API (N-API)

Since v10 [`@serialport/bindings-cpp`](api-bindings-cpp) has used [Node-API](https://nodejs.org/api/n-api.html) (also known as `N-API`) to allow easy use with any recent NodeJS and Electron version. (And in theory any V8 based environment.) We target Node-API version 6 as it covers the current NodeJS and electron support requirements.

### Node.js Support

SerialPort officially supports all Active, Maintenance and Current LTS releases of Node.js. For information on what versions this currently covers see the [Node.js Release Schedule](https://github.com/nodejs/Release#release-schedule).

### Electron Support

SerialPort officially supports the last 3 versions of Electron per it's [8 week release cadence](https://www.electronjs.org/blog/8-week-cadence). We sometimes lag a few weeks behind releases while build tools are updated.

## Supported Platforms and Architectures

The [`@serialport/bindings-cpp`](api-bindings-cpp) package uses [`prebuildify-cross`](https://www.npmjs.com/package/prebuildify-cross) to build binaries for a [number of platforms and C libraries](https://github.com/prebuild/docker-images#images). We are able to run a CI for only the major platforms offered by GitHub Actions. Those platforms are fully supported while the others are a best effort.

The platforms, architectures that `serialport` supports are the following;

| Platform / Arch | Supported | Built |
|       ---       | --- | --- |
| Linux / ia32¹   |  ☐  |  ☐  |
| Linux / x64     |  ☑  |  ☑  |
| Linux / ARM v6  |  ☐  |  ☑  |
| Linux / ARM v7  |  ☐  |  ☑  |
| Linux / ARM64   |  ☐  |  ☑  |
| OSX / x64³      |  ☑  |  ☑  |
| OSX M1³         |  ☑  |  ☑  |
| Windows² / x86  |  ☐  |  ☑  |
| Windows² / x64  |  ☑  |  ☑  |

- ¹ NodeJS has dropped prebuilt binaries for NodeJS 10 and above for 32bit linux. As a result it's too difficult to maintain support. However if you build nodejs and serialport yourself it will probably work.
- ² Windows 10 and above are supported.
- ³ We build a universal x64/M1 binary [Github Actions does not yet provides M1 hardware](https://github.com/actions/virtual-environments/issues/2187).

## Last known versions for unsupported versions of Node.js

- For Node.js versions `0.10` and `0.12`, the last functioning release was `serialport@4`.
- For Node.js version `4.0`, the last functioning release was `serialport@6`.
- For Node.js version `8.0`, the last functioning release was `serialport@8`.
- For Node.js version `10.0`, the last functioning release was `serialport@9`.
- For Node.js version `12.0`, the last functioning release was `serialport@10`.
