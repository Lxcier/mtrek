<script>
    import MainSlider from '../components/MainSlider.vue'
    import Beneficios from '../components/Beneficios.vue'
    import Estatisticas from '../components/Estatisticas.vue'
    import WhyToUse from '../components/WhyToUse.vue'
    import Parceiras from '../components/Parceiras.vue'

    export default {
        name: "HomeView",
        components: {
            MainSlider,
            Beneficios,
            Estatisticas,
            WhyToUse,
            Parceiras
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
    </div> 

</template>

<style scoped>

</style>