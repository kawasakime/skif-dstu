'use strict'

const slides = [...document.querySelectorAll('.slider__item')],
      switches = [...document.querySelectorAll('.switch')]

let currentSlide = 0

const sliderInterval = setInterval(() => {
  toggleSwitch()
  if (currentSlide < 4)
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

function showSlide() {
  slides.map(e => {e.classList.remove('active-slide')})
  slides[currentSlide].classList.toggle('active-slide')
}

function toggleSwitch(e) {
  switches[currentSlide].classList.toggle('active-switch')
}
              
