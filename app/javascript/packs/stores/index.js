import Vue from 'vue/dist/vue.esm'
import Vuex from 'vuex'
import dashboard from './dashboard'
import users from './users'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ...dashboard.state,
    ...users.state,
  },
  getters: {
    ...dashboard.getters,
    ...users.getters,
  },
  mutations: {
    ...dashboard.mutations,
    ...users.mutations,
  },
  actions: {
    ...dashboard.actions,
    ...users.actions,
  }
})