import SimpleFormWrapper from './SimpleFormWrapper.vue'

function install(Vue) {
  Vue.component(SimpleFormWrapper.name, SimpleFormWrapper)
}

SimpleFormWrapper.install = install

export default SimpleFormWrapper
