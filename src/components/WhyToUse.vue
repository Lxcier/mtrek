<script>
	export default {,
		name: "WhyToUse"
	}
</script>

<template>
	<main class="section">
		<section class="section__content">
			<article class="why-to-use">
				<img class="why-to-use__image" src="../assets/images/Planeta.png">
				<div class="text">
					<h2 class="title-1 mb-[56px]">
						Transforme sua Energia em Sustentabilidade com a Mtrek
					</h2>

					<p class="paragraph text-1">
						Você já parou para pensar no impacto da poluição ambiental em nossas vidas e no futuro do nosso planeta? A emissão excessiva de gases de efeito estufa, resultado das práticas tradicionais de geração de energia, está contribuindo diretamente para o aquecimento global e para as mudanças climáticas que testemunhamos todos os dias.
					</p>
				</div>
			</article>

			<article class="why-to-use">
				<div class="text">
					<p class="paragraph text-1">
						A boa notícia é que você pode fazer a diferença! Com o Mercado Livre de Energia da Mtrek, você tem a oportunidade de adotar uma abordagem mais sustentável em relação ao seu consumo de energia. Ao se cadastrar em nossa plataforma, você está dando um passo significativo em direção a um futuro mais limpo e saudável para todos.
					</p>
				</div>

				<img class="why-to-use__image" src="../assets/images/Sustentabilidade.png">
			</article>

			<a class="btn-1" href="#">Fazer Cadastro</a>
		</section>
	</main>
</template>

<style scoped>
	.why-to-use {
		@apply flex gap-[80px] items-center;
	}

	.why-to-use__image {
		@apply w-[40%]
	}

	.paragraph {
		@apply w-[80%] text-justify;
	}

	.paragraph:nth-child(1) {
		margin-left: 80px;
	}

	.btn-1 {
		@apply block w-max mt-[48px] mx-auto;
	}

</style>