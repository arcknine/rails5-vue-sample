import Vue from 'vue/dist/vue.esm'
import router from './router'
import App from './components/App.vue'
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
