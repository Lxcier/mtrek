<template>
  <main class="section" ref="section">
    <h2 class="section__title title-1">
      Faça a Mudança, Faça a Diferença!
    </h2>
    <p class="paragraph text-1">
      Ao optar pela energia limpa da Mtrek, você não está apenas economizando dinheiro; você está ajudando a construir um futuro mais sustentável para todos. Cada escolha que você faz contribui para a redução da poluição e para a preservação do meio ambiente.
    </p>

    <section class="section__content" ref="sectionContent">
      <ul class="cards__list">
        <li class="card w-[410px]">
          <p class="text-4">
            Economize todos os meses na sua conta de luz em até:
          </p>
          <span class="span-1">{{ animatedNumber1 }}%</span>
          <p class="subtitle-1">Desconto mensal na conta de luz</p>
        </li>

        <li class="card w-[513px]">
          <p class="text-4">
            Em meses de bandeira tarifária vermelha II seu desconto pode chegar em até:
          </p>
          <span class="span-1">{{ animatedNumber2 }}%</span>
          <p class="subtitle-1">Proteção contra bandeira tarifária</p>
        </li>

        <li class="card w-[378px]">
          <p class="text-4">
            Você contribui positivamente com o meio ambiente
          </p>
          <span class="span-1">{{ animatedNumber3 }}%</span>
          <p class="subtitle-1">Poluição que você reduzirá</p>
        </li>

        <li class="card w-[378px]">
          <p class="text-4">
            Consumir energia da Mtrek, é o equivalente a plantar
          </p>
          <span class="span-1">{{ animatedNumber4 }}%</span>
          <p class="subtitle-1">De árvores ao ano</p>
        </li>
      </ul>

      <a class="btn-1 animated" href="#">
        Quero Economizar e Salvar o Planeta
      </a>
    </section>
  </main>
</template>

<script>
export default {
  name: "Estatisticas",
  data() {
    return {
      animatedNumber1: 0,
      animatedNumber2: 0,
      animatedNumber3: 0,
      animatedNumber4: 0,
      animationDone: false,
    };
  },
  mounted() {
    // Polyfill para IntersectionObserver (adicione no seu projeto se necessário)
    if (!('IntersectionObserver' in window)) {
      import('intersection-observer').then(() => {
        this.initObserver();
      });
    } else {
      this.initObserver();
    }
  },
  methods: {
    initObserver() {
      // Inicia a observação quando o componente é montado
      const observer = new IntersectionObserver(this.handleIntersection, {
        root: null,
        rootMargin: "0px",
        threshold: 0.1, // Ajuste do threshold para melhorar a detecção
      });
      observer.observe(this.$refs.section); // Observa o elemento principal do componente
    },
    handleIntersection(entries) {
      if (entries[0].isIntersecting && !this.animationDone) {
        this.animateNumbers();
      }
    },
    animateNumbers() {
      const targets = [25, 30, 140, 6];
      const durations = [1800, 2000, 2100, 1850];

      targets.forEach((target, index) => {
        let startTimestamp = null;

        const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / durations[index], 1);
          this[`animatedNumber${index + 1}`] = Math.floor(progress * target);

          if (progress < 1) {
            requestAnimationFrame(step);
          } else {
            this.animationDone = true; // Define a flag como true quando a animação terminar
          }
        };

        requestAnimationFrame(step);
      });
    },
  },
};
</script>

<style scoped>
.paragraph {
  @apply mb-[24px] mx-auto text-center w-[58%];
}

.cards__list {
  @apply gap-[20px];
}

.card {
  @apply px-[18px] h-[255px];
  align-content: center;
  background: var(--green-primary);
}

.btn-1 {
  @apply block w-max mt-[48px] mx-auto;
}

@media screen and (max-width: 1023px) {
  .section__title {
    @apply max-w-[73%];
  }

  .paragraph {
    @apply w-full text-justify;
  }

  .cards__list {
    @apply flex-wrap justify-center;
  }

  .card {
    @apply w-[40%] px-6 mx-0;
  }

  .btn-1 {
    @apply text-[18px];
  }

  .span-1 {
    @apply text-7xl;
  }
}

@media screen and (max-width: 767px) {
  .section__title {
    @apply max-w-full text-left;
  }

  .cards__list {
    @apply flex flex-col;
  }

  .card {
    @apply w-full;
  }

  .btn-1 {
    @apply w-fit text-center;
  }
}
</style>
