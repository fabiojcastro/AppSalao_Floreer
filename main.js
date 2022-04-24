const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

const link = document.querySelectorAll('nav ul li a')

for (const links of link) {
  links.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: {
    invert: false
  },
  keyboard: {
    enable: true
  },
  autoplay: {
    delay: 5000
  },
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

const scrollUse = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollUse.reveal(
  `#home .image, #home .text, #about .image, #about .text, #services header, #services .card.grid, #testimonials header, #testimonials .testimonials, #contact .text, #contact .links, footer .brand, footer .social`,
  { interval: 100 }
)

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function shadowToHeader() {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

const seta = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >= 560) {
    seta.classList.add('show')
  } else {
    seta.classList.remove('show')
  }
}

window.addEventListener('scroll', function () {
  backToTop()
  shadowToHeader()
})
