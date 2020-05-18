<template>    
  <div class="myfooter">
    <footer class="footer">
      <div class="columns is-centered">
        <div class="column">
          <h1 class="title is-5">Peas &#38; Peppers</h1>
          <div class="content">
            <ul>
              <li>
                <router-link class="navbar-item" :to="{ name: 'Maaltijden', params: { naam: 'deze-week' } }">
                Maaltijden
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
          <h1 class="title is-5">Over Ons</h1>
          <div class="content">
            <ul>
              <li>
                <router-link class="navbar-item" :to="{ name: 'Contact'}">
                  Contact
                </router-link>
              </li>
              <li>
                <router-link class="navbar-item" :to="{ name: 'FAQ'}">
                  FAQ
                </router-link>
              </li>
              <li>
                <router-link class="navbar-item" :to="{ name: 'AlgemeneVoorwaarden'}">
                  Algemene voorwaarden
                </router-link>
              </li>
              <li>
                <router-link class="navbar-item" :to="{ name: 'Privacybeleid'}">
                  Privacybeleid
                </router-link>
              </li>
              
            </ul>
          </div>
        </div>
        <div class="column">
          <h1 class="title is-5">Volg ons op social</h1>
          <span class="icon is-large">
            <a href="https://www.facebook.com" target="_blank">
              <i class="mdi mdi-24px mdi-facebook"></i>
            </a>
          </span>
          <span class="icon is-large">
            <a href="https://www.instagram.com" target="_blank">
              <i class="mdi mdi-24px mdi-instagram"></i>
            </a>
          </span>
          <span class="icon is-large">
            <a href="https://www.youtube.com" target="_blank">
              <i class="mdi mdi-24px mdi-youtube"></i>
            </a>
          </span>
        </div>
      </div>
      <div class="content has-text-centered">
        <p>
          &copy; <strong> Peas  &#38; Peppers</strong>
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
