import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DaftarBarang from '../views/DaftarBarang.vue'
import DetailProduct from '../views/DetailProduct.vue'
import Keranjang from '../views/Keranjang.vue'
import PesananSukses from '../views/PesananSukses.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/DaftarBarang',
    name: 'DaftarBarang',
    component: DaftarBarang
  },

  {
    path: '/DaftarBarang/:id',
    name: 'DetailProduct',
    component: DetailProduct
  },

  {
    path: '/Keranjang',
    name: 'Keranjang',
    component: Keranjang
  },

  {
    path: '/pesanan-sukses',
    name: 'PesananSukses',
    component: PesananSukses
  },


  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
