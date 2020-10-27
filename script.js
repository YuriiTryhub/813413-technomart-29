const buttonNext = document.querySelector('.button-next');
const buttonPrev = document.querySelector('.button-prev');
const slideWrapper1 = document.querySelector('.slide-wrapper-1');
const slideWrapper2 = document.querySelector('.slide-wrapper-2');

const deliveryButton = document.querySelector('.delivery-button');
const warrantyButton = document.querySelector('.warranty-button');
const creditButton = document.querySelector('.credit-button');
const advantagesDelivery = document.querySelector('.advantages-delivery');
const advantagesWarranty = document.querySelector('.advantages-warranty');
const advantagesCredit = document.querySelector('.advantages-credit');

const applicationButton = document.querySelector('.application-button');
const writeUsModal = document.querySelector('.writeus-modal');
const modalCloseButton = document.querySelector('.modal-close');
const contactsButton = document.querySelector('.contacts-button');

/* Слайдер основных разделов каталога */

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

/* Переключение кнопок секции "Сервисы" */

deliveryButton.addEventListener("click", function (evt) {
   evt.preventDefault();
   advantagesDelivery.classList.add("services-current");
   advantagesWarranty.classList.remove("services-current");
   advantagesCredit.classList.remove("services-current");
   deliveryButton.classList.add("button-active");
   warrantyButton.classList.add("button-inactive");
   warrantyButton.classList.remove("button-active");
   creditButton.classList.remove("button-active");
   creditButton.classList.add("button-inactive");
});

warrantyButton.addEventListener("click", function (evt) {
   evt.preventDefault();
   advantagesWarranty.classList.add("services-current");
   advantagesDelivery.classList.remove("services-current");
   advantagesCredit.classList.remove("services-current");
   warrantyButton.classList.add("button-active");
   deliveryButton.classList.remove("button-active");
   deliveryButton.classList.add("button-inactive");
   creditButton.classList.remove("button-active");
   creditButton.classList.add("button-inactive");
});

creditButton.addEventListener("click", function (evt) {
   evt.preventDefault();
   advantagesCredit.classList.add("services-current");
   advantagesDelivery.classList.remove("services-current");
   advantagesWarranty.classList.remove("services-current");
   creditButton.classList.add("button-active");
   deliveryButton.classList.remove("button-active");
   deliveryButton.classList.add("button-inactive");
   warrantyButton.classList.add("button-inactive");
   warrantyButton.classList.remove("button-active");
});

/* Форма обратной связи */

applicationButton.addEventListener("click", function (evt) {
   evt.preventDefault();
   writeUsModal.classList.remove("modal-show");
});

modalCloseButton.addEventListener("click", function (evt) {
   evt.preventDefault();
   writeUsModal.classList.add("modal-show");
});

contactsButton.addEventListener("click", function (evt) {
   evt.preventDefault();
   writeUsModal.classList.remove("modal-show");
});