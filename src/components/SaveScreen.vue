<template>
  <section class="section container">
    <h2 class="text-gray title-save-load-menu">Save Game</h2>
    <div class="row">
      <div class="input-save-group col-xs-6 col-md-6">
        <input type="text" class="description-save input full-width" placeholder="Description" v-model="name">
      </div>
      <div class="input-save-group col-xs-6 col-md-6">
        <input type="text " class="data-save input full-width" v-model="dataSave" placeholder="Data">
      </div>
    <div class="col-xs-12 ">
      <table class="table save-table">
         <thead>
           <tr class="text-medium align-center">
             <th>description</th>
             <th>Date</th>
             <th>remove</th>
             </tr>
         </thead>
      <tbody>
        <tr v-for="name in keyNames">
          <td> {{name}}</td>
          <td> 13.08.2018</td>
          <td><button class="button button-red button-small block-mobile remove-btn" @click="remove(name)">remove</button>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
    <div class="col-xs-12">
      <button class="button button-primary button-big block-mobile save-btn "  @click="save">Save</button>
    </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SaveScreen',
  data: function() {
    return {
      name: '',
      dataSave: ''
    }
  },
  methods: {
    save() {
      if (this.name !== '' && this.dataSave !== '') {
        this.$store.commit('saveNewState', this.name)
        this.keyNames.push(this.name)
        this.name = ''
        this.dataSave = ''
      }
    },
    remove(name) {
      this.$store.commit('removeSavedState', name)
      this.keyNames.splice(this.keyNames.indexOf(name), 1)
    }
  },
  beforeCreate() {
    let arrKey = []
    for (var i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i)
      if (key !== 'quickSave') {
        arrKey.push(localStorage.key(i))
      }
    }
    this.keyNames = arrKey
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
