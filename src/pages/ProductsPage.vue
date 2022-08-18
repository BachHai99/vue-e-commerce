<template>
	<main>
		<PageHero title="products"/>
		<div class="page">
			<div class="section-center products">
				<Filters />
				<div>
					<Sort />
					<ProductsList />
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import ProductsList  from '../components/ProductsList.vue'
import Sort from '../components/Sort.vue'
import Filters from '../components/Filters.vue'
import PageHero from '../components/PageHero.vue'

export default {
	components: {
		ProductsList,
		Sort,
		Filters,
		PageHero
	},
}
</script>

<style scoped lang="scss">
.products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
@media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
}

</style>