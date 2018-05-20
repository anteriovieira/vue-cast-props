---
prev: false
next: ./getting-started.md
---

# Introduction

The `cast` property on your component provides a convenient way of converting props to common data types. 

## Supported types

The `cast` value should be an string or type.

```js
export default {
  props: {
    age: {
      cast: Number
    }
  }
}
```

| As string | As type | Description |
|-----------|---------|-------------|
| array | `Array` | Cast to Array |
| boolean | `Boolean` | Cast to Boolean |
| function | `Function` | Cast to Function |
| number | `Number` | Cast to Number |
| date | `Date` | Return Date instance |
| object | `Object` | Cast to Object |
| string | `String` | Cast to String |
