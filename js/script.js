'use strict'

const slides = [...document.querySelectorAll('.slider__item')],
      switches = [...document.querySelectorAll('.switch')],
      burgerBtn = document.querySelector('.burger-btn'),
      burgerMenu = document.querySelector('.burger-menu'),
      aboutUsBtns = [...document.querySelectorAll('.a-us')],
      aboutUsLists = [...document.querySelectorAll('.burger-about-us')];

let currentSlide = 0

showSlide()

const sliderInterval = setInterval(() => {
  toggleSwitch()
  if (currentSlide < 2)
    ++currentSlide
  else
    currentSlide = 0
  toggleSwitch()
  showSlide()
}, 5000)

switches.map((e, i) => {
  e.addEventListener('click', () => {
    toggleSwitch()
    currentSlide = i
    toggleSwitch()
    showSlide()
  })
})

burgerBtn.addEventListener('click', () => {
  burgerMenu.classList.toggle('visible')
  burgerBtn.classList.toggle('burger-close')
});

aboutUsBtns.map((e, i) => {
  e.addEventListener('click', () => {
    aboutUsLists[i].classList.toggle('about-us-visible')
  })
})

function showSlide() {
  slides.map(e => {e.classList.remove('active-slide')})
  slides[currentSlide].classList.toggle('active-slide')
}

function toggleSwitch(e) {
  switches[currentSlide].classList.toggle('active-switch')
}
              
