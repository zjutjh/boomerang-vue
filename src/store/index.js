import Vue from 'vue'
import Vuex from 'vuex'
import * as index from '../pages/index/store'

Vue.use(Vuex)

const env = process.env.NODE_ENV || 'production'
const debug = env !== 'production'

const store = new Vuex.Store({
  debug,
  env,
  modules: {
    index
  }
})

export default store
