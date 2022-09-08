<template>
    <article>
        <div class="container">
            <img :src="image" :alt="name">
            <router-link v-if="typeof id!== 'undefined'" :to="{name: 'SingleProduct', params: {id: id}}" class="link">
              <i class="pi pi-search" style="color: white"></i>
            </router-link>
        </div>
        <footer>
            <h5>{{name}}</h5>
            <p>{{formatPrice(price)}}</p>
        </footer>
    </article>
</template>

<script>
import { formatPrice } from '../utils/helpers'
export default {
    props: {
      image: {
        type: String,
        default: null
      }, 
      name: {
        type: String,
        default: null
      },
      price: {
        type: Number,
        default: null
      },
      id: {
        type: String,
        default: null
      }
    },
    data() {
      return {
        formatPrice
      }
    },
}
</script>

<style scoped lang="scss">
.container {
    position: relative;
    background: var(--clr-black);
    border-radius: var(--radius);
  }
  img {
    width: 100%;
    height: 175px;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }
  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 400;
  }
  footer p {
    color: var(--clr-primary-5);
    letter-spacing: var(--spacing);
  }
</style>