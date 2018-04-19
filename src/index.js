import CastMixin from './CastMixin'
import Upcast from 'upcast'

function plugin (Vue) {
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