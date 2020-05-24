<template>
  <div class="myaccount">
    <HeroBar title="Account" subtitle="manage uw bestellingen" :background="require('@/assets/account.jpg')" />
    
    Groups: {{user.signInUserSession.accessToken.payload["cognito:groups"]}}
    email: {{user.attributes['email']}}
    username: {{user.username}}
    {{isAdmin}}
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
      fields: [
        { type: 'string', name: 'email', label: 'Email' },
      ],
    }
  },
  computed: {
    user() { 
      return AmplifyStore.state.user
    },
    isAdmin() {
      return AmplifyStore.state.user.signInUserSession.accessToken.payload["cognito:groups"].includes("admin");
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

