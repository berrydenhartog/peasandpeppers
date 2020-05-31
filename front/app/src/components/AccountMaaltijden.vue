<template>    
  <div class="myaccountmaaltijden">
    <div class="buttons">
      <button @click="setWeeknr(week)" v-for="week in 52" :key="week.index" class="button is-link" v-bind:class="{'is-light':week == weeknr}">{{week}}</button>
      <AccountWeek :week="String(weeknr)" />
    </div>
  </div>
</template>

<script>
import Store from '@/store/'
import moment from 'moment'
import AccountWeek from '@/components/AccountWeek.vue'

export default {
  name: 'AccountMaaltijden',
  components: {
    AccountWeek,
  },
  data() {
    return {
      weeknr:null
    }
  },
  mounted: function () { 
    this.$moment.locale('nl')
    this.weeknr =moment().week()
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
    setWeeknr: function (nr) {
      this.weeknr=nr
    },
  }
}
</script>