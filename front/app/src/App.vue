<template>
  <div id="mymain">
    <Navbar :showNav="showNav" />

    <div id="myview">
      <router-view/>
    </div>

    <Footer/>

  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Appmain',
  data: () => ({
    showNav: false
  }),
  components: {
    Navbar,
    Footer,
  },
}
</script>

