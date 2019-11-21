export default {
  state: {
    nav_bar: {
      collapse: true
    }
  },
  getters: {
    collapseSideBar: state => {
      return state.nav_bar.collapse === true ? 'nav-collapsed' : 'nav-expanded'
    },
    collapseMainContainer: state => {
      return state.nav_bar.collapse === true ? 'main-full' : ''
    }
  },
  mutations: {
    UPDATE_NAVBAR: (state, data) => {
      state.nav_bar = data
    }
  },
  actions: {
    toggleNavBar: (context, data) => {
      context.commit("UPDATE_NAVBAR", data)
    }
  }
}