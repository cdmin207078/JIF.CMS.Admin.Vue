import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'


import axios from 'axios'
axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:60007'
// axios.defaults.headers.common['Authorization'] = '123456';


import iView from 'iview'
import 'iview/dist/styles/iview.css'    // 使用 CSS

import routes from './routes'
import App from './App'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(iView)
Vue.prototype.$http = axios


import moment from 'moment'
Vue.prototype.$moment = moment

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})