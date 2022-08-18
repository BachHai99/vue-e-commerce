<template>
    <div class="amount-btn amount-btn-wrapper">
        <button class="amount-btn" type="button" @click="decrease">
            <i class="pi pi-minus"></i>
        </button>
        <h2 class="amount">
            {{
                amount
            }}           
        </h2>
        <button class="amount-btn" type="button" @click="increase">
            <i class="pi pi-plus"></i>
        </button>
    </div>
    <!-- {{item}} -->
</template>

<script>
export default {
    props: ['amount', 'item', 'increase', 'decrease'],
    methods: {
        increase() {
            this.$emit('increase')
        },
        decrease() {
            this.$emit('decrease')
        }
    }
}
</script>

<style lang="scss" scoped>
.amount-btn-wrapper {
    display: grid;
    width: 140px;
    justify-items: center;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
}
h2 {
    margin-bottom: 0;
  }
  button {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    padding: 1rem 0;
    width: 2rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h2 {
    margin-bottom: 0;
  }
</style>