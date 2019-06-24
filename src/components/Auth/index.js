import Auth from './src/Auth.vue'

function install(Vue) {
  Vue.component(Auth.name, Auth)
}

Auth.install = install

export default Auth
