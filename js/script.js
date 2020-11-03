/* Слайдер основных разделов каталога */
const buttonNext = document.querySelector('.button-next');
const buttonPrev = document.querySelector(".button-prev");
const slideWrapper1 = document.querySelector(".slide-wrapper-1");
const slideWrapper2 = document.querySelector(".slide-wrapper-2");
const firstSlider = document.querySelector(".first-slider");
const secondSlider = document.querySelector(".second-slider");
/* Переключение кнопок секции "Сервисы" */
const deliveryButton = document.querySelector(".delivery-button");
const warrantyButton = document.querySelector(".warranty-button");
const creditButton = document.querySelector(".credit-button");
const advantagesDelivery = document.querySelector(".advantages-delivery");
const advantagesWarranty = document.querySelector(".advantages-warranty");
const advantagesCredit = document.querySelector(".advantages-credit");
/* Форма обратной связи */
const applicationButton = document.querySelector(".application-button");
const writeUsModal = document.querySelector(".writeus-modal");
const modalCloseButton = document.querySelector(".modal-close");
const contactsButton = document.querySelector(".contacts-button");
const loginForm = document.querySelector(".login-form");
const writeusName = document.querySelector(".writeus-name");
const writeusEmail = document.querySelector(".writeus-email");
const writeusText = document.querySelector(".writeus-text");
const buttonSend = document.querySelector(".button-send");
/* Интерактивная карта */
const mapLink = document.querySelector(".map-link");
const modalMap = document.querySelector(".modal-map");
const mapClose = document.querySelector(".map-close");
/* Окно добавление товара в корзину */
const buyButton = document.querySelector(".buy-button");
const closeBasket = document.querySelector(".basket-popup-close");
const modalBasket = document.querySelector(".modal-basket");

/* Слайдер основных разделов каталога */

buttonNext.addEventListener("click", function (evt) {
   evt.preventDefault();
   slideWrapper2.classList.add("slide-current");
   slideWrapper1.classList.add("slide-show");
   slideWrapper1.classList.remove("slide-current");
   firstSlider.classList.remove("current-active");
   firstSlider.classList.add("current-inactive");
   secondSlider.classList.add("current-active");
   secondSlider.classList.remove("current-inactive");
});

buttonPrev.addEventListener("click", function (evt) {
   evt.preventDefault();
   slideWrapper1.classList.add("slide-current");
   slideWrapper2.classList.add("slide-show");
   slideWrapper2.classList.remove("slide-current");
   firstSlider.classList.add("current-active");
   firstSlider.classList.remove("current-inactive");
   secondSlider.classList.remove("current-active");
   secondSlider.classList.add("current-inactive");
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
   writeusText.classList.remove(".modal-error");
});

contactsButton.addEventListener("click", function (evt) {
   evt.preventDefault();
   writeUsModal.classList.remove("modal-show");
});

try {
   storage = localStorage.getItem("login");
} catch (err) {
   isStorageSupport = false;
}

buttonSend.addEventListener("submit", function (evt) {
   if (!writeusName.value || !writeusEmail.value) {
      evt.preventDefault();
      writeUsModal.classList.add(".modal-error");
   } else {
      if (isStorageSupport) {
         localStorage.setItem("login", writeusName.value);
      }
   }
});


/* Интерактивная карта */

mapLink.addEventListener("click", function (evt) {
   evt.preventDefault();
   modalMap.classList.remove("map-show");
})

mapClose.addEventListener("click", function (evt) {
   evt.preventDefault();
   modalMap.classList.add("map-show");
})

/* Окно добавление товара в корзину */

buyButton.addEventListener("click", function (evt) {
   evt.preventDefault();
   modalBasket.classList.remove("modal-basket-hide");
})

closeBasket.addEventListener("click", function (evt) {
   evt.preventDefault();
   modalBasket.classList.add("modal-basket-hide");
})
