<template>    
  <div class="mydag"> 
    <a :name="dag | moment('dddd')"></a>
    <h3 class="title">{{dag | moment("dddd D MMM")}}</h3>
    <Notification v-if="!gerechten.length" message="Geen gerechten beschikbaar" />
    <div v-if="gerechten.length">
      <div v-for="(cgerechten , cindex) in chunkedGerechten" :key="cgerechten.index" class="columns">   
        <div v-for="(gerecht, index) in cgerechten" :key="gerecht.index" class="column is-half">
          <div class="card">
            <div class="card-content">
              <div class="columns">
                <div class="column">
                  <figure class="image is-16by9">
                    <img :src="gerecht.image" alt="image">
                  </figure>
                </div>
                <div class="column">
                  <h1 class="title">{{gerecht.naam}}</h1>
                  <p>
                    {{gerecht.omschrijving}}
                  </p>
                  <div class="field">
                    <div class="control">
                      <div v-show="index == gerecht.default" :priceid="index" class="price" v-for="(prijs,index) in gerecht.prijzen" :key="prijs.index">
                        {{pricetofloat(prijs)}} / stuk
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <div class="select is-fullwidth">
                    <select @change="changeSize($event)">
                      <option :value="index" v-for="(grote,index) in gerecht.grotes" :key="grote.index" :selected="index == gerecht.default">
                        {{grote}}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input class="input" min="1" placeholder="Aantal"  value="1" required type="number"/>
                </div>
              </div>
            </div>

            <footer class="card-footer">
              <button v-on:click="bestel" class="button card-footer-item is-link is-fullwidth">Bestel</button>
              <input type="hidden" name="dag" :value="dag | moment('dddd')">
              <input type="hidden" name="volgnummer" :value="cindex*2+index">
            </footer>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Store from '@/store/'
import Notification from '@/components/Notification.vue'
import moment from 'moment'

export default {
  name: 'Week',
  props: {
    dag: Date,
    gerechten: Array,
  },
  components: {
    Notification,
  },
  mounted: function () { 
    this.$moment.locale('nl')
  },
  data() {
    return {
    }
  },
  computed: {
    chunkedGerechten () {
      const size=2
      return Array.from({ length: Math.ceil(this.gerechten.length / size) }, (v, i) =>
          this.gerechten.slice(i * size, i * size + size)
        );
    },
  },
  methods: {
    pricetofloat (myprice) {
      let tmp = myprice /100
      return tmp.toFixed(2)
    },
    changeSize: function(event){
      const sizeindex = event.target.value
      const prices=event.target.parentNode.parentNode.parentNode.parentNode.childNodes[0].childNodes[1].childNodes[2].childNodes[0].childNodes
      for(var i = 0; i < prices.length; i++){
        if ( prices[i].getAttribute('priceid') == sizeindex) {
          prices[i].style.display = 'block';
        } else {
          prices[i].style.display = 'none';
        }
      }
    },
    meerinfo: function () {
    },
    bestel: function (event) {
      const select = event.target.parentNode.parentNode.childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0] 
      const aantal = event.target.parentNode.parentNode.childNodes[0].childNodes[2].childNodes[0].childNodes[0].value
      const grote = select.childNodes[select.value].innerText
      const grotevalue = select.childNodes[select.value].value
      let startOfWeek = moment().startOf('week').add(7,"days");
      if(this.$route.params.naam === 'MAALTIJDEN-VOLGENDE-WEEK') {
        startOfWeek = startOfWeek.add(7,"days")
      }
      const weeknr = startOfWeek.week()
      const dag = event.target.parentNode.childNodes[1].value
      const volgnummer = event.target.parentNode.childNodes[2].value
      const naam = event.target.parentNode.parentNode.childNodes[0].childNodes[0].childNodes[1].childNodes[0].innerText
      let prijs = event.target.parentNode.parentNode.childNodes[0].childNodes[0].childNodes[1].childNodes[2].innerText
      prijs = Number(prijs.split("/")[0])*100

      let huidigetijd=moment();
      let minorderdate = moment().set({"day":"donderdag","hour": 23, "minute": 59});
      if ( huidigetijd.format('dddd') == "zondag"){
        minorderdate = minorderdate.subtract(7,"days");
      }

      if(huidigetijd > minorderdate && this.$route.params.naam === 'MAALTIJDEN') {
        const origineel = event.target.innerText
        event.target.innerText = "Te laat! Het is donderdag 23:59 geweest."
        const that = event.target
        setTimeout(() => that.innerText = origineel, 1500);

      } else {
        const product= {
          'weeknr':weeknr, 
          'dag':dag, 
          'volgnummer':volgnummer, 
          'grotevalue':grotevalue, 
          'grote':grote,
          'aantal':Number(aantal),
          'prijs':prijs,
          'naam':naam,
        }
        Store.commit('addProduct', product );

        const origineel = event.target.innerText
        event.target.innerText = aantal + " " + grote + " toegevoegd!"
        const that = event.target
        setTimeout(() => that.innerText = origineel, 1500);
      }

    }
  }
}
</script>