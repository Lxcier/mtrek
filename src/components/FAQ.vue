<script>
	export default {
		name: "FAQ",
	}
</script>

<template>
	<main class="section">
		<section class="section__content">
			<h2 class="section__title title-1">Perguntas Frequentes</h2>
			<p class="text-2-normal">Está com alguma dúvida? Confira nosso FAQ ou entre em contato conosco.</p>

			<ul class="faq">
				<li class="accordion">
					<button class="btn-accordion--active">
						<h5 class="text-2-small">
							A Mtrek é para mim?
						</h5>

						<img src="../assets/images/Icones/up.png">
					</button>

					<p class="accordion__text">
						Sim! A Mtrek é para todos que desejam economizar dinheiro em suas contas de energia, receber cashback em suas compras online e em lojas locais, além de contribuir para um planeta mais limpo. Se você procura uma forma fácil de economizar e ganhar dinheiro, a Mtrek é para você.
					</p>
				</li>
				<li class="accordion">
					<button class="btn-accordion">
						<h5 class="text-2-small">
							A Mtrek é para mim?
						</h5>

						<img src="../assets/images/Icones/up.png">
					</button>

					<p class="accordion__text">
						Sim! A Mtrek é para todos que desejam economizar dinheiro em suas contas de energia, receber cashback em suas compras online e em lojas locais, além de contribuir para um planeta mais limpo. Se você procura uma forma fácil de economizar e ganhar dinheiro, a Mtrek é para você.
					</p>
				</li>
			</ul>
		</section>
	</main>
</template>

<style scoped>
	.section {
		@apply mt-[80px]
	}

	.text-2-normal {
		@apply text-center;
	}

	.faq {
		width: 860px;
		@apply mx-auto mt-[32px]
	}

	.btn-accordion--active {
		@apply flex items-center justify-between px-[26px] py-[5px] rounded-full w-full;
		background: var(--purple-primary);
		border: 3px solid var(--purple-primary);

	}

	.btn-accordion--active h5{
		@apply text-white
	}

	.btn-accordion {
		@apply flex items-center justify-between px-[26px] py-[5px] rounded-full w-full;
		border: 3px solid var(--purple-primary);
	}

	.accordion__text {
		@apply px-[38px] pt-[22px] mb-[22px]
	}
</style>