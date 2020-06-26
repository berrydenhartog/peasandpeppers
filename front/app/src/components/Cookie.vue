<template>    
  <div class="mycookie">  
    <div id="cookie">
      <div class="container">
        <div class="content">
          <p>
            Peas &amp; Peppers maakt gebruik van cookies. Bekijk ons <router-link :to="{ name: 'Privacyverklaring' }">privacybeleid</router-link> voor meer informatie.
          </p>
        </div>
        <div class="buttons are-medium">
          <button @click="setCookie(true)" class="button is-success is-small">Accepteer</button>
          <button @click="setCookie(false)" class="button is-danger is-small">Weiger</button>
        </div>
      </div>
    </div>
  </div>
</template> 

<script>
import Store from '@/store/'

export default {
  name: 'Cookie',
  methods: {
    setCookie: function (value) {
      const cookie = {
        set:true,
        accepted:value,
      }
      Store.commit('setCookieAccept', cookie );
    }
  }
}
</script>