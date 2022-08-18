<template>
    <div class="nav-container">
       <div class="nav-center">
           <div class="nav-header">
              <router-link to="/" class="logo">
                  <img src="../assets/ment-logo.png" alt="comfy sloth">
              </router-link>
              <button type="button" class="nav-toggle" @click="openSidebar">
                <i class="pi pi-align-justify" style="font-size: 1.7rem"></i>
              </button>
            </div>
            <ul class="nav-links">
                <li v-for="link in links">
                  <router-link :to="{path: link.url}">
                    {{link.text.charAt(0).toUpperCase() + link.text.slice(1)}}
                  </router-link>            
                </li>
            </ul>
            <CartButtons />
       </div>
    </div>
</template>

<script>
import {links} from "../utils/constant";
import { mapActions, mapState } from "pinia";
import { useProducts } from "../stores/products";
import CartButtons from "./CartButtons.vue";

export default {
    computed: {
        links() {
            return links;
        },
        ...mapState(useProducts, ["isSidebarOpen"])
    },
    methods: {
        ...mapActions(useProducts, ["openSidebar"])
    },
    components: { CartButtons }
}
</script>

<style scoped lang="scss">
.nav-container {
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 175px;
      height: 70px;
      margin-left: -15px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
</style>