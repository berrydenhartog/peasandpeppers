<template>
  <div class="mycatering">
    <HeroBar title="Catering" :background="require('@/assets/contact.jpg')" />
    <section>
      <div class="container mainpadding">
        <div class="content">
          <p>Iets te vieren? Organiseer je een zakelijk event? 
            Wat de gelegenheid ook is - groot of klein - Peas &amp; Peppers <em>has your back</em>. </p><p>Het is onze passie om jou te laten proeven hoe fantastisch de veganistische keuken kan zijn. Elke meeting wordt naar een hoger niveau getild als er goed voedsel aanwezig is, toch? En hoe makkelijk is het om op deze manier je bedrijf een stukje te verduurzamen of je oom en tante te inspireren op een verjaardag? </p><p>Wij cateren al vanaf 8 personen en gaan tot een maximum van 40 personen. Van lekkere ontbijtjes tot lunchbuffetten, borrelplanken, sandwiches, bowls, smoothies of anderszins; laat het maar aan Peas &amp; Peppers over.</p><p>Interesse? Neem dan contact met ons op. Samen bespreken dan jouw voorkeuren en op basis daarvan sturen we jou een offerte. Neem in elk geval de volgende informatie mee in jouw bericht:</p><ul><li>Naam</li><li>E-mailadres</li><li>Telefoonnummer </li><li>Datum catering</li><li>Voor hoeveel personen?</li><li>Gewenste tijdstip en en plaats van aflevering</li><li>Wat is de gelegenheid? </li><li>Is het zakelijk of privé? </li>
            <li>Overige opmerkingen/vragen</li></ul>
        </div>
        <ContactForm />

      </div>
    </section>
  </div>
</template>

<script>
import HeroBar from '@/components/HeroBar.vue'
import ContactForm from '@/components/ContactForm.vue'

export default {
  name: 'Catering',
  data() {
    return {
    }
  },

  components: {
    HeroBar,
    ContactForm,
  },
}
</script>