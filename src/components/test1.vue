<template>
        <ul>
                <li v-for="n in arr" :id="n"> </li>
        </ul>
</template>

<script>
export default {
  data() {
    return {
      counter: "t",
      arr: []
    };
  },
  methods: {
    doWork(target) {
      console.log(target.keyCode);
    }
  },
  created: function() {
    // `this` указывает на экземпляр vm
    const box = document.querySelector(".container");

    for (let i = 0; i < 400; i++) {
      this.arr.push(i);
    }
    console.log(this.arr);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
  padding: 10px;
  border: solid 1px white;
  float: left;
}
</style>
