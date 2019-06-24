import Input from './src/input.vue'

function install(Vue) {
  Vue.component(Input.name, Input)
}

Input.install = install

export default Input
