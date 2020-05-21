<template>    
  <div class="myloginform">       
    <div class="columns">
      <div class="column">
        <h1 class="title">Verander uw Wachtwoord</h1>
        <div class="field">
          <p class="control has-icons-left">
            <input v-bind:class="{'is-danger': checkpassword}" v-model="password" class="input is-primary" type="password" placeholder="Password">
            <span class="icon is-small is-left">
              <i class="mdi mdi-lock"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-left">
            <input v-bind:class="{'is-danger': checkpasswordrepeat}" v-model="passwordrepeat" class="input is-primary" type="password" placeholder="Password herhaal">
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
            <button v-bind:class="{'is-loading': isLoading}" v-on:click="submitForm" class="button is-link">Inloggen</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Auth } from 'aws-amplify'

export default {
  name: 'NewPasswordRequiredForm',
  data() {
    return {
      isLoading: false,
      password: null,
      passwordrepeat: null,
      showError: false,
      errors: [],
    }
  },
  props: ['user'],
  computed: {
    checkpassword(){
      if (!this.password || this.password.length < 8 ) {
        return true
      }
      return false
    },
    checkpasswordrepeat(){
      if (!this.passwordrepeat || this.passwordrepeat.length < 8 ) {
        return true
      }
      return false
    },
  },
  methods: {
    async submitForm() {
      this.errors = [];

      if (this.password < 8) {
        this.errors.push('Het wachtwoord moet minimaal 8 karakters lang zijn.');
      }

      if (this.passwordrepeat < 8) {
        this.errors.push('Het wachtwoord herhaal moet minimaal 8 karakters lang zijn.');
      }

      if (this.password != this.passwordrepeat) {
        this.errors.push('De wachtwoorden zijn niet gelijk.');
      }

      if (this.errors.length == 0) {
        this.isLoading = true;
        Auth.completeNewPassword(
          this.user, 
          this.password,
        // eslint-disable-next-line
        ).then(user => {
          this.isLoading = false;
          this.$router.push({ name: 'Account'})
        }).catch(error => {
          this.errors.push(error.message);
          this.isLoading = false;
        });
      }
    },
  },
}
</script>
