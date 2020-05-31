<template>    
  <div class="myaccountmaaltijden">
  </div>
</template>

<script>
export default {
  name: 'AccountMaaltijden',
  computed: {
    user() { 
      return Store.state.user
    },
    isAdmin() {
      if (Store.state.user.signInUserSession.accessToken.payload["cognito:groups"]) {
        return Store.state.user.signInUserSession.accessToken.payload["cognito:groups"].includes("admin");
      }
      return false
    }
  },
}
</script>