<template>
  <section class="section">
    <section class="section__content">
      <h2 class="section__title title-1">Perguntas Frequentes</h2>
      <p class="text-2-normal animated">
        Está com alguma dúvida? Confira nosso FAQ ou entre em contato conosco.
      </p>

      <ul class="faq animated">
        <li
          v-for="(item, index) in faqItems"
          :key="index"
          class="accordion"
        >
          <button
            class="btn-accordion"
            :class="{ 'btn-accordion--active': item.isOpen }"
            @click="toggleAccordion(index)"
          >
            <h5 class="text-2-small accordion__question">{{ item.question }}</h5>
            <i
              class="fa-solid fa-chevron-down"
              :class="{ 'rotate-180': item.isOpen }"
            ></i>
          </button>

          <div
            class="accordion__text"
            :class="{ 'accordion__text--open': item.isOpen }"
          >
            <p>{{ item.answer }}</p>
            <p v-if="item.answer1">{{item.answer1}}</p>
         	<p v-if="item.answer2">{{item.answer2}}</p>
          	<p v-if="item.answer3">{{item.answer3}}</p>
           	<p v-if="item.answer4">{{item.answer4}}</p>
           	<p v-if="item.answer5">{{item.answer5}}</p>
          </div>
        </li>
      </ul>
    </section>
  </section>
</template>



<script>

export default {
  name: "FAQ",
  data() {
    return {
      faqItems: [
        {
          question: "A Mtrek é para mim?",
          answer:
            "Sim! A Mtrek é para todos que desejam economizar dinheiro em suas contas de energia, receber cashback em suas compras online e em lojas locais, além de contribuir para um planeta mais limpo. Se você procura uma forma fácil de economizar e ganhar dinheiro, a Mtrek é para você.",
          isOpen: false,
        },
        {
          question: "Quanto custa para fazer parte? E qual é o risco?",
          answer:
            "Participar da Mtrek é completamente gratuito! Não há taxas de adesão, mensalidades ou investimentos iniciais. Você simplesmente faz o cadastro em nossa plataforma e começa a usufruir dos benefícios, como descontos de até 20% na sua conta de energia elétrica no próximo ciclo de faturamento e cashback em compras feitas nas melhores marcas. Quanto ao risco, não há nenhum. A Mtrek opera em conformidade com todas as, garantindo segurança e transparência em todas as transações.",
          isOpen: false,
        },
        {
          question: "Como conseguir afiliados?",
          answer:
            "Conseguir afiliados para a Mtrek é simples e vantajoso. Nossa plataforma oferece um programa de indicação onde você pode convidar amigos, familiares e colegas para se juntarem a nós. Para cada novo membro que se cadastrar utilizando o seu código de indicação, você poderá ganhar recompensas e benefícios exclusivos. Basta compartilhar seu código e começar a construir sua rede de afiliados!",
          isOpen: false,
        },
        {
          question: "Todos podem fazer parte?",
          answer:
            "Não, apenas pessoas que querem economizar, receber cashback em suas compras, fazer uma renda extra e ainda salvar o planeta da ebulição global! Basta se cadastrar gratuitamente e começar a aproveitar todas as vantagens que oferecemos.",
          isOpen: false,
        },
        {
          question: "Porque consumir atráves da Mtrek e não nos sites desses lojistas diretamente?",
          answer: "Ao centralizar suas compras na nossa plataforma, você tem acesso a:",
            answer1: "Descontos Exclusivos: Aproveite ofertas e promoções especiais que são disponibilizadas exclusivamente para nossos membros.",
            answer2: "Cashback e Recompensas: Ganhe parte do valor gasto de volta e acumule benefícios adicionais que você não encontraria comprando diretamente dos lojistas.",
            answer3: "Energia Sustentável: Tenha a certeza de que está consumindo energia proveniente de fontes limpas e renováveis, contribuindo diretamente para a preservação do meio ambiente.",
            answer4: "Facilidade e Comodidade: Gerencie todas as suas necessidades de energia em um só lugar, com a simplicidade e eficiência que nossa plataforma oferece.",
            answer5: "Ao escolher a Mtrek, você não só economiza, mas também faz parte de uma comunidade comprometida com a sustentabilidade e o futuro do nosso planeta.",
          isOpen: false,
        }
        // Adicione mais itens de FAQ aqui
      ],
    };
  },
  methods: {
    toggleAccordion(index) {
      this.faqItems[index].isOpen = !this.faqItems[index].isOpen;
    },
  }
};
</script>

<style scoped>
	.section {
  @apply mt-[80px];
}

.text-2-normal {
  @apply text-center;
}

.faq {
  width: 860px;
  @apply flex flex-col gap-[15px] mx-auto mt-[32px];
}

.btn-accordion {
  @apply flex items-center justify-between px-[26px] py-[5px] rounded-full w-full;
  border: 3px solid var(--purple-primary);
  transition: background-color 0.3s ease, color 0.3s ease; /* Adicione transições */
}

.btn-accordion--active,
.btn-accordion:hover {
  @apply text-white;
  background: var(--purple-primary);
}

.btn-accordion--active h5,
.btn-accordion:hover {
  @apply text-white;
}

.accordion__text {
  @apply px-[38px] overflow-hidden;
  max-height: 0;
  transition: max-height 0.2s ease-in-out; /* Transição rápida ao fechar */
}

.btn-accordion--active + .accordion__text {
  max-height: 1000px; /* Valor alto o suficiente */
  transition: max-height 0.2s ease-in-out; /* Transição suave ao abrir */
}

.accordion__text p {
	@apply py-[15px]
}


/* Animação da seta */
.fa-chevron-down {
	@apply rounded-full text-white;
	padding: 6px;
	background: var(--purple-secundary);
  	transition: transform 0.3s ease;
}

.btn-accordion:hover .fa-chevron-down {
	@apply text-black bg-white;
  	transition: transform 0.3s ease;
}

.fa-chevron-down.rotate-180 {
	@apply text-black bg-white;
  	transform: rotate(180deg);
}

@media screen and (max-width: 1023px) {
  .faq {
    @apply w-full mx-auto;
  }

  .title-1{
    @apply max-w-fit;
  }
}

@media screen and (max-width: 767px) {
  .title-1 {
    @apply mx-0 text-left
  }
  .accordion__question {
    @apply text-left;
  }

  .text-2-normal {
    @apply text-left;
  }
}
</style>