<template>    
  <mynotification>
    <div v-bind:class="{ 'is-hidden' : closed }" class="container is-fullhd">
      <div class="notification is-info has-text-centered">
        <button class="delete"  @click="close"></button>
        Gratis levering door heel NL vanaf €45 | voor 23:59 besteld = volgende werkdag geleverd
      </div>
    </div>
  </mynotification>
</template>

<script>
export default {
  name: 'Notification',
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