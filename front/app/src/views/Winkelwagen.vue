<template>
  <div class="mywinkelwagen">
    <section>
      <div class="container mainpadding">
        <h1 class="title">Winkelwagen</h1>
        <ListProducts v-if="producten.length" />
        <Notification v-if="!producten.length" message="Jouw winkelwagen is leeg" />

        <div  v-if="producten.length" class="divider"></div>
        
        <div v-if="producten.length" class="columns">
          <div class="column">
            <div class="field">
              <div class="control has-icons-left ">
                <input v-bind:class="{'is-danger': checknaam}" v-model="naam" class="input is-primary" type="text" placeholder="Naam" required>
                <span class="icon is-small is-left">
                    <i class="mdi mdi-account"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <div class="control has-icons-left ">
                <input v-bind:class="{'is-danger': checkmail}" v-model="email" class="input is-primary" type="email" placeholder="Email">
                <span class="icon is-small is-left">
                    <i class="mdi mdi-email"></i>
                </span>
              </div>
            </div>


            <div class="field is-horizontal">
              <div class="field-body">
                <div class="field">
                  <p class="control">
                    <input type="text" v-bind:class="{'is-danger': checkaddress}" v-model="address" class="input is-primary" placeholder="Adres">
                  </p>
                </div>
                <div class="field">
                  <p class="control">
                    <input type="text" v-bind:class="{'is-danger': checkpostcode}" v-model="postcode" class="input is-primary" placeholder="postcode">
                  </p>
                </div>
              </div>
            </div>
            <div class="field">
              <div class="control ">
                <label class="checkbox">
                  <input type="checkbox"
                  v-model="acceptterms"
                  >
                  Ik accepteer de <router-link :to="{ name: 'AlgemeneVoorwaarden'}">algemene voorwaarden</router-link>
                </label>
              </div>
            </div>
            <div v-if="errors.length" class="notification is-danger">
              <ul>
                <li v-for="error in errors" :key="error">{{ error }}</li>
              </ul>
            </div>
            <div class="field ">
              <div class="control">
                <button v-bind:class="{'is-loading': isLoading}" v-on:click="submitForm" class="button is-link">Bestel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>     
    <div class="modal"  v-bind:class="{'is-active': activeModal}" >
      <div class="modal-background"></div>
        <div class="modal-content">
          <article class="message">
            <div class="message-header">
              <p>Uw bestelling</p>
              <button v-on:click="activeModal = false" class="delete" aria-label="delete"></button>
            </div>
            <div class="message-body">
              {{modalbericht}}
            </div>
          </article>
        </div>
      </div>
    </div>
</template>

<script>
// @ is an alias to /src
import Store from '@/store/'
import Notification from '@/components/Notification.vue'
import ListProducts from '@/components/ListProducts.vue'
import BestelRepository from "../repository/BestelRepository";

export default {
  name: 'Winkelwagen',
  components: {
      Notification,
      ListProducts,
  },
  data() {
    return {
      isLoading: false,
      naam: null,
      email: null,
      address: null,
      postcode: null,
      acceptterms: false,
      showError: false,
      errors: [],
      activeModal: false,
      modalbericht: '',
    }
  },
  computed: {
    producten() { 
      return Store.state.producten
    },
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
    checkaddress(){
      if (!this.address) {
        return true
      }
      return false
    },
    checkpostcode(){
      if (!this.postcode) {
        return true
      }
      return false
    },
  },
  methods: {
    submitForm: async function() {
      this.errors = [];

      // eslint-disable-next-line
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
        this.errors.push('Vul een correct emailadres in.')
      }

      if (!this.naam) {
        this.errors.push('Vul je naam in.');
      }
      if (!this.address) {
        this.errors.push('Vul een adres in.');
      }
      if (!this.postcode) {
        this.errors.push('Vul een postcode in.');
      }

      if (!this.acceptterms) {
        this.errors.push('Je moet de algemene voorwaarden accepteren voordat je een bestelling kan doen.');
      }

      if (this.errors.length == 0) {
        this.isLoading = true;
        try {
          const payload= {
            'email':this.email,
            'naam':this.naam,
            'adres':this.address,
            'postcode':this.postcode,
            'producten':this.producten
          }
          console.log(payload)
          const { data } = await BestelRepository.create(payload)
          if (data.statusCode == 200) {
            console.log(data)
            this.email=null;
            this.naam=null;
            this.adres=null;
            this.postcode=null;
            this.adres=null;
            Store.commit('resetProduct' );
            this.modalbericht = 'We hebben je bestelling ontvangen. U krijgt een e-mail met een betaal verzoek. '
          } else {
            this.modalbericht = 'Sorry, Er is een technische storing, we kunnen je bestelling niet afhandelen. '
          }
          this.activeModal = true;
          this.isLoading = false;
          
        } catch (error) {
          this.errors.push(error.message);
          this.isLoading = false;
        }
      }

    },
  },
}
</script>
