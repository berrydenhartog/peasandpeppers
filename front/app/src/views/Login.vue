<template>
  <div class="mylogin">
    <section>
      <div class="container mainpadding">
        <Authenticator />
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Authenticator from '@/components/Authenticator.vue'

export default {
  name: 'Login',
  components: {
      Authenticator,
  }
}
</script>
