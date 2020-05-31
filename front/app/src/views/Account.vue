<template>
  <div class="myaccount">
    <HeroBar title="Account" subtitle="manage uw bestellingen" :background="require('@/assets/account.jpg')" />
    <section>
      <div class="container content">
        <h1 class="title">Welkom {{user.attributes['email']}}</h1>

        <div class="tabs">
          <ul>
            <li v-bind:class="{'is-active': isActiveTab==0}"><a @click="isActiveTab=0">Bestellingen</a></li>
            <li v-bind:class="{'is-active': isActiveTab==1}" v-if="isAdmin"><a @click="isActiveTab=1">Maaltijden</a></li>
            <li v-bind:class="{'is-active': isActiveTab==2}" v-if="isAdmin"><a @click="isActiveTab=2">Taarten</a></li>
          </ul>
        </div>
        <div>
          <section v-if="isActiveTab==0" class="tab-content">Pictures content</section>
          <section v-if="isActiveTab==1" class="tab-content">Music content</section>
          <section v-if="isActiveTab==2" class="tab-content">Videos content</section>
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
      isActiveTab: 0
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

