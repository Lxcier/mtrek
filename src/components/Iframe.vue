<script>
    export default {
        name: 'Iframe'
    }
</script>

<template>
    <iframe class="video" width="920" height="517" src="https://www.youtube.com/embed/Q_xkyrJ03kc?si=aHPB1xSvs5LZe4B8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</template>

<style scoped>
    .video {
        @apply rounded-lg mx-auto;
    }
</style>

