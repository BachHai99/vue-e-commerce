<template>
    <main class="page-100" v-if="cart.length < 1">
        <div class="empty">
            <h2>Your cart is empty</h2>
            <router-link to="/products" class="btn">
                fill it 
            </router-link>
        </div>
    </main>

    <main v-else>
        <PageHero title="cart"/>
        <main class="page">
            <CartContent />
        </main>
    </main>
</template>

<script>
import { useCart } from '../stores/cart'
import { mapActions, mapState } from 'pinia'
import CartContent from '../components/CartContent.vue'
import PageHero from '../components/PageHero.vue'

export default {
    components: {
        CartContent,
        PageHero
    },
    computed: {
        ...mapState(useCart, ['cart'])
    },
    methods: {
        ...mapActions(useCart, ['countCartTotal'])
    },
    watch: {
        cart() {
            this.countCartTotal()
            localStorage.setItem('cart', JSON.stringify(this.cart))
        }
    }
}
</script>

<style lang="scss" scoped>
.empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
</style>