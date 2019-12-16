import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/use_coin',
      name: 'use_coin',
      component: () => import('./views/Use_coin.vue'),
    },
    {
      path: '/create_coin',
      name: 'create_coin',
      component: () => import('./views/Create_coin.vue'),
    },
    {
      path: '/qr_reader',
      name: 'qr_reader',
      component: () => import('./views/Qr_reader.vue'),
    },
    {
      path: '/QR',
      name: 'QR',
      component: () => import('./views/Qr_camera.vue'),
    }
  ]
})
