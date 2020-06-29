import Vue from 'vue'
import VueRouter from 'vue-router'
// eslint-disable-next-line
import { components, AmplifyEventBus } from 'aws-amplify-vue';
import Store from '../store/'
import Home from '../views/Home.vue'
import Maaltijden from '../views/Shop.vue'
import MaaltijdenVolgende from '../views/Shop.vue'
import Taarten from '../views/Taarten.vue'
import Login from '../views/Login.vue'
import Account from '../views/Account.vue'
import Winkelwagen from '../views/Winkelwagen.vue'
import FAQ from '../views/FAQ.vue'
import Contact from '../views/Contact.vue'
import AlgemeneVoorwaarden from '../views/AlgemeneVoorwaarden.vue'
import Privacyverklaring from '../views/Privacyverklaring.vue'
import Error from '../views/Error.vue'
import Abonnementen from '../views/Abonnementen.vue'
import OverOns from '../views/OverOns.vue'
import Overige from '../views/Overige.vue'
import HoeWijRollen from '../views/HoeWijRollen.vue'
import Catering from '../views/Catering.vue'


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
    path: '/abonnementen',
    name: 'Abonnementen',
    component: Abonnementen
  },
  {
    path: '/shop/taarten',
    name: 'Taarten',
    component: Taarten
  },
  {
    path: '/shop/overige',
    name: 'Overige',
    component: Overige
  },
  {
    path: '/shop/maaltijden',
    name: 'Maaltijden',
    component: Maaltijden
  },
  {
    path: '/shop/maaltijden/volgende-week',
    name: 'MaaltijdenVolgende',
    component: MaaltijdenVolgende
  },
  {
    path: '/over-ons',
    name: 'OverOns',
    component: OverOns
  },
  {
    path: '/hoe-wij-rollen',
    name: 'HoeWijRollen',
    component: HoeWijRollen
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
    path: '/faq/',
    name: 'FAQ',
    component: FAQ
  },
  {
    path: '/catering/',
    name: 'Catering',
    component: Catering
  },
  {
    path: '/contact/',
    name: 'Contact',
    component: Contact
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
	scrollBehavior(to, from, savedPosition) {
		if (to.hash) {
      return { selector: to.hash }
		} else if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 }
    }
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
