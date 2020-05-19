<template>    
  <div class="myauthenicator">  
    <LoginForm v-if="!newpassword"  @newPasswordRequired="newPasswordRequired" />
  </div>
</template> 

<script>
// @ is an alias to /src
import LoginForm from '@/components/LoginForm.vue'

export default {
  name: 'Authenticator',
  data() {
    return {
      newpassword: false,
    }
  },
  components: {
    LoginForm
  },
  methods: {
    newPasswordRequired () {
      this.newpassword = true;
    }
  }
}
</script>