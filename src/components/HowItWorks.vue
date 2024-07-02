<script>
	export default {
		name: "HowItWorks",
	}
</script>

<template>
	<main class="section">
		<section class="section__content container">
			<h2 class="section__title title-1">
				Saiba como a Mtrek faz para gerar economia em sua conta de luz
			</h2>

			<ul class="cards__list">
				<li class="card">
					<img class="card__image" src="../assets/images/Distribuidoras.png">

					<h3 class="card__title title-3">
						Parceria com Geradores de Energia Renovável
					</h3>

					<p class="paragraph text-2-normal">
						A Mtrek gera energia renovável e fornece para a rede elétrica tradicional.
					</p>
				</li>

				<li class="card">
					<img class="card__image" src="../assets/images/creditos-em-energia-limpa.png">

					<h3 class="card__title title-3">
						Parceria com Geradores de Energia Renovável
					</h3>

					<p class="paragraph text-2-normal">
						A Mtrek gera energia renovável e fornece para a rede elétrica tradicional.
					</p>
				</li>

				<li class="card">
					<img class="card__image" src="../assets/images/economia-na-conta.png">

					<h3 class="card__title title-3">
						Economia na conta
					</h3>

					<p class="paragraph text-2-normal">
						Alocamos esses créditos em sua conta de luz, reduzindo o valor cobrado pela distribuidora.
					</p>
				</li>

				<li class="card">
					<img class="card__image" src="../assets/images/cobrança-simples-e-digital.png">

					<h3 class="card__title title-3">
						Cobrança Simples e Digital
					</h3>

					<p class="paragraph text-2-normal">
						Cobramos por esses créditos de acordo com o quanto eles reduziram de sua conta, garantindo sua economia todos os meses.
					</p>
				</li>
			</ul>
		</section>
	</main>
</template>

<style scoped>
	.section {
		@apply py-[32px];

		background: rgb(61,17,58);
		background: -moz-linear-gradient(90deg, rgba(61,17,58,1) 0%, rgba(163,45,155,1) 100%);
		background: -webkit-linear-gradient(90deg, rgba(61,17,58,1) 0%, rgba(163,45,155,1) 100%);
		background: linear-gradient(90deg, rgba(61,17,58,1) 0%, rgba(163,45,155,1) 100%);
		filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#3d113a",endColorstr="#a32d9b",GradientType=1);
	}

	.section__title {
		@apply text-white;
	}

	.cards__list {
		@apply gap-[40px]
	}

	.card{
		@apply bg-white w-[300px] h-[410px] py-0;
		align-content: center;
	}

	.card__title {
		@apply text-center mb-[14px]
	}

	.card__image {
		@apply w-[160px] h-[160px] mx-auto mb-[16px];
	}

	.paragraph {
		@apply text-center;
	}

	@media 	screen	and (max-width: 1023px) {
		.cards__list {
			@apply flex-wrap justify-center;
		}

		.card {
			@apply w-[40%];
		}

		.section__title {
			@apply max-w-[80%];
		}
	}

	@media screen and (max-width: 767px) {
		.section__title {
			@apply max-w-full text-left;
		}

		.cards__list {
			@apply flex-col;
		}

		.card {
			@apply w-full
		}
	}
</style>