<template>
  <div id="mymain">
    <Navbar :showNav="showNav" />

    <div id="myview">
      <router-view/>
    </div>

    <Footer/>
    <Cookie v-if="!cookie.set" />

  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import Cookie from '@/components/Cookie.vue'
import Store from '@/store/'

export default {
  name: 'Appmain',
  data: () => ({
    showNav: false
  }),
  components: {
    Navbar,
    Footer,
    Cookie,
  },
  computed: {
    cookie() { 
      return Store.state.cookie
    },
  }
}
</script>

