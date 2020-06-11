<template>    
  <div class="mycookie">  
    <div id="cookie">
      <div class="container">
        <div class="content">
          <p>
          Deze website slaat cookies op op jou computer.  Als je meer wilt weten kijk dan naar onze Privacy verklaring. 
          </p>
          <p>
            Als je weigert worden je interacties met deze website niet gevolgt. Er wordt nog wel 1 cookie geinstalleerd om deze instelling te bewaren.
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