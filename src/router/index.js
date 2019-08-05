import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/Home.vue')
    },
    {
      path: '/aaa',
      name: 'aaa',
      component: () => import('../components/reissue.vue')
    },
    {
      path: '/bbb',
      name: 'bbb',
      component: () => import('../components/card-setting.vue')
    },
    {
      path: '/ccc',
      name: 'ccc',
      component: () => import('../components/pdf.vue')
    }
  ]
})
