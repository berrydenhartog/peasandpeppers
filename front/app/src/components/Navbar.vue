<template>    
  <div class="mynavbar"> 
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link v-on:click.native="toggleisactive" class="navbar-item" :to="{ name: 'Home' }">
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
          <div class="navbar-item has-dropdown  is-hoverable">
            <router-link v-on:click.native="toggleisactive" class="navbar-link is-uppercase is-arrowless" :to="{ name: 'Catering'}">
              Catering
            </router-link>
          </div>
          <div class="navbar-item has-dropdown  is-hoverable">
            <router-link v-on:click.native="toggleisactive" class="navbar-link is-uppercase is-arrowless" :to="{ name: 'OverOns'}">
              Over Ons
            </router-link>
          </div>
          <div class="navbar-item has-dropdown  is-hoverable">
            <router-link v-on:click.native="toggleisactive" class="navbar-link is-uppercase is-arrowless" :to="{ name: 'Contact'}">
              Contact
            </router-link>
          </div>


        </div>
        <div class="navbar-end">
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import Store from '../store/'
// eslint-disable-next-line
import { components, AmplifyEventBus } from 'aws-amplify-vue'

export default {
  name: 'Navbar',
  data() {
    return {
      showNav: false,
    }
  },
  computed: {
    user() { 
      return Store.state.user
    },
    producten() { 
      return Store.state.producten
    },
  },
  methods: {
    toggleisactive(event) {
      event.target.blur()
      this.showNav = false
    },
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