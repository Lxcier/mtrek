<script>
	import Glide from '@glidejs/glide'

	import Avatar1 from '../assets/images/Depoimentos/avatar-1.jfif'

	export default {
		name: "Depoimentos",
		data() {
			return {
				testimonials: {

					testimonial: [
						{	
							target: "=0",
							texto: "“Depois que descobri as vantagens, sempre estou logado para efetuar compras on-line. Já consegui um dinheiro legal de retorno dos produtos comprados. RECOMENDO!”",
							avatar: Avatar1,
							nome: "Lucas Lucier",
							profissao: "Cliente Mtrek"
						}
					]

				}
			}
		},
		mounted() {
			new Glide('.testimonials__glide', {
			 	type: 'carousel',
	            startAt: 0,
	            perView: 1,
	            autoplay: 3000,
	            animationDuration: 300,
	            animationTimingFunc: 'ease-in-out',
	            }).mount();
		}
	}
</script>

<template>
	<main class="section">
		<section class="section__content">
			<article class="section__text">
					<small class="text-1 animated-left">
						<img src="../assets/images/Icones/pessoa.png" alt="#" class="icon-1">
						Depoimentos
					</small>
					<h2 class="section__title title-1">
						Quem Já se Cadastrou na Mtrek, aprova o resultado!
					</h2>
					<p class=" paragraph text-1">
						Nós da Mtrek prezamos por você, cliente! Confira alguns depoimentos de pessoas que compraram conosco e receberam seus Cashbacks.
					</p>
				</img>
			</article>

			<article class="testimonials__glide animated-left">
				<div class="testimonials__glide__track" data-glide-el="track">
					<ul class="testimonials__glide__slides">
						<li class="testimonials__glide__slide" v-for="testimonial in testimonials.testimonial" >
							<p class="text-4 font-black">
								{{testimonial.texto}}
							</p>
							<div class="profile">
								<img class="avatar" :src="testimonial.avatar">
								<div>
									<h5 class="name text-4 font-black">
										{{testimonial.nome}}
									</h5>
									<small class="work text-4-small">
										{{testimonial.profissao}}
									</small>
								</div>
							</div>
						</li>
					</ul>

					<div class="testimonials__glide__arrows"data-glide-el="controls">

			            <button class="testimonials__glide__arrow testimonials__glide__arrow--left" data-glide-dir="<">

			                <img src="../assets/images/Icones/prev.png">

			            </button>

			            <button class="testimonials__glide__arrow testimonials__glide__arrow--right" data-glide-dir=">">

			                <img src="../assets/images/Icones/next.png">

			            </button>
			        </div>


			        <div class="testimonials__glide__bullets" data-glide-el="controls[nav]">

			            <button class="testimonials__glide__bullet" :data-glide-dir="testimonial.target" v-for="testimonial in testimonials.testimonial"></button>

			        </div>
				</div>
			</article>
		</section>
	</main>
</template>

<style scoped>
	.section {
		height: calc(100% + 1rem + 0.7rem);
	}

	.section__content {
		@apply flex items-center justify-center gap-[80px];
	}

	.section__text {
		@apply w-[40%];
	}

	.section__text small {
		@apply flex items-center gap-1;
	}

	.section__text small .icon-1 {
		@apply w-[22px] h-[22px];
	}

	.section__title {
		@apply max-w-full text-start mt-[16px] mx-0;
	}

	.testimonials__glide {
		@apply relative w-[604px];
	}

	.testimonials__glide__track {
		@apply mx-auto overflow-x-hidden;
		width: calc(100% - 104px);
		border-radius: 20px 50px 20px 50px;

	}

	.testimonials__glide__slides {
		@apply flex gap-[20px] overflow-x-hidden justify-center;

	}

	.testimonials__glide__slide {
		@apply px-[60px] py-[30px] w-[500px] shadow-lg;
		background: var(--purple-secundary);
		border-radius: 20px 50px 20px 50px;
	}

	.profile {
		@apply flex items-center gap-4 mt-[18px]
	}

	.avatar {
		@apply w-[66px] h-[66px] rounded-full;
		border: 3px solid var(--purple-primary);
	}

	.testimonials__glide__arrow {
        @apply absolute top-1/2;
        transform: translateY(-50%);
    }

    .testimonials__glide__arrow--left {
        @apply left-0;
    }

    .testimonials__glide__arrow--right {
        @apply right-0;
    }

    .testimonials__glide__bullets {
        @apply absolute mt-4 flex gap-4 items-center;
        left: 50%;

    }

    .testimonials__glide__bullet {
        @apply w-[0.7rem] h-[0.7rem] rounded-full;
        background: var(--purple-secundary);
    }

    .testimonials__glide__bullet--active {
        @apply bg-black
    }


    @media screen and (max-width: 1023px) {
    	.section__content {
				@apply flex-col items-start;
		}

		.section__text {
			@apply w-full mx-auto;
		}

		.section__title {
			@apply max-w-[60%]
		}

		.testimonials__glide {
			@apply w-full
		}


		.testimonials__glide__slides {
			@apply w-full
		}
    }

	@media screen and (max-width: 767px) {
		.section__title {
			@apply max-w-full
		}

		.paragraph,
		.paragraph:nth-child(1) {
			@apply w-[90%]
		}

		.testimonials__glide__track {
			@apply w-[80%] mx-auto;
		}

		.testimonials__glide__slide {
			@apply px-6;
		}
	}

</style>