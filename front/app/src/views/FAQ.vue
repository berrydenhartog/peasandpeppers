<template>
  <div class="myfaq">
    <HeroBar title="Frequenty asked questions" :background="require('@/assets/faq.jpg')" />
  </div>
</template>

<script>
// @ is an alias to /src
import HeroBar from '@/components/HeroBar.vue'

export default {
  name: 'FAQ',
  components: {
      HeroBar,
  }
}
</script>
