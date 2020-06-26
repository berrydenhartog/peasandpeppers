<template>    
  <div class="myweek"> 
    <h2 class="title">Het menu van {{startOfWeek | moment("D MMM")}} - {{endOfWeek | moment("D MMM")}}  </h2>

    <div class="buttons">
      <button v-bind:class="{'is-loading':isLoading}" @click="saveMenu()" class="button is-success">save Menu</button>
      <button @click="resetMenu()" class="button is-danger">Reset Menu</button>
    </div>
    <div v-for="(dag, dindex) in dagen" :key="dag.index">
      <a :name="getdag(dag) | moment('dddd')"></a>
      <h3 class="title">{{getdag(dag) | moment("dddd D MMM")}}</h3>
      <div class="buttons">
        <button @click="addGerecht(dindex)" class="button is-primary">New gerecht</button>
      </div>
      <div v-for="(gerecht, gindex) in getgerecht(dag)" :key="gerecht.index" class="columns">   
        <div class="column">
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Titel</label>
            </div>
            <div class="field-body">
              <div class="control">
                <input @change="changeNaam(dindex,gindex, $event)" :value="gerecht.naam" class="input" type="text" placeholder="Titel">
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Omschrijving</label>
            </div>
            <div class="field-body">
              <div class="control">
                <input @change="changeOmschrijving(dindex,gindex, $event)" :value="gerecht.omschrijving" class="input" type="text" placeholder="Omschrijving">
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Plaatje</label>
            </div>
            <div class="field-body">
              <div class="control">
                <div class="select is-fullwidth">
                  <select @change="changeImage(dindex,gindex, $event)">
                    <option :value="image" v-for="image in images" :key="image.index" :selected="image==gerecht.image">
                      {{image}}
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Default grote</label>
            </div>
            <div class="field-body">
              <div class="control">
                <div class="select is-fullwidth">
                  <select @change="changeDefault(dindex,gindex, $event)">
                    <option v-for="(grote, index) in gerecht.grotes" :key="index" :value="index" :selected="index==gerecht.default">
                      {{grote}}
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div v-for="(grote, index) in gerecht.grotes" :key="index" class="field is-grouped">
            <p class="control">
              <input @change="changeGrote(dindex,gindex,index, $event)" class="input" :value="gerecht.grotes[index]" type="text" placeholder="Grootte">
            </p>
            <p class="control">
              <input @change="changePrijs(dindex,gindex,index, $event)" class="input" :value="gerecht.prijzen[index]/100" type="text" placeholder="Prijs">
            </p>
            <p>
              <button  @click="deleteGroteAndPrice(dindex,gindex,index)" class="button is-danger">X</button>
            </p>
          </div>
          <div class="buttons">
            <button @click="addGroteAndPrice(dindex,gindex)" class="button is-primary">Add grote</button>
            <button @click="deleteGerecht(dindex,gindex)" class="button is-danger">Verwijder gerecht</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import GerechtenRepository from "../repository/GerechtenRepository";

