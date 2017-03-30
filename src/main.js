import Vue from 'vue'
import VueRouter from 'vue-router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'    // 使用 CSS

import routes from './routes'
import App from './App'

Vue.use(VueRouter)
Vue.use(iView)

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app');