import List from './Composer.vue'

function install(Vue) {
  Vue.component(List.name, List)
}

List.install = install

export default List
