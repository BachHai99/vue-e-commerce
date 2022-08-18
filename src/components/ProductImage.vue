<template>
    <section>
        <img v-if="images.length > 0" alt="main image" class="main" :src="main.url"> 
        <div class="gallery">
            <img v-for="(image, index) in images" :src="image.url" :alt="image.filename" 
                :key="index" @click="setMain(image, index)" 
                :class="[image.url === main.url ? 'active' : null]"
            >
        </div>
        <!-- {{main}} -->
    </section>
</template>

<script>
export default {
    props: {
      images: {
        type: Array,
        default: [{url: ""}]
      }
    }, 
    data() {
        return {
            main: this.images[0]
        }
    },
    methods: {
        setMain(image, index) {
            this.main = this.images[index]
        } ,
    },
    watch: {
      images() {
        this.main = this.images[0]
      }
    }
}
</script>

<style lang="scss" scoped>
.main {
    height: 600px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    border: 2px solid var(--clr-primary-5);
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
</style>