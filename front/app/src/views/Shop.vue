<template>
  <div class="myshop">
    <HeroBar :title="mainTitle2" :background="require('@/assets/'+mainTitle.toLowerCase()+'.jpg')" />
    <section>
      <div class="container mainpadding">
        <Week :week="mainTitle" />
      </div>
    </section>
  </div>
</template>

<script>
import HeroBar from '@/components/HeroBar.vue'
import Week from '@/components/Week.vue'

export default {
  name: 'Shop',
  props: ['name'],
  components: {
      HeroBar,
      Week,
  },
  computed: {
    mainTitle2: function () {
      const splitted = this.$route.path.split("/")

      if (splitted.length == 4) {
        const mytitle=splitted[2]+"-"+splitted[3]
        return mytitle.toUpperCase().replace(/-/g, " ");
      }
      return splitted[2].toUpperCase().replace(/-/g, " ");
    },
    mainTitle: function () {
      const splitted = this.$route.path.split("/")

      if (splitted.length == 4) {
        const mytitle=splitted[2]+"-"+splitted[3]
        return mytitle.toUpperCase();
      }
      return splitted[2].toUpperCase();
    }
  }
}
</script>
