<script>  
    import sr from '../scrollReveal.js';


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
        },
        mounted() {
          sr.reveal('.calculadora');
          sr.reveal('.animated');

          sr.reveal('.section__title', {
            duration: 600,
            scale: .8,
            origin: 'bottom',
          });

          sr.reveal('.paragraph', {
            delay: 200,
          });

          sr.reveal ('.animated-right', {
            origin: 'right'
          });

          sr.reveal('.animated-left', {
            origin: 'left'
          });


          // cards
          sr.reveal('.card', {
            interval: 200,
            origin: 'left',
          });

          sr.reveal('.arrow', {
            interval: 200,
            origin: 'left',
          });
        }
    }
</script>

<template>
  <div class="container">
    <MainSlider />
    <Calculadora />
  </div>

  <Beneficios/>

  <div class="container">
    <Iframe />
    <Estatisticas />
    <WhyToUse />
    <Parceiras />
    <Economia class="overflow-hidden"/>
  </div>

  <HowItWorks class="overflow-x-hidden"/>

  <div class="container overflow-x-hidden" >
    <Motivos />
    <Depoimentos />
  </div>

  <Sustentabilidade />

  <div class="container">
    <Contato />
    <FAQ />
  </div>
</template>
