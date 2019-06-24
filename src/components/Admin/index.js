import Admin from './src/admin.vue'

function install(Vue) {
  Vue.component(Admin.name, Admin)
}

Admin.install = install

export default Admin
