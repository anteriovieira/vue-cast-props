import Upcast from 'upcast'

function getType (fn) {
  const match = fn && fn.toString().match(/^\s*function (\w+)/)
  return match ? match[1] : ''
}

export default {
  beforeCreate () {
    const { props } = this.$options
    if (!props) return

    this._$casting = Object.keys(props)
      .filter(name => props[name].cast)
      .map(name => {
        const { cast } = props[name]
        return [name, cast]
      })
  },

  computed: {
    $c () {
      return this._$casting.reduce((c, [name, cast]) => {
        c[name] = Upcast.to(this.$props[name], cast)
        return c
      }, {})
    }
  }
}
