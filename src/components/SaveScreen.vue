<template>
  <section class="section container">
    <h2 class="text-gray title-save-load-menu">Save Game</h2>
    <!--<error-Resave-Window v-show='this.$store.state.openInventory'/>-->
    <div class="row">
      <div class="input-save-group col-xs-12 col-md-12">
        <input type="text" class="description-save input full-width" placeholder="Name for save" v-model="name">
      </div>
      <!--<div class="input-save-group col-xs-6 col-md-6">-->
      <!--<input type="text" class="data-save input full-width" v-model="dataSave" placeholder="Data">-->
      <!--</div>-->
      <div class="col-xs-12 ">
        <table class="table save-table">
          <thead>
          <tr class="text-medium align-center">
            <th>Name</th>
            <th>Date</th>
            <th>Remove</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for='names in saveObjectsArray' @click='takeСurrentName(names.id), showResaveBtn = !showResaveBtn'>
            <td>{{names.id}}</td>
            <td>{{names.date}} </td>
            <td><button class="button button-red button-small block-mobile remove-btn" @click="remove(name)">remove</button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="col-xs-12">
        <button class="button button-primary button-big block-mobile save-btn " @click="save">Save</button>
        <button class="button button-huge block-mobile save-btn " @click="reSave" v-show='showResaveBtn'>resave</button>
      </div>
    </div>
  </section>
</template>

<script>
const globalSave = 'saveKey'
export default {
  name: 'SaveScreen',
  data: function() {
    return {
      showResaveBtn: '',
      currentName: '',
      name: '',
      dataSave: '',
      saveObjectsArray: []
    }
  },
  methods: {
    takeСurrentName(names) {
      this.currentName = names
      this.name = names
    },
    getFormattedDate(date) {
      return (
        date.getFullYear() +
        '-' +
        (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : '' + (date.getMonth() + 1)) +
        '-' +
        (date.getDate() < 10 ? '0' + date.getDate() : '' + date.getDate()) +
        ' ' +
        (date.getHours() < 10 ? '0' + date.getHours() : '' + date.getHours()) +
        ':' +
        (date.getMinutes() < 10 ? '0' + date.getMinutes() : '' + date.getMinutes())
      )
    },
    save() {
      if (this.name !== '') {
        let saveObject = {
          id: this.name,
          state: JSON.stringify(this.$store.state),
          date: this.getFormattedDate(new Date())
        }
        this.saveObjectsArray.push(saveObject)
        this.$store.commit('saveNewState', { key: globalSave, value: this.saveObjectsArray })
        this.name = ''
        this.dataSave = ''
      }
    },
    reSave() {
      for (let i = 0; i < this.saveObjectsArray.length; i++) {
        if (this.saveObjectsArray[i].id === this.currentName) {
          this.saveObjectsArray[i] = {
            state: JSON.stringify(this.$store.state),
            id: this.name,
            date: this.getFormattedDate(new Date())
          }
          this.$store.commit('saveNewState', { key: globalSave, value: this.saveObjectsArray })
          this.name = ''
          this.showResaveBtn = false
        }
      }
    },
    remove(names) {
      for (let i = 0; i < this.saveObjectsArray.length; i++) {
        if (this.saveObjectsArray[i].id === names) {
          this.saveObjectsArray.splice(i, 1)
          this.$store.commit('saveNewState', { key: globalSave, value: this.saveObjectsArray })
          break
        }
      }
    }
  },
  created() {
    let saveArray = localStorage.getItem(globalSave)
    if (saveArray) {
      this.saveObjectsArray = JSON.parse(saveArray)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title-save-load-menu {
  font-size: 50px;
  padding: 30px 0 40px 0;
}
.save-btn {
  padding: 10px 80px;
}
.table > tbody > tr:hover {
  background: #547aa0;
}
.input-save-group {
  padding-bottom: 40px;
}
.save-table {
  font-size: 20px;
}
.input {
  display: inline-block;
  margin-left: 0;
  margin-right: 0;
  width: 100%;
  border: 0;
  font-size: 20px;
  box-shadow: none;
  color: #fff;
  height: 82px;
  line-height: 44px;
  margin-bottom: 0;
  outline: none;
  padding-left: 10px;
  padding-right: 10px;
  width: 100%;
}
.input::-webkit-input-placeholder {
  color: #fff;
}
</style>
