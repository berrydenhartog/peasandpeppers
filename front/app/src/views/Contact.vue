<template>
  <div class="mycontact">
    <HeroBar title="HAPPY TO HELP!" subtitle="Heb je vragen neem dan contact met ons op" :background="require('@/assets/contact.jpg')" />
    <section>
      <div class="container mainpadding">
        <div class="columns">
          <div class="column">
            <h1 class="title">HEB JE EEN VRAAG?</h1>
            <h2 class="subtitle">
              Laat het ons hieronder weten en wij nemen zo snel mogelijk contact met je op.
            </h2>
            <div class="field">
              <div class="control has-icons-left ">
                <input v-bind:class="{'is-danger': checknaam}" v-model="naam" class="input is-primary" type="text" placeholder="naam" required>
                <span class="icon is-small is-left">
                    <i class="mdi mdi-account"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <div class="control has-icons-left ">
                <input v-bind:class="{'is-danger': checkmail}" v-model="email" class="input is-primary" type="email" placeholder="Email adres">
                <span class="icon is-small is-left">
                    <i class="mdi mdi-email"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <div class="control">
                <textarea v-bind:class="{'is-danger': checkbericht}" v-model="bericht" class="textarea is-primary" placeholder="Bericht"></textarea>
              </div>
            </div>

            <div v-if="errors.length" class="notification is-danger">
              <button class="delete"></button>
              <b>Het formulier is niet goed ingevuld:</b>
              <ul>
                <li v-for="error in errors" :key="error">{{ error }}</li>
              </ul>
            </div>

            <div class="field ">
              <div class="control">
                <button v-on:click="submitForm" class="button is-link">Verstuur</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="modal"  v-bind:class="{'is-active': activeModal}" >
        <div class="modal-background"></div>
        <div class="modal-content">
          <article class="message">
            <div class="message-header">
              <p>Bedankt</p>
              <button v-on:click="activeModal = false" class="delete" aria-label="delete"></button>
            </div>
            <div class="message-body">
              We hebben uw bericht ontvangen en zullen zo spoedig mogelijk reageren. 
            </div>
          </article>
        </div>
        <button v-on:click="activeModal = false" class="modal-close is-large" aria-label="close"></button>
      </div>
    </section>
  </div>
</template>

<script>
import HeroBar from '@/components/HeroBar.vue'


export default {
  name: 'Contact',
  data() {
    return {
      email: null,
      naam: null,
      bericht: null,
      showError: false,
      errors: [],
      activeModal: false,
    }
  },
  computed: {
    checkmail(){
      // eslint-disable-next-line
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
        return false 
      }
      return true
    },
    checknaam(){
      if (!this.naam) {
        return true
      }
      return false
    },
    checkbericht(){
      if (!this.bericht) {
        return true
      }
      return false
    },
  },
  methods: {
    submitForm: function () {
      this.errors = [];

      // eslint-disable-next-line
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
        this.errors.push('Vul AUB een correct emailadres toe.')
      }

      console.log(this.$refs);

      if (!this.naam) {
        this.errors.push('Vul AUB uw naam toe.');
      }
      if (!this.bericht) {
        this.errors.push('Vul AUB een bericht toe.');
      }

      if (this.errors.length == 0) {
        this.activeModal = true;
      }
    },
  },
  components: {
    HeroBar,
  },
}
</script>