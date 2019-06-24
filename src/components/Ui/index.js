import Ui from './src/ui.vue'

function install(Vue) {
  Vue.component(Ui.name, Ui)
}

Ui.install = install

export default Ui
