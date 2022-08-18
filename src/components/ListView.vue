<template>
    <section class="wrapper-listview">
         <article v-for="product in products">
            <img :src="product.image" :alt="product.name">
            <div>
                <h4>{{product.name}}</h4>
                <h5 class="price">{{formatPrice(product.price)}}</h5>
                <p>{{product.description.substring(0, 150)}}...</p>
                <router-link :to="{name: 'SingleProduct', params: {id: product.id}}" class="btn">
                    Details 
                </router-link>
            </div>
         </article>
    </section>
</template>

<script>
import { formatPrice } from '../utils/helpers'
// import { useRoute } from 'vue-router'
export default {
    props: ['products'],
    methods: {
        formatPrice
    }
}
</script>

<style scoped lang="scss">
.wrapper-listview {
    display: grid;
    row-gap: 3rem;
}

img {
    width: 100%;
    display: block;
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }
  h4 {
    margin-bottom: 0.5rem;
  }
  .price {
    color: var(--clr-primary-6);
    margin-bottom: 0.75rem;
  }
  p {
    max-width: 45em;
    margin-bottom: 1rem;
  }
  .btn {
    font-size: 0.5rem;
    padding: 0.25rem 0.5rem;
  }
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
</style>