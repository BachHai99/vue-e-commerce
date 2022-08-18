<template>
    <div class="sidebar-container">
        <aside :class="[isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar']">
            <div class="sidebar-header">
                <img src="../assets/ment-logo.png" alt="comfy sloth" class="logo">
                <button class="close-btn" type="button" @click="clodeSidebar">
                  <i class="pi pi-times" style="font-size: 1.7rem"></i>
                </button>
            </div>
            <ul class="links" v-for="link in links" @click="clodeSidebar">
                <router-link :to="{path: link.url}">
                    {{link.text.charAt(0).toUpperCase() + link.text.slice(1)}}
                </router-link>
            </ul>
            <CartButtons />
        </aside>
    </div>
</template>

<script>
import CartButtons from "./CartButtons.vue";
import { useProducts } from "../stores/products";
import { mapState, mapActions } from "pinia";
import { links } from "../utils/constant";

export default {
    components: {
      CartButtons
    },
    computed: {
        links() {
            return links
        },
        ...mapState(useProducts, ['isSidebarOpen']),
    },
    methods: {
        ...mapActions(useProducts, ['clodeSidebar'])
    }
}
</script>

<style>
.sidebar-container {
    text-align: center;
}
.sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    transition: var(--transition);
    cursor: pointer;
    color: var(--clr-red-dark);
    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color: var(--clr-red-light);
  }
  .logo {
    justify-self: center;
    height: 65px;
  }
  .links {
    margin-bottom: 2rem;
  }
  .links a {
    display: block;
    text-align: left;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: var(--clr-grey-3);
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }
  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    background: var(--clr-grey-10);
    color: var(--clr-grey-2);
  }
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-white);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .cart-btn-wrapper {
    margin: 2rem auto;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
</style>