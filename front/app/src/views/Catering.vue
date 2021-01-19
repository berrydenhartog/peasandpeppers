<template>
  <div class="mycatering">
    <HeroBar title="Catering" :background="require('@/assets/account.jpg')" />
    <section>
      <div class="container mainpadding">
        <div class="content">
          <p>Iets te vieren? Organiseer je een zakelijk event? 
            Wat de gelegenheid ook is - groot of klein - Peas &amp; Peppers <em>has your back</em>. </p><p>Het is onze passie om jou te laten proeven hoe fantastisch de veganistische keuken kan zijn. Elke meeting wordt naar een hoger niveau getild als er goed voedsel aanwezig is, toch? En hoe makkelijk is het om op deze manier je bedrijf een stukje te verduurzamen of je oom en tante te inspireren op een verjaardag? </p><p>Wij cateren al vanaf 8 personen en gaan tot een maximum van 40 personen. Van lekkere ontbijtjes tot lunchbuffetten, borrelplanken, sandwiches, bowls, smoothies of anderszins; laat het maar aan Peas &amp; Peppers over.</p><p>Interesse? Neem dan contact met ons op. Samen bespreken dan jouw voorkeuren en op basis daarvan sturen we jou een offerte.
          </p>
          <div class="columns">
            <div class="column">
              <div class="field">
                <div class="control has-icons-left ">
                  <input v-model="naam" class="input is-primary" type="text" placeholder="Naam" required>
                  <span class="icon is-small is-left">
                      <i class="mdi mdi-account"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <div class="control has-icons-left ">
                  <input v-model="email" class="input is-primary" type="email" placeholder="Email">
                  <span class="icon is-small is-left">
                      <i class="mdi mdi-email"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <div class="control has-icons-left ">
                  <input v-model="telefoonnummer" class="input is-primary" type="tel" placeholder="Telefoonnummer">
                  <span class="icon is-small is-left">
                      <i class="mdi mdi-phone"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <div class="control has-icons-left">
                  <datetime v-model="date" type="datetime" input-class="input is-primary" :min-datetime="mindatetime" format="yyyy-MM-dd HH:mm" minute-step="15" placeholder="Datum"></datetime>
                  <span class="icon is-small is-left">
                      <i class="mdi mdi-calendar"></i>
                  </span>
                </div>
              </div>
              <div class="field is-grouped">
                <p class="control has-icons-left">
                  <input v-model="straat" class="input is-primary" type="text" placeholder="Straat">
                  <span class="icon is-small is-left">
                      <i class="mdi mdi-road"></i>
                  </span>
                </p>
                <p class="control has-icons-left">
                  <input v-model="plaats" class="input is-primary" type="text" placeholder="Plaats">
                  <span class="icon is-small is-left">
                      <i class="mdi mdi-city"></i>
                  </span>
                </p>
              </div>
              <div class="field">
                <div class="control has-icons-left ">
                  <input v-model="aantalpersonen" class="input is-primary" type="text" placeholder="Aantal personen" required>
                  <span class="icon is-small is-left">
                      <i class="mdi mdi-account-group"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <div class="control has-icons-left ">
                  <input v-model="gelegenheid" class="input is-primary" type="text" placeholder="Gelegenheid" required>
                  <span class="icon is-small is-left">
                      <i class="mdi mdi-balloon"></i>
                  </span>
                </div>
              </div>
              <div class="control">
                <label class="radio">
                  <input type="radio" value="zakelijk" checked v-model="privzak">
                  Zakelijk
                </label>
                <label class="radio">
                  <input type="radio" value="prive" v-model="privzak">
                  Prive
                </label>
              </div>
              <div class="field">
                <div class="control">
                  <textarea v-model="bericht" class="textarea is-primary" placeholder="Overige opmerkingen/vragen"></textarea>
                </div>
              </div>
              <div v-if="errors.length" class="notification is-danger">
                <ul>
                  <li v-for="error in errors" :key="error">{{ error }}</li>
                </ul>
              </div>
              <div class="field ">
                <div class="control">
                  <button v-bind:class="{'is-loading': isLoading}" v-on:click="submitForm" class="button is-link">Verstuur</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="modal"  v-bind:class="{'is-active': activeModal}" >
      <div class="modal-background"></div>
        <div class="modal-content">
          <article class="message">
            <div class="message-header">
              <p>Bedankt</p>
              <button v-on:click="activeModal = false" class="delete" aria-label="delete"></button>
            </div>
            <div class="message-body">
              {{modalbericht}}
            </div>
          </article>
        </div>
      </div>
    </div>
</template>

<script>
import HeroBar from '@/components/HeroBar.vue'
import EmailRepository from "../repository/EmailRepository";
import { Datetime } from 'vue-datetime';


export default {
  name: 'Catering',
  data() {

    const event = new Date();
    return {
      isLoading: false,
      email: null,
      date: null,
      naam: null,
      straat: null,
      plaats: null,
      privzak: null,
      mindatetime: event.toISOString(),
      telefoonnummer: null,
      aantalpersonen: null,
      gelegenheid: null,
      bericht: null,
      showError: false,
      errors: [],
      activeModal: false,
      modalbericht: '',
    }
  },
  computed: {
    checkmail(){
      // eslint-disable-next-line
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
        return false 
      }
      return true
    },
    checknaam(){
      if (!this.naam) {
        return true
      }
      return false
    },
    checktelefoon(){
      // eslint-disable-next-line
      if (/^[0-9\-\+]{10,14}$/.test(this.telefoonnummer)) {
        return false 
      }
      return true
    },
  },
  components: {
    HeroBar,
    datetime: Datetime
  },
 methods: {
    submitForm: async function() {
      this.errors = [];

      if (this.errors.length == 0) {

        this.isLoading = true;
        try {
          let bericht = `
TelefoonNummer: ${this.telefoonnummer}
Datum:          ${this.date}
Adres:          ${this.straat} ${this.plaats}
Aantal Personen: ${this.aantalpersonen}
Gelegenheid:    ${this.gelegenheid}
type:           ${this.privzak}
Opmerkingen:    ${this.bericht}
          `
          const payload= {
            'email':this.email,
            'naam':this.naam,
            'bericht':bericht
          }
          const { data } = await EmailRepository.create(payload)
          if (data.statusCode == 200) {
            this.email=null;
            this.naam=null;
            this.telefoonnummer=null;
            this.date=null;
            this.straat=null;
            this.plaats=null;
            this.aantalpersonen=null;
            this.gelegenheid=null;
            this.privzak=null;
            this.bericht=null;
            this.modalbericht = 'We hebben je aanvraag ontvangen. Wij nemen zo snel mogelijk contact met je op.'
          } else {
            this.modalbericht = 'Sorry, Er is een technische storing, we kunnen uw aanvraag niet verwerken.'
          }
          this.activeModal = true;
          this.isLoading = false;
          
        } catch (error) {
          this.errors.push(error.message);
          this.isLoading = false;
        }
      }

    },
  },
}
</script>