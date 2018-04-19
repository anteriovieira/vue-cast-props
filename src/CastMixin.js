import Upcast from 'upcast'

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
        const type = typeof cast === 'string' ? cast : Upcast.type(Array)

        c[name] = Upcast.to(this.$props[name], type)
        return c
      }, {})
    }
  }
}
