<template>
    <Loading v-if="products_loading"/>
    <Error v-if="products_error"/>
    <section class="section" v-if="!products_loading">
        <div class="title">
            <h2>featured products</h2>
            <div class="underline"></div>
        </div>
        <div class="section-center featured">
            <Product v-for="product in featured_products.slice(0, 3)" :name = product.name :price = product.price :image = product.image />
        </div>
        <router-link to="/products">
            <button class="btn">all products</button>
        </router-link>
    </section>
</template>

<script>
import Loading from "./Loading.vue";
import Error from './Error.vue'
import Product from "./Product.vue";
import { mapActions, mapState } from "pinia";
import { useProducts } from "../stores/products";

export default{
    components: {
        Loading,
        Error,
        Product
    },
    computed: {
        ...mapState(useProducts, ['products_loading', 'products_error', 'featured_products'])
    },
    methods: {
        ...mapActions(useProducts, ['fetchProducts'])
    },
    mounted() {
        this.fetchProducts()
    }
}
</script>

<style lang="scss" scoped>

.featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
.btn {
    display: block;
    margin: 0 auto;
    text-align: center;
}
@media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
</style>