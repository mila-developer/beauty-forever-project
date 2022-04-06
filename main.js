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
function changeHeaderWhenScroll() {
  if(this.window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

/* Testimonials */

const swiper = new Swiper ('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: false,
  keyboard: true
})

/* ScrollReveal */

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  #footer .brand, #footer .social
`, 
  {interval: 100}
)

/* Button back-to-top */
function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top')

  if(this.window.scrollY >= 500) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

window.addEventListener('scroll', function() {
  changeHeaderWhenScroll()
  backToTop()
 })