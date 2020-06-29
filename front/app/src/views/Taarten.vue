<template>
  <div class="mytaart">
    <HeroBar title="Taarten" :background="require('@/assets/taarten.jpg')" />
    <section>
      <div class="container mainpadding">
        <p>
          Hier komen binnenkort onze heerlijke taarten. Bent u nu al geinterreseerd in een taart, laat het ons weten en we sturen u de informatie toe.
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
  name: 'Taarten',
  components: {
      HeroBar,
      ContactForm,
  }
}
</script>
