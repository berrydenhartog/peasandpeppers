<template>
  <div class="myhome">
    <section class="hero is-fullheight" id="homehero">
      <div class="hero-body">
        <div class="container">
          <figure class="image is-3by1">
            <img src="@/assets/home2.png" style="opacity: 0.95;">
          </figure>
        </div>
      </div>
    </section>
        <div class="container marginmain">
          <div class="box has-background-white-bis">
            <h3 class="title is-4 has-text-centered">Gezond, lekker en plantaardig eten zonder er iets voor te doen? Laat de boodschappen en het koken dan maar aan ons over! Wij brengen de door jou gekozen maaltijd naar je toe op de dag dat het jou uitkomt.</h3>
          </div>
        </div>
        <div class="divider is-link"> </div>


        <section class="container mainpadding">
          <h3 class="title is-3">Hoe werkt het?</h3>
          <div class="columns">
            <div class="column columncentercontent">
              <span class="icon has-text-link has-text-centered">
                <i class="mdi mdi-36px mdi-magnify"></i>
              </span>
              <h3 class="title is-4">Scroll</h3>
              <p class="has-text-centered">Bekijk de webshop en ontdek welke maaltijden er aankomende week worden bereid. Het menu verandert eens in de 6 weken.</p>
            </div>
            <div class="column columncentercontent">
              <span class="icon has-text-link">
                <i class="mdi mdi-36px mdi-food-variant"></i>
              </span>
              <h3 class="title is-4">Pick</h3>
              <p class="has-text-centered">Kies de maaltijd die jou aanspreekt in de gewenste maat. Zo zijn de maaltijden zowel geschikt voor de lunch als voor het avondeten. </p>
            </div>
            <div class="column columncentercontent">
              <span class="icon has-text-link">
                <i class="mdi mdi-36px mdi-emoticon-cool"></i>
              </span>
              <h3 class="title is-4">Relax</h3>
              <p class="has-text-centered">Wij doen de boodschappen en bereiden de maaltijden met liefde in onze keuken terwijl jij geniet van je bespaarde tijd. </p>
            </div>
            <div class="column columncentercontent">
              <span class="icon has-text-link">
                <i class="mdi mdi-36px mdi-emoticon-happy"></i>
              </span>
              <h3 class="title is-4">Enjoy</h3>
              <p class="has-text-centered">Wij springen op de bakfiets en bezorgen jouw maaltijd op de door jou aangewezen plek. Dat kan thuis, maar bijvoorbeeld ook op kantoor.</p>
            </div>
          </div>
        </section>

        <section class="container mainpadding">
          <h3 class="title is-3">Maak het jezelf gemakkelijk</h3>
          <div class="container">
            <div class="columns">
              <div class="column is-one-quarter">
                <figure class="image">
                  <img src="@/assets/Afbeelding1.jpg">
                </figure>
              </div>
              <div class="column">
                <p>Nederlanders zijn gemiddeld 3 uur per week kwijt aan het doen van boodschappen en bijna 5 uur per week aan het koken van hun avondeten. Niet altijd vervelend, maar op sommige dagen kun je je tijd wel beter besteden, toch? Of je hebt geen inspiratie of simpelweg even geen zin. Begrijpelijk, hoor. Hoe fijn is het als je ook op die dagen lekker en voedzaam kan blijven eten? Wij doen het werk, jij hoeft het alleen nog zelf op te eten. </p>
              </div>
            </div>
          </div>
        </section>

        <section class="container mainpadding">
          <h3 class="title is-3">100% plantaardig</h3>
          <div class="container">
            <div class="columns">
              <div class="column is-one-fifth">
                <figure class="image">
                  <img src="@/assets/Afbeelding2.jpg">
                </figure>
              </div>
              <div class="column">
                <p>Onze liefde voor eten is groot, maar die voor dieren is nog groter. Wij gebruiken daarom geen dierlijke producten in onze maaltijden. Beter voor de dieren en ook nog eens voor het milieu en je gezondheid. </p>
                <router-link :to="{ name: 'OverOns'}">lees hier meer over onze missie</router-link>
              </div>
            </div>
          </div>
        </section>

        <section  class="container mainpadding">
          <h3 class="title is-3">Minder voedselverspilling</h3>
          <div class="container">
            <div class="columns">
              <div class="column is-one-quarter">
                <figure class="image">
                  <img src="@/assets/Afbeelding3.jpg">
                </figure>
              </div>
              <div class="column">
                <p>Wij houden niet van voedselverspilling. Omdat jij jouw bestellingen en voorkeuren voor de volgende week steeds voor vrijdag doorgeeft, kunnen wij zo inkopen dat er zo min mogelijk voedsel in de prullenbak belandt. Love &amp; food are meant for sharing, not for wasting. </p>
              </div>
            </div>
          </div>
        </section>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>
