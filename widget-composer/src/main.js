import Vue from 'vue'
import Widget from './Widget'
import Panelsettings from './Panelsettings'

/* eslint-disable no-new */
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