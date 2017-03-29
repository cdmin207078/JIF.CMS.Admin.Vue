import Vue from 'vue'
import iView from 'iview'
import 'iview/dist/styles/iview.css'    // 使用 CSS

import App from './App'

Vue.use(iView)

new Vue({
  el: '#app',
  render: h => h(App)
}).$mount('#app');