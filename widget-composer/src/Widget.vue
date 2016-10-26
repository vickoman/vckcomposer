<template>
  <div id="widget">
    <widgetheader></widgetheader>
    <widgetcontent></widgetcontent>
    <widgetfooter></widgetfooter>
  </div>
</template>

<script>
import Widgetheader from './components/Widgetheader'
import Widgetfooter from './components/Widgetfooter'
import Widgetcontent from './components/Widgetcontent'

export default {
  name: 'widget',
  components: {
    Widgetheader,
    Widgetfooter,
    Widgetcontent
  }
}
</script>

<style>
#widget {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  padding: 20px;
}
</style>
