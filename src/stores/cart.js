import { defineStore } from "pinia";

const getLocalStorage = () => {
    let cart = localStorage.getItem('cart')
    if(cart) {
        return JSON.parse(localStorage.getItem('cart'))
    } else {
        return []
    }
}

export const useCart = defineStore('cart-store', {
    state: () => {
        return {
            cart: getLocalStorage(),
            total_items: 0,
            total_amount: 0,
        }
    },

    actions: {
        addToCart(id, color, amount, product) {
            const tempItem = this.cart.find((i) => i.id === id + color) 
            // console.log(tempItem);
            if(tempItem) {
                const tempCart = this.cart.map((cartItem) => {
                    if(cartItem.id === id + color) {
                        let newAmount = cartItem.amount + amount
                        if(newAmount > cartItem.max) {
                            newAmount = cartItem.max
                        }
                        return  {...cartItem, amount: newAmount}
                    } else {
                        return cartItem
                    }
                })
                return this.cart = tempCart
            } else {
                const newItem = {
                    id: id + color,
                    name: product.name,
                    color,
                    amount,
                    image: product.images[0].url,
                    price: product.price,
                    max: product.stock
                }
                console.log(newItem);
                console.log(this.cart);
                // return [...this.cart, newItem]
                return this.cart.push(newItem)
            }
        },

        removeItem(id) {
            this.cart = this.cart.filter((item) => item.id !== id)
        },

        toggleAmount(id, value) {
            console.log(123);
            const tempCart = this.cart.map((item) => {
                if(item.id === id) {
                    if(value === 'inc') {
                        let newAmount = item.amount + 1
                        if(newAmount > item.max) {
                            newAmount = item.max
                        }
                        return {...item, amount: newAmount}
                    }
                    if(value === 'dec') {
                        let newAmount = item.amount - 1
                        if(newAmount < 1) {
                            newAmount = 1
                        }
                        return {...item, amount: newAmount}
                    }
                } else {
                    return item
                }
            })
            return this.cart = tempCart
        },
        
        clearCart() {
            this.cart = []
        },

        countCartTotal() {
            const { total_items, total_amount} = this.cart.reduce((total, cartItem) => {
                const {amount, price} =cartItem
                total.total_items += amount
                total.total_amount += amount * price
                return total
            }, {
                total_amount : 0,
                total_items : 0
            })
            this.total_amount = total_amount
            this.total_items = total_items
        }
    }
})