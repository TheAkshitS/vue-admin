import TextInputWrapper from './TextInputWrapper.vue'

function install(Vue) {
  Vue.component(TextInputWrapper.name, TextInputWrapper)
}

TextInputWrapper.install = install

export default TextInputWrapper
