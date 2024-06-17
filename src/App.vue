<template>
  <div id="app">
    <Loading v-if="isLoading" /> 
    <Header v-if="!isLoading" />
    <RouterView v-if="!isLoading" />
    <Footer v-if="!isLoading" />
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Loading from './components/Loading.vue'; 

export default {
  components: {
    Header,
    Footer,
    RouterLink,
    RouterView,
    Loading 
  },
  data() {
    return {
      isLoading: true
    };
  },
  mounted() {
    // Simule o tempo de carregamento de todos os componentes
    // Remova o setTimeout e coloque a lógica real de carregamento
    setTimeout(() => {
      this.isLoading = false; 
    }, 5250);
  }
};
</script>