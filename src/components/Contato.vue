<script>
	export default {
		name: "Contato"
	}
</script>

<template>
	<main class="section">
		<section class="section__content">
			<h2 class="section__title title-1">
				Pronto para começar sua jornada rumo a uma vida mais verde e econômica? Inscreva-se hoje mesmo na Mtrek e comece a desfrutar dos benefícios da energia limpa!
			</h2>

			<h3 class="title-1 text-center animated">
				Contate o Atendimento Mtrek
			</h3>
			<div class="buttons">
				<a class="btn-1 animated" href="#">
					Atendimento via WhatsApp
				</a>

				<a class="btn-1 animated" href="#">
					Atendimento via E-mail
				</a>

			</div>
		</section>
	</main>
</template>

<style scoped>
	.section__title {
		@apply max-w-[80%] mb-[48px]
	}

	h3.title-1{
		@apply text-[28px]
	}

	.buttons {
		@apply flex gap-4 w-fit mx-auto mt-6
	}

	.buttons .btn-1 {
		@apply text-center
	}

	@media screen and (max-width: 767px) {
		.section__title {
			@apply max-w-full text-left;
		}

		.title-1 {
			@apply text-left;
		}
	}
</style>