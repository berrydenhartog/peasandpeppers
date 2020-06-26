<template>    
  <div class="myaccountmaaltijden">
    <div class="buttons">
      <button @click="setWeeknr(week)" v-for="week in 52" :key="week.index" class="button is-link" v-bind:class="{'is-light':week == weeknr}">{{week}}</button>
    </div>
    <AccountWeek v-if="render" :images="images" :week="String(weeknr)" />
  </div>
</template>

<script>
import Store from '@/store/'
import moment from 'moment'
import AccountWeek from '@/components/AccountWeek.vue'
import UploadRepository from "@/repository/UploadRepository";

export default {
  name: 'AccountMaaltijden',
  components: {
    AccountWeek,
  },
  data() {
    return {
      weeknr:null,
      images:[],
      render:false,
    }
  },
  mounted: function () { 
    this.$moment.locale('nl')
    this.weeknr =moment().week()+1
    this.getImages()
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
    getImages: async function () {
      const { data } = await UploadRepository.list()
      this.images=data['body']
      this.render=true
    },
    setWeeknr: function (nr) {
      this.weeknr=nr
    },
  }
}
</script>