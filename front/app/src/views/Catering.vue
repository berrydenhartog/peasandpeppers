<template>
  <div class="mycatering">
    <HeroBar title="Catering" subtitle="Professionele snelle levering" :background="require('@/assets/catering.jpg')" />
  </div>
</template>

<script>
// @ is an alias to /src
import HeroBar from '@/components/HeroBar.vue'

export default {
  name: 'Catering',
  components: {
      HeroBar,
  }
}
</script>
