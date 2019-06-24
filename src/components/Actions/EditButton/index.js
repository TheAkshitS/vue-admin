import EditButton from './EditButton.vue'

function install(Vue) {
  Vue.component(EditButton.name, EditButton)
}

EditButton.install = install

export default EditButton
