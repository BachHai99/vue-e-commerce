<template>
    <h5 class="section-center" v-if="filtered_products.length < 1">Sorry, no products matched your search...</h5>
    <GridView :products="filtered_products" v-if="grid_view"/>
    <ListView :products="filtered_products" v-if="!grid_view"/>
</template>

<script>
import { mapActions, mapState } from "pinia"
import { useProducts } from '../stores/products'
import GridView from "./GridView.vue"
import ListView from "./ListView.vue"

export default {
    components: {
        GridView,
        ListView
    },
    computed: {
        ...mapState(useProducts, ['filtered_products', 'grid_view'])
    },
    methods: {
        ...mapActions(useProducts, ['fetchProducts', 'loadProducts']),
    },
    mounted() {
        this.fetchProducts()
        this.loadProducts()
    },
}
</script>