<script>
	export default {
		name: "Motivos",
	}
</script>

<template>
	<main class="section">
		<section class="section__content">
			<h2 class="section__title title-1">
				Motivos para fazer parte da Mtrek!
			</h2>
			<ul class="reasons animated">
				<div class="side-a">
					<li class="reason">
						<img src="../assets/images/Icones/check.png" alt="icone de check" class="check">
							<p class="text-1">Energia limpa e sustentável</p>
						</img>
					</li>
					<li class="reason">
						<img src="../assets/images/Icones/check.png" alt="icone de check" class="check">
							<p class="text-1">Redução no valor da sua conta de luz</p>
						</img>
					</li>
					<li class="reason">
						<img src="../assets/images/Icones/check.png" alt="icone de check" class="check">
							<p class="text-1">Sem investimento inicial</p>
						</img>
					</li>
				</div>

				<div class="side-b">
					<li class="reason">
						<img src="../assets/images/Icones/check.png" alt="icone de check" class="check">
							<p class="text-1">Sem obras no local de consumo</p>
						</img>
					</li>

					<li class="reason">
						<img src="../assets/images/Icones/check.png" alt="icone de check" class="check">
							<p class="text-1">Contratação simples e 100% digital</p>
						</img>
					</li>

					<li class="reason">
						<img src="../assets/images/Icones/check.png" alt="icone de check" class="check">
							<p class="text-1">Sem fidelidade de contrato</p>
						</img>
					</li>
				</div>
			</ul>
		</section>
	</main>
</template>

<style scoped>
	.reasons {
		@apply flex gap-[34px] justify-center;
	}

	.reason {
		@apply flex gap-1
	}

	.check {
		@apply w-[32px] h-[32px]
	}

	@media screen and (max-width: 767px) {
		.section__title {
			@apply max-w-full text-left;
		}

		.reasons {
			@apply flex-col gap-0;
		}
	}
</style>