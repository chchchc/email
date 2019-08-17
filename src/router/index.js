import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main,
      redirect: '/tempmanage'
    },
    {
      path: '/rule',
      component: main,
      children: [
        {
          path: '/',
          name: 'rule',
          component: () => import('../views/rule.vue'),
        }
      ]
    },
    {
      path: '/send',
      component: main,
      children: [
        {
          name: 'send',
          path: '/',
          component: () => import('../views/send.vue'),
        }
      ]
    },
    {
      path: '/tempmanage',
      component: main,
      children: [
        {
          name: 'tempmanage',
          path: '/',
          component: () => import('../views/tempmanage.vue'),
        }
      ]

    },
    {
      path: '/module',
      component: main,
      children: [
        {
          name: 'module',
          path: '/',
          component: () => import('../views/cardinfo.vue'),
        }
      ]
    }
    , {
      path: '/userDes',
      name: 'userDes',
      component: () => import('../views/userDescription.vue')

    },
    , {
      path: '/login',
      name: 'login',
      component: () => import('../views/TheLogin.vue')
    },

  ]
})
