<script scoped>

export default {
	name: 'Beneficios',
}
</script>

<template>
	<main class="section">
		<div class="container">
			<h2 class="title-1 section__title">
				Benefícios exclusivos para os membros da Mtrek
			</h2>
		</div>

		<section class="section__content">
			<ul class="cards__list container">
				<li class="card">
					<h3 class="title-2 card__title">
						Economia Financeira
					</h3>
					<p class=" card__text text-2">
						Reduza suas despesas com energia e ganhe até 30% de desconto em sua conta de luz todos os meses.
					</p>
					<a href="#" class="card__button">
						<h5 class="text-3">Cadastrar agora</h5>
						<img src="../assets/images/Icones/next.png">
					</a>
				</li>

				<img class="arrow" src="../assets/images/Icones/seta.png">

				<li class="card">
					<h3 class="title-2 card__title">
						Sem Obras
					</h3>
					<p class=" card__text text-2">
						Diga adeus às complicações e às obras. Nossa solução é 100% digital e sem custo adicional.
					</p>
					<a href="#" class="card__button">
						<h5 class="text-3">Cadastrar agora</h5>
						<img src="../assets/images/Icones/next.png">
					</a>
				</li>

				<img class="arrow" src="../assets/images/Icones/seta.png">

				<li class="card">
					<h3 class="title-2 card__title">
						Ganhe Cashback
					</h3>
					<p class=" card__text text-2">
						Além de economizar, você também pode ganhar cashback em suas próprias contas de energia e ao indicar novos clientes.
					</p>
					<a href="#" class="card__button">
						<h5 class="text-3">Cadastrar agora</h5>
						<img src="../assets/images/Icones/next.png">
					</a>
				</li>
			</ul>
		</section>
	</main>
</template>

<style scoped>
.section__content {
	@apply py-[32px];

	background: rgb(61,17,58);
	background: -moz-linear-gradient(90deg, rgba(61,17,58,1) 0%, rgba(163,45,155,1) 100%);
	background: -webkit-linear-gradient(90deg, rgba(61,17,58,1) 0%, rgba(163,45,155,1) 100%);
	background: linear-gradient(90deg, rgba(61,17,58,1) 0%, rgba(163,45,155,1) 100%);
	filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#3d113a",endColorstr="#a32d9b",GradientType=1);
}

.arrow {
	@apply w-[40px] h-[40px]
}

.cards__list {
	@apply gap-[26px];
}

.card {
	@apply bg-white;
}

.card__title {
	@apply mb-[18px] w-1/2;
}

.card__button {
	@apply flex items-center gap-1 mt-[18px] p-1 rounded-lg w-fit transition duration-300 ease-in-out;
	border: 2px solid transparent;
}

.card__button:hover {
		border: 2px solid var(--purple-primary);
		transform: scale(1.01);
	}

@media screen and (max-width: 1023px){
	.section__title {
		@apply max-w-full w-full text-left;
	}

	.cards__list {
		@apply flex flex-col;
	}

	.card {
		@apply max-w-[40%]
	}

	img.arrow {
		rotate: 90deg;
	}
}

@media screen and (max-width: 767px) {
	.card {
		@apply max-w-full w-full;
	}
}
</style>