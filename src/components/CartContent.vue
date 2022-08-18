<template>
    <section class="section section-center">
        <CartColumns />
        <CartItem v-for="item in cart" :key="item.id" :item=item :product="single_product" />
        <hr />
        <div class="link-container">
            <router-link to="/products" class="link-btn">
                continue shopping
            </router-link>
            <button class="link-btn clear-btn" type="button" @click="clearCart">
                clear shopping cart 
            </button>
        </div>
        <CartTotals />
    </section>
</template> 

<script>
import CartColumns from "./CartColumns.vue";
import CartItem from "./CartItem.vue";
import CartTotals from "./CartTotals.vue";
import { useCart } from "../stores/cart";
import { mapState, mapActions } from "pinia";
import { useProducts } from "../stores/products";

export default {
    components: {
        CartColumns,
        CartItem,
        CartTotals
    },
    computed: {
        ...mapState(useCart, ['cart']),
        ...mapState(useProducts, ['single_product'])
    },

    methods: {
        ...mapActions(useCart, ['clearCart'])
    }
}
</script>

<style lang="scss" scoped>
.link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }
  .clear-btn {
    background: var(--clr-black);
  }
</style>