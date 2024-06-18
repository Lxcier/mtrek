<script>
    export default {
        name: "Header",
    }
</script>

<template>
    <div class="container">
        <header class="header">
            <a href="/" class="logo">
                <img    
                    src="../assets/images/Logos/LOGO-MERCADO-DE-ENERGIA- H. PRETO.png"
                    id="logo">
            </a>

            <h3 id="slogan" class="text-1">Consumo Inteligente, Futuro Sustentável!</h3>

            <nav class="navbar">
                <a  href="#"
                    id="sign-in"
                    class="btn-signin">
                    cadastrar                
                </a>

                <a  href="#"
                    id="log-in"
                    class="btn-login text-2">
                    login                
                </a>
            </nav>
        </header>
    </div>
</template>

<style scoped>
    .header {
        @apply h-fit flex justify-between items-center;
    }

    .header > .logo {
        @apply w-[195px] h-auto
    }

    .navbar {
        @apply flex items-center gap-[10px];
    }

    .navbar > .btn-signin {
        @apply text-[16px] uppercase font-black;
        color: var(--gray-green);
    }
</style>