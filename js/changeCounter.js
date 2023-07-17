"use strict";

//const btnMinus = document.querySelector('[data-action="minus"]');
//const btnPlus = document.querySelector('[data-action="plus"]');
//const counter = document.querySelector("[data-counter]");

//btnPlus.addEventListener("click", function (e) {
//  counter.innerText++;
//});

//btnMinus.addEventListener("click", function (e) {
//  if (parseInt(counter.innerText) > 1) {
//    counter.innerText -= 1;
//  }
//});

window.addEventListener("click", function (e) {
  let currentCounter;
  if (
    e.target.dataset.action === "minus" ||
    e.target.dataset.action === "plus"
  ) {
    currentCounter = e.target
      .closest(".counter-wrapper")
      .querySelector("[data-counter]");
  }

  // Если нажата кнопка +

  if (e.target.dataset.action === "plus") {
    currentCounter.innerText++;
    // Обновляем итоговую цену
    totalProductPrice();
  }

  // Если нажата кнопка -

  if (e.target.dataset.action === "minus" && currentCounter.innerText > 1) {
    // Проверяем, чтобы текст в счетчике был больше 1
    currentCounter.innerText--;
    // Обновляем итоговую цену
    totalProductPrice();
    // Удаление в корзине
  } else if (
    (e.target.dataset.action === "minus" &&
      +currentCounter.innerText &&
      e.target.closest(".cart-item")) === 1
  ) {
    e.target.closest(".cart-item").remove();
    // Если корзина пуста
    toggleCartStatus();
  }
});
