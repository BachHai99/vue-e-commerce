import { defineStore } from "pinia"

export const useProducts = defineStore('products-store', {
    state: () => {
        return {
            isSidebarOpen: false,
            products_loading: false,
            products_error: false,
            products: [],
            featured_products: [],
            single_product_loading: false,
            single_product: {},
            single_product_error: false,

            //filters
            filtered_products: [],
            grid_view: true,
            sort: 'name-a',
            filters: {
                text: '',
                company: 'all',
                category: 'all',
                color: 'all',
                min_price: 0,
                max_price: 0,
                price: 0,
                shipping: false
            }
        }
    },
    actions: {
        async fetchProducts() {
            this.products_loading = true
            const response = await fetch('https://course-api.com/react-store-products')
            try {
                this.products_loading = false
                const result = await response.json()
                this.products = result
                this.featured_products = this.products.filter((product) => product.featured === true)
            } catch (err) {
                this.products = []
                this.featured_products = []
                console.error('Error loading products', err);
                return err
            }
            this.products_loading = false
        },

        async fetchSingleProduct(url) {
            this.single_product_loading = true
            const response = await fetch(url)
            try {
                this.single_product_loading = false
                const singleProduct = await response.json()
                this.single_product = singleProduct
            } catch (err) {
                this.single_product = []
                console.error('Error loading single product', err);
                return err   
            }
            this.single_product_loading = false
        },
        
        openSidebar() {
            this.isSidebarOpen = true
        },

        clodeSidebar() {
            this.isSidebarOpen = false
        },

        // filters
        setListView() {
            this.grid_view = false
        },
        setGridView() {
            this.grid_view = true
        },

        loadProducts() {
            let maxPrice = this.products.map((p) => p.price)
            maxPrice = Math.max(...maxPrice)
            // console.log(maxPrice);
            // console.log(this.products);
            this.filtered_products = this.products
            this.filters.price = maxPrice
            this.filters.max_price = maxPrice
        },

        sortProducts(e) {
            const value = e.target.value
            this.sort = value
            console.log(this.sort)
            let tempProducts = [...this.filtered_products]
            if(this.sort === 'price-lowest') {
                tempProducts = tempProducts.sort((a, b) => a.price - b.price)
            }
            if(this.sort === 'price-highest') {
                tempProducts = tempProducts.sort((a, b) => b.price - a.price)
            }
            if(this.sort === 'name-a') {
                tempProducts = tempProducts.sort((a, b) => a.name.localeCompare(b.name))
            }
            if(this.sort === 'name-z') {
                tempProducts = tempProducts.sort((a, b) => b.name.localeCompare(a.name))
            }
            this.filtered_products = tempProducts
        },

        filterProducts(e) {
            let name = e.target.name
            let value = e.target.value
            console.log(value);
            console.log(name);
            if(name === 'text') {
                this.filters.text = value
            }
            if(name === 'category') {
                this.filters.category = value
            }
            if(name === 'company') {
                this.filters.company = value
            }
            if(name === 'color') {
                this.filters.color = value
            }
            if(name === 'price') {
                this.filters.price = Number(value)
                // this.filters.min_price = Math.min(Number(value))
                // this.filters.max_price = Math.max(Number(value))
            }
            if(name === 'shipping') {
                this.filters.shipping = !this.filters.shipping
            }

            let tempProducts = [...this.products]
            // console.log(this.filtered_products);

            // text  
            if(this.filters.text) {
                tempProducts = tempProducts.filter((product) =>  product.name.toLowerCase().startsWith(this.filters.text))
            }

            // category
            if(this.filters.category !== 'all') {
                tempProducts = tempProducts.filter((product) => product.category === this.filters.category)
            }

            // company
            if(this.filters.company !== 'all') {
                tempProducts = tempProducts.filter((product) => product.company === this.filters.company)
            }

            // color
            if(this.filters.color !== 'all') {
                tempProducts = tempProducts.filter((product) => {
                    return product.colors.find(c => c === this.filters.color)
                })
            }

            // price
            tempProducts = tempProducts.filter((product) => product.price <= this.filters.price)

            // shipping
            if(this.filters.shipping) {
                tempProducts = tempProducts.filter((product) => product.shipping === true)
            }

            this.filtered_products = tempProducts
        },

        clearFilters() {
            console.log('clear filters');
            this.filters.text = ''
            this.filters.company = 'all'
            this.filters.category = 'all'
            this.filters.color = 'all'
            this.filters.price = this.filters.max_price
            this.filters.shipping = false
            this.filtered_products = this.products
        },
    }
})