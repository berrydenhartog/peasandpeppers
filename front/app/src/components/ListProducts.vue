<template>    
  <div class="mylistproducts">  
    <div class="table-container">
       <table class="table">
          <thead>
            <tr>
              <th><abbr title="Week">Week</abbr></th>
              <th><abbr title="Dag">Dag</abbr></th>
              <th><abbr title="Position">Product</abbr></th>
              <th><abbr title="Grote">Grote</abbr></th>
              <th><abbr title="Aantal">Aantal</abbr></th>
              <th><abbr title="Prijs">Prijs</abbr></th>
              <th><abbr title="Totaal">Totaal</abbr></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-bind:class="{ 'notification is-danger' : checkorderdate(product.dag,product.weeknr) }" v-for="(product, index) in producten" :key="product.index">
              <th>{{product.weeknr}}</th>
              <th>{{product.dag}}</th>
              <th>{{product.naam}}</th>
              <th>{{product.grote}}</th>
              <th>{{product.aantal}}</th>
              <th class="price">{{pricetofloat(product.prijs)}}</th>
              <th class="price">{{pricetofloat(product.aantal * product.prijs)}}</th>
              <th><a v-on:click="deleteProduct" :index=index class="delete"></a></th>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th><abbr title="Week"></abbr></th>
              <th><abbr title="Dag"></abbr></th>
              <th><abbr title="Position"></abbr></th>
              <th><abbr title="Grote"></abbr></th>
              <th><abbr title="Aantal"></abbr></th>
              <th><abbr title="Prijs"></abbr></th>
              <th class="price"><abbr title="Totaal">{{TotalPrice}}</abbr></th>
              <th></th>
            </tr>
          </tfoot>
        </table>
        <div v-if="errors.length" class="notification is-danger">
          <ul>
            <li v-for="error in errors" :key="error">{{ error }}</li>
          </ul>
        </div>
    </div>
  </div>
</template> 


<script>
// @ is an alias to /src
import Store from '@/store/'
import moment from 'moment'

export default {
  name: 'ListProducts',
  data() {
    return {
      errors: [],
    }
  },
  computed: {
    producten() { 
      return Store.state.producten
    },
    TotalPrice () {

      prijs = 0
      for (let i = 0; i < Store.state.producten.length; i++) {
        prijs += Store.state.producten[i].prijs*Store.state.producten[i].aantal;
      } 
      let prijs = prijs /100

      return prijs.toFixed(2)
    },
  },
  mounted(){
    this.checkerrors()
  },
  methods: {
    checkerrors(){
      this.errors = [];
      for (let i = 0; i < Store.state.producten.length; i++) {
        let orderdate = moment().day(Store.state.producten[i].dag).week(Store.state.producten[i].weeknr);
        let minorderdate = moment().set({"hour": 23, "minute": 59});
        if (orderdate < minorderdate) {
          this.errors.push(Store.state.producten[i].naam+" ("+Store.state.producten[i].grote+") van "+Store.state.producten[i].dag+" week "+Store.state.producten[i].weeknr+" kan niet meer besteld worden. verwijder deze uit uw Winkelmandje")
        }
      }
    },
    checkorderdate (dag,weeknr) {

      let orderdate = moment().day(dag).week(weeknr);
      let minorderdate = moment().set({"hour": 23, "minute": 59});
      return orderdate < minorderdate
    },
    pricetofloat (myprice) {
      let tmp = myprice /100
      return tmp.toFixed(2)
    },
    deleteProduct (event) {
      Store.commit('deleteProduct', event.target.getAttribute("index"));
      this.checkerrors()
    }
  }
}
</script>