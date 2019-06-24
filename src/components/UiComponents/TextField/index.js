import TextField from './src/textField.vue'

function install(Vue) {
  Vue.component(TextField.name, TextField)
}

TextField.install = install

export default TextField
