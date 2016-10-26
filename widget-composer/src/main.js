import Vue from 'vue'
import App from './App'
import Widget from './Widget'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})

new Vue({
  el: '#widget',
  template: '<Widget/>',
  components: { Widget }
})
