<template>
  <div>
    <!-- <Loading />
    <div>
      <router-link to="/" class="no-underline m-3 text-xl text-center title-page">Home</router-link>
      <router-link to="/about" class="no-underline m-3 text-xl title-page">About</router-link>
      <router-link to="/products" class="no-underline m-3 text-xl title-page">Products</router-link>
    </div> -->

    <Navbar />
    <Sidebar />
    
    
    <!-- <router-link :to="{ name: 'products', params: { username: 'recZkNf2kwmdBcqd0' } }" >
        Profile
      </router-link> -->
    <router-view/>
    <Footer /> 
  </div>  
</template>

<script>
import { links } from "./utils/constant";
import Loading from "./components/Loading.vue";
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Loading,
    Navbar,
    Sidebar,
    Footer
},
  computed: {
    links() {
      return links
    }
  },
  methods: {

  }
}
</script>

<style>
@import './style/style.css';
</style>
