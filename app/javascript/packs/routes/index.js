import Vue from 'vue/dist/vue.esm'
import Router from 'vue-router'
import Home from '../components/Home'
import users from './users'

Vue.use(Router)

// set default route
let routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

export default new Router({
  routes: [
    ...routes,
    ...users
  ]
})