<template>
  <div class="myaccount">
    <HeroBar title="Account" subtitle="manage uw bestellingen" :background="require('@/assets/account.jpg')" />
    <section>
      <div class="container content">
        <div v-if="user == null">
          User is Unknown, Did you not accept our cookies?
        </div>
        <div v-else>
          <h1 class="title">Welkom {{user.attributes['email']}}</h1>

          <div class="tabs">
            <ul>
              <li v-bind:class="{'is-active': isActiveTab==0}"><a @click="isActiveTab=0">Bestellingen</a></li>
              <li v-bind:class="{'is-active': isActiveTab==1}" v-if="isAdmin"><a @click="isActiveTab=1">Image Factory</a></li>
              <li v-bind:class="{'is-active': isActiveTab==2}" v-if="isAdmin"><a @click="isActiveTab=2">Maaltijden</a></li>
              <li v-bind:class="{'is-active': isActiveTab==3}" v-if="isAdmin"><a @click="isActiveTab=3">Taarten</a></li>
            </ul>
          </div>
          <div>
            <section v-if="isActiveTab==0" class="tab-content">
              todo
            </section>
            <section v-if="isActiveTab==1" class="tab-content">
              <ImageFactory />
            </section>
            <section v-if="isActiveTab==2" class="tab-content">
              <AccountShop />
            </section>
            <section v-if="isActiveTab==3" class="tab-content">
              todo
            </section>
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
import AccountShop from '@/components/AccountShop.vue'
import ImageFactory from '@/components/ImageFactory.vue'

export default {
  name: 'Account',
  components: {
      HeroBar,
      AccountShop,
      ImageFactory,
  },
  mounted() {
    if (!this.isAdmin) {
      this.$router.push({ name: 'Home'})
    }
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
  }
}
</script>

