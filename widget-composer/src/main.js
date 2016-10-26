import Vue from 'vue'
import App from './App'
import Widget from './Widget'
import router from './router'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})

new Vue({
  el: '#widget',
  template: '<Widget/>',
  components: { Widget }
})

export {router}
