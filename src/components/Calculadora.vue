<template>
  <main class="section">
    <div class="section__calculadora">
      <h2 class="title-1-white mb-1">Calcule Sua Economia!</h2>
      <p class="text-4">Quanto você gasta de luz, em média, por mês?</p>
      <div class="range-container" @click="handleRangeClick">
        <input
          type="range"
          min="0"
          class="range__background"
        >

        <span class="range-progress" :style="{ width: `calc(${progresso}% + 12px)` }"></span>

        <input
          type="range"
          min="0"
          :max="maxRange"
          :step="step"
          class="range"
          v-model.number="gastoMensal"
        >
      </div>
      <span class="block text-white text-5xl mt-[48px] font-bold">
        R$ {{ gastoMensal.toFixed(2) }}
      </span>
    </div>

    <div class="section__resultado">
      <div class="resultado">
        <p class="text-sm">Em 12 meses você poderá economizar até:</p>
        <p class="text-xl font-bold">R$ {{ economiaAnual.toFixed(2) }}</p>
      </div>
      <p class="text-sm mb-4">E ainda contribuirá com o meio ambiente reduzindo o gás Carbono (CO2) lançados no planeta.</p>
      <a class="btn-1 text-center">
        Quero Economizar e salvar o Planeta
      </a>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      gastoMensal: 200,
      maxRange: 10000,
      step: 50,
    };
  },
  computed: {
    economiaAnual() {
      return this.gastoMensal * 0.15 * 12;
    },
    progresso() {
      return (this.gastoMensal / this.maxRange) * 97; // Calcula a porcentagem corretamente
    },
  },
  methods: {
    handleRangeClick(event) {
      const rangeElement = event.target;
      const { left, width } = rangeElement.getBoundingClientRect();
      const clickPosition = event.clientX - left;
      const percentage = clickPosition / width;
      const newValue = Math.round((percentage * this.maxRange) / this.step) * this.step;
    },
  },
};
</script>

<style scoped>
.section {
  @apply flex mt-24 w-[80%];
}

.section__calculadora {
  @apply flex-1 p-8;
  background: #79963D;
  border-radius: 20px 0 0 20px;
}

.range-container {
  @apply mt-4 relative cursor-pointer;
}

.range__background {
  @apply absolute top-0 left-0 w-full appearance-none rounded-lg cursor-pointer;
  height: 15px;
  background: #C1EC68; /* Cor de fundo padrão */

  /* Estilo para o indicador do slider */
  &::-webkit-slider-thumb {
    display: none;
  }

}

.range {
  @apply absolute top-0 left-0 w-full appearance-none rounded-lg cursor-pointer;
  height: 15px;
  background: transparent; /* Cor de fundo padrão */
  outline: none;
  -webkit-appearance: none;

  /* Estilo para o indicador do slider */
  &::-webkit-slider-thumb {
    @apply appearance-none w-6 h-6 rounded-full cursor-pointer;
    background: #2C3715;
  }

  &::-webkit-slider-thumb:hover {
    transform: scale(1.05);
    transition: all .1s ease;
  }

  /* Estilo para o indicador do slider (Firefox) */
  &::-moz-range-thumb {
    @apply w-6 h-6 rounded-full cursor-pointer;
    background: #2C3715;
  }
}

.range-progress {
  @apply absolute top-0 left-0 h-[15px] max-w-[98%];
  border-radius: 20px 0 0 20px;
  background-color: #455622; /* Cor de fundo da barra de progresso */
}

.section__resultado {
  @apply flex-1 text-white p-8 flex flex-col gap-[18px];
  background: #455622;
  border-radius: 0 20px 20px 0;
}

.resultado {
  @apply rounded-full p-4 mb-4 flex items-center justify-between;
  border: 2px solid #C1EC68;
}

.btn-1 {
  @apply text-black font-bold py-2 px-4 rounded-lg cursor-pointer
  hover:bg-transparent hover:text-white transition-all;
  background: #C1EC68;
  border: 2px solid #C1EC68;
}
</style>