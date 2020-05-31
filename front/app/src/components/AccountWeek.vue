<template>    
  <div class="myweek"> 
    <h2 class="title">Het menu van {{startOfWeek | moment("D MMM")}} - {{endOfWeek | moment("D MMM")}}  </h2>
    <div class="buttons">
      <a href="#maandag" :disabled="!getgerecht('maandag').length" class="button is-link">Maandag</a>
      <a href="#dinsdag" :disabled="!getgerecht('dinsdag').length" class="button is-link">Dinsdag</a>
      <a href="#woensdag" :disabled="!getgerecht('woensdag').length" class="button is-link">Woensdag</a>
      <a href="#donderdag" :disabled="!getgerecht('donderdag').length" class="button is-link">Donderdag</a>
      <a href="#vrijdag" :disabled="!getgerecht('vrijdag').length" class="button is-link">Vrijdag</a>
      <a href="#zaterdag" :disabled="!getgerecht('zaterdag').length" class="button is-link">Zaterdag</a>
      <a href="#zondag" :disabled="!getgerecht('zondag').length" class="button is-link">Zondag</a>
    </div>
    <AccountDag :gerechten="getgerecht('maandag')" :dag="maandag"/>
    <AccountDag :gerechten="getgerecht('dinsdag')" :dag="dinsdag"/>
    <AccountDag :gerechten="getgerecht('woensdag')" :dag="woensdag"/>
    <AccountDag :gerechten="getgerecht('donderdag')" :dag="donderdag"/>
    <AccountDag :gerechten="getgerecht('vrijdag')" :dag="vrijdag"/>
    <AccountDag :gerechten="getgerecht('zaterdag')" :dag="zaterdag"/>
    <AccountDag :gerechten="getgerecht('zondag')" :dag="zondag"/>
    <div v-for="dag in dagen" :key="dag.index">
      <a :name="getdag(dag) | moment('dddd')"></a>
      <h3 class="title">{{getdag(dag) | moment("dddd D MMM")}}</h3>
        <div v-for="(cgerechten , cindex) in chunkedGerechten(dag)" :key="cgerechten.index" class="columns">   
          <div v-for="(gerecht, index) in cgerechten" :key="gerecht.index" class="column is-half">
            {{cindex}} {{index}}
            <form v-on:submit.prevent="">
              <div class="file">
               <label class="file-label">
                 <input class="file-input" type="file" name="gerechtfoto">
                 <span class="file-cta">
                   <span class="file-icon">
                     <i class="mdi mdi-upload"></i>
                   </span>
                   <span class="file-label">
                     Foto
                   </span>
                 </span>
               </label>
              </div> 
              <div class="field">
                <div class="control">
                  <input class="input" type="text" placeholder="Titel">
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input class="input" type="text" placeholder="Omschrijving">
                </div>
              </div>
              <div class="field is-grouped">
                <p class="control">
                  <input class="input" type="text" placeholder="Grootte">
                </p>
                <p class="control">
                  <input class="input" type="text" placeholder="Prijs">
                </p>
              </div>
            </form>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import AccountDag from '@/components/AccountDag.vue'
import moment from 'moment'
import GerechtenRepository from "../repository/GerechtenRepository";

export default {
  name: 'Week',
  components: {
    AccountDag,
  },
  props: {
    week: String,

  },
  mounted: function () { 
    this.$moment.locale('nl')
    this.updatedate()
  },
  watch: {
    week: function () {
      this.updatedate()
    }
  },
  data() {
    return {
      startOfWeek: null, 
      endOfWeek: null, 
      maandag: null,
      dinsdag: null,
      woensdag: null,
      donderdag: null,
      vrijdag: null,
      zaterdag: null,
      zondag: null,
      weekMenu: null,
      dagen: [
        "maandag",
        "dinsdag",
        "woensdag",
        "donderdag",
        "vrijdag",
        "zaterdag",
        "zondag",
      ]
    }
  },
  methods: {
    getdag(dag) {
      let result=null
      switch(dag) {
        case "maandag":
          result=this.maandag
          break;
        case "dinsdag":
          result=this.dinsdag
          break;
        case "woensdag":
          result=this.woensdag
          break;
        case "donderdag":
          result=this.donderdag
          break;
        case "vrijdag":
          result=this.vrijdag
          break;
        case "zaterdag":
          result=this.zaterdag
          break;
        case "zondag":
          result=this.zondag
          break;
        default:
          result=this.maandag
      }
      return result

    },
    getgerecht(dag){
      if (!this.weekMenu || !this.weekMenu.Item || !this.weekMenu.Item[dag] ) {
        return []
      }
      return this.weekMenu.Item[dag]
    },
    chunkedGerechten (dag) {
      const gerechten = this.getgerecht(dag)
      const size=2
      return Array.from({ length: Math.ceil(gerechten.length / size) }, (v, i) =>
          gerechten.slice(i * size, i * size + size)
        );
    },
    updatedate: async function () {
      var startOfWeek = moment().set({"week":this.week, "day":"maandag"});
      var endOfWeek = moment().set({"week":this.week, "day":"maandag"}).add(7,"days");
      this.startOfWeek = startOfWeek.toDate()
      this.endOfWeek = endOfWeek.toDate()
      this.maandag= startOfWeek.toDate()
      this.dinsdag= startOfWeek.add(1,"days").toDate()
      this.woensdag= startOfWeek.add(1,"days").toDate()
      this.donderdag= startOfWeek.add(1,"days").toDate()
      this.vrijdag= startOfWeek.add(1,"days").toDate()
      this.zaterdag= startOfWeek.add(1,"days").toDate()
      this.zondag= startOfWeek.add(1,"days").toDate()

      const { data } = await GerechtenRepository.get("week"+startOfWeek.format('w'))
      this.weekMenu = data
    }
  }
}
</script>