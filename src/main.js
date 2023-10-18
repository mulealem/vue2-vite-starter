import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import router from './router'

Vue.use(VueRouter)

import './assets/style.css'

import { LMap, LTileLayer, LMarker } from 'vue2-leaflet'
import 'leaflet/dist/leaflet.css'

import LDrawToolbar from 'vue2-leaflet-draw-toolbar'
// ...
Vue.component('l-draw-toolbar', LDrawToolbar)
// ...

Vue.component('l-map', LMap)
Vue.component('l-tile-layer', LTileLayer)
Vue.component('l-marker', LMarker)

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
