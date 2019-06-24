import Spinner from './Spinner.vue'

function install(Vue) {
  Vue.component(Spinner.name, Spinner)
}

Spinner.install = install

export default Spinner
