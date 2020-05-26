<template>
  <div class="mywinkelwagen">
    <section>
      <div class="container mainpadding">
        <h1 class="title">Uw Winkelwagen</h1>
        <ListProducts v-if="producten.length" />
        <Notification v-if="!producten.length" message="Uw winkelmandje is leeg" />
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Store from '@/store/'
import Notification from '@/components/Notification.vue'
import ListProducts from '@/components/ListProducts.vue'

export default {
  name: 'Winkelwagen',
  components: {
      Notification,
      ListProducts,
  },
  computed: {
    producten() { 
      return Store.state.producten
    },
  },
}
</script>
