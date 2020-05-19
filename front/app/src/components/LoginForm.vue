<template>    
  <div class="myloginform">       
    <div class="columns">
      <div class="column">
        <h1 class="title">Login</h1>
        <h2 class="subtitle">
          Beheer uw bestellingen
        </h2>
        <div class="field">
          <div class="control has-icons-left ">
            <input v-bind:class="{'is-danger': checkmail}" v-model="email" class="input is-primary" type="email" placeholder="Email">
            <span class="icon is-small is-left">
                <i class="mdi mdi-email"></i>
            </span>
          </div>
        </div>
        <div class="field">
          <p class="control has-icons-left">
            <input v-bind:class="{'is-danger': checkpassword}" v-model="password" class="input is-primary" type="password" placeholder="Password">
            <span class="icon is-small is-left">
              <i class="mdi mdi-lock"></i>
            </span>
          </p>
        </div>
        <div v-if="errors.length" class="notification is-danger">
          <ul>
            <li v-for="error in errors" :key="error">{{ error }}</li>
          </ul>
        </div>
        <div class="field ">
          <div class="control">
            <button v-on:click="submitForm" class="button is-link">Inloggen</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Auth } from 'aws-amplify'

export default {
  name: 'ContactForm',
  data() {
    return {
      email: null,
      password: null,
      showError: false,
      errors: [],
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
    checkpassword(){
      if (!this.password || this.password.length < 8 ) {
        return true
      }
      return false
    },
  },
  methods: {
    async submitForm() {
      this.errors = [];

      // eslint-disable-next-line
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
        this.errors.push('Vul AUB een correct emailadres toe.')
      }

      if (this.password < 8) {
        this.errors.push('Het wachtwoord moet minimaal 8 karakters lang zijn.');
      }


      if (this.errors.length == 0) {
        try {
          console.log(this.email, this.password)
          const user = await Auth.signIn(this.email, this.password);
          console.log("asynchronous logging has val:",user) 
        } catch (error) {
          console.log('error signing in', error);
          this.errors.push(error.message);
          //challengeName
        }
      }
    },
  },
}
</script>
