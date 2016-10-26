<template>
  <div id="widget">
    <h1>WIDGET</h1>
    <img src="./assets/logo.png">
    <scaffold></scaffold>
  </div>
</template>

<script>
import Scaffold from './components/Scaffold'

export default {
  name: 'widget',
  components: {
    Scaffold
  }
}
</script>

<style>
#widget {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
