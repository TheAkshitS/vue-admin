
import Unauthorized from './unauthorized.vue'

function install(Vue) {
  Vue.component(Unauthorized.name, Unauthorized)
}

Unauthorized.install = install

export default Unauthorized
