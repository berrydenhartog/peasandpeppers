<template>
  <div class="mycontact">
    <HeroBar title="Nice To Meet You" :background="require('@/assets/contact.jpg')" />
    <section>
      <div class="container mainpadding">
        <ContactForm title="Heb je een vraag?" subtitle="Laat het ons hieronder weten." />
      </div>
    </section>
  </div>
</template>

<script>
import HeroBar from '@/components/HeroBar.vue'
import ContactForm from '@/components/ContactForm.vue'

export default {
  name: 'Contact',
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