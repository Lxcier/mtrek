<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router' //Importa as tags principais do vue-router

import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

</script>

<template>
  <Header />
  <RouterView />
  <Footer/>
</template>

<style scoped>

</style>
