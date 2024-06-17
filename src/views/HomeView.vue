<script>
    import MainSlider from '../components/MainSlider.vue'
    import Beneficios from '../components/Beneficios.vue'
    import Estatisticas from '../components/Estatisticas.vue'
    import WhyToUse from '../components/WhyToUse.vue'
    import Parceiras from '../components/Parceiras.vue'
    import Economia from '../components/Economia.vue'
    import HowItWorks from '../components/HowItWorks.vue'
    import Motivos from '../components/Motivos.vue'
    import Depoimentos from '../components/Depoimentos.vue'
    import Sustentabilidade from '../components/SustentabilidadeMtrek.vue'
    import Contato from '../components/Contato.vue'
    import FAQ from '../components/FAQ.vue'

    import Iframe from '../components/Iframe.vue'
    import Calculadora from '../components/Calculadora.vue'

    export default {
        name: "HomeView",
        components: {
            MainSlider,
            Calculadora,
            Beneficios,
            Estatisticas,
            WhyToUse,
            Parceiras,
            Economia,
            HowItWorks,
            Motivos,
            Depoimentos,
            Sustentabilidade,
            Contato,
            FAQ,
            Iframe,
        }
    }
</script>

<template>
  <div class="container">
    <MainSlider data-aos="fade-up" />
    <Calculadora data-aos="fade-up" data-aos-delay="300" />
  </div>

  <Beneficios/>

  <div class="container">
    <Iframe data-aos="zoom-in" />
    <Estatisticas data-aos="fade-up" data-aos-delay="200" />
    <WhyToUse data-aos="fade-up" data-aos-delay="300" />
    <Parceiras data-aos="fade-up" data-aos-delay="400" />
    <Economia data-aos="fade-up" data-aos-delay="500" />
  </div>

  <HowItWorks data-aos="fade-left" />

  <div class="container">
    <Motivos data-aos="fade-right" />
    <Depoimentos data-aos="fade-left" data-aos-delay="100" />
  </div>

  <Sustentabilidade data-aos="fade-up" />

  <div class="container">
    <Contato data-aos="fade-right" />
    <FAQ data-aos="fade-left" data-aos-delay="300" />
  </div>
</template>
