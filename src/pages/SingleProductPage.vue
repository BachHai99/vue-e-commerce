<template>
    <Error v-if="single_product_error"/>
    <Loading v-else-if="single_product_loading"/>
    <main v-if="!single_product_loading">
        <PageHero :title="single_product.name" :single_product="single_product"/>
        <div class="section section-center page">
            <router-link to="/products" class="btn">
                back to products  
            </router-link>
            <div class="product-center">
                <ProductImage :images='single_product.images'/>
                <section class="content">
                    <h2>{{single_product.name}}</h2>
                    <Stars :stars='single_product.stars' :reviews='single_product.reviews'/>
                    <h5 class="price">{{formatPrice(single_product.price)}}</h5>
                    <p class="desc">{{single_product.description}}</p>
                    <p class="info">
                        <span>Available : </span>
                        {{single_product.stock > 0 ? 'In stock' : 'Out of stock'}}
                    </p>
                    <p class="info">
                      <span>Brand : </span>
                      {{single_product.company}}
                    </p>
                    <hr />
                    <AddToCart v-if="single_product.stock > 0" :product="single_product"/>
                </section>
            </div>
        </div>
    </main>
</template>

<script>
import Loading from "../components/Loading.vue";
import PageHero from "../components/PageHero.vue";
import ProductImage from '../components/ProductImage.vue'
import Stars from "../components/Stars.vue";
import AddToCart from "../components/AddToCart.vue";
import Error from "../components/Error.vue";
import { mapState, mapActions } from "pinia";
import { useProducts } from "../stores/products";

import { formatPrice } from "../utils/helpers";
import { single_product_url as url } from "../utils/constant";

export default {
  components: {
        PageHero,
        ProductImage,
        Stars,
        AddToCart,
        Loading,
        Error
    }, 
    data() {
        return {
            id: null
        }
    },  
    computed: {
        ...mapState(useProducts, ["single_product_loading", "single_product_error", "single_product"]),
    },
    methods: {
        formatPrice,
        ...mapActions(useProducts, ["fetchSingleProduct"])
    },
    mounted(){
      this.fetchSingleProduct(`${url}${this.$route.params.id}`)
    }   
}
</script>

<style lang="scss" scoped>
.product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }
  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
</style>