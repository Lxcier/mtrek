<script>
	export default {
		name: "Economia",
	}
</script>

<template>
	<main class="section">
		<section class="section__content">
			<article>
				<h2 class="section__title title-1"
				data-aos="fade-up"
				data-aos-duration="400">
					Com a Mtrek Você tem Economia Garantia na Sua Conta de Luz!
				</h2>

				<p class="paragraph text-1"
				data-aos="fade-up" 
				data-aos-delay="50"
				data-aos-duration="400">
					A fatura, somada à sua conta de luz com os créditos injetados será sempre menor que sua conta de luz atual.
				</p>

				<a class="btn-1 block w-fit"
				data-aos="fade-up" 
				data-aos-delay="150"
				data-aos-duration="400">Quero Economizar</a>
			</article>

			<article class="graphic"
			data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
				<img src="../assets/images/grafico.png">
			</article>
		</section>
	</main>
</template>

<style scoped>
	.section__content {
		@apply flex items-center
	}

	.section__title{
		@apply text-start mx-0 max-w-full;
	}

	.paragraph  {
		@apply text-justify mb-[64px] w-[80%];
	}

	.graphic {
		@apply w-[80%]
	}
</style>