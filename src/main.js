import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'

import logUrl from './assets/img/logo.png'

const Images = {
  logUrl
}

Vue.prototype.$Images = Images
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
