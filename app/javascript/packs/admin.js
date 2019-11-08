import Vue from 'vue/dist/vue.esm'
import router from './router'
import App from './components/admin/App'
import store from './store'

Vue.config.productionTip = false

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
  })
})
