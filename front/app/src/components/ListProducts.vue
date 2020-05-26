<template>    
  <div class="mylistproducts">  
      {{DezeWeekMenu}}
       <table class="table">
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
            <tr v-for="(product, index) in producten" :key="product.index">
              <th>{{getProductName(product)}}</th>
              <th>{{product.aantal}}</th>
              <th>{{getProductPrice(product)}}</th>
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
  </div>
</template> 


<script>
// @ is an alias to /src
import Store from '@/store/'
import moment from 'moment'
import GerechtenRepository from "../repository/GerechtenRepository";

export default {
  name: 'ListProducts',
  data() {
    return {
      DezeWeekMenu: null,
      VolgendeWeekMenu: null
    }
  },
  mounted: async function () { 
    var thisweek = moment().startOf('week');
    var nextweek = moment().startOf('week').add(7,"days");
    const { datathisweek } = await GerechtenRepository.get("week"+thisweek.format('w'))
    this.DezeWeekMenu = datathisweek
    console.log(datathisweek)
    const { datanextweek } = await GerechtenRepository.get("week"+nextweek.format('w'))
    this.VolgendeWeekMenu = datanextweek
  },
  computed: {
    producten() { 
      return Store.state.producten
    },
  },
  methods: {
    getProductName (product) {
      console.log(product)
      //if product
      return "unknown"
    },
    getProductPrice (product) {
      console.log(product)
      return "unknown"
    },
    deleteProduct (event) {
      Store.commit('deleteProduct', event.target.getAttribute("index"));
    }
  }
}
</script>