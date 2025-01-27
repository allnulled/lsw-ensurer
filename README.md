# lsw-ensurer

Simple API to do checks and keep good error reporting. For node.js or browser.

Branch of [@allnulled/ensure](https://github.com/allnulled/ensure).

## Installation

```sh
npm install -s @allnulled/ensure
```

Then on node.js:

```js
const ensure = require("@allnulled/ensure");
```

Or on browser:

```html
<script src="node_modules/@allnulled/ensure/ensure.js"></script>
```

This will overwrite the global `ensure` as a function.


## Usage

This is all the API. With `can` you can do anything: it must return true, otherwise it will `throw` an error.

The others are variants of `can`.

```js
const v = 500;

ensure({ v }).is(500);
ensure({ v }).isnt(501);
ensure({ v }).type("number");
ensure({ v }).notType("string");
ensure({ v }).can(n => n > 100);
ensure({ v }).cant(n => n < 100);
ensure({ v }).throws(n => { throw new Error("wherever"); });
ensure({ v }).doesntThrow(n => "ok!");
```