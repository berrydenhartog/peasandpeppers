<template>    
  <div class="mydag"> 
    <a :name="dag | moment('dddd')"></a>
    <h3 class="title">{{dag | moment("dddd D MMM")}}</h3>
    <div class="columns">
      <div v-for="gerecht in gerechten" :key="gerecht.index" class="column">
        <div class="card">
          <div class="card-content">
            <div class="columns">
              <div class="column">
                <figure class="image is-16by9">
                  <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                </figure>
              </div>
              <div class="column">
                <h1 class="title">{{gerecht.naam}}</h1>
                <p>
                  {{gerecht.omschrijving}}
                </p>
                <div class="field">
                  <div class="control">
                    <div class="price">
                      {{gerecht.prijzen}}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="field">
              <div class="control">
                <div class="select is-fullwidth">
                  <select>
                    <option v-for="grote in gerecht.grotes" :key="grote.index">
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
            <button v-on:click="meerinfo" class="button card-footer-item is-link-dark is-fullwidth">Meer Info</button>
            <button v-on:click="bestel" class="button card-footer-item is-link is-fullwidth">Bestel</button>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Store from '../store/'

export default {
  name: 'Week',
  props: {
    dag: Date,
    gerechten: Array,
  },
  mounted: function () { 
    this.$moment.locale('nl')
  },
  data() {
    return {
    }
  },
  methods: {
    meerinfo: function () {
    },
    bestel: function (event) {
      const grote = event.target.parentNode.parentNode.childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0].value 
      const aantal = event.target.parentNode.parentNode.childNodes[0].childNodes[2].childNodes[0].childNodes[0].value
      
      Store.commit('addProduct', aantal + " " + grote);
      
      const origineel = event.target.innerText
      event.target.innerText = aantal + " " + grote + " toegevoegd!"
      const that = event.target
      setTimeout(() => that.innerText = origineel, 1500);
      


    }
  }
}
</script>