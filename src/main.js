import './assets/main.css'
import '../node_modules/@glidejs/glide/dist/css/glide.core.min.css'


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app');

document.addEventListener('')

const accordionBtns = document.querySelectorAll('.accordion');

accordionBtns.forEach(accordion => {
  accordion.addEventListener('click', function() {
    this.classList.toggle('is-open');

    const content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = `${content.scrollHeight}px`;
    }
  });
});
