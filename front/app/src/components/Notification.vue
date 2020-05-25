<template>    
  <mynotification>
    <div v-bind:class="{ 'is-hidden' : closed }" class="container is-fullhd">
      <div class="notification is-info has-text-centered">
        <button class="delete"  @click="close"></button>
        {{message}}
      </div>
    </div>
  </mynotification>
</template>

<script>
export default {
  name: 'Notification',
  props: {
    message: String,
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