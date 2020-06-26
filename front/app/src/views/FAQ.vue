<template>
  <div class="myfaq">
    <HeroBar title="FAQ" :background="require('@/assets/faq.jpg')" />
    <section>
      <div class="container mainpadding">
        <div class="content">
          <h3 class="title is-3">Hoe werkt Peas &amp; Peppers?</h3>
          <p>Wij koken iedere dag van maandag t/m donderdag twee heerlijke, verse, plantaardige maaltijden die in verschillende formaten te bestellen zijn. Zo kun je ze zowel voor de lunch als voor het avondeten gebruiken. Je geeft je bestellingen via de website voor de volgende week voor vrijdag door. Wij doen de boodschappen, wij koken en komen het op de bakfiets bij je brengen! Binnenkort kun je ook een abonnement afsluiten bij Peas &amp; Peppers, zodat je alleen nog maar je voorkeuren per week aan hoeft te geven. Ons menu verandert iedere 6 weken en naast maaltijden verkopen we ook nog ander lekkers in de webshop. </p>
          
          <h3 class="title is-3">Wanneer moet ik bestellen?</h3>
          <p>Je geeft je bestellingen via de website voor de volgende week voor vrijdag door. Zo kunnen wij scherp inkopen doen en beperken we voedselverspilling. </p>
          
          <h3 class="title is-3">Wanneer en hoe laat wordt er geleverd?</h3>
          <p>Op de website staat aangegeven welke maaltijden er op welke dagen worden gekookt. De maaltijd die jij selecteert bepaalt dus op welke dag er bezorgd wordt. Heb je naast maaltijden nog andere producten uit de webshop gekocht? Dan komen die bij je eerste bezorging van de week mee, tenzij jij anders hebt aangegeven. Levering vindt plaats tussen 13:00 uur en 17:00 uur en kan zowel thuis als op kantoor plaatsvinden.</p>
          

          <h3 class="title is-3">Waar bezorgen jullie?</h3>
          <p>Wij bezorgen in de volgende wijken: Benoordenhout, Haagse Bos, Bezuidenhout, Stationsbuurt, Oude Stad (centrum), Archipelbuurt, Willemspark, Zorgvliet, Zeeheldenkwartier, Geuzen- en Statenkwartier, Duinoord, Regentessekwartier, Valkenboskwartier, Bomen- en Bloemenbuurt, Vogelwijk. </p>

          <h3 class="title is-3">Is afhalen ook mogelijk?</h3>
          <p>Jazeker, mits je dat hebt aangegeven. Afhalen is mogelijk van maandag t/m donderdag tussen 12:00 uur en 12:45 uur aan het Tesselseplein 19, 2583 HP Den Haag.</p>
          
          <h3 class="title is-3">Hoe gaat de bezorging in zijn werking?</h3>
          <p>Wij leveren zo goed als alle bestellingen met de bakfiets! </p><p>Leverdagen: maandag t/m donderdag</p><p>Levertijden: 13:00 uur - 17:00 uur. Je ontvangt een smsje als we er over een kwartiertje zijn.</p>
          
          <h3 class="title is-3">Wat als ik niet thuis ben op het moment van levering?</h3>
          <p>Mocht je onverhoopt niet thuis zijn, dan proberen we jouw bestelling bij de buren te bezorgen. Mochten zij ook niet thuis zijn, dan hangen we jouw bestelling aan de deurknop.</p>
          
          <h3 class="title is-3">Wat zijn de bezorgkosten?</h3>
          <p>Bestel je voor meer dan € 30 euro? Dan leveren wij jouw bestelling helemaal gratis. Bestel je voor minder? Dan kost bezorgen € 1,50.</p>
          
          <h3 class="title is-3">Ik heb een allergie. Kan ik bij Peas &amp; Peppers bestellen?</h3>
          <p>Als je een allergie hebt, neem dan even contact met ons op. Dan zetten we samen de mogelijkheden op een rijtje. </p>

          <h3 class="title is-3">Moet ik de maaltijd zelf bereiden?</h3>
          <p>Nope, dat hebben wij al voor je gedaan. Jij hoeft het alleen nog maar op te warmen en op te eten. </p>
          
          <h3 class="title is-3">Zit ik vast aan een abonnement?</h3>
          <p>Bij Peas &amp; Peppers kan het allemaal: wil je zo vrij als een vogel zijn en steeds losse maaltijden bestellen? Bestel dan via de webshop. Wil je lekker helemaal ontzorgd worden? Binnenkort is het mogelijk om een abonnement af te sluiten. Vind je dat heftig? Hoeft niet! Onze abonnementen zijn namelijk heel erg flexibel. Je kunt ze te allen tijde opzeggen of pauzeren. Heb je dat doorgegeven voor de vrijdag voor de volgende week? Dan ontvang je (tijdelijk) geen bestellingen meer. Makkelijk toch?</p>
          
          <h3 class="title is-3">Hoe wijzig ik mijn persoonlijke gegevens?</h3>
          <p>Ook dit doe je gemakkelijk op jouw account. Wijzigingen die voor vrijdag gedaan zijn gaan de volgende week (ma t/m do) in.</p>
          
          <h3 class="title is-3">Hoe lang kan ik maaltijden bewaren?</h3>
          <p>Je kunt de maaltijden minstens 2 dagen bewaren. </p>
          
          <h3 class="title is-3">Hoe duurzaam is Peas &amp; Peppers?</h3>
          <p>Duurzaamheid is bij Peas &amp; Peppers erg belangrijk. Zo gebruiken wij alleen plantaardige ingrediënten en proberen we voedselverspilling zo veel mogelijk tegen te gaan door scherp inkopen te doen. Ook streven wij ernaar om de verpakkingsmaterialen plasticvrij te maken en houden. En niet te vergeten: voor zover mogelijk worden de bestellingen met de bakfiets bij je bezorgd!</p>

          <h3 class="title is-3">Is Peas &amp; Peppers 100% plantaardig?</h3>
          <p>Ja. Wij vinden dat je lekker, voedzaam en dierenleedvrij tegelijk kunt eten. Wij gebruiken dus alleen plantaardige ingrediënten. </p>
        </div>
      </div>
    </section>
    <section class="hero is-medium" v-bind:style="{ backgroundImage: 'url('+require('@/assets/Afbeelding5.jpg')+')' }">
      <div class="hero-body">
        <div class="container">
        </div>
      </div>
    </section>
    <section>
      <div class="container mainpadding">
        <div class="content">
          <h3 class="title is-3">Toch geen antwoord gevonden op jouw vraag? Neem dan contact met ons op.</h3>
          <ContactForm />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import HeroBar from '@/components/HeroBar.vue'
import ContactForm from '@/components/ContactForm.vue'

export default {
  name: 'FAQ',
  components: {
      HeroBar,
      ContactForm,
  }
}
</script>
