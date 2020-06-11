<template>
  <div class="myabonnementen">
    <HeroBar title="Abonnementen" :background="require('@/assets/taarten.jpg')" />
    <p>
      hier komt een verhaal die ezra gaat aanleveren
    </p>
  </div>
</template>

<script>
// @ is an alias to /src
import HeroBar from '@/components/HeroBar.vue'

export default {
  name: 'Abonnementen',
  components: {
      HeroBar,
  }
}
</script>
