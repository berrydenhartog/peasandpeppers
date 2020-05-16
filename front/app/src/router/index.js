import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
/* eslint-disable */

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/subscription',
    name: 'Subscription',
    component: () => import(/* webpackChunkName: "subscription" */ '../views/Subscription.vue')
  },
  {
    path: '/product/:name',
    name: 'Product',
    props: { name: 'unknown' },
    component: () => import(/* webpackChunkName: "product" */ '../views/Product.vue')
  },
  {
    path: '/auth',
    name: 'Authenticator',
    component: () => import(/* webpackChunkName: "subscription" */ '../views/Subscription.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
