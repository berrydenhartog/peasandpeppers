<template>
  <div class="mywinkelwagen">
    <section>
      <div class="container mainpadding">
        <h1 class="title">Uw Winkelwagen</h1>
        <table v-if="producten.length" class="table">
          <thead>
            <tr>
              <th><abbr title="Position">Product</abbr></th>
              <th><abbr title="Aantal">Aantal</abbr></th>
              <th><abbr title="Prijs">Prijs</abbr></th>
              <th><abbr title="Totaal">Totaal</abbr></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(product, index) in producten" :key="product">
              <th>{{product}}</th>
              <th>1</th>
              <th>1</th>
              <th>1</th>
              <th><a v-on:click="deleteProduct" :index=index class="delete"></a></th>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th><abbr title="Position"></abbr></th>
              <th><abbr title="Aantal"></abbr></th>
              <th><abbr title="Prijs"></abbr></th>
              <th><abbr title="Totaal">Totaal</abbr></th>
              <th></th>
            </tr>
          </tfoot>
        </table>
        <Notification v-if="!producten.length" message="Uw winkelmandje is leeg" />
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Store from '@/store/'
import Notification from '@/components/Notification.vue'

export default {
  name: 'Winkelwagen',
  components: {
      Notification,
  },
  computed: {
    producten() { 
      return Store.state.producten
    },
  },
  methods: {
    deleteProduct (event) {
      Store.commit('deleteProduct', event.target.getAttribute("index"));
    }
  }
}
</script>
