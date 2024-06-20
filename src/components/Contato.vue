<script>
	export default {
		name: "Contato"
	}
</script>

<template>
	<main class="section">
		<section class="section__content">
			<h2 class="section__title title-1"
				data-aos="fade-up"
				data-aos-duration="400"
				data-aos-delay="50">
				Pronto para começar sua jornada rumo a uma vida mais verde e econômica? Inscreva-se hoje mesmo na Mtrek e comece a desfrutar dos benefícios da energia limpa!
			</h2>

			<h3 class="title-1 text-center"
				data-aos="fade-up"
				data-aos-duration="400"
				data-aos-delay="100">
				Contate o Atendimento Mtrek
			</h3>
			<div class="buttons"
				data-aos="fade-up"
				data-aos-duration="500"
				data-aos-delay="200">
				<a class="btn-1" href="#">
					Atendimento via WhatsApp
				</a>

				<a class="btn-1" href="#">
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
</style>