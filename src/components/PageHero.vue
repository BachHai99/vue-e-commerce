<template>
    <section>
        <div class="section-center">
            <h3>
                <router-link to="/">Home</router-link>
                <router-link to="/products" v-if="single_product">/ Product</router-link> / {{title}}
            </h3>
        </div>
    </section>
</template>

<script>
export default {
    props: ['title', 'single_product']
}
</script>

<style scoped lang="scss">
section {
    background: var(--clr-primary-10);
    width: 100%;
    min-height: 20vh;
    display: flex;
    align-items: center;
    color: var(--clr-primary-1);
}
a {
    color: var(--clr-primary-3);
    padding: 0.5rem;
    transition: var(--transition);
  }
a:hover {
    color: var(--clr-primary-1);
  }
</style>