import Vue from 'vue'
import Router from 'vue-router'
import TravelApp from '@/components/TravelApp.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TravelApp',
      component: TravelApp
    }
  ]
})
