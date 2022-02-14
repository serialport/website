---
id: guide-installation
title: Installing SerialPort
---

## Installation Instructions

For most javascript enviornments you can run;

```sh
$ npm install serialport
```

And it will work from there.

## Compilation On Unsupported Systems

The [`@serialport/bindings-cpp`](api-bindings-cpp) package uses [`prebuildify-cross`](https://www.npmjs.com/package/prebuildify-cross) to build binaries for a [number of platforms and C libraries](https://github.com/prebuild/docker-images#images). We ship these builds with the package and the appropriate one will be used. (See [Supported Environments](guide-platform-support) for more information.) If you need a binary for a different platform it will be compiled during the npm install via [node-gyp v7](https://github.com/nodejs/node-gyp) which requires Python 2.x, so please ensure you have it installed and in your path for your operating system.

This assumes you have everything on your system necessary to compile ANY native module for Node.js. If you don't, then please ensure the following are true for your system before filing a "Does not install" issue.

## Installation Special Cases

### Alpine Linux

Historically [Alpine](http://www.alpinelinux.org/) linux had issues installing because it uses the [musl](https://www.musl-libc.org/) standard library instead of [glibc](https://www.gnu.org/software/libc/). We now build binaries for musl so you shouldn't have issues.

### Electron

Historically [Electron](https://electron.atom.io/) which comes with its own version of the Node.js runtime. It was a huge headache and required a deep understanding of your build system. Since v10 we leverage N-API and the provided binaries for your platform should work without issue.

For an example Electron project, check out [`electron-serialport`](https://github.com/serialport/electron-serialport).

### NW.js

[NW.js](https://nwjs.io/) is an app runtime based on Chromium and node.js.

Like Electron, NW.js also requires compilation against its own specific headers.

To instruct `prebuild` to build against the correct headers, place a file named `.prebuildrc` on your package root with the following content:

```
build_from_source=true
runtime=node-webkit
target=<target_version>
```

Where `<target_version>` is the NW.js version you are building against (for example, `0.26.6`).

### Raspberry Pi Linux

Follow the instructions for [setting up a Raspberry pi for use with Johnny-Five and Raspi IO](https://github.com/nebrius/raspi-io/wiki/Getting-a-Raspberry-Pi-ready-for-NodeBots). These projects use Node Serialport under the hood.

| Revision       |      CPU              | Arm Version |
|   ----         |      ---              |     ---     |
| A, A+, B, B+   | 32-bit ARM1176JZF-S   |    ARMv6    |
| Compute Module | 32-bit ARM1176JZF-S   |    ARMv6    |
| Zero           | 32-bit ARM1176JZF-S   |    ARMv6    |
| B2             | 32-bit ARM Cortex-A7  |    ARMv7    |
| B3             | 32-bit ARM Cortex-A53 |    ARMv8    |

To enable the serial port on *Raspbian*, you launch `raspi-config`, then select `Interfacing Options`, then `Serial`.  You will then be asked two questions:

1. Would you like a login shell to be accessible over serial?
2. Would you like the serial port hardware to be enabled?

You must answer *No* to question 1 and *Yes* to question 2.  If the login shell is left active, you will experience hangs and or disconnects.

*DietPi* also has the ability to enable the serial port in `dietpi-config`; however, it doens't have a way to disable the login shell that we know of.

### sudo / root

If you're going to use `sudo` or root to install Node-Serialport, `npm` will require you to use the unsafe parameters flag.

```bash
sudo npm install serialport --unsafe-perm
```

Failure to use the flag results in an error like this:

```bash
root@rpi3:~# npm install -g serialport
/usr/bin/serialport-list -> /usr/lib/node_modules/serialport/bin/serialport-list.js
/usr/bin/serialport-term -> /usr/lib/node_modules/serialport/bin/serialport-terminal.js


> serialport@6.0.0-beta1 install /Users/wizard/src/node-serialport
> prebuild-install || node-gyp rebuild

prebuild-install info begin Prebuild-install version 2.2.1
prebuild-install info install installing standalone, skipping download.

gyp WARN EACCES user "root" does not have permission to access the dev dir "/root/.node-gyp/6.9.1"
gyp WARN EACCES attempting to reinstall using temporary dev dir "/usr/lib/node_modules/serialport/.node-gyp"
make: Entering directory '/usr/lib/node_modules/serialport/build'
make: *** No rule to make target '../.node-gyp/6.9.1/include/node/common.gypi', needed by 'Makefile'.  Stop.
make: Leaving directory '/usr/lib/node_modules/serialport/build'
gyp ERR! build error
gyp ERR! stack Error: `make` failed with exit code: 2

```

### Ubuntu/Debian Linux

You'll need the package `build-essential` to compile `serialport` if the provided binaries don't work for your system.

### Windows

Node-Serialport supports Windows 10+. Precompiled binaries are available, but if you want to build it from source you'll need to follow the [node-gyp installation](https://github.com/nodejs/node-gyp#installation) instructions. Once you've got things working, you can install Node-Serialport from source with:

```powershell
npm install serialport
```

Node-gyp's documentation doesn't mention it, but it sometimes helps to create a C++ project in [Visual Studio](https://www.visualstudio.com/) so that it will install any necessary components not already installed during the past two hours of setup. This will solve some instances of `Failed to locate: "CL.exe"`.
