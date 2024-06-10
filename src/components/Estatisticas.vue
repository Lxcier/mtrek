<script>
	export default {
		name: "Estatisticas"
	}
</script>

<template>
	<main class="section">
		<h2 class="section__title title-1">
			Faça a Mudança, Faça a Diferença!
		</h2>
		<p class="paragraph text-1">
			Ao optar pela energia limpa da Mtrek, você não está apenas economizando dinheiro; você está ajudando a construir um futuro mais sustentável para todos. Cada escolha que você faz contribui para a redução da poluição e para a preservação do meio ambiente.
		</p>

		<section class="section__content">
			<ul class="cards__list">
				<li class="card w-[410px]">
					<p class="text-4">
						Economize todos os meses na sua conta de luz em até:
					</p>
					<span class="span-1">
						25%
					</span>
					<p class="subtitle-1">
						Desconto mensal na conta de luz
					</p>
				</li>

				<li class="card w-[513px]">
					<p class="text-4">
						Em meses de bandeira tarifária vermelha II seu desconto pode chegar em até:
					</p>
					<span class="span-1">
						30%
					</span>
					<p class="subtitle-1">
						Proteção contra bandeira tarifária
					</p>
				</li>

				<li class="card w-[378px]">
					<p class="text-4">
						Você contribui positivamente com o meio ambiente
					</p>
					<span class="span-1">
						140%
					</span>
					<p class="subtitle-1">
						Poluição que você reduzirá
					</p>
				</li>

				<li class="card w-[378px]">
					<p class="text-4">
						Consumir energia da Mtrek, é o equivalente a plantar
					</p>
					<span class="span-1">
						6%
					</span>
					<p class="subtitle-1">
						De árvores ao ano
					</p>
				</li>
			</ul>

			<a class="btn-1" href="#">
				Quero Economizar e Salvar o Planeta
			</a>
		</section>
	</main>
</template>

<style scoped>
	.paragraph {
		@apply mb-[24px] mx-auto text-center w-[58%]
	}

	.cards__list {
		@apply gap-[20px];
	}

	.card {
		@apply px-[18px];
		background: var(--green-primary);
	} 

	.btn-1 {
		@apply block w-max mt-[48px] mx-auto;
	}
</style>