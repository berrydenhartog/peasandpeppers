<template>
  <div class="myoverige">
    <HeroBar title="Overige" :background="require('@/assets/taarten.jpg')" />
    <section>
      <div class="container mainpadding">
        <p>
          Hier komen binnenkort onze overige specialiteiten. Bent u nu al geinterreseerd in een specialiteit, laat het ons weten en we sturen u de informatie toe.
          <ContactForm />
        </p>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import HeroBar from '@/components/HeroBar.vue'
import ContactForm from '@/components/ContactForm.vue'

export default {
  name: 'Overige',
  components: {
      HeroBar,
      ContactForm,
  }
}
</script>
