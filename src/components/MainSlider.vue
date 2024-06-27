<template>
  <div>
    <div class="swiper-container animated">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="image in slider.images"
          :key="image.id"
        >
          <img
            :src="image.urlDesktop"
            :alt="image.titulo"
            class="slide-image desktop-image"
          />
          <img
            :src="image.urlMobile"
            :alt="image.titulo"
            class="slide-image mobile-image"
          />
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script>
import { Swiper } from "swiper/bundle";
import "swiper/swiper-bundle.css";

import Imagem1Mobile from "../assets/images/Carrossel/banner-1-celular.png";
import Imagem1Desktop from "../assets/images/Carrossel/banner-1-pc.jpg";

import Imagem2Mobile from "../assets/images/Carrossel/banner-2-celular.webp";
import Imagem2Desktop from "../assets/images/Carrossel/banner-2-pc.webp";

import Imagem3Mobile from "../assets/images/Carrossel/banner-3-celular.webp";
import Imagem3Desktop from "../assets/images/Carrossel/banner-3-pc.webp";

import Imagem4Mobile from "../assets/images/Carrossel/banner-4-celular.webp";
import Imagem4Desktop from "../assets/images/Carrossel/banner-4-pc.webp";

export default {
  name: "MainSlider",
  data() {
    return {
      slider: {
        images: [
          {
            id: 1,
            urlMobile: Imagem1Mobile,
            urlDesktop: Imagem1Desktop,
            titulo: "Imagem 1",
          },
          {
            id: 2,
            urlMobile: Imagem2Mobile,
            urlDesktop: Imagem2Desktop,
            titulo: "Imagem 2",
          },
          {
            id: 3,
            urlMobile: Imagem3Mobile,
            urlDesktop: Imagem3Desktop,
            titulo: "Imagem 3",
          },
          {
            id: 4,
            urlMobile: Imagem4Mobile,
            urlDesktop: Imagem4Desktop,
            titulo: "Imagem 4",
          },
        ],
      },
    };
  },
  mounted() {
    const swiper = new Swiper(".swiper-container", {
      loop: true,
      effect: "fade",
      speed: 500,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 10100,
        disableOnInteraction: false,
      },
    });
  },
};
</script>

<style scoped>
.swiper-container {
  margin-top: 28px;
  width: 100%;
}

.swiper-slide {
  position: relative;
}

.swiper-slide img {
  width: calc(100% - 100px);
  border-radius: 50px;
  height: 100%;
  object-fit: cover;
  @apply mx-auto;
}

/* Estilos para os botões de navegação e paginação */
.swiper-button-prev,
.swiper-button-next {
  position: absolute;
  top: 50%;
  z-index: 10;
  color: white;
  padding: 10px 15px;
  border-radius: 50%;
  cursor: pointer;
}

.swiper-button-prev::before,
.swiper-button-next::before {
  content: '';
  width: 25px;
  height: 25px;
  border-radius: 50%;
  position: absolute;
  background-color: var(--purple-secundary);
 z-index: -999;
}

.swiper-button-prev::after,
.swiper-button-next::after {
  font-size: 12px;
  text-align: center;
}

.swiper-button-prev {
  left: 0;
}

.swiper-button-next {
  right: 0;
}

.swiper-pagination {
  position: absolute;
  bottom: -25px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  display: flex;
  justify-content: center;
}

/* Exibir imagem desktop apenas em telas maiores */
.desktop-image {
  display: block;
}

.mobile-image {
  display: none;
}

@media (max-width: 1023px) {
  .desktop-image {
    display: none;
  }

  .mobile-image {
    display: block;
  }
}
</style>