<script>
    export default {
        name: "Header",
    }
</script>

<template>
    <div class="container">
        <header class="header">
            <img    src="../assets/images/Logos/LOGO-MERCADO-DE-ENERGIA- H. PRETO.png"
                    id="logo"
                    class="logo">

            <h3 id="slogan" class="text-1">Cashback em Tudo. Três Vezes Melhor!</h3>

            <nav class="navbar">
                <a  href="#"
                    id="sign-in"
                    class="text-2">
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
        @apply flex items-center gap-8;
    }

    .navbar > #sign-in {
        @apply text-[20px] uppercase font-black;
        color: var(--gray-green);
    }

</style>