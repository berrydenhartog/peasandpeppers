<template>    
  <div class="myauthenicator">  
    <LoginForm v-if="user == null"  @user="setUser" />
    <NewPasswordRequired :user="user" v-if="user != null && user.challengeName == 'NEW_PASSWORD_REQUIRED'" />
  </div>
</template> 

<script>
// @ is an alias to /src
import LoginForm from '@/components/LoginForm.vue'
import NewPasswordRequired from '@/components/NewPasswordRequired.vue'

export default {
  name: 'Authenticator',
  data() {
    return {
      newpassword: false,
      user: null
    }
  },
  components: {
    LoginForm,
    NewPasswordRequired,
  },
  methods: {
    setUser (user) {
      this.user = user;
    }
  }
}
</script>