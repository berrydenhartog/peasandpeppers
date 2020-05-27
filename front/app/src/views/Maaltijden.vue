<template>
  <div class="mymaaltijden">
    <HeroBar :title="mainTitle" :background="require('@/assets/'+$route.params.naam+'.jpg')" />
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
  name: 'Maaltijden',
  props: ['name'],
  components: {
      HeroBar,
      Week,
  },
  computed: {
    // a computed getter
    mainTitle: function () {
      // `this` points to the vm instance
      return this.$route.params.naam.replace(/-/g, " ").toUpperCase();
    }
  }
}
</script>
