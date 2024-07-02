import ScrollReveal from 'scrollreveal';

document.addEventListener('DOMContentLoaded', function () {
  window.sr = ScrollReveal({
    duration: 600, // Duração da animação em milissegundos
    delay: 200, // Atraso inicial em milissegundos
    distance: '40px',
  });
  
  sr.reveal('.animated');
  
  sr.reveal('.section__title', {
    duration: 600,
    scale: .8,
    origin: 'bottom',
  });
  
  sr.reveal('.paragraph', {
    delay: 200,
  });
  
  sr.reveal ('.animated-right', {
    origin: 'right'
  });
  
  sr.reveal('.animated-left', {
    origin: 'left'
  });
  
  
  // cards
  sr.reveal('.card', {
    interval: 200,
    origin: 'left',
  });
  
  sr.reveal('.arrow', {
    interval: 200,
    origin: 'left',
  });
  
  sr.reveal('.calculadora', {
  })

  sr.reveal('.swiper-container', {
    delay: 0
  })

}) 