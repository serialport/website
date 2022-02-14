---
id: guide-debugging
title: Debugging
---

## Debugging Output

We use the [debug](https://www.npmjs.com/package/debug) package and log under the `serialport` namespace. Each package has it's own scope

- `serialport/stream` for all stream released logging
- `serialport/binding*` for all binding related logging
- `serialport*` for everything

You can enable logging through environment variables. Check the [debug](https://www.npmjs.com/package/debug) docs for info.

### Linux and OSX

```bash
DEBUG=serialport/stream node myapp.js
DEBUG=serialport* node myapp.js
DEBUG=* node myapp.js
```

### Windows Command Prompts

#### CMD

On Windows the environment variable is set using the `set` command.

```cmd
set DEBUG=serialport*
```

Example:

```cmd
set DEBUG=serialport* & node myapp.js
```

#### PowerShell (VS Code default)

PowerShell uses different syntax to set environment variables.

```cmd
$env:DEBUG = "serialport*"
```

Example:

```cmd
$env:DEBUG='serialport*'; node app.js
```

## Core dumps

You can enable core dumps on osx with;

```bash
ulimit -c unlimited for core dumps
```

You can "console.log" from c++ with;

```c++
fprintf(stdout, "Hellow World num=%d str=%s\n", 4, "hi");
```

## Repl

You can make use of the [`serialport-repl`](bin-repl.md) command with;

```bash
DEBUG=serialport* serialport-repl # to auto detect an arduino
DEBUG=serialport* serialport-repl /path/name # to connect to a specific port
```

and it will load a serialport object with debugging turned on.

## Multiple Ports Slowdown

When working with multiple Serial Ports you might see slowdowns in reading and writing. This is caused by thread pool exhaustion in NodeJS. You can set the `UV_THREADPOOL_SIZE` environment variable to be set to 1 + the number of ports you wish to open at a time. Defaults to `4` which supports 3 open ports. This might increase your performance.
