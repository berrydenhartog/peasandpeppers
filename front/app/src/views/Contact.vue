<template>
  <div class="mycontact">
    <HeroBar title="HAPPY TO HELP!" subtitle="Heb je vragen neem dan contact met ons op" :background="require('@/assets/contact.jpg')" />
    <section>
      <div class="container mainpadding">
        <div class="columns">
          <div class="column">
            <h1 class="title">HEB JE EEN VRAAG?</h1>
            <h2 class="subtitle">
              Laat het ons hieronder weten en wij nemen zo snel mogelijk contact met je op.
            </h2>
            <div class="field">
              <div class="control has-icons-left ">
                <input v-model="naam" class="input is-primary" type="text" placeholder="naam" required>
                <span class="icon is-small is-left">
                    <i class="mdi mdi-account"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <div class="control has-icons-left ">
                <input v-model="email" class="input is-primary" type="email" placeholder="Email adres">
                <span class="icon is-small is-left">
                    <i class="mdi mdi-email"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <div class="control">
                <textarea v-model="bericht"  class="textarea is-primary" placeholder="Bericht"></textarea>
              </div>
            </div>
            <div class="field ">
              <div class="control">
                <button class="button is-link">Verstuur</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HeroBar from '@/components/HeroBar.vue'


export default {
  name: 'Contact',
  data() {
    return {
      email: null,
      naam: null,
      bericht: null,
    }
  },
  components: {
    HeroBar,
  },
}
</script>