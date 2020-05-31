<template>    
  <div class="mydag"> 
  
  </div>
</template>

<script>
//import Store from '@/store/'
//import moment from 'moment'

export default {
  name: 'Week',
  props: {
    dag: Date,
    gerechten: Array,
  },
  components: {
  },
  mounted: function () { 
    this.$moment.locale('nl')
    this.localgerechten = this.gerechten
  },
  data() {
    return {
      localgerechten:[],
    }
  },
  computed: {
    chunkedGerechten () {
      const size=2
      console.log(this.gerechten)
      return Array.from({ length: Math.ceil(this.gerechten.length / size) }, (v, i) =>
          this.gerechten.slice(i * size, i * size + size)
        );
    },
  },
  methods: {
    pricetofloat (myprice) {
      let tmp = myprice /100
      return tmp.toFixed(2)
    },
  }
}
</script>