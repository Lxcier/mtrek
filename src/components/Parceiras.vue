<script>
    import Glide from '@glidejs/glide'

    // Imagens 
    import Imagem1 from '../assets/images/Distribuidoras/cemig-minas-gerais.png'
    import Imagem2 from '../assets/images/Distribuidoras/coelba-bahia.png'
    import Imagem3 from '../assets/images/Distribuidoras/cpfl-piratinga-sao-paulo.png'
    import Imagem4 from '../assets/images/Distribuidoras/celp-pernambuco.png'
    import Imagem5 from '../assets/images/Distribuidoras/cosern-rio-grande-do-norte.png'
    import Imagem6 from '../assets/images/Distribuidoras/enel-ceara.png'
    import Imagem7 from '../assets/images/Distribuidoras/energisa-mato-grosso.png'
    import Imagem8 from '../assets/images/Distribuidoras/light-rio-de-janeiro.png'
    import Imagem9 from '../assets/images/Distribuidoras/neoenergia-elektro.png'
    import Imagem10 from '../assets/images/Distribuidoras/equatorial-alagoas.png'

    export default {
        name: "Parcerias",
        data() {
            return {
                companies: {
                    images: [
                        {   id: 1,
                            link: "https://energialivre.cemig.com.br/",
                            url: Imagem1,
                            titulo: "Imagem 1" 
                        },
                        {   id: 2, 
                            link: "https://energialivre.cemig.com.br/",
                            url: Imagem2, 
                            titulo: "Imagem 2" 
                        },
                        {   id: 3,
                            link: "https://energialivre.cemig.com.br/",
                            url: Imagem3, 
                            titulo: "Imagem 3" 
                        },
                        {   id: 4, 
                            link: "https://energialivre.cemig.com.br/",
                            url: Imagem4, 
                            titulo: "Imagem 4" 
                        },
                        {   id: 5, 
                            link: "https://energialivre.cemig.com.br/",
                            url: Imagem5, 
                            titulo: "Imagem 4" 
                        },
                        {   id: 6, 
                            link: "https://energialivre.cemig.com.br/",
                            url: Imagem6, 
                            titulo: "Imagem 4" 
                        },
                        {   id: 7, 
                            link: "https://energialivre.cemig.com.br/",
                            url: Imagem7, 
                            titulo: "Imagem 4" 
                        },
                        {   id: 8, 
                            link: "https://energialivre.cemig.com.br/",
                            url: Imagem8, 
                            titulo: "Imagem 4" 
                        },
                        {   id: 9, 
                            link: "https://energialivre.cemig.com.br/",
                            url: Imagem9, 
                            titulo: "Imagem 4" 
                        },
                        {   id: 10, 
                            link: "https://energialivre.cemig.com.br/",
                            url: Imagem10,
                            titulo: "Imagem 4" 
                        },
                    ],
                },
              }
          },
        mounted() {
            new Glide('.companies__glide', {
            type: 'carousel',
            startAt: 0,
            perView: 3,
            autoplay: 3000,
            animationDuration: 500,
            animationTimingFunc: 'ease',
            breakpoints: {
                1023: {
                    perView: 2,
                }
            }

            }).mount();
        }
    }

</script>

<template>
	<main class="section">
        <section class="section__content">
            <h2 class="section__title title-1">Distribuidoras Parceiras</h2>
            <p class="paragraph text-1">
                Na Mtrek, trabalhamos em parceria com as principais distribuidoras de energia do país para oferecer aos nossos clientes uma experiência confiável e eficiente.
            </p>
        </section>

        <div class="companies__glide animated">
            <div class="companies__track" data-glide-el="track">
                <ul class="companies__slides">
                    <li class="companies__slide" v-for="image in companies.images" 
                    :key="image.id">
                        <a :href="image.link">
                            <img :src="image.url" :alt="image.titulo">
                        </a>
                    </li>
                </ul>

                <div class="companies__arrows" data-glide-el="controls">
                    <button class="companies__arrow companies__arrow--left" data-glide-dir="<">
                        <img src="../assets/images/Icones/prev.png">
                    </button>
                    <button class="companies__arrow companies__arrow--right" data-glide-dir=">">
                        <img src="../assets/images/Icones/next.png">
                    </button>
                </div>
             </div>
        </div>
    </main>
</template>

<style scoped>
	.paragraph {
		@apply text-center w-[60%] mx-auto
	}

    .companies__glide {
        @apply relative mt-[46px];
    }

    .companies__track {
        @apply mx-auto;
        width: calc(100% - 90px);
        overflow-x: hidden;
    }

    .companies__slides {
        @apply flex gap-[20px] mx-auto;
    }

    .companies__arrow {
        @apply absolute top-[50%];
    }
    
    .companies__arrow img {
        @apply w-10;
    }

    .companies__arrow--left {
        left: 0;
        transform: translateY(-50%);
    }

    .companies__arrow--right {
        right: 0;
        transform: translateY(-50%);
    }

    @media screen and (max-width: 1023px){
        .section__title {
            @apply max-w-[80%]
        }

        .paragraph {
            @apply text-justify w-full;
        }
    }
</style>

