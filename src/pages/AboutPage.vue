<template>
    <main>
        <PageHero title='about'/>
        <div class="page-hero page section section-center">
            <img src="../assets/ment-background.jpg" alt="nice desk">
            <article>
                <div class="title">
                    <h2>our story</h2>
                    <div class="underline"></div>
                </div>
                <p>MENT Company là một trong những công ty Công nghệ hàng đầu tại Huế. MENT chuyên thiết kết website, thiết kế ứng dụng lập trình, lập trình website, lập trình mobile</p>
            </article>
        </div>
    </main>
</template>

<script>
import PageHero from "../components/PageHero.vue";

export default {
    components: {
        PageHero
    }
}
</script>

<style scoped lang="scss">
.page-hero {
    display: grid;
    gap: 4rem;
}
img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    .page-hero {
        grid-template-columns: 1fr 1fr;
    }
  }
</style>