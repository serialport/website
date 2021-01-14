---
id: api-parser-delimiter
title: Delimiter Parser
---
```typescript
new Delimiter(options: {
  delimiter: string | Buffer | number[],
  includeDelimiter: boolean
})
```

A transform stream that emits data each time a byte sequence is received. To use the `Delimiter` parser, provide a delimiter as a string, buffer, or array of bytes. Runs in O(n) time.

Arguments
- `options.delimiter: string|Buffer|number[]` The delimiter on which to split incoming data.
- `options.includeDelimiter: boolean` Indicate if the delimiter itself should be included in the emitted data. Defaults to `false`


```js
const SerialPort = require('serialport')
const Delimiter = require('@serialport/parser-delimiter')
const port = new SerialPort('/dev/tty-usbserial1')

const parser = port.pipe(new Delimiter({ delimiter: '\n' }))
parser.on('data', console.log) // emits data after every '\n'
```
