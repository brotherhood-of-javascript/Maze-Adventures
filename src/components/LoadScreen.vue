<template>
  <section class="section container">
    <h2 class="text-gray title-save-load-menu">Load Game</h2>
      <table class="table save-table">
         <thead>
<<<<<<< HEAD
           <tr class="text-medium align-center">
             <th>Name Loading</th>
=======
           <tr class="text-small align-left">
             <th>Key-Name</th>
>>>>>>> master
             <th>Date</th>
             <th>Remove</th>
             </tr>
         </thead>
      <tbody @click="chooseLoader">
        <tr v-for="item in keyNames" class="keyName">
          <td>{{ item }}</td>
          <td>{{ date }}</td>
          <td><button 
                class="button button-red button-small block-mobile remove-btn"
                @click="getRemove"
              >remove</button>
          </td> 
        </tr>
      </tbody>
    </table>
    <div class="col-xs-12">
      <button
        class="button button-primary button-big block-mobile save-btn"
        @click="getLoad"
      >Load</button>
    </div>  
  </section>
</template>
<script>
export default {
<<<<<<< HEAD
  name: 'LoadScreen',
  data: function() {
    return {
      key: '',
      date: '13.01.2018'
    }
  },
  methods: {
    chooseLoader() {
      let target = (event && event.target) || event.srcElement
      if (target.parentNode.classList.contains('keyName')) {
        let boxContainer = target.parentNode.parentNode.children

        for (let i = 0; i < boxContainer.length; i++) {
          if (boxContainer[i].classList.contains('choose')) {
            boxContainer[i].classList.remove('choose')
          }
        }
        target.parentNode.classList.add('choose')
      }
    },
    getLoad(event) {
      let key = ''
      if (event.target.tagName.toLowerCase() === 'button') {
        let boxContainer = document.querySelector('tbody').children

        for (let i = 0; i < boxContainer.length; i++) {
          if (boxContainer[i].classList.contains('choose')) {
            key = boxContainer[i].firstElementChild.innerText
          }
        }
        this.$store.commit('createNewState', key)
        this.$router.push({ name: 'GameScreen' })
      }
    },
    getRemove(event) {
      let boxAll = document.querySelector('tbody')
      let boxContainer = event.target.parentNode.parentNode
      let key = boxContainer.firstElementChild.innerText

      localStorage.removeItem(key)
      boxAll.removeChild(boxContainer)
    }
  },
  beforeCreate() {
    let arrKey = []
    for (var i = 0; i < localStorage.length; i++) {
      arrKey.push(localStorage.key(i))
    }
    arrKey.shift()
    this.keyNames = arrKey
  },
  created() {}
=======
  name: 'SaveScreen'
>>>>>>> master
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
.table > tbody > tr:hover {
  color: #1abc9c;
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
.choose {
  background: #547aa0;
}
</style>

