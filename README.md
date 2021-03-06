# no-log [![iAmServer - no-log](https://img.shields.io/badge/npm-v1.0.4-blue?logo=npm)](https://www.npmjs.com/package/@iamserver/no-log "Go to npmjs page")

Remove all the Window.console in production, which prevents logging of information to the browser's console.

## Installation

```shell
npm install --save @iamserver/no-log
```

## Importing

```js
import noLog from "@iamserver/no-log"; // ES6
const noLog = require("@iamserver/no-log"); // ES5 with npm
```

## Usage

<!-- This package is a simple wrapper around the `console` object. It removes all the `console` methods from the `window` object. -->

```js
import noLog from "@iamserver/no-log";

const status = true || "production"; // production

noLog(status);
```
