import Create from './Composer.vue'

function install(Vue) {
  Vue.component(Create.name, Create)
}

Create.install = install

export default Create
