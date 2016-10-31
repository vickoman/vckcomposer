import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Hotspot from '../components/Hotspot'
import Hello from '../components/Hello'
export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/widgetEditor/', component: Hello },
    { path: '/next/', component: Hotspot },
    { path: '*', redirect: '/widgetEditor' }
  ]
})
