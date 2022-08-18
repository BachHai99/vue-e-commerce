<template>
    <footer>
        <div class="copy-right">
            <h5>
                &copy; {{new Date().getFullYear()}}
                <span>MENT</span>
            </h5>
            <h5>All rights reserved</h5>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
footer {
    height: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--clr-black);
    text-align: center;
}

span {
    color: var(--clr-primary-5);
  }
h5 {
    color: var(--clr-white);
    margin: 0.1rem;
    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
}
@media (min-width: 776px) {
    footer {
        flex-direction: row;
    }
  }
.copy-right {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>