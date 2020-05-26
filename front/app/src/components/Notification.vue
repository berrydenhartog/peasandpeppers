<template>    
  <div class="mynotification">
    <div v-bind:class="{ 'is-hidden' : closed }" class="container is-fullhd">
      <div class="notification has-text-centered" :class="myclass">
        <button class="delete"  @click="close"></button>
        {{message}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Notification',
  props: {
    message: String,
    myclass: {
      type: String,
      default: ''
    },
  },
  data() {
    return {
      closed: false
    }
  },
  methods: {
    close: function () {
      this.closed=true;
    }
  }
}
</script>