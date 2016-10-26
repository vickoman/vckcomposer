import Vue from 'vue'
import Widget from './Widget'
import App from './App'
import router from './router'
import Panelsettings from './Panelsettings'

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
});

new Vue({
  el: '#panel-settings',
  template: '<Panelsettings/>',
  components: { Panelsettings }
});

export {router}