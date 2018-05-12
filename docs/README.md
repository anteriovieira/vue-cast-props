---
home: true
heroImage: /hero.png
actionText: Get Started →
actionLink: /guide/
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

```js
export default {
  props: {
    active: {
      cast: 'string'
    }
  }
}
```