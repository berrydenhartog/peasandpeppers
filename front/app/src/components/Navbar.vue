<template>    
  <div class="mynavbar"> 
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link class="navbar-item" :to="{ name: 'Home' }">
          <img src="@/assets/logo.jpg" alt="Logo">
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
          <a class="navbar-item">
            <span class="icon is-large">
              <router-link class="navbar-item" :to="{ name: 'Account' }">
                <i class = "mdi mdi-24px mdi-account"></i> 
              </router-link>
            </span>
          </a>
          <a class="navbar-item">
            <span class="icon is-large">
              <router-link class="navbar-item" :to="{ name: 'Winkelwagen' }">
                <i class = "mdi mdi-24px mdi-cart-outline"></i> 
              </router-link>
            </span>
          </a> 
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: ['showNav'],
}
</script>