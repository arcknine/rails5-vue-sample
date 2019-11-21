export default {
  state: {
    users: [],
    current_user: null
  },
  getters: {

  },
  mutations: {
    ADD_USER: (state, data) => {
      state.users.push(data)
    }
  },
  actions: {
    addUser: (context, data) => {
      context.commit("ADD_USER", data)
    }
  }
}