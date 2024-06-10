<script>
    import MainSlider from '../components/MainSlider.vue'
    import Beneficios from '../components/Beneficios.vue'
    import Estatisticas from '../components/Estatisticas.vue'

    export default {
        name: "HomeView",
        components: {
            MainSlider,
            Beneficios,
            Estatisticas
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
    </div> 

</template>

<style scoped>

</style>