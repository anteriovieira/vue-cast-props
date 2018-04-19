# vue-cast-props [![Build Status](https://img.shields.io/circleci/project/anteriovieira/vue-cast-props/master.svg)](https://circleci.com/gh/anteriovieira/vue-cast-props) [![npm package](https://img.shields.io/npm/v/vue-cast-props.svg)](https://www.npmjs.com/package/vue-cast-props) [![coverage](https://img.shields.io/codecov/c/github/anteriovieira/vue-cast-props.svg)](https://codecov.io/github/anteriovieira/vue-cast-props)

> vue-cast-props

## Installation

The `cast` property on your component provides a convenient way of converting props to common data types. The `cast` value property should be an string. The supported `cast` types are: `array`, `boolean`, `function`, `number`, `object` and `string`.


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

```html
<template>
  <div>Active {{ $c.active }}</div>
</template>
```

## License

[MIT](http://opensource.org/licenses/MIT)
