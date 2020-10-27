const buttonNext = document.querySelector('.button-next');
const buttonPrev = document.querySelector('.button-prev');
const slideWrapper1 = document.querySelector('.slide-wrapper-1');
const slideWrapper2 = document.querySelector('.slide-wrapper-2');

buttonNext.addEventListener("click", function (evt) {
   evt.preventDefault();
   slideWrapper2.classList.add("slide-current");
   slideWrapper1.classList.add("slide-show");
   slideWrapper1.classList.remove("slide-current");
});

buttonPrev.addEventListener("click", function (evt) {
   evt.preventDefault();
   slideWrapper1.classList.add("slide-current");
   slideWrapper2.classList.add("slide-show");
   slideWrapper2.classList.remove("slide-current");
});