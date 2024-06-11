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

    export default {
        name: "HomeView",
        components: {
            MainSlider,
            Beneficios,
            Estatisticas,
            WhyToUse,
            Parceiras,
            Economia,
            HowItWorks,
            Motivos,
            Depoimentos
        }
    }
</script>

<template>
    <div class="container">
        <MainSlider/>
    </div>

        <Beneficios/>

    <div class="container">
        <Estatisticas/>
        <WhyToUse/>
        <Parceiras/>
        <Economia/>
    </div> 

    <HowItWorks/>

    <div class="container">
        <Motivos/>
        <Depoimentos/>
    </div>

</template>

<style scoped>

</style>