<template>
    <div class="text-center">
        <div class="loading"></div>
    </div>
</template>

<style scoped>
    .loading {
        width: 6rem;
        height: 6rem;
        margin: 0 auto;
        margin-top: 10rem;
        border-radius: 50%;
        border: 4px solid #ccc;
        border-top-color: var(--clr-primary-5);
        animation: spinner 0.6s linear infinite;
    }
</style>