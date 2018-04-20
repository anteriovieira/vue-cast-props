import Upcast from 'upcast'
import { getType } from './Util'

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
        const type = Upcast.is(cast, 'string') ? cast : getType(cast)

        c[name] = Upcast.to(this.$props[name], type.toLowerCase())
        return c
      }, {})
    }
  }
}
