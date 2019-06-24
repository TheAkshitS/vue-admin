import ButtonWrapper from './ButtonWrapper.vue'

function install(Vue) {
  Vue.component(ButtonWrapper.name, ButtonWrapper)
}

ButtonWrapper.install = install

export default ButtonWrapper
