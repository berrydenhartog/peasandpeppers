import Vue from 'vue'
import VueRouter from 'vue-router'
// eslint-disable-next-line
import { components, AmplifyEventBus } from 'aws-amplify-vue';
import Home from '../views/Home.vue'
import AmplifyStore from '../store/'

Vue.use(VueRouter);

let user;

AmplifyEventBus.$on('authState', async (state) => {
  if (state === 'signedOut'){
    user = null;
    AmplifyStore.commit('setUser', null);
    router.push({path: '/'})
  } else if (state === 'signedIn') {
    user = await getUser();
    router.push({path: '/account/'})
  }
});

function getUser() {
  return Vue.prototype.$Amplify.Auth.currentAuthenticatedUser().then((data) => {
    if (data && data.signInUserSession) {
      AmplifyStore.commit('setUser', data);
      return data;
    } 
  // eslint-disable-next-line
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
    path: '/maaltijden/:naam',
    name: 'Maaltijden',
    component: () => import(/* webpackChunkName: "maaltijden" */ '../views/Maaltijden.vue')
  },
  {
    path: '/taarten/',
    name: 'Taarten',
    component: () => import(/* webpackChunkName: "taarten" */ '../views/Taarten.vue')
  },
  {
    path: '/login/',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
  },
  {
    path: '/account/',
    name: 'Account',
    component: () => import(/* webpackChunkName: "account" */ '../views/Account.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/winkelwagen/',
    name: 'Winkelwagen',
    component: () => import(/* webpackChunkName: "winkelwagen" */ '../views/Winkelwagen.vue')
  },
  {
    path: '/producten/',
    name: 'Producten',
    component: () => import(/* webpackChunkName: "producten" */ '../views/Producten.vue')
  },
  {
    path: '/faq/',
    name: 'FAQ',
    component: () => import(/* webpackChunkName: "faq" */ '../views/FAQ.vue')
  },
  {
    path: '/contact/',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  },
  {
    path: '/ezra/',
    name: 'Ezra',
    component: () => import(/* webpackChunkName: "ezra" */ '../views/Ezra.vue')
  },
  {
    path: '/catering/',
    name: 'Catering',
    component: () => import(/* webpackChunkName: "caitering" */ '../views/Catering.vue')
  },
  {
    path: '/algemenevoorwaarden/',
    name: 'AlgemeneVoorwaarden',
    component: () => import(/* webpackChunkName: "algemenevoorwaarden" */ '../views/AlgemeneVoorwaarden.vue')
  },
  {
    path: '/privacybeleid/',
    name: 'Privacybeleid',
    component: () => import(/* webpackChunkName: "privacybeleid" */ '../views/Privacybeleid.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeResolve(async (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    user = await getUser();
    if (!user) {
      return next({
        name: 'Login',
        query: {
          redirect: to.fullPath,
        }
      });
    }
    return next()
  }
  return next()
})

export default router
