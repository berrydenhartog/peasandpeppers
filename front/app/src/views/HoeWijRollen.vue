<template>
  <div class="myhoewijrollen">
    <HeroBar title="Hoe wij rollen" :background="require('@/assets/taarten.jpg')" />
    <p>
      text van ezra
    </p>
  </div>
</template>

<script>
// @ is an alias to /src
import HeroBar from '@/components/HeroBar.vue'

export default {
  name: 'HoeWijRollen',
  components: {
      HeroBar,
  }
}
</script>
