
import Resource from './src/Composer.vue'

function install(Vue) {
  Vue.component(Resource.name, Resource)
}

Resource.install = install

export default Resource
