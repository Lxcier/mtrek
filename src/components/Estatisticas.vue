<template>
  <main class="section">
    <h2 class="section__title title-1" data-aos="fade-up" data-aos-duration="600">
      Faça a Mudança, Faça a Diferença!
    </h2>
    <p
      class="paragraph text-1"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="600"
    >
      Ao optar pela energia limpa da Mtrek, você não está apenas economizando
      dinheiro; você está ajudando a construir um futuro mais sustentável para
      todos. Cada escolha que você faz contribui para a redução da poluição e
      para a preservação do meio ambiente.
    </p>

    <section class="section__content" ref="sectionContent">
      <ul class="cards__list">
        <li
          class="card w-[410px]"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="400"
        >
          <p class="text-4">
            Economize todos os meses na sua conta de luz em até:
          </p>
          <span class="span-1">{{ animatedNumber1 }}%</span>
          <p class="subtitle-1">Desconto mensal na conta de luz</p>
        </li>

        <li
          class="card w-[513px]"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="400"
        >
          <p class="text-4">
            Em meses de bandeira tarifária vermelha II seu desconto pode chegar
            em até:
          </p>
          <span class="span-1">{{ animatedNumber2 }}%</span>
          <p class="subtitle-1">Proteção contra bandeira tarifária</p>
        </li>

        <li
          class="card w-[378px]"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="400"
        >
          <p class="text-4">
            Você contribui positivamente com o meio ambiente
          </p>
          <span class="span-1">{{ animatedNumber3 }}%</span>
          <p class="subtitle-1">Poluição que você reduzirá</p>
        </li>

        <li
          class="card w-[378px]"
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="400"
        >
          <p class="text-4">
            Consumir energia da Mtrek, é o equivalente a plantar
          </p>
          <span class="span-1">{{ animatedNumber4 }}%</span>
          <p class="subtitle-1">De árvores ao ano</p>
        </li>
      </ul>

      <a
        class="btn-1"
        href="#"
        data-aos="fade-up"
        data-aos-duration="500"
      >
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
      animationRunning: false, // Flag para controlar a animação
    };
  },
  mounted() {
    this.aosObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Se a animação não estiver em andamento, inicia
            if (!this.animationRunning) {
              this.animateNumbers();
            }
          } else {
            // Quando o elemento sai da viewport, reinicia a animação
            this.resetAnimation();
          }
        });
      },
      { threshold: 0.2 } 
    );

    this.$nextTick(() => {
      this.aosObserver.observe(this.$refs.sectionContent); 
    });
  },
  beforeUnmount() {
    if (this.aosObserver) {
      this.aosObserver.disconnect();
    }
  },
  methods: {
    animateNumbers() {
      this.animationRunning = true; // Sinaliza que a animação começou
      const targets = [25, 30, 140, 6]; 
      const durations = [1000, 1200, 1500, 800]; 

      targets.forEach((target, index) => {
        let startTimestamp = null;

        const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min(
            (timestamp - startTimestamp) / durations[index],
            1
          );
          this[`animatedNumber${index + 1}`] = Math.floor(progress * target);

          if (progress < 1) {
            requestAnimationFrame(step);
          } else {
            // Quando a animação termina, libera a flag
            this.animationRunning = false;
          }
        };

        requestAnimationFrame(step);
      });
    },
    resetAnimation() {
      // Reinicia os valores dos números e a flag de animação
      this.animatedNumber1 = 0;
      this.animatedNumber2 = 0;
      this.animatedNumber3 = 0;
      this.animatedNumber4 = 0;
      this.animationRunning = false;
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
</style>