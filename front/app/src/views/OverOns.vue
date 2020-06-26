<template>
  <div class="myoverons">
    <HeroBar title="Missie" :background="require('@/assets/taarten.jpg')" />
     <section>
      <div class="container mainpadding">
        <div class="content">
<p>Het verhaal van Peas &amp; Peppers is begonnen bij liefde voor eten. Goed eten. Wij willen iedereen onbezorgd laten genieten van verse, kwalitatief goede en bovenal lekkere maaltijden met het seizoen als inspiratiebron. Het is ons streven om lokale telers en ambachtslieden als voornaamste leveranciers te laten fungeren. Peas &amp; Peppers komt jouw plantaardige maaltijd met de bakfiets op kantoor of thuis langs brengen en zorgt elke dag weer voor een momentje om naar uit te kijken. </p>

<h3 class="title is-4">Missie</h3>
<p>Wij begrijpen het als je niet altijd tijd, zin of inspiratie hebt om je dagelijkse lunchpakket of diner samen te stellen. Het is dan ook onze missie om het zo gemakkelijk mogelijk te maken om gevarieerd, plantaardig en voedzaam te eten. Een door jou uitgekozen maaltijd op een door jou aangewezen plek bezorgd.</p>

<h3 class="title is-4">Plantaardig</h3>
<p>Wij geloven dat er aan een lekkere maaltijd geen dierlijk product te pas hoeft te komen. En als het niet hoeft, waarom zou je dan? Met dit concept willen we een positieve impact maken op het dierenwelzijn, natuur, klimaat, milieu, biodiversiteit en wereldvoedselvoorziening. Dat dat hand in hand kan gaan met voedsel waar je je vingers bij aflikt willen wij aan Den Haag laten proeven. </p>

<h3 class="title is-4">Voedzaam</h3>
<p>‘Kant-en-klaar’ en 'gezond’ zijn geen woorden die je vaak in dezelfde zin vindt. Bij Peas &amp; Peppers wel! Wij zien het als een uitdaging om het gemak van bestellen en het gezonde van zelf koken samen te laten gaan. Zo wordt het niet alleen een feestje voor je smaakpapillen, maar ook voor de rest van je lijf. </p>

<h3 class="title is-5">Over Ezra</h3>
<div class="columns">
  <div class="column">
    <figure class="image">
      <img class="is-rounded" :src="require('@/assets/Afbeelding4.jpg')">
    </figure>
  </div>
  <div class="column">
   <p>Haaa, wat leuk dat je dit leest. Ik ben Ezra; de oprichter van Peas &amp; Peppers. De arbeidsrechtjurist die haar hart verloor aan het koken. Voor mijn omgeving van het niet zo'n shock dat ik deze ingrijpende carrièreswitch maakte. Ik vulde immers al mijn vrije uurtjes met het koken en bakken van de lekkerste dingen en vond het heerlijk om daar anderen mee blij te maken of te inspireren. Ik heb altijd wel geweten dat ik daar iets mee wilde doen, maar dat was altijd ‘ooit’. Totdat ik mijzelf bewust de vraag stelde: waarom ooit? Waarom wachten met het waarmaken van je droom? Ik kon er geen zinnig antwoord op bedenken en het zaadje van Peas &amp; Peppers was toen snel gepland. Vanaf daar was er geen weg mee terug. Man, hoe tof was (en is) dat pad! Ik doe dit werk met mijn hele hart en al mijn liefde. Ik hoop mensen te laten proeven hoe lekker plantaardig eten is en hoe belangrijk de boodschap is die erachter zit en daar wil ik mijn levenswerk van maken. </p>
  </div>
</div>
         </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import HeroBar from '@/components/HeroBar.vue'

export default {
  name: 'OverOns',
  components: {
      HeroBar,
  }
}
</script>
