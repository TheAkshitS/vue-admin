export default {
  namespaced: true,
  state: {
    routes: [],
  },
  mutations: {
    addRoute({ routes }, { path, name, addedRouteCallback }) {
      let matchingPathRouteIndex
      const newRoute = { path, name }
      const searchMatchingIndex = (route, index) => {
        if (route.name === name) matchingPathRouteIndex = index
      }
      routes.forEach(searchMatchingIndex)
      if (matchingPathRouteIndex !== undefined) {
        routes[matchingPathRouteIndex] = newRoute
      } else {
        routes.push(newRoute)
        addedRouteCallback()
      }
    },
  },
  getters: {
    all: state => state.routes,
  },
}
