<template>
  <div class="mymaaltijden">
    <HeroBar :title="mainTitle" :background="require('@/assets/'+$route.params.naam+'.jpg')" />
  </div>
</template>

<script>
import HeroBar from '@/components/HeroBar.vue'

export default {
  name: 'Maaltijden',
  props: ['name'],
  components: {
      HeroBar,
  },
  computed: {
    // a computed getter
    mainTitle: function () {
      // `this` points to the vm instance
      return this.$route.params.naam.replace("-", " ").toUpperCase();
    }
  }
}
</script>
