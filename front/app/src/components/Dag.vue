<template>    
  <div class="mydag"> 
    <h3>{{dag | moment("D MMM")}}</h3>
    <div class="columns">
      <div class="column">
        <div class="card">
          <div class="card-image">
            <figure class="image is-square">
              <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
            </figure>
          </div>
          <div class="card-footer">
            <div class="select">
              <select>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </select>
            </div>
            <div class='buttons is-right'>
              <button class="button is-link">Bestel</button>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <div class="card-image">
            <figure class="image is-square">
              <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content">
            <div class="select">
              <select>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </select>
            </div>
            <button class="button is-link is-fullwidth">Bestel</button>
            <button class="button is-link-dark is-fullwidth">Meer Info</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Week',
  props: {
    dag: Object,
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
  }
}
</script>