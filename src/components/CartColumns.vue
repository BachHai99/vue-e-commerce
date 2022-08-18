<template>
    <div class="cart-column">
        <div class="content">
            <h5>item</h5>
            <h5>price</h5>
            <h5>quantity</h5>
            <h5>subtotal</h5>
            <span></span>
        </div>
        <hr>
    </div>
</template>

<style lang="scss" scoped>
.cart-column {
    display: none;
}
  @media (min-width: 776px) {
    .cart-column {
        display: block;
    }
    .content {
      display: grid;
      grid-template-columns: 316px 1fr 1fr 1fr auto;
      justify-items: center;
      column-gap: 1rem;
      h5 {
        color: var(--clr-grey-5);
        font-weight: 400;
      }
    }
    span {
      width: 2rem;
      height: 2rem;
    }
    hr {
      margin-top: 1rem;
      margin-bottom: 3rem;
    }
  }
</style>