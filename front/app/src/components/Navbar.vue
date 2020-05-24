<template>    
  <div class="mynavbar"> 
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link class="navbar-item" :to="{ name: 'Home' }">
          <img src="@/assets/logo.png" alt="Logo">
        </router-link>
        <a role="button" class="navbar-burger" v-on:click="showNav = !showNav" >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu" v-bind:class="{ 'is-active' : showNav }">
        <div class="navbar-start">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link is-uppercase">Maaltijden</a>
            <div class="navbar-dropdown">
              <router-link class="navbar-item is-uppercase" :to="{ name: 'Maaltijden', params: { naam: 'deze-week' } }">
                Deze Week
              </router-link>
              <router-link class="navbar-item is-uppercase" :to="{ name: 'Maaltijden', params: { naam: 'volgende-week' } }">
                Volgende Week
              </router-link>
            </div>
          </div>  
          <div class="navbar-item">
            <router-link class="navbar-item is-uppercase" :to="{ name: 'Taarten'}">
              Taarten
            </router-link>
          </div>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link is-uppercase">Over Peas &amp; Peppers</a>
            <div class="navbar-dropdown">
              <router-link class="navbar-item is-uppercase" :to="{ name: 'Ezra' }">
                Ezra
              </router-link>
              <router-link class="navbar-item is-uppercase" :to="{ name: 'Contact' }">
                Contact
              </router-link>
              <router-link class="navbar-item is-uppercase" :to="{ name: 'FAQ' }">
                FAQ
              </router-link>
            </div>
          </div> 
        </div>
        <div class="navbar-end">
          <div class="navbar-item has-dropdown is-hoverable">
            <router-link class="navbar-item is-uppercase" :to="{ name: 'Account' }">
              <span class="icon is-large">
                <i class = "mdi mdi-24px mdi-account"></i> 
              </span>
            </router-link>
            <div class="navbar-dropdown">
              <router-link class="navbar-item is-uppercase" :disabled="!user" :to="{ name: 'Account'}">
                Bestellingen
              </router-link>
              <router-link v-if="!user" class="navbar-item is-uppercase" :to="{ name: 'Login' }">
                Login
              </router-link>
              <a v-if="user" @click="logout" class="navbar-item is-uppercase">
                Logout
              </a>
            </div>
          </div> 
          <router-link class="navbar-item" :to="{ name: 'Winkelwagen' }">
            <span class="icon is-large">
              <i class = "mdi mdi-24px mdi-cart-outline"></i> 
            </span>
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import AmplifyStore from '../store/'
// eslint-disable-next-line
import { components, AmplifyEventBus } from 'aws-amplify-vue'

export default {
  name: 'Navbar',
  props: ['showNav'],
  computed: {
    user() { 
      return AmplifyStore.state.user
    }
  },
  methods: {
    async logout() {
      // eslint-disable-next-line
      this.$Amplify.Auth.signOut()
      .then(() => {
        return AmplifyEventBus.$emit('authState', 'signedOut')
      })
      .catch(e => this.setError(e));
    }
  }
}
</script>