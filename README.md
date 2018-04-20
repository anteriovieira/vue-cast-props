# vue-cast-props [![Build Status](https://img.shields.io/circleci/project/anteriovieira/vue-cast-props/master.svg)](https://circleci.com/gh/anteriovieira/vue-cast-props) [![npm package](https://img.shields.io/npm/v/vue-cast-props.svg)](https://www.npmjs.com/package/vue-cast-props) [![coverage](https://img.shields.io/codecov/c/github/anteriovieira/vue-cast-props.svg)](https://codecov.io/github/anteriovieira/vue-cast-props)

> vue-cast-props

## Installation

The `cast` property on your component provides a convenient way of converting props to common data types. The `cast` value should be an string. The supported `cast` types are: `array`, `boolean`, `function`, `number`, `date`, `object` and `string`.


```sh
yarn add vue-cast-props
# or
npm install vue-cast-props
```

Use the mixin globally or locally:

```js
// globally
import CastPropsMixin from 'vue-cast-props'

Vue.use(CastPropsMixin)

// locally
import {CastMixin} from 'vue-cast-props'

export default {
  // other options
  mixins: [CastMixin],
}
```

## Use

```js
export default {
  props: {
    active: {
      cast: 'string'
    }
  }
}
```

Now the `active` prop will always be cast to a string when you access it with `$c.active`.


```html
<template>
  <div>Active {{ $c.active }}</div>
</template>
```

## Custom casts

You can provide custom casts.

```js
// main.js
import CastPropsMixin from 'vue-cast-props'

Vue.use(CastPropsMixin, {
  casts: {
    username: v => v.trim()
  }
})
```

```js
// profile.vue
export default {
  props: {
    name: {
      cast: 'username'
    }
  }
}
```

```html
<div>
  Username: {{ $c.name }}
</div>
```

## API

`vue-cast-props` exposes the [upcast](https://github.com/OmgImAlexis/upcast#usage) api to the vue instance, so you can use your resources internally:

- [`type`](#type)
- [`is`](#is)
- [`to`](#to)

### type

- val: `mixed` The object to get the type of.

Get the type of an object.


```js
vm.$cast.type([]); // 'array'
vm.$cast.type(true); // 'boolean'
vm.$cast.type(function () {}); // 'function'
vm.$cast.type(null); // 'null'
vm.$cast.type(123); // 'number'
vm.$cast.type({}); // 'object'
vm.$cast.type('foo'); // 'string'
vm.$cast.type(undefined); // 'undefined'
```

### is

- val: `mixed` The object to check the type of.
- type: `string` The type to check for.

Check whether an object is of a given type. This accepts two arguments: 

```js
vm.$cast.is('foo', 'string'); // true
vm.$cast.is(123, 'string'); // false

vm.$cast.is([], 'array'); // true
vm.$cast.is([], 'object'); // false

vm.$cast.is(null, 'null'); // true
vm.$cast.is(null, 'object'); // false
```

### to

- val: `mixed` The object to convert.
- type: `string` The type to convert to

Convert an object to a specific type. This accepts two arguments.

The way types are converted aims to be sensible and allow easy switching back-and-forth of common types. For example, switching between strings and arrays is quite fluid:

Example:
```js
vm.$cast.to('foo', 'array'); // ['f', 'o', 'o']
vm.$cast.to(['f', 'o', 'o'], 'string'); // 'foo'
```

You can use [type aliases](#type-aliases) with this function. The examples below illustrate the way types are converted.

#### Converting to an array

Converting to an array from a boolean, function, number or object simply wraps the value in an array:

Example:
```js
vm.$cast.to(123, 'array'); // [123]
```

Strings are handled differently, an array is returned with each character in the string as an item:

Example:
```js
vm.$cast.to('foo', 'array'); // ['f', 'o', 'o']
```

Null and undefined are converted to an empty array:

Example:
```js
vm.$cast.to(null, 'array'); // []
```

#### Converting to a boolean

Boolean conversion simply converts to `true` or `false` based on whether the value is truthy or not. The only case where this doesn't follow JavaScript's standard behaviour is with empty arrays which are converted to `false`:

Example:
```js
vm.$cast.to([1, 2, 3], 'boolean') // true
vm.$cast.to([], 'boolean') // false
```

#### Converting to a function

When converting to a function, the original value is simply wrapped in a new function. This function returns the original value:

Example:
```js
vm.$cast.to('foo', 'function'); // function () { return 'foo'; }
```

#### Converting to null

As expected, converting to null will always return `null`:

Example:
```js
vm.$cast.to('foo', 'null'); // null
```

#### Converting to a number

Converting to a number from a boolean, function, null or object simply calls `Number` with the original value as an argument, returning the expected value:

Example:
```js
vm.$cast.to('true', 'number'); // 1
```

Arrays and strings are handled differently, an array is joined to create a string, then evaluated with `parseInt`; strings are simply evaluated with `parseInt`:

Example:
```js
vm.$cast.to([1, 2, 3], 'number'); // 123
vm.$cast.to('123', 'number'); // 123
vm.$cast.to('foo', 'number'); // 0
```

Undefined is converted to `0` rather than `NaN`:

Example:
```js
vm.$cast.to(undefined, 'number'); // 0
```

#### Converting to an object

Converting to an object simply calls `Object` with the value as a first argument. The following are equivalent:

Example:
```js
vm.$cast.to('foo', 'object');
Object('foo');
```

#### Converting to a string

Converting to a string from a boolean, function, number or object simply returns the value added to an empty string, using JavaScript's default type conversion:

Example:
```js
vm.$cast.to(true, 'string'); // 'true'
vm.$cast.to(123, 'string'); // '123'
```

Arrays are handled differently, they are joined with an empty string:

Example:
```js
vm.$cast.to(['f', 'o', 'o'], 'string'); // 'foo'
```

Null and undefined are converted to an empty string rather than `'null'` and `'undefined'`:

Example:
```js
vm.$cast.to(null, 'string'); // ''
```

#### Converting to undefined

As expected, converting to undefined will always return `undefined`:

Example:
```js
vm.$cast.to('foo', 'undefined'); // undefined
```

[See the full documentation here...](https://github.com/OmgImAlexis/upcast#usage)

## License

[MIT](http://opensource.org/licenses/MIT)
