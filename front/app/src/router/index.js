import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { components, AmplifyEventBus } from 'aws-amplify-vue';
import  * as AmplifyModules from 'aws-amplify';
import { AmplifyPlugin } from 'aws-amplify-vue';
import AmplifyStore from '../store';

/* eslint-disable */

Vue.use(VueRouter);
Vue.use(AmplifyPlugin, AmplifyModules);
let user;

getUser().then((user, error) => {
  if (user) {
    router.push({path: '/'})
  }
})

AmplifyEventBus.$on('authState', async (state) => {
  if (state === 'signedOut'){
    user = null;
    AmplifyStore.commit('setUser', null);
    router.push({path: '/auth'})
  } else if (state === 'signedIn') {
    user = await getUser();
    router.push({path: '/'})
  }
});

function getUser() {
  return Vue.prototype.$Amplify.Auth.currentAuthenticatedUser().then((data) => {
    if (data && data.signInUserSession) {
      AmplifyStore.commit('setUser', data);
      return data;
    } 
  }).catch((e) => {
    AmplifyStore.commit('setUser', null);
    return null
  });
}

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
    component: components.Authenticator
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
