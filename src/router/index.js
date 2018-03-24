import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['../pages/index'], resolve),
      children: [
        {
          path: '/',
          name: 'lost',
          meta: { title: '寻物' },
          component: resolve => require(['../pages/lost'], resolve)
        },
        {
          path: '/add',
          name: 'add',
          meta: { title: '失物招领' },
          component: resolve => require(['../pages/add'], resolve)
        },
        {
          path: '/found',
          name: 'found',
          meta: { title: '招领' },
          component: resolve => require(['../pages/found'], resolve)
        },
        {
          path: '/search',
          name: 'search',
          meta: { title: '搜索' },
          component: resolve => require(['../pages/search'], resolve)
        },
        {
          path: '/mine',
          name: 'mine',
          meta: { title: '我的' },
          component: resolve => require(['../pages/mine'], resolve)
        }
      ]
    }
  ]
})

export default router
