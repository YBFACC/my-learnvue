import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../pages/home/home.vue')
const City = () => import('../pages/city/city.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/city/:cityid',
    component: City
  }
]

const router = new VueRouter({
  //mode: 'history',
  //base: process.env.BASE_URL,
  routes
})

export default router
