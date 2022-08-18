<template>
    <main class="nav-center">
        <Hero />
        <FeaturedProducts />
        <Services /> 
        <Contact />
    </main>
</template>

<script>
import Hero from "../components/Hero.vue";
import FeaturedProducts from "../components/FeaturedProducts.vue";
import Services from "../components/Services.vue";
import Contact from '../components/Contact.vue'

export default {
    components: {
        Hero,
        FeaturedProducts,
        Services,
        Contact
    },
}
</script>

<style scoped>
main {
    width: 90vw;
}
</style>