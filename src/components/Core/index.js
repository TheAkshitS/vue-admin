import Core from './src/core.vue'

function install(Vue) {
  Vue.component(Core.name, Core)
}

Core.install = install

export default Core
