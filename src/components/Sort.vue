<template>
    <section>
        <div class="btn-container">
            <button type="button" :class="[ grid_view ? active : null ]" @click="setGridView">
                <i class="pi pi-microsoft" style="font-size: 1.5rem;"></i>
            </button> 
            <button type="button" :class="[ !grid_view ? active : null ]" @click="setListView">
                <i class="pi pi-align-justify" style="font-size: 1.5rem;"></i>
            </button>
        </div>
        <p>{{filtered_products.length}} products found</p>
        <hr />
        <form>
            <label name="sort" id="sort" class="sort-input" value='sort'>sort by</label>
            <select name="sort" id="sort" class="sort-input" :value="sort" @change="sortProducts">
                <option value="name-a">name (a-z)</option>
                <option value="name-z">name (z-a)</option>
                <option value="price-lowest">price (lowest)</option>
                <option value="price-highest">price (highest)</option>
            </select>
        </form>
    </section>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useProducts } from "../stores/products";

export default {
    computed: {
        ...mapState(useProducts, ['products', 'grid_view', 'sort', 'filtered_products']),
    },
    methods: {
        ...mapActions(useProducts, ['setGridView', 'setListView', 'sortProducts'])
    },
    
}
</script>

<style lang="scss" scoped>
section {
    display: grid;
    grid-template-columns: auto auto 1fr auto;
    align-items: center;
    margin-bottom: 2rem;
    column-gap: 2rem;
}
 @media (max-width: 576px) {
    section {
        display: grid;
        grid-template-columns: 1fr;
        row-gap: 0.75rem;
    }
    .btn-container {
      width: 50px;
    }
    label {
      display: inline-block;
      margin-right: 0.5rem;
    }
  }
  @media (min-width: 768px) {
    section {
        column-gap: 2rem;
    }
  }
  p {
    text-transform: capitalize;
    margin-bottom: 0;
  }
  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.5rem;
    button {
      background: transparent;
      border: 1px solid var(--clr-black);
      color: var(--clr-black);
      width: 1.5rem;
      border-radius: var(--radius);
      height: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      svg {
        font-size: 1rem;
      }
    }
    .active {
      background: var(--clr-black);
      color: var(--clr-white);
    }
  }
  .sort-input {
    border-color: transparent;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
  }
  label {
    font-size: 1rem;
    text-transform: capitalize;
  }
</style>