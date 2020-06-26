<template>
  <div class="myhoewijrollen">
    <HeroBar title="Hoe wij rollen" :background="require('@/assets/taarten.jpg')" />
     <section>
      <div class="container mainpadding">
        <div class="content">
          <h3 class="title is-3">Hoe werkt het?</h3>
          <p>Wij koken iedere week van maandag tot en met donderdag twee heerlijke, plantaardige maaltijden per dag die in verschillende formaten te bestellen zijn. Zo zijn ze zowel geschikt voor de lunch als voor het avondeten. </p><p>Geef elke week vóór donderdagavond 23.59 uur jouw bestellingen voor de volgende week door. Op deze manier kunnen wij strak inkopen en gaat er geen voedsel verloren. </p><p>Wij komen jouw maaltijden vervolgens op de aangewezen dag met de bakfiets bij je langs brengen. Dat kan zowel op kantoor als thuis. Wij bezorgen maandag tot en met donderdag tussen 13:30 uur en 17:00 uur en de avond van tevoren krijg je een specifieker tijdstip toegestuurd. Wil je de maaltijd dus als lunch gebruiken, bestel ‘m dan een dag van tevoren. </p><p>Afhalen kan ook, mits je dat hebt aangegeven. Dat kan maandag tot en met donderdag tussen 12:00 uur en 12:45 uur aan het Tesselseplein 19, 2583 HP Den Haag. </p><p>De producten uit de shop onder ‘taarten’ en ‘overige’ worden op bestelling gemaakt. Bestel deze 4 dagen van tevoren om op tijd van de lekkernijen te kunnen genieten. </p><p>Binnenkort wordt het mogelijk om voor de maaltijden een abonnement af te sluiten bij Peas &amp; Peppers! Zo hoef je per week alleen nog maar je voorkeuren door te geven en hoef je je verder helemaal geen zorgen meer te maken over koken en boodschappen doen. Hoe lekker klinkt dat? En wees niet bang, het abonnement is super flexibel en op ieder moment aan te passen. We houden je op de hoogte! </p>
         </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import HeroBar from '@/components/HeroBar.vue'

export default {
  name: 'HoeWijRollen',
  components: {
      HeroBar,
  }
}
</script>
