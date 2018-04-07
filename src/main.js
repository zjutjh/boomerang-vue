// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueCarousel from 'vue-carousel'
import App from './App'
import router from './router'
import store from './store'
import API from './api/index'
import fetch from './middlewares/fetch'
import './common/style/index.scss'
import getValue from './common/mixin/getValue'

Vue.use(VueCarousel)
Vue.config.productionTip = false
Vue.prototype.API = API
Vue.prototype.fetch = fetch
Vue.prototype.getValue = getValue

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
