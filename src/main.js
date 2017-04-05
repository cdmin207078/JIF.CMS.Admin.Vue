import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'


import axios from 'axios'
axios.defaults.withCredentials = false


import iView from 'iview'
import 'iview/dist/styles/iview.css'    // 使用 CSS

import routes from './routes'
import App from './App'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(iView)
Vue.prototype.$http = axios


const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app');