<script>
	export default {
		name: "Sustabilidade"
	}
</script>

<template>
	<main class="section mx-auto">
		<section class="section__content container">
			<img class="section__image" src="../assets/images/sustentabilidade-mtrek.png">
			<div class="section__text">
				<h2 class="section__title title-1">
					A Mtrek acredita em um mundo sustentável, onde toda energia é renovável e inteligente
				</h2>

				<p class="paragraph text-1">
					Para fazer nossa parte, temos a missão de tornar energia renovável acessível. A Mtrek endereça esse desafio viabilizando a oferta de energia para residências, simplificando a experiência do cliente e entregando uma solução confiável, inovadora, econômica e <span class="font-black">RENDA EXTRA</span>.
				</p>

				<div class="dados">
					<div class="usinas">
						<h3 class="title-1-big">+100</h3>
						<small>
							usinas de geração de energia renovável
						</small>
					</div>
					<div class="cidades">
						<h3 class="title-1-big">+2mil</h3>
						<small>
							cidades atendidas nos Estados de São Paulo, Rio de Janeiro e Minas Gerais e outros.
						</small>
					</div>
				</div>
			</div>
		</section>

		<section class="section__banner">
			<img src="../assets/images/BANNER-DE-EBULIÇÃO-GLOBAL.webp">
		</section>
	</main>
</template>

<style scoped>
	.section {
		@apply w-full mx-auto;
	}
	.section__content{
		@apply flex items-center gap-[80px]
	}

	.section__title {
		@apply max-w-full text-start
	}

	.section__image {
		@apply w-[40%]
	}

	.paragraph {
		@apply w-[83%]
	}

	.dados {
		@apply flex items-baseline gap-[38px] mt-[32px]
	}

	.dados .usinas,
	.dados .cidades {
		@apply w-[210px]
	}

	.section__banner{
		@apply w-fit mx-auto mt-[18px]
	}

	.section__banner img {
		@apply mx-auto;
	}
</style>