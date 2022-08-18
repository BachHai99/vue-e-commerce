import {createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/HomePage.vue';
import About from '../pages/AboutPage.vue';
import Products from '../pages/ProductsPage.vue';
import Cart from '../pages/CartPage.vue';
import Error from '../pages/ErrorPage.vue';
import SingleProduct from '../pages/SingleProductPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/about/',
    name: 'User',
    component: About
  },

  {
    path: '/products/',
    component: Products
  },
  {
    path: '/*/',
    component: Error
  },
  {
    path: '/cart/',
    component: Cart
  },
  {
    path: '/products/:id',
    name: 'SingleProduct',
    component: SingleProduct
  }
]

export default function (history) {
  return createRouter({
    history,
    routes
  })
}