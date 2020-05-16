import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//import { AmplifyPlugin } from 'aws-amplify-vue';
//import * as AmplifyModules from 'aws-amplify';

//Vue.use(AmplifyPlugin, AmplifyModules);
Vue.use(VueRouter)

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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
