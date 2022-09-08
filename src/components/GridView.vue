<template>
        <div class="products-container">
            <Product v-for="product in products"
                      :name="product.name" :category="product.category" :company="product.company"
                      :image="product.image" :description="product.description" :price="product.price" :id="product.id"
                      :shipping="product.shipping" :colors="product.colors" 
             />
        </div>
</template>

<script>
import Product from './Product.vue'

export default {
   props: {
    products: {
      type: String,
      default: null
    }
   },
   components: {
      Product
   },
  
}
</script>

<style scoped lang="scss">
img {
    height: 175px;
  }
  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
  }
  @media (min-width: 992px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>