<template>
  <div id="app">
    <!-- START NAV -->
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="">
          <img src="./assets/logo.png" alt="Logo">
        </a>
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item" :to="{ name: 'Home' }">Home</router-link>
        </div>
        <div class="navbar-end">
          <router-link class="navbar-item" :to="{ name: 'Subscription' }">Subscriptions</router-link>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">Account</a>
            <div class="navbar-dropdown">
              <a class="navbar-item">Profile</a>
              <a class="navbar-item">Settings</a>
              <hr class="navbar-divider">
              <div class="navbar-item">Logout</div>
            </div>
          </div>
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
