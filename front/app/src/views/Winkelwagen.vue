<template>
  <div class="mywinkelwagen">
    <section>
      <div class="container mainpadding">
        <table class="table">
          <thead>
            <tr>
              <th><abbr title="Position">Product</abbr></th>
              <th><abbr title="Aantal">Aantal</abbr></th>
              <th><abbr title="Prijs">Prijs</abbr></th>
              <th><abbr title="Totaal">Totaal</abbr></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in producten" :key="product">
              <th>{{product}}</th>
              <th>1</th>
              <th>1</th>
              <th>1</th>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th><abbr title="Position"></abbr></th>
              <th><abbr title="Aantal"></abbr></th>
              <th><abbr title="Prijs"></abbr></th>
              <th><abbr title="Totaal">Totaal</abbr></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Store from '@/store/'

export default {
  name: 'Winkelwagen',
  computed: {
    producten() { 
      return Store.state.producten
    },
  }
}
</script>