export default {
  name: 'Week',
  components: {
  },
  props: {
    week: String,
    images: Array,
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
      isLoading: false,
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
    changeNaam(dag,index,event) {
      switch(dag) {
        case 0:
          this.weekMenu.Item['maandag'][index]['naam'] = event.target.value
          break;
        case 1:
          this.weekMenu.Item['dinsdag'][index]['naam'] = event.target.value
          break;
        case 2:
          this.weekMenu.Item['woensdag'][index]['naam'] = event.target.value
          break;
        case 3:
          this.weekMenu.Item['donderdag'][index]['naam'] = event.target.value
          break;
        case 4:
          this.weekMenu.Item['vrijdag'][index]['naam'] = event.target.value
          break;
        case 5:
          this.weekMenu.Item['zaterdag'][index]['naam'] = event.target.value
          break;
        case 6:
          this.weekMenu.Item['zondag'][index]['naam'] = event.target.value
          break;
        }
    },
    changeOmschrijving(dag,index,event) {
     switch(dag) {
        case 0:
          this.weekMenu.Item['maandag'][index]['omschrijving'] = event.target.value
          break;
        case 1:
          this.weekMenu.Item['dinsdag'][index]['omschrijving'] = event.target.value
          break;
        case 2:
          this.weekMenu.Item['woensdag'][index]['omschrijving'] = event.target.value
          break;
        case 3:
          this.weekMenu.Item['donderdag'][index]['omschrijving'] = event.target.value
          break;
        case 4:
          this.weekMenu.Item['vrijdag'][index]['omschrijving'] = event.target.value
          break;
        case 5:
          this.weekMenu.Item['zaterdag'][index]['omschrijving'] = event.target.value
          break;
        case 6:
          this.weekMenu.Item['zondag'][index]['omschrijving'] = event.target.value
          break;
        }
    },
    changeImage(dag,index,event) {
     switch(dag) {
        case 0:
          this.weekMenu.Item['maandag'][index]['image'] = event.target.value
          break;
        case 1:
          this.weekMenu.Item['dinsdag'][index]['image'] = event.target.value
          break;
        case 2:
          this.weekMenu.Item['woensdag'][index]['image'] = event.target.value
          break;
        case 3:
          this.weekMenu.Item['donderdag'][index]['image'] = event.target.value
          break;
        case 4:
          this.weekMenu.Item['vrijdag'][index]['image'] = event.target.value
          break;
        case 5:
          this.weekMenu.Item['zaterdag'][index]['image'] = event.target.value
          break;
        case 6:
          this.weekMenu.Item['zondag'][index]['image'] = event.target.value
          break;
        }
    },
    changeGrote(dag,index,subindex,event) {
     switch(dag) {
        case 0:
          this.weekMenu.Item['maandag'][index]['grotes'][subindex] = event.target.value
          break;
        case 1:
          this.weekMenu.Item['dinsdag'][index]['grotes'][subindex] = event.target.value
          break;
        case 2:
          this.weekMenu.Item['woensdag'][index]['grotes'][subindex] = event.target.value
          break;
        case 3:
          this.weekMenu.Item['donderdag'][index]['grotes'][subindex] = event.target.value
          break;
        case 4:
          this.weekMenu.Item['vrijdag'][index]['grotes'][subindex] = event.target.value
          break;
        case 5:
          this.weekMenu.Item['zaterdag'][index]['grotes'][subindex] = event.target.value
          break;
        case 6:
          this.weekMenu.Item['zondag'][index]['grotes'][subindex] = event.target.value
          break;
        }
    },
    changePrijs(dag,index,subindex,event) {
      let prijs=event.target.value
      prijs=parseInt(prijs*100)
     switch(dag) {
        case 0:
          this.weekMenu.Item['maandag'][index]['prijzen'][subindex] = prijs
          break;
        case 1:
          this.weekMenu.Item['dinsdag'][index]['prijzen'][subindex] = prijs
          break;
        case 2:
          this.weekMenu.Item['woensdag'][index]['prijzen'][subindex] = prijs
          break;
        case 3:
          this.weekMenu.Item['donderdag'][index]['prijzen'][subindex] = prijs
          break;
        case 4:
          this.weekMenu.Item['vrijdag'][index]['prijzen'][subindex] = prijs
          break;
        case 5:
          this.weekMenu.Item['zaterdag'][index]['prijzen'][subindex] = prijs
          break;
        case 6:
          this.weekMenu.Item['zondag'][index]['prijzen'][subindex] = prijs
          break;
        }
    },
    changeDefault(dag,index,event) {
     switch(dag) {
        case 0:
          this.weekMenu.Item['maandag'][index]['default'] = event.target.value
          break;
        case 1:
          this.weekMenu.Item['dinsdag'][index]['default'] = event.target.value
          break;
        case 2:
          this.weekMenu.Item['woensdag'][index]['default'] = event.target.value
          break;
        case 3:
          this.weekMenu.Item['donderdag'][index]['default'] = event.target.value
          break;
        case 4:
          this.weekMenu.Item['vrijdag'][index]['default'] = event.target.value
          break;
        case 5:
          this.weekMenu.Item['zaterdag'][index]['default'] = event.target.value
          break;
        case 6:
          this.weekMenu.Item['zondag'][index]['default'] = event.target.value
          break;
        }
    },
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

      if (!data.Item) {
        this.resetMenu()
      } else {
        this.weekMenu = data
      }
    },
    resetMenu: function () {
      var startOfWeek = moment().set({"week":this.week, "day":"maandag"});
      this.weekMenu = {
        'Item': {
          "GerechtString": "week"+startOfWeek.format('w'),
          'maandag':[],
          'dinsdag':[],
          'woensdag':[],
          'donderdag':[],
          'vrijdag':[],
          'zaterdag':[],
          'zondag':[],
        }
      }
    },
    deleteGroteAndPrice: function(dag,index,subindex) {
      switch(dag) {
        case 0:
          this.weekMenu.Item['maandag'][index]['grotes'].splice(subindex,1)
          this.weekMenu.Item['maandag'][index]['prijzen'].splice(subindex,1)
          if (this.weekMenu.Item['maandag'][index]['grotes'].length-1 < this.weekMenu.Item['maandag'][index].default) {
            this.weekMenu.Item['maandag'][index].default=Math.max(0,this.weekMenu.Item['maandag'][index]['grotes'].length-1)
          }
          break;
        case 1:
          this.weekMenu.Item['dinsdag'][index]['grotes'].splice(subindex,1)
          this.weekMenu.Item['dinsdag'][index]['prijzen'].splice(subindex,1)
          if (this.weekMenu.Item['dinsdag'][index]['grotes'].length-1 < this.weekMenu.Item['maandag'][index].default) {
            this.weekMenu.Item['dinsdag'][index].default=Math.max(0,this.weekMenu.Item['maandag'][index]['grotes'].length-1)
          }
          break;
        case 2:
          this.weekMenu.Item['woensdag'][index]['grotes'].splice(subindex,1)
          this.weekMenu.Item['woensdag'][index]['prijzen'].splice(subindex,1)
          if (this.weekMenu.Item['woensdag'][index]['grotes'].length-1 < this.weekMenu.Item['maandag'][index].default) {
            this.weekMenu.Item['woensdag'][index].default=Math.max(0,this.weekMenu.Item['maandag'][index]['grotes'].length-1)
          }
          break;
        case 3:
          this.weekMenu.Item['donderdag'][index]['grotes'].splice(subindex,1)
          this.weekMenu.Item['donderdag'][index]['prijzen'].splice(subindex,1)
          if (this.weekMenu.Item['donderdag'][index]['grotes'].length-1 < this.weekMenu.Item['maandag'][index].default) {
            this.weekMenu.Item['donderdag'][index].default=Math.max(0,this.weekMenu.Item['maandag'][index]['grotes'].length-1)
          }
          break;
        case 4:
          this.weekMenu.Item['vrijdag'][index]['grotes'].splice(subindex,1)
          this.weekMenu.Item['vrijdag'][index]['prijzen'].splice(subindex,1)
          if (this.weekMenu.Item['vrijdag'][index]['grotes'].length-1 < this.weekMenu.Item['maandag'][index].default) {
            this.weekMenu.Item['vrijdag'][index].default=Math.max(0,this.weekMenu.Item['maandag'][index]['grotes'].length-1)
          }
          break;
        case 5:
          this.weekMenu.Item['zaterdag'][index]['grotes'].splice(subindex,1)
          this.weekMenu.Item['zaterdag'][index]['prijzen'].splice(subindex,1)
          if (this.weekMenu.Item['zaterdag'][index]['grotes'].length-1 < this.weekMenu.Item['maandag'][index].default) {
            this.weekMenu.Item['zaterdag'][index].default=Math.max(0,this.weekMenu.Item['maandag'][index]['grotes'].length-1)
          }
          break;
        case 6:
          this.weekMenu.Item['zondag'][index]['grotes'].splice(subindex,1)
          this.weekMenu.Item['zondag'][index]['prijzen'].splice(subindex,1)
          if (this.weekMenu.Item['zondag'][index]['grotes'].length-1 < this.weekMenu.Item['maandag'][index].default) {
            this.weekMenu.Item['zondag'][index].default=Math.max(0,this.weekMenu.Item['maandag'][index]['grotes'].length-1)
          }
          break;
        }
    },
    addGroteAndPrice: function(dag,index) {
      switch(dag) {
        case 0:
          this.weekMenu.Item['maandag'][index]['grotes'].push(null)
          this.weekMenu.Item['maandag'][index]['prijzen'].push(null)
          break;
        case 1:
          this.weekMenu.Item['dinsdag'][index]['grotes'].push(null)
          this.weekMenu.Item['dinsdag'][index]['prijzen'].push(null)
          break;
        case 2:
          this.weekMenu.Item['woensdag'][index]['grotes'].push(null)
          this.weekMenu.Item['woensdag'][index]['prijzen'].push(null)
          break;
        case 3:
          this.weekMenu.Item['donderdag'][index]['grotes'].push(null)
          this.weekMenu.Item['donderdag'][index]['prijzen'].push(null)
          break;
        case 4:
          this.weekMenu.Item['vrijdag'][index]['grotes'].push(null)
          this.weekMenu.Item['vrijdag'][index]['prijzen'].push(null)
          break;
        case 5:
          this.weekMenu.Item['zaterdag'][index]['grotes'].push(null)
          this.weekMenu.Item['zaterdag'][index]['prijzen'].push(null)
          break;
        case 6:
          this.weekMenu.Item['zondag'][index]['grotes'].push(null)
          this.weekMenu.Item['zondag'][index]['prijzen'].push(null)
          break;
        }
    },
    deleteGerecht: function(dag,index) {
      switch(dag) {
        case 0:
          this.weekMenu.Item['maandag'].splice(index,1)
          break;
        case 1:
          this.weekMenu.Item['dinsdag'].splice(index,1)
          break;
        case 2:
          this.weekMenu.Item['woensdag'].splice(index,1)
          break;
        case 3:
          this.weekMenu.Item['donderdag'].splice(index,1)
          break;
        case 4:
          this.weekMenu.Item['vrijdag'].splice(index,1)
          break;
        case 5:
          this.weekMenu.Item['zaterdag'].splice(index,1)
          break;
        case 6:
          this.weekMenu.Item['zondag'].splice(index,1)
          break;
        }
    },
    addGerecht: function(dag) {
      switch(dag) {
        case 0:
          this.weekMenu.Item['maandag'].push({
            'omschrijving':null,
            'image':this.images[0],
            'default':0,
            'grotes':[],
            'naam':null,
            'prijzen':[],
            })
          break;
        case 1:
          this.weekMenu.Item['dinsdag'].push({
            'omschrijving':null,
            'image':this.images[0],
            'default':0,
            'grotes':[],
            'naam':null,
            'prijzen':[],
            })
          break;
        case 2:
          this.weekMenu.Item['woensdag'].push({
            'omschrijving':null,
            'image':this.images[0],
            'default':0,
            'grotes':[],
            'naam':null,
            'prijzen':[],
            })
          break;
        case 3:
          this.weekMenu.Item['donderdag'].push({
            'omschrijving':null,
            'image':this.images[0],
            'default':0,
            'grotes':[],
            'naam':null,
            'prijzen':[],
            })
          break;
        case 4:
          this.weekMenu.Item['vrijdag'].push({
            'omschrijving':null,
            'image':this.images[0],
            'default':0,
            'grotes':[],
            'naam':null,
            'prijzen':[],
            })
          break;
        case 5:
          this.weekMenu.Item['zaterdag'].push({
            'omschrijving':null,
            'image':this.images[0],
            'default':0,
            'grotes':[],
            'naam':null,
            'prijzen':[],
            })
          break;
        case 6:
          this.weekMenu.Item['zondag'].push({
            'omschrijving':null,
            'image':this.images[0],
            'default':0,
            'grotes':[],
            'naam':null,
            'prijzen':[],
            })
          break;
        }
    },
    saveMenu: async function () {
      this.isLoading=true
      var startOfWeek = moment().set({"week":this.week, "day":"maandag"});

      console.log(this.weekMenu.Item)
      const payload = {
        'payload': {
          'Item':this.weekMenu.Item
        }
      }

      try {
        // eslint-disable-next-line
        const { data } = await GerechtenRepository.add("week"+startOfWeek.format('w'),payload)
      // eslint-disable-next-line
      } catch {

      }
      this.isLoading=false

    }
  }
}
</script>