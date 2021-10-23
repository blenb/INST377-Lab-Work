/* eslint-disable no-plusplus */
/* eslint-disable prefer-const */
/* eslint-disable no-restricted-syntax */
/* eslint-disable func-names */
/* eslint-disable no-use-before-define */
/* eslint-disable prefer-arrow-callback */
let slidePosition = 0;
const slides = document.querySelectorAll('.carousel_item');
const totalSlides = slides.length;

document
  .querySelector('#carousel_button--next')
  .addEventListener('click', function() {
    moveToNextSlide();
  });
document
  .querySelector('#carousel_button--prev')
  // eslint-disable-next-line func-names
  .addEventListener('click', function() {
    moveToPrevSlide();
  });
function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove('carousel_item--visible');
    slide.classList.add('carousel_item--hidden');
  }
  slides[slidePosition].classList.add('carousel_item--visible');
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }

  updateSlidePosition();
}
function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }
  updateSlidePosition();
}
