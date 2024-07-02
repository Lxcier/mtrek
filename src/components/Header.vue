<template>
    <header class="header"
            :class="{ 'header-hidden': isHeaderHidden, 'header-transparent': !isHeaderTransparent }">
        <div class="container">
            <a href="/" class="logo">
                <img src="../assets/images/Logos/LOGO-MERCADO-DE-ENERGIA- H. PRETO.png" id="logo">
            </a>
    
            <h3 id="slogan" class="text-1 desktop-slogan">Consumo Inteligente, Futuro Sustentável!</h3>
    
            <nav class="navbar">
                <a href="#" class="btn-signin">cadastrar</a>
                <a href="#" class="btn-login text-2">login</a>
            </nav>
        </div>
    </header>
    <div class="container">
        <h3 class="text-1 mobile-slogan">Consumo Inteligente, Futuro Sustentável!</h3>
    </div>
</template>
  
<script>
export default {
    name: "Header",
    data() {
        return {
            isHeaderHidden: false,
            isHeaderTransparent: false,
            lastScrollTop: 0
        };
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
        // Ao carregar a página, verifique a posição inicial do scroll
        this.handleScroll();
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
        handleScroll() {
            let currentScroll = window.scrollY || document.documentElement.scrollTop;

            if (currentScroll > this.lastScrollTop && currentScroll > 80) {
                // Scrolling down
                this.isHeaderHidden = true;
                this.isHeaderTransparent = true;
            } else {
                // Scrolling up or at the top
                this.isHeaderHidden = false;
                this.isHeaderTransparent = currentScroll === 0; // Adiciona a classe quando o scroll está no topo
            }

            this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
        }
    }
};
</script>

<style scoped>
.header {
    @apply h-fit flex justify-between items-center sticky top-0 left-0 z-50;
    transition: transform 0.3s ease, opacity 0.3s ease;
    background-color: #FFF;
}

.header-hidden {
    transform: translateY(-100%);
    opacity: 0;
}

.container {
    @apply h-fit flex justify-between items-center;
}

.logo {
    @apply w-[195px] h-auto;
}

.text-1 {
    @apply text-center;
}

.mobile-slogan {
    @apply hidden;
}

.navbar {
    @apply flex items-center gap-[10px];
}

.btn-signin {
    @apply text-[16px] uppercase font-black;
    color: var(--gray-green);
}

.header-transparent {
    background-color: #FFF;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

@media screen and (max-width: 1023px) {
    .desktop-slogan {
        @apply text-lg mx-auto;
    }

    .btn-signin {
        @apply text-sm px-3;
    }

    .btn-login {
        @apply text-sm px-3;
    }
}

@media screen and (max-width: 767px) {
    .desktop-slogan {
        @apply hidden;
    }

    .mobile-slogan {
        @apply block text-base;
    }
}
</style>
