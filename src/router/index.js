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
      path: '/card-set',
      name: 'card-set',
      component: () => import('../components/card-setting.vue')
    },
    {
      path: '/old',
      name: 'old',
      component: () => import('../components/old.vue')
    },
    {
      path: '/ccc',
      name: 'ccc',
      component: () => import('../components/pdf.vue')
    },
    {
      path: '/upload',
      name: '222',
      component: () => import('../components/upload.vue')
    }
  ]
})
