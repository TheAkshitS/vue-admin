import Show from './Composer.vue'

function install(Vue) {
  Vue.component(Show.name, Show)
}

Show.install = install

export default Show
