<template>    
  <div class="mycookie">  
    <div id="cookie">
      <div class="container">
        <div class="content">
          <p>
          Deze website slaat cookies op op uw computer. 
          Deze cookies worden gebruikt om informatie op te slaan over hoe u met deze website interact en stelt ons in staat om uw acties te onthouden.
          We gebruiken deze informatie om uw experience van deze site te verbeteren, en voor analyse and metric doeleinden van onze bezoekers. 
          Als u meer wilt weten kijk dan naar onze Privacy verklaring. 
          </p>
          <br>
          <p>
            Als u weigert worden uw interacties met deze website niet gevolgt. Er wordt nog wel 1 cookie geinstalleerd om te onthouden of u gevolgt wou worden.
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