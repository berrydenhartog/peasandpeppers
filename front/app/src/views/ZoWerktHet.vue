<template>
  <div class="myzowerkthet">
    <HeroBar title="Zo Werkt het" :background="require('@/assets/taarten.jpg')" />
    <p>
      hier komt een verhaal die ezra gaat aanleveren
    </p>
  </div>
</template>

<script>
// @ is an alias to /src
import HeroBar from '@/components/HeroBar.vue'

export default {
  name: 'ZoWerktHet',
  components: {
      HeroBar,
  }
}
</script>
