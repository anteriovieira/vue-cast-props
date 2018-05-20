---
home: true
heroImage: https://raw.githubusercontent.com/anteriovieira/vue-cast-props/master/docs/media/vue-cast-props-logo.png
actionText: Get Started →
actionLink: /guide/
footer: MIT Licensed | Copyright © 2018-present Antério
description: Cast props to Vue components
meta:
  - name: og:title
    content: VueCastProps
  - name: og:description
    content: Cast props to Vue components
---

# Quick Setup

## Installation

```sh
yarn add vue-cast-props
# or
npm install vue-cast-props
```

## Usage

```js
import VueCastProps from 'vue-cast-props'

Vue.use(VueCastProps, /* options */)
```

```vue
<template>
  <span>{{ $c.value.split(',) }}</span>
</template>

<script>
export default {
  props: {
    values: {
      type: [Array, Number, String],
      cast: Array
    }
  }
}
</script>
```
