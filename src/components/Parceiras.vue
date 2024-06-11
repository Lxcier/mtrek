<script>
    import Glide from '@glidejs/glide'


	export default {
		name: "Parceiras",
	}
</script>

<template>
	<main class="section">
		<section class="section__content">
			<h2 class="section__title title-1">Distribuidoras Parceiras</h2>
			<p class="paragraph text-1">
				Na Mtrek, trabalhamos em parceria com as principais distribuidoras de energia do país para oferecer aos nossos clientes uma experiência confiável e eficiente.
			</p>

			<div class="company__glide">
				<div class="company__track" data-glide-el="track">
					<ul class="company__slides">
			          <li class="company__slide" v-for="image in slider.images" :key="image.id">
			              <img :src="image.url" :alt="image.titulo"
			          </li>
			        </ul>
				</div>

				<div class="company__arrows" data-glide-el="controls">
		            <button class="company__arrow company__arrow--left" data-glide-dir="<">
		                <img src="../assets/images/Icones/prev.png">
		            </button>
		            <button class="company__arrow company__arrow--right" data-glide-dir=">">
		                <img src="../assets/images/Icones/next.png">
		            </button>
		        </div>
			</div>
		</section>
	</main>
</template>

<style scoped>
	.paragraph {
		@apply text-center w-[60%] mx-auto
	}
</style>

