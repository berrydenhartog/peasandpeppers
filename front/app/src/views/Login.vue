<template>
  <div class="mylogin">
    <section>
      <div class="container mainpadding">
        <LoginForm />
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginForm from '@/components/LoginForm.vue'

export default {
  name: 'Login',
  components: {
      LoginForm,
  }
}
</script>
