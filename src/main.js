import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'


import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:60007'
// axios.defaults.headers.common['Authorization'] = '123456';
axios.defaults.onUploadProgress = null
axios.defaults.onDownloadProgress = null
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  console.info(response)
  return response
}, function (error) {
  
  // 对响应错误做点什么
  this.$Message.error(error.response.data.message)
  
  return Promise.reject(error)
});


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
  routes,
  // mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})