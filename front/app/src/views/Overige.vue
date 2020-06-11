<template>
  <div class="myoverige">
    <HeroBar title="Overige" :background="require('@/assets/taarten.jpg')" />
    <p>
      Dit maakt berry als ezra alles aangeleverd heeft
    </p>
  </div>
</template>

<script>
// @ is an alias to /src
import HeroBar from '@/components/HeroBar.vue'

export default {
  name: 'Overige',
  components: {
      HeroBar,
  }
}
</script>
