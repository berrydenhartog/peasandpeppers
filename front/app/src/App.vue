<template>
  <div id="app">
    <!-- START NAV -->
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link class="navbar-item" :to="{ name: 'Home' }">
          <img src="./assets/logo.png" alt="Logo">
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
            <a class="navbar-link">Inloggen</a>
            <div class="navbar-dropdown">
              <a class="navbar-item">Mijn bestellingen</a>
              <a class="navbar-item">Profiel</a>
              <hr class="navbar-divider">
              <router-link class="navbar-item" :to="{ name: 'Authenticator' }">
                Login
              </router-link>
            </div>
          </div>  
          <router-link class="navbar-item" :to="{ name: 'Home' }">Producten</router-link>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">Meer</a>
            <div class="navbar-dropdown">
              <a class="navbar-item">Klantenservice</a>
              <a class="navbar-item">Zakelijk Bestellen</a>
              <a class="navbar-item">Over Ezra</a>
            </div>
          </div>  
        </div>
        <div class="navbar-end">
          <div class="navbar-item field">
            <div class="control has-icons-left has-icons-right">
              <input class="input" type="search" placeholder="Zoek Product">
              <span class="icon is-small is-right">
                <i class="mdi mdi-magnify"></i>
              </span>
            </div>
          </div>
          <router-link class="navbar-item" :to="{ name: 'Subscription' }">Abonnement</router-link>
          <a class="navbar-item">
            <span class="icon">
              <i class = "mdi mdi-24px mdi-cart-outline"></i> 
            </span>
          </a>
        </div>
      </div>
    </nav>
    <!-- END NAV -->
    <div id="app">
      <router-view/>
    </div>

    <!-- START NAV -->
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Webshop</strong> by Berry den Hartog.
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Appmain',
  data: () => ({
    showNav: false
  }),
}
</script>

