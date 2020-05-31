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
    <Dag :gerechten="getgerecht('maandag')" :dag="maandag"/>
    <Dag :gerechten="getgerecht('dinsdag')" :dag="dinsdag"/>
    <Dag :gerechten="getgerecht('woensdag')" :dag="woensdag"/>
    <Dag :gerechten="getgerecht('donderdag')" :dag="donderdag"/>
    <Dag :gerechten="getgerecht('vrijdag')" :dag="vrijdag"/>
    <Dag :gerechten="getgerecht('zaterdag')" :dag="zaterdag"/>
    <Dag :gerechten="getgerecht('zondag')" :dag="zondag"/>
  </div>
</template>

<script>
import Dag from '@/components/Dag.vue'
import moment from 'moment'
import GerechtenRepository from "../repository/GerechtenRepository";

export default {
  name: 'Week',
  components: {
    Dag,
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
      weekMenu: null
    }
  },
  methods: {
    getgerecht(dag){
      if (!this.weekMenu || !this.weekMenu.Item || !this.weekMenu.Item[dag] ) {
        return []
      }
      return this.weekMenu.Item[dag]
    },
    updatedate: async function () {
      var startOfWeek = moment().startOf('week').add(7,"days");
      var endOfWeek = moment().endOf('week').add(7,"days");
      if(this.week === 'OVER 2 WEKEN') {
        startOfWeek = startOfWeek.add(7,"days")
        endOfWeek = endOfWeek.add(7,"days")
      }
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