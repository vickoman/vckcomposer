<template>
  <div id="widget">
    <widgetheader></widgetheader>
    <widgetfooter></widgetfooter>
  </div>
</template>

<script>
import Widgetheader from './components/Widgetheader'
import Widgetfooter from './components/Widgetfooter'

export default {
  name: 'widget',
  components: {
    Widgetheader,
    Widgetfooter
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
