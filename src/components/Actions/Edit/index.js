import Edit from './Composer.vue'

function install(Vue) {
  Vue.component(Edit.name, Edit)
}

Edit.install = install

export default Edit
