<template>
    <div class="hero-wrapper">
        <article class="content">
            <h1>
                design your <br /> 
                MENT
            </h1>
            <p>MENT Company là một trong những công ty Công nghệ hàng đầu tại Huế. MENT chuyên thiết kết website, thiết kế ứng dụng lập trình, lập trình website, 
                 lập trình mobile
            </p>
            <router-link to="/products" class="btn btn-hero">show now</router-link>
        </article>
        <article class="img-container">
            <img src="../assets/ment-background.jpg" alt="nice-table" class="main-img">
            <img src="../assets/couple-img.jpg" alt="person-working" class="accent-img">
        </article>
    </div>
</template>
<style scoped lang="scss">
.hero-wrapper {
    min-height: 60vh;
    display: grid;
    place-items: center;
}

.content {
    text-align: left;
}

.img-container {
     display: none;
     width: 100%;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    .hero-wrapper  {
        height: calc(100vh - 5rem);
        grid-template-columns: 1fr 1fr;
        gap: 8rem;
    }

    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 500px;
      position: relative;
      border-radius: var(--radius);
      display: block;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: "";
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
</style>