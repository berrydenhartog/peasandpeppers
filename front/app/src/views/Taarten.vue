<template>
  <div class="mytaart">
    <HeroBar title="Taarten" :background="require('@/assets/taarten.jpg')" />
  </div>
</template>

<script>
// @ is an alias to /src
import HeroBar from '@/components/HeroBar.vue'

export default {
  name: 'Taarten',
  components: {
      HeroBar,
  }
}
</script>
