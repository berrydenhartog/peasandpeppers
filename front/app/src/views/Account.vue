<template>
  <div class="myaccount">
    <HeroBar title="Account" subtitle="manage uw bestellingen" :background="require('@/assets/account.jpg')" />
  </div>
</template>

<script>
// @ is an alias to /src
import HeroBar from '@/components/HeroBar.vue'

export default {
  name: 'Account',
  components: {
      HeroBar,
  }
}
</script>

