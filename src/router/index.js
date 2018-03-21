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
          component: resolve => require(['../pages/lost'], resolve)
        },
        {
          path: '/found',
          name: 'found',
          meta: { title: '个人中心' },
          component: resolve => require(['../pages/found'], resolve)
        }
      ]
    }
  ]
})

export default router
