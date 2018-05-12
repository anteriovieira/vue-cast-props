import CastMixin from './CastMixin'
import Upcast from 'upcast'
import { merge } from './Util'

const defaultOptions = {
  casts: {
    'date': v => new Date(v)
  }
}

function plugin (Vue, options = {}) {
  const casts = merge(defaultOptions.casts, options.casts)

  // Add custom casts
  Object.keys(casts).forEach(name => {
    Upcast.add(name, casts[name])
  })

  // Add api
  Vue.prototype.$cast = Upcast

  Vue.mixin(CastMixin)
}

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
const version = '__VERSION__'
// Export all components too
export {
  CastMixin,
  version
}
