import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/rule',
      name: 'rule',
      component: () => import('../components/rule.vue')
    },
    {
      path: '/send',
      name: 'send',
      component: () => import('../components/send.vue')
    },
    {
      path: '/all',
      name: 'all',
      component: () => import('../components/all.vue')
    },
    {
      path: '/success',
      name: 'success',
      component: () => import('../components/success.vue')
    },
    {
      path: '/faile',
      name: 'faile',
      component: () => import('../components/faile.vue')
    },
    {
      path: '/tempmanage',
      name: 'tempmanage',
      component: () => import('../components/tempmanage.vue')
    },{
      path: '/module',
      name: 'module',
      component: () => import('../components/cardinfo.vue')
    },
    
  ]
})
