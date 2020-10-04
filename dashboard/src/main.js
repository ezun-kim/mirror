import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router'


import ControlScreen from './components/ControlScreen.vue'
import Dashboard from './components/Dashboard.vue'


import "./fontawesome.js"
Vue.use(VueRouter)

const routes = [
  { path: '/dashboard/:id', component: Dashboard },
  { path: '/control', component: ControlScreen }
]
const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
