<template>
    <section>
        <div class="content">
            <form @submit='e => e.preventDefault()'>
                <!-- search input -->
                <div class="form-control">
                    <input type="text" name="text" :value="filters.text" placeholder="search" class="search-input" @change="filterProducts"/>
                </div>
                <!-- end of search input -->

                <!-- categories -->
                <div class="form-control">
                    <h5>category</h5>
                    <div>
                        <button type="button" :value="c" @click="filterProducts" v-for="c in categories" name="category" :class="[filters.category === c.toLowerCase() ? 'active' : null]">
                            {{c}}
                        </button>
                    </div>
                </div>
                <!-- end of categories -->

                <!-- company -->
                <div class="form-control">
                    <h5>company</h5>
                    <select name="company" :value="filters.company" @change="filterProducts" class="company">
                        <option v-for="c in companies" :value="c">
                            {{c}}
                        </option>
                    </select>
                </div>
                <!-- end of company -->

                <!-- colors -->
                <div class="form-control">
                    <h5>colors</h5>
                    <div class="colors">
                        <button v-for="c in colors" :style="{background: c}" :value="c"  @click="filterProducts" name="color" 
                          :class="filters.color === c ? 'color-btn active' : 'color-btn'">
                            <template v-if="c === 'all'" :class="filters.color === 'all' ? 'all-btn active' : 'all-btn'">
                              all 
                            </template> 
                            <template v-else :class="[filters.color !== 'all' ? 'color-btn active' : 'color-btn']">
                              <i v-if="filters.color === c" class="pi pi-check" style="font-size: 0.6rem;  color: #fff"></i>
                            </template>
                        </button>
                    </div>
                </div>
                <!-- end of colors -->

                <!-- price -->
                <div class="form-control">
                    <h5>price</h5>
                    <p class="price">{{formatPrice(filters.price)}}</p>
                    <input type="range" name="price" @change="filterProducts" :max="filters.max_price" :min="filters.min_price" :value="filters.price">
                </div>
                <!-- end of price -->

                <!-- shipping -->
                <div class="form-control shipping">
                  <label for="shipping">free shipping</label>
                  <input type="checkbox" id="shipping" name="shipping" @change="filterProducts">
                </div>
                <!-- end of the shipping -->
            </form>
            <button @click="clearFilters" class="clear-btn">clear filters</button>
        </div>
    </section>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useProducts } from "../stores/products";
import { getUniqueValues, formatPrice } from "../utils/helpers";

export default {
    computed: {
        ...mapState(useProducts, ['filters', 'products', 'filtered_products']),
        categories() {
            return getUniqueValues(this.products, 'category') 
        },
        companies() {
            return getUniqueValues(this.products, 'company')
        },
        colors() {
            return getUniqueValues(this.products, 'colors')
        }
    },
    methods: {
        formatPrice,
        ...mapActions(useProducts, ['fetchProducts', 'filterProducts', 'clearFilters', 'loadProducts'])
    },

    mounted() {
      this.fetchProducts()
        this.loadProducts()
    }
}
</script>

<style lang="scss" scoped>
.form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }
  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
</style>