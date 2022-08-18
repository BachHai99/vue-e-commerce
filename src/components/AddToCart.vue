<template>
    <section class="add-to-cart">
        <div class="colors">
            <span>colors: </span>
            <div>
                <button v-for="(color, index) in product.colors" :value="color" :key="index" :class="[mainColor === color ? 'color-btn active' : 'color-btn']"
                    :style="{background: color}" @click="setMainColor(color, index)"
                > 
                    <template v-if="mainColor === color">
                        <i class="pi pi-check" style="color: #fff"></i>
                    </template>
                </button>
            </div>
        </div>

        <div class="btn-container">
            <AmountButtons :amount="amount" @increase="increase" @decrease="decrease"/>
            <router-link to="/cart" class="btn" @click="addToCart(product.id, mainColor, amount, product)">
                add to cart
            </router-link>
        </div>
    </section>
</template>

<script>
import AmountButtons from '../components/AmountButtons.vue'
import { useCart } from '../stores/cart'
import { mapActions } from 'pinia'

export default {
    components: {
        AmountButtons
    },
    props: ['product'],
    data() {
        return {
            amount: 1,
            mainColor: this.product.colors[0]
        }
    },
    methods: {
        ...mapActions(useCart, ['addToCart']),
        increase() {
            let tempAmount = this.amount
            if(tempAmount >= this.product.stock) {
                tempAmount = this.product.stock
            } else {
                tempAmount = this.amount++
            }
            return tempAmount
        },
        decrease() {
            let tempAmount = this.amount
            if(tempAmount <= 1) {
                tempAmount = 1
            } else {
                tempAmount = this.amount--
            }
            return tempAmount
        },
        setMainColor(color, index) {
            this.mainColor = this.product.colors[index]
        },
    },
    watch: {
        product() {
            this.mainColor = this.product.colors[0]
        },
    }
}
</script>

<style lang="scss" scoped>
.add-to-cart {
    margin-top: 2rem;
}
.colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }
  .btn {
    margin-top: 1rem;
    width: 140px;
  }
</style>