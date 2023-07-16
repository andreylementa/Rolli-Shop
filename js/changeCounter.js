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
  const currentCounter = e.target
    .closest(".counter-wrapper")
    .querySelector("[data-counter]");
  if (e.target.dataset.action === "minus") {
    currentCounter.innerText > 1 && currentCounter.innerText--;
  } else if (e.target.dataset.action === "plus") {
    e.target.closest(".counter-wrapper").querySelector("[data-counter]")
      .innerText++;
  }
});
