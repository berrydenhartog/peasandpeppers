<template>
  <div class="myaccount">
    <HeroBar :title="user.attributes['email']" subtitle="manage uw bestellingen" :background="require('@/assets/account.jpg')" />

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
  //async mounted () {
  //  if (AmplifyStore.state.user) {
  //  }
  //},
  computed: {
    user() { 
      return AmplifyStore.state.user
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

