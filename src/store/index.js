import Vue from 'vue'
import Vuex from 'vuex'
import * as tabbar from '../pages/tabbar/store'
import * as index from '../pages/index/store'

Vue.use(Vuex)

const env = process.env.NODE_ENV || 'production'
const debug = env !== 'production'

const store = new Vuex.Store({
  debug,
  env,
  modules: {
    tabbar,
    index
  }
})

export default store
