<template>
  <div class="scaffold">
    <h1>{{ msg }}</h1>
    <h1>{{ manteco }}</h1>
  </div>
</template>

<script>
export default {
  name: 'scaffold',
  data () {
    return {
      msg: 'Welcome to Your Vue.js Apasd asd asd as dp',
      manteco: 'mantecal'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
