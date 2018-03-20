// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import API from './api/index'
import fetch from './middlewares/fetch'

Vue.config.productionTip = false
Vue.prototype.API = API
Vue.prototype.fetch = fetch

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
