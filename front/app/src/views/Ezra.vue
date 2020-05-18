<template>
  <div class="myezra">
    <HeroBar title="Ezra" subtitle="Over mij" :background="require('@/assets/ezra.jpg')" />
  </div>
</template>

<script>
// @ is an alias to /src
import HeroBar from '@/components/HeroBar.vue'

export default {
  name: 'Ezra',
  components: {
      HeroBar,
  }
}
</script>
