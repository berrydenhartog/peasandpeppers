<template>
  <div class="myhome">
    <section class="hero is-fullheight" id="homehero">
      <div class="hero-body">
        <div class="container test2">
          <figure class="image">
            <img src="@/assets/home2.png" class="test" style="opacity: 0.65;">
          </figure>
        </div>
      </div>
    </section>
        <div class="container mainpadding marginmain">
            <p class="has-text-centered is-size-4 test3"> Wel heerlijk eten maar niet in de keuken staan? Van retraites tot feestjes en van vergaderingen tot evenementen: voor veganistische catering in Den Haag en omstreken zit je bij Peas & Peppers helemaal goed. Wij verzorgen met liefde smaakvolle catering voor elke gelegenheid. 
              <router-link :to="{ name: 'Catering'}">
                Lees hier meer over de mogelijkheden.
              </router-link>
            </p>
        </div>
        <div class="container">
          <div class="spacertest">
            <div class="divider is-link"> </div>
          </div>
        </div>


        <section class="container mainpadding">
          <h3 class="title is-3 has-text-centered">Hoe werkt het?</h3>
          <div class="columns">
            <div class="column columncentercontent">
              <span class="icon has-text-link has-text-centered">
                <i class="mdi mdi-36px mdi-account-edit"></i>
              </span>
              <h3 class="title is-4">Contact</h3>
              <p class="has-text-centered">Vertel ons wat je wensen zijn via <router-link :to="{ name: 'Catering'}">dit contactformulier</router-link>. Wij nemen vervolgens zo snel mogelijk contact met jou op.</p>
            </div>
            <div class="column columncentercontent">
              <span class="icon has-text-link">
                <i class="mdi mdi-36px mdi-check-outline"></i>
              </span>
              <h3 class="title is-4">Check</h3>
              <p class="has-text-centered">Je ontvangt binnen 48 uur een op maat gemaakte offerte die voldoet aan jouw wensen voor de gelegenheid. </p>
            </div>
            <div class="column columncentercontent">
              <span class="icon has-text-link">
                <i class="mdi mdi-36px mdi-emoticon-cool"></i>
              </span>
              <h3 class="title is-4">Relax</h3>
              <p class="has-text-centered">Bij akkoord kun je achterover leunen en gaan wij aan de slag. Wij doen het werk terwijl jij je op andere dingen richt! </p>
            </div>
            <div class="column columncentercontent">
              <span class="icon has-text-link">
                <i class="mdi mdi-36px mdi-emoticon-happy"></i>
              </span>
              <h3 class="title is-4">Enjoy</h3>
              <p class="has-text-centered">Geniet van het lekkere eten! Wij kunnen op locatie komen maar bieden ook de mogelijkheid om af te halen. </p>
            </div>
          </div>
        </section>

        <section class="container mainpadding">
          <div class="container">
            <div class="columns">
              <div class="column is-one-quarter">
                <figure class="image">
                  <img class="is-rounded" src="@/assets/Afbeelding1.jpg">
                </figure>
              </div>
              <div class="column">
                <h3 class="title is-3">Maak het jezelf gemakkelijk</h3>
                <p>Nederlanders zijn gemiddeld 3 uur per week kwijt aan het doen van boodschappen en bijna 5 uur per week aan het koken van hun avondeten. Niet altijd vervelend, maar op bijzondere gelegenheden kun je je tijd wel beter besteden, toch? Begrijpelijk. Hoe fijn is het als er dan lekker eten voor je wordt verzorgd? Wij doen het werk, jij hoeft alleen maar te genieten. </p>
              </div>
            </div>
          </div>
        </section>

        <section class="container mainpadding">
          <div class="container">
            <div class="columns">
              <div class="column is-one-quarter">
                <figure class="image ">
                  <img class="is-rounded " src="@/assets/Afbeelding6.jpg">
                </figure>
              </div>
              <div class="column">
                <h3 class="title is-3">100% plantaardig</h3>
                <p>Onze liefde voor eten is groot, maar die voor dieren is nog groter. Wij gebruiken daarom geen dierlijke producten in onze maaltijden. Beter voor de dieren en ook nog eens voor het milieu en je gezondheid. </p>
                <router-link :to="{ name: 'OverOns'}">lees hier meer over onze missie</router-link>
              </div>
            </div>
          </div>
        </section>

        <section  class="container mainpadding">
          
          <div class="container">
            <div class="columns">
              <div class="column is-one-quarter">
                <figure class="image">
                  <img class="is-rounded" src="@/assets/Afbeelding3.jpg">
                </figure>
              </div>
              <div class="column">
                <h3 class="title is-3">Minder voedselverspilling</h3>
                <p>Wij houden niet van voedselverspilling. Daarom bespreken wij jouw wensen tot in detail en zorgen we ervoor dat er zo min mogelijk in de prullenbak belandt. Love & food are meant for sharing, not for wasting.  </p>
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
