<template>
  <div class="myhero">

    <section class="hero is-medium" v-bind:style="{ backgroundImage: 'url(' + background + ')' }">
      <div class="hero-body">
        <div class="container" >
          <h1 class="title">
            {{title}}
          </h1>
          <h2 class="subtitle">
            {{subtitle}}
          </h2>
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