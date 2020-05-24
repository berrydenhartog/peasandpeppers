<template>    
  <div class="myweek"> 
    <h2>Het menu van {{startOfWeek | moment("D MMM")}} - {{endOfWeek | moment("D MMM")}}  </h2>
    <Dag :dag="maandag"/>
    <Dag :dag="dinsdag"/>
    <Dag :dag="woensdag"/>
    <Dag :dag="donderdag"/>
    <Dag :dag="vrijdag"/>
    <Dag :dag="zaterdag"/>
    <Dag :dag="zondag"/>
  </div>
</template>

<script>
import Dag from '@/components/Dag.vue'
import moment from 'moment'

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
      console.log("watchchanges")
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
      weekMenu: []
    }
  },
  methods: {
    updatedate: function () {
      var startOfWeek = moment().startOf('week');
      var endOfWeek = moment().endOf('week');
      if(this.week === 'VOLGENDE WEEK') {
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
    }
  }
}
</script>