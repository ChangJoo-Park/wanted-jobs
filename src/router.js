import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import android from './views/android.vue'
import ios from './views/ios.vue'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/android',
      name: 'android',
      component: android
    },
    {
      path: '/ios',
      name: 'ios',
      component: ios
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
