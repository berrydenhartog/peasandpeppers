<template>    
  <div class="mydag"> 
    <a :name="dag | moment('dddd')"></a>
    <h3 class="title">{{dag | moment("dddd D MMM")}}</h3>
    <div class="columns">
      <div class="column">
        <div class="card">
          <div class="card-content">
            <div class="columns">
              <div class="column">
                <figure class="image is-16by9">
                  <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                </figure>
              </div>
              <div class="column">
                <h1 class="title">Productnaam</h1>
                <p>
                  omschrijving
                </p>
                <div class="field">
                  <div class="control">
                    <div class="price">
                      8.59
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="field">
              <div class="control">
                <div class="select is-fullwidth">
                  <select>
                    <option>Small</option>
                    <option selected="selected">Medium</option>
                    <option>Large</option>
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
      <div class="column">
        <div class="card">
          <div class="card-content">
            <div class="columns">
              <div class="column">
                <figure class="image is-16by9">
                  <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                </figure>
              </div>
              <div class="column">
                <h1 class="title">Productnaam</h1>
                <p>
                  omschrijving
                </p>
                <div class="field">
                  <div class="control">
                    <div class="price">
                      8.59
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="field">
              <div class="control">
                <div class="select is-fullwidth">
                  <select>
                    <option>Small</option>
                    <option selected="selected">Medium</option>
                    <option>Large</option>
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
  },
  mounted: function () { 
    this.$moment.locale('nl')
    console.log(this.dag)
  },
  data() {
    return {
    }
  },
  methods: {
    meerinfo: function (event) {
      console.log("meerinfo",event)

    },
    bestel: function (event) {
      const grote = event.target.parentNode.parentNode.childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0].value 
      const aantal = event.target.parentNode.parentNode.childNodes[0].childNodes[2].childNodes[0].childNodes[0].value
      console.log("aantal",aantal,grote)
      const origineel = event.target.innerText
      event.target.innerText = aantal + " " + grote + " toegevoegd!"
      const that = event.target
      setTimeout(() => that.innerText = origineel, 1500);
      Store.commit('addProduct', aantal + " " + grote);


    }
  }
}
</script>