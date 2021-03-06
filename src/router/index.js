import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import store from '@/store'
import { Message } from 'element-ui';
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
Vue.use(Router)

const router = new Router({
  // mode:'history',
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

    , {
      path: '/permission',
      component: main,
      children: [
        {
          name: 'permission',
          path: '/',
          component: () => import('../views/permission.vue'),
        }
      ]

    },

  ]
})

router.beforeEach((to,from,next)=>{
    NProgress.start();
    if(to.path==='/login') {
      store.state.name?next('/'): next()
      NProgress.done();
    }
    else{
      if(store.state.name){
        next()
      }else{
        Message.error('未登录，请前往登陆')
        next('/login')
      }
    }
  })

  router.afterEach(()=>{
    NProgress.done();
  })
export default router
