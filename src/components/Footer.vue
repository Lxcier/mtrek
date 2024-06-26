<template>
    <footer class="footer">
        <div class="container">
            <img class="footer__logo" src="../assets/images/Logos/logo-cashback.png">
   
        <div class="footer__middle text-center">
            <small class="text-4-small">Copyright 2024 &copy; Mtrek - Todos os Direitos Reservados</small>
            <p class="text-4">
                Mtrek especializada em pagar Cashback 3x maior em todos os produtos e serviços que você e sua família consomem.
            </p>
        </div>

        <div class="footer__right text-center">
            <ul class="footer__social">
                <li>
                    <a class="social-item" href="">
                        <img class="social-icon" 
                        src="../assets/images/Icones/youtube.png" 
                        alt="Logotipo do Youtube">
                    </a>
                </li>
                <li>
                    <a class="social-item" href="">
                        <img class="social-icon" 
                        src="../assets/images/Icones/instagram.png" 
                        alt="Logotipo do Instagram">
                    </a>
                </li>
                <li>
                    <a class="social-item" href="">
                        <img class="social-icon" 
                        src="../assets/images/Icones/facebook.png" 
                        alt="Logotipo do Facebook">
                    </a>
                </li>
            </ul>

            <small class=" text-4-small">
                Estabelecida como pessoa Jurídica através do marco regulatório das Startups.
            </small>
        </div>
        </div>
    </footer>
</template>

<style scoped>
    .footer {
        @apply py-[12px] mx-auto w-full;

        background: rgb(61,17,58);
        background: -moz-linear-gradient(90deg, rgba(61,17,58,1) 0%, rgba(163,45,155,1) 100%);
        background: -webkit-linear-gradient(90deg, rgba(61,17,58,1) 0%, rgba(163,45,155,1) 100%);
        background: linear-gradient(90deg, rgba(61,17,58,1) 0%, rgba(163,45,155,1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#3d113a",endColorstr="#a32d9b",GradientType=1);
    }

    .container {
        @apply flex justify-between items-center mx-auto w-fit pl-[80px] pr-0;
    }

    .footer__logo {
        @apply w-[220px];
    }

    .footer__middle {
        @apply flex items-center flex-col gap-[6px];
    }

    .footer__middle .text-4 {
        @apply w-[90%];
    }

    .footer__right {
        @apply flex flex-col items-center;
    }

    .footer__social {
        @apply flex items-center gap-1;
    }

    .social-item img {
        @apply w-[57px] h-[57px]
    }

    .footer__right .text-4-small{
        @apply w-[80%]
    }

    @media screen and (max-width: 1023px) {
        .container {
            @apply p-6;
        }
        .footer__logo {
            @apply w-[168px];
        }
    }
</style>