<template>
    <section>
        <div class="section-center">
            <article class="header">
                <h3>
                    Custom Furniture <br />
                    Built Only For You
                </h3>
            </article>
            <div class="services-center">
                <article v-for="service in services" class="service" key="service.id">
                    <span class="icon"><i :class="service.icon" style="font-size: 1.7rem"></i></span>
                    <h4>{{service.title}}</h4>
                    <p>{{service.text}}</p>
                </article>
            </div>
        </div>
    </section>
</template>

<script>
import { services } from "../utils/constant";

export default {
    computed: {
        services() {
            return services
        }
    }
}
</script>

<style scoped lang="scss">
section {
    padding: 5rem 0;
}
h3,
  h4 {
    color: var(--clr-primary-1);
  }
  .header h3 {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 0;
    line-height: 1.8;
    color: var(--clr-primary-3);
  }
  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
  }
  .service {
    background: var(--clr-primary-7);
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: var(--radius);
    p {
      color: var(--clr-primary-2);
    }
  }
  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: var(--clr-primary-10);
    color: var(--clr-primary-1);
    svg {
      font-size: 2rem;
    }
  }
  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    section {
        padding: 0;
    }
    .section-center {
      transform: translateY(5rem);
    }
  }
</style>