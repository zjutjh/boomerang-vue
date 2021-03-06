import Vue from 'vue'
import Vuex from 'vuex'
import * as tabbar from '../pages/tabbar/store'
import * as add from '../pages/add/store'
import * as index from '../pages/index/store'
import * as lost from '../pages/lost/store'
import * as find from '../pages/find/store'
import * as mineLost from '../pages/mine-lost/store'
import * as mineFound from '../pages/mine-found/store'
import * as mineUnfinished from '../pages/mine-unfinished/store'
import * as detail from '../pages/detail/store'
import * as auth from './auth'
import * as toast from './toast'

Vue.use(Vuex)

const env = process.env.NODE_ENV || 'production'
const debug = env !== 'production'

const store = new Vuex.Store({
  debug,
  env,
  modules: {
    auth,
    toast,
    tabbar,
    add,
    index,
    lost,
    find,
    mineLost,
    mineFound,
    mineUnfinished,
    detail
  }
})

export default store
