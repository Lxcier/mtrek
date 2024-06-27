<template>
    <Header />
    <RouterView v-if="contentLoaded"/>
    <Footer />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';

import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

const contentLoaded = () => {
    setTimeout(() => {
        return true;
    }, 3000);
} 

</script>