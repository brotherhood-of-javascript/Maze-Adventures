<template>
        <ul>
            <div v-for="x in drawmap">
                <li v-for="n in x" >{{n}}</li>
            </div>
        </ul>
</template>

<script>
export default {
  data: () => ({ drawmap: [[1, 2, 3], [1, 2, 3]] })
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>