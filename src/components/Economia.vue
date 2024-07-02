<script>
	export default {
		name: "Economia",
	}
</script>

<template>
	<main class="section">
		<section class="section__content">
			<article>
				<h2 class="section__title title-1">
					Com a Mtrek Você tem Economia Garantia na Sua Conta de Luz!
				</h2>

				<p class="paragraph text-1">
					A fatura, somada à sua conta de luz com os créditos injetados será sempre menor que sua conta de luz atual.
				</p>

				<a class="btn-1 block w-fit animated">Quero Economizar</a>
			</article>

			<article class="graphic">
				<img class="animated-left" src="../assets/images/grafico.png">

				<a class="btn-1 mobile-btn block w-fit animated">Quero Economizar</a>
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

	.mobile-btn {
		@apply hidden;
	}

	@media screen and (max-width: 1023px){
		.section__content {
			@apply flex-col
		}

		.section__title {
			@apply text-left
		}

		.paragraph {
			@apply w-full mx-auto
			}

		.btn-1 {
			@apply hidden
		}

		.btn-1.mobile-btn {
			@apply block mx-auto mt-8 text-[18px];
		}
	}

	@media screen and (max-width: 767px) {
		.section__title {
			@apply max-w-full text-left;
		}

		.graphic {
			@apply w-full;
		}
	}
</style>