<template>
  <div class="myhero">

    <section class="hero is-medium" v-bind:style="{ backgroundImage: 'url(' + background + ')' }">
      <div class="hero-body">
        <div class="container" >
          <div class="box has-background-dark">
            <h1 class="title is-uppercase">
              {{title}}
            </h1>
            <h2 class="subtitle">
              {{subtitle}}
            </h2>
          </div>
        </div>
      </div>
    </section> 
  </div>
</template>

<script>
export default {
  name: 'HeroBar',
  props: {
    title: String,
    subtitle: String,
    background: String,
  }
}
</script>