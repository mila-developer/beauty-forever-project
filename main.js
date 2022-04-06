const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');
const links = document.querySelectorAll('nav ul li a');
const header = document.querySelector("#header");
const navHeight = header.offsetHeight;

/* Open and Close menu hamburguer */
for(const element of toggle) {
  element.addEventListener('click', function() {
    nav.classList.toggle('show')
  })
}

/* Close menu quando carregar em algum item do menu */
for(const link of links) {
  link.addEventListener('click', function() {
    nav.classList.remove('show')
  })
}

/* Mudar header dá pagina com scroll */
window.addEventListener('scroll', function() {
  if(this.window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})

/* Testimonials */

const swiper = new Swiper ('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})