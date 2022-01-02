# @jdthornton/classnames

[![npm (scoped)](https://img.shields.io/npm/v/@jdthornton/classnames.svg)](https://www.npmjs.com/package/@jdthornton/classnames)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@jdthornton/classnames.svg)](https://www.npmjs.com/package/@jdthornton/classnames)

Class string joining made easy.

## Install

```
$ npm install @jdthornton/classnames
```

## Usage

```js
import classNames from "@jdthornton/classnames";

function makeClass({ className, primary }){
  return classNames("container", primary && "primary", className)
}

console.log(makeClass({className: "card", primary: true}))

//=> "container primary card"
```
