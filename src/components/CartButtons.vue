<template>
    <div class="cart-btn-container cart-btn-wrapper">   
            <router-link to="/cart" class="cart-btn" @click="clodeSidebar">
                Cart
                <span class="cart-container">
                    <i class="pi pi-shopping-cart" style="font-size: 2rem"></i>
                    <span class="cart-value">
                        {{total_items}}
                    </span>
                </span>
            </router-link>
            <!-- <button type="button" class="auth-btn">
              Login <i class="pi pi-user-plus" style="font-size: 2rem"></i>
            </button> -->
    </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useProducts } from "../stores/products";
import { useCart } from "../stores/cart";
export default {
    computed: {
      ...mapState(useCart, ['total_items'])  
    },
    methods: {
        ...mapActions(useProducts, ['clodeSidebar'])
    }
}
</script>

<style lang="scss">
.cart-btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    width: 225px;
}

.cart-btn {
    color: var(--clr-grey-1);
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
    display: flex;
    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--clr-primary-5);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }
</style>