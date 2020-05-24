<template>
  <div class="myaccount">
    <HeroBar title="Account" subtitle="manage uw bestellingen" :background="require('@/assets/account.jpg')" />
    <section>
      <div class="container">
        <div class="field">
          <label class="label">Naam</label>
          <div class="control">
            <input class="input" type="text" :value="user.username" readonly>
          </div>
        </div>
        <div class="field">
          <label class="label">E-mail</label>
          <div class="control">
            <input class="input" type="text" :value="user.attributes['email']" readonly>
          </div>
        </div>
        <div class="field">
          <label class="label">Admin</label>
          <div class="control">
            <input class="input" type="text" :value="isAdmin" readonly>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import HeroBar from '@/components/HeroBar.vue'
import Store from '@/store/'

export default {
  name: 'Account',
  components: {
      HeroBar,
  },
  data () {
    return {
      fields: [
        { type: 'string', name: 'email', label: 'Email' },
      ],
    }
  },
  computed: {
    user() { 
      return Store.state.user
    },
    isAdmin() {
      if (Store.state.user.signInUserSession.accessToken.payload["cognito:groups"]) {
        return Store.state.user.signInUserSession.accessToken.payload["cognito:groups"].includes("admin");
      }
      return false
    }
  },
  methods: {
    save() {
      const cognitoUser = Store.state.user;
      if (!this.user || !cognitoUser) { return }
      this.$Amplify.Auth.updateUserAttributes(cognitoUser, this.user).then((res) => {
        console.log(res)
      })
      .catch(e => console.log(e));
    }
  }
}
</script>

