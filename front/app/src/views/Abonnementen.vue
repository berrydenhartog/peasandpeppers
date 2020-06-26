<template>
  <div class="myabonnementen">
    <HeroBar title="Abonnementen" :background="require('@/assets/taarten.jpg')" />
    <section>
      <div class="container mainpadding">
        <div class="content">
        <p>
          Het is voor ons belangrijk dat het voor jou lekker makkelijk is. Daarom doen wij de boodschappen, koken wij en brengen wij het bij jou langs. Op kantoor of aan huis. Maar binnenkort wordt het nóg makkelijker. Het wordt namelijk mogelijk om een abonnement bij Peas & Peppers af te sluiten. Dat klinkt misschien heftiger dan het is, want onze abonnementen zijn super flexibel. Pauzeer of stop wanneer het jou uitkomt en als je alles op tijd doorgeeft gaat de verandering dezelfde week nog in. Je hoeft dan alleen nog maar even je voorkeuren door te geven. Makkelijk toch? We keep you posted!
        </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import HeroBar from '@/components/HeroBar.vue'

export default {
  name: 'Abonnementen',
  components: {
      HeroBar,
  }
}
</script>
