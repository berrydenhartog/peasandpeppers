<template>
  <div class="myaccount">
    <HeroBar title="Account" subtitle="manage uw bestellingen" :background="require('@/assets/account.jpg')" />
    <div class="inputRow" v-for="field in fields" v-bind:key="field.name">
      <div v-if="field.type === 'string'">
        <label class="inputLabel">{{field.label || field.name}}</label>
        <input
          class="input"
          v-model="user[field.name]"
        />
      </div>
      <div class="lineBreak" v-if="field.type === 'lineBreak'"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeroBar from '@/components/HeroBar.vue'
import AmplifyStore from '@/store/'

export default {
  name: 'Account',
  components: {
      HeroBar,
  },
  data () {
    return {
      user: {},
      fields: [
        { type: 'string', name: 'email', label: 'Email' },
        { type: 'string', name: 'phone_number', label: 'Phone Number' }
      ],
    }
  },
  async mounted () {
    if (AmplifyStore.state.user) {
      const currentUser = await this.$Amplify.Auth.currentUserInfo()
      this.user = {
        username: currentUser.username,
        ...currentUser.attributes
      }
    }
  },
  methods: {
    save() {
      const cognitoUser = AmplifyStore.state.user;
      if (!this.user || !cognitoUser) { return }
      this.$Amplify.Auth.updateUserAttributes(cognitoUser, this.user).then((res) => {
        console.log(res)
      })
      .catch(e => console.log(e));
    }
  }
}
</script>

