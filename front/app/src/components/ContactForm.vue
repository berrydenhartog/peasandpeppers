<template>    
  <div class="mycontactform">       
    <div class="columns">
      <div class="column">
        <h1 class="title">{{title}}</h1>
        <h2 class="subtitle">
          {{subtitle}}
        </h2>
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
        <div class="field">
          <div class="control">
            <textarea v-bind:class="{'is-danger': checkbericht}" v-model="bericht" class="textarea is-primary" placeholder="Bericht"></textarea>
          </div>
        </div>
        <div v-if="errors.length" class="notification is-danger">
          <ul>
            <li v-for="error in errors" :key="error">{{ error }}</li>
          </ul>
        </div>
        <div class="field ">
          <div class="control">
            <button v-bind:class="{'is-loading': isLoading}" v-on:click="submitForm" class="button is-link">Verstuur</button>
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
      </div>
  </div>
</template>

<script>

import EmailRepository from "../repository/EmailRepository";

export default {
  name: 'ContactForm',
  props: {
    title: null,
    subtitle: null,
  },
  data() {
    return {
      isLoading: false,
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
    submitForm: async function() {
      this.errors = [];


      // eslint-disable-next-line
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
        this.errors.push('Vul een correct emailadres in.')
      }

      if (!this.naam) {
        this.errors.push('Vul uw naam in.');
      }
      if (!this.bericht) {
        this.errors.push('Vul een bericht in.');
      }

      if (this.errors.length == 0) {
        this.isLoading = true;
        try {
          const { data } = await EmailRepository.create("hallo")
          console.log(data)

          this.email=null;
          this.naam=null;
          this.bericht=null;
          this.isLoading = false;
          this.activeModal = true;
        } catch (error) {
          this.errors.push(error.message);
          this.isLoading = false;
        }
      }

    },
  },
}
</script>
