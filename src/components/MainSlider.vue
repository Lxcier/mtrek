<script>
    import Glide from '@glidejs/glide'

    // Imagens 
    import Imagem1 from '../assets/images/Carrossel/banner-1-pc.jpg'
    import Imagem2 from '../assets/images/Carrossel/banner-2-pc.webp'
    import Imagem3 from '../assets/images/Carrossel/banner-3-pc.webp'
    import Imagem4 from '../assets/images/Carrossel/banner-4-pc.webp'

    export default {
        name: "MainSlider",
        data() {
            return {
                slider: {
                    images: [
                        {   id: 1,
                            target: "=0",
                            url: Imagem1, 
                            titulo: "Imagem 1" 
                        },
                        {   id: 2, 
                            target: "=1",
                            url: Imagem2, 
                            titulo: "Imagem 2" 
                        },
                        {   id: 3, 
                            target: "=2",
                            url: Imagem3, 
                            titulo: "Imagem 3" 
                        },
                        {   id: 4,
                            target: "=3",
                            url: Imagem4, 
                            titulo: "Imagem 4" 
                        },
                    ],
                },
              }
          },

    
        mounted() {
            new Glide('.glide', {
            type: 'carousel',
            startAt: 0,
            perView: 1,
            autoplay: 3000,
            animation: "fade",
            animationDuration: 500,
            animationTimingFunc: 'ease-in-out',
            }).mount();
        }
    }
</script>

<template>
    <div class="glide">
      <div class="glide__track" data-glide-el="track">

        <ul class="glide__slides">
          <li class="glide__slide" v-for="image in slider.images" :key="image.id">
              <img :src="image.url" :alt="image.titulo"
          </li>
        </ul>

         <div class="glide__arrows" data-glide-el="controls">
            <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
                <img src="../assets/images/Icones/prev.png">
            </button>
            <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
                <img src="../assets/images/Icones/next.png">
            </button>
        </div>

        <div class="glide__bullets" data-glide-el="controls[nav]">
            <button class="glide__bullet" :data-glide-dir="image.target" v-for="image in slider.images"></button>
        </div>

      </div>
    </div>
</template>

<style scoped>
    .glide {
        margin-top: 28px;
    }

    .glide > .glide__track {
        @apply mx-auto;
        width: calc(100% - 100px);
        border-radius: 50px;
    }

    .glide__arrow {
        @apply absolute top-1/2;
    }

    .glide__arrow--left {
        @apply left-0;
    }

    .glide__arrow--right {
        @apply right-0;
    }

    .glide__bullets {
        @apply absolute mt-4 flex gap-4 items-center;
        left: calc(50% - 46.375px);

    }

    .glide__bullet {
        @apply w-[0.7rem] h-[0.7rem] rounded-full;
        background: var(--purple-secundary);
    }

    .glide__bullet--active {
        @apply bg-black
    }


</style>