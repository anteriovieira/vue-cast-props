# Custom casts

You can provide custom casts.

## Usage

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