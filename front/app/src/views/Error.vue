<template>
  <div class="myerror">
      <Notification myclass="is-danger" message="Error, deze pagina bestaat niet" />
  </div>
</template>

<script>
// @ is an alias to /src
import Notification from '@/components/Notification.vue'

export default {
  name: 'Catering',
  components: {
      Notification,
  }
}
</script>
