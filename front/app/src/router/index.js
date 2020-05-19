import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import cognitoAuth from '@/cognito'
/* eslint-disable */

Vue.use(VueRouter);

function requireAuth (to, from, next) {
  cognitoAuth.isAuthenticated((err, loggedIn) => {
    console.log(err,loggedIn)
    if (err) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
    if (!loggedIn) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  })
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
    path: '/account/',
    name: 'Account',
    component: () => import(/* webpackChunkName: "account" */ '../views/Account.vue'),
    beforeEnter: requireAuth
  },
  {
    path: '/login/',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
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

export default router
