import Vue from 'vue/dist/vue.esm'
import Router from 'vue-router'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About Us',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact Us',
      component: Contact
    },
  ]
})