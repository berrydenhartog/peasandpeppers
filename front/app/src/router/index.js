import Vue from 'vue'
import VueRouter from 'vue-router'
// eslint-disable-next-line
import { components, AmplifyEventBus } from 'aws-amplify-vue';
import Store from '../store/'
import Home from '../views/Home.vue'
import Maaltijden from '../views/Maaltijden.vue'
import Taarten from '../views/Taarten.vue'
import Login from '../views/Login.vue'
import Account from '../views/Account.vue'
import Winkelwagen from '../views/Winkelwagen.vue'
import Producten from '../views/Producten.vue'
import FAQ from '../views/FAQ.vue'
import Contact from '../views/Contact.vue'
import Ezra from '../views/Ezra.vue'
import Catering from '../views/Catering.vue'
import AlgemeneVoorwaarden from '../views/AlgemeneVoorwaarden.vue'
import Privacyverklaring from '../views/Privacyverklaring.vue'
import Error from '../views/Error.vue'

Vue.use(VueRouter);

let user;

AmplifyEventBus.$on('authState', async (state) => {
  if (state === 'signedOut'){
    user = null;
    Store.commit('setUser', null);
    router.push({path: '/'})
  } else if (state === 'signedIn') {
    user = await getUser();
    router.push({path: '/account/'})
  }
});

function getUser() {
  return Vue.prototype.$Amplify.Auth.currentAuthenticatedUser().then((data) => {
    if (data && data.signInUserSession) {
      Store.commit('setUser', data);
      return data;
    } 
  // eslint-disable-next-line
  }).catch((e) => {
    Store.commit('setUser', null);
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
    component: Maaltijden
  },
  {
    path: '/taarten/',
    name: 'Taarten',
    component: Taarten
  },
  {
    path: '/login/',
    name: 'Login',
    component: Login
  },
  {
    path: '/account/',
    name: 'Account',
    component: Account,
    meta: { requiresAuth: true }
  },
  {
    path: '/winkelwagen/',
    name: 'Winkelwagen',
    component: Winkelwagen
  },
  {
    path: '/producten/',
    name: 'Producten',
    component: Producten
  },
  {
    path: '/faq/',
    name: 'FAQ',
    component: FAQ
  },
  {
    path: '/contact/',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/ezra/',
    name: 'Ezra',
    component: Ezra
  },
  {
    path: '/catering/',
    name: 'Catering',
    component: Catering
  },
  {
    path: '/algemenevoorwaarden/',
    name: 'AlgemeneVoorwaarden',
    component: AlgemeneVoorwaarden
  },
  {
    path: '/privacyverklaring/',
    name: 'Privacyverklaring',
    component: Privacyverklaring
  }
  ,
  {
    path: '*',
    name: 'Error',
    component: Error
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return {x: 0, y: 0}
  }
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
