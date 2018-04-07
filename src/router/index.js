import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['../pages/tabbar'], resolve),
      redirect: { name: 'index' },
      children: [
        {
          path: '/index',
          name: 'index',
          meta: { title: '失物招领' },
          component: resolve => require(['../pages/index'], resolve),
          redirect: { name: 'lost' },
          children: [
            {
              path: '/index/lost',
              name: 'lost',
              meta: { title: '寻物' },
              component: resolve => require(['../pages/lost'], resolve)
            },
            {
              path: '/index/find',
              name: 'find',
              meta: { title: '招领' },
              component: resolve => require(['../pages/find'], resolve)
            }
          ]
        },
        {
          path: '/add',
          name: 'add',
          meta: { title: '发帖' },
          component: resolve => require(['../pages/add'], resolve)
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
    },
    {
      path: '/mine/found',
      name: 'mine-found',
      meta: { title: '已认领-我的' },
      component: resolve => require(['../pages/mine-found'], resolve)
    },
    {
      path: '/mine/lost',
      name: 'mine-lost',
      meta: { title: '已认领-我的' },
      component: resolve => require(['../pages/mine-lost'], resolve)
    },
    {
      path: '/mine/unfinished',
      name: 'mine-unfinished',
      meta: { title: '已认领-我的' },
      component: resolve => require(['../pages/mine-unfinished'], resolve)
    },
    {
      path: '/edit-contact',
      name: 'edit-contact',
      meta: { title: '更改联系方式' },
      component: resolve => require(['../pages/edit-contact'], resolve)
    },
    {
      path: '/about',
      name: 'about',
      meta: { title: '关于我们' },
      component: resolve => require(['../pages/about'], resolve)
    },
    { path: '*', component: resolve => require(['../pages/404'], resolve) }
  ]
})

export default router
