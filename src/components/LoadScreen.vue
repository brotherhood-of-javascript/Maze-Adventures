<template>
  <section class="section container">
    <h2 class="text-gray title-save-load-menu">Load Game</h2>
    <div class="col-xs-12 ">
      <table class="table save-table">
        <thead>
        <tr class="text-medium align-center">
          <th>Name Loading</th>
          <th>Date</th>
          <th>Remove</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for='names in saveObjectsArray' @click='takeСurrentName(names.id)'>
          <td>{{names.id}}</td>
          <td>{{names.date}} </td>
          <td><button class="button button-red button-small block-mobile remove-btn" @click="remove(names.id)">remove</button></td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="col-xs-12">
      <button class="button button-primary button-big block-mobile save-btn " @click="Load">Load</button>
    </div>
  </section>
</template>
<script>
  export default {
    name: 'LoadScreen',
    data: function() {
      return {
        key: '',
        date: '13.01.2018',
        saveObjectsArray: [],
        currentName: ''
      }
    },
    methods: {
      takeСurrentName(names) {
        this.currentName = names
      },
      Load() {
        for (var i = 0; i < this.saveObjectsArray.length; i++) {
          if (this.saveObjectsArray[i].id === this.currentName) {
            this.$store.commit('loadNewState', {key: this.$store.getters.globalKey, value: this.saveObjectsArray})
            this.$router.push({ name: 'GameScreen' })
          }
        }
      },
      remove(names) {
        for (var i = 0; i < this.saveObjectsArray.length; i++) {
          if (this.saveObjectsArray[i].id === names) {
            this.saveObjectsArray.splice(i, 1)
            this.$store.commit('saveNewState', {key: this.$store.getters.globalKey, value: this.saveObjectsArray})
            break
          }
        }
      }
    },
    created() {
      let saveArray = localStorage.getItem(this.$store.getters.globalKey)
      if (saveArray) {
        this.saveObjectsArray = JSON.parse(saveArray)
      }
    }
  }
</script>

<style scoped>
  .title-save-load-menu {
    font-size: 50px;
    padding: 30px 0 40px 0;
  }
  .save-btn {
    padding: 10px 80px;
  }
  .table>tbody>tr:hover {
    background: #547aa0
  }
  .input-save-group{
    padding-bottom: 40px;
  }
  .save-table {
    font-size: 20px;
  }
</style>
