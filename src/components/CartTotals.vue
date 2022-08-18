<template>
    <section class="cart-total">
        <div>
            <article>
                <h5>
                    subtotal : <span>{{formatPrice(total_amount)}}</span> 
                </h5>
                <p>shipping : <span>{{formatPrice(total_items * 100)}}</span></p>
                <hr />
                <h4>
                    order total : 
                    <span>{{formatPrice(total_amount + total_items * 100)}}</span>
                </h4>
            </article>
        </div>
    </section>
</template>

<script>
import { formatPrice } from "../utils/helpers";
import { useCart } from "../stores/cart";
import { mapState, mapActions } from "pinia";

export default {
    computed: {
        ...mapState(useCart, ['cart', 'total_amount', 'total_items'])
    },
    methods: {
        formatPrice,
        ...mapActions(useCart, ['countCartTotal'])
    },
    mounted() {
      this.countCartTotal()
    },
    watch: {
      cart() {
        this.countCartTotal()
      }
    }
}
</script>

<style lang="scss" scoped>
.cart-total {
    margin-top: 3rem;
  display: flex;
  justify-content: center;
}

article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 2rem;
  }
  @media (min-width: 776px) {
    .cart-total {
        justify-content: flex-end;
    }
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }
</style>