<template>    
  <div class="myfooter">
    <footer class="footer">
      <div class="columns is-centered">
        <div class="column">
          <h1 class="title is-5">Peas &#38; Peppers</h1>
          <div class="content">
            <ul>
              <li>
                <router-link class="navbar-item" :to="{ name: 'Maaltijden' }">
                  Shop
                </router-link>
              </li>
              <li>
                <router-link class="navbar-item" :to="{ name: 'Abonnementen'}">
                  Abonnementen
                </router-link>
              </li>
              <li>
                <router-link class="navbar-item" :to="{ name: 'OverOns'}">
                  Over Ons
                </router-link>
              </li>
              <li>
                <router-link class="navbar-item" :to="{ name: 'Catering'}">
                  Catering
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="column">
          <h1 class="title is-5">Service</h1>
          <div class="content">
            <ul>
              <li>
                <router-link class="navbar-item" :to="{ name: 'HoeWijRollen'}">
                  Zo werkt het
                </router-link>
              </li>
              <li>
                <router-link class="navbar-item" :to="{ name: 'FAQ'}">
                  FAQ
                </router-link>
              </li>
              <li>
                <router-link class="navbar-item" :to="{ name: 'Contact'}">
                  Contact
                </router-link>
              </li>
              <li>
                <router-link class="navbar-item" :to="{ name: 'AlgemeneVoorwaarden'}">
                  Algemene Voorwaarden
                </router-link>
              </li>
              <li>
                <router-link class="navbar-item" :to="{ name: 'Privacyverklaring'}">
                  Privacybeleid
                </router-link>
              </li>
              
            </ul>
          </div>
        </div>
        <div class="column">
          <h1 class="title is-5">Follow us</h1>
          <span class="icon is-large">
            <a href="https://www.facebook.com/pages/category/Caterer/Peas-Peppers-105556761066101/" target="_blank">
              <i class="mdi mdi-24px mdi-facebook"></i>
            </a>
          </span>
          <span class="icon is-large">
            <a href="https://www.instagram.com/peas.and.peppers/" target="_blank">
              <i class="mdi mdi-24px mdi-instagram"></i>
            </a>
          </span>
        </div>
      </div>
      <div class="content has-text-centered">
        <p>
          &copy; <strong> Peas  &#38; Peppers</strong> <br>
          Made by <a href="https://sugarfly.nl" target="_blank">SugarFly</a>
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>
