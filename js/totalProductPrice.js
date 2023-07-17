function totalProductPrice() {
  const productCartList = document.querySelectorAll(".cart-item");
  const totalPriceElement = document.querySelector(".total-price");
  const deliveryCost = document.querySelector(".delivery-cost");
  let totalPrice = 0;
  productCartList.forEach((item) => {
    const counter = item.querySelector("[data-counter]").innerText;
    const price = item.querySelector(".price__currency").innerText;
    totalPrice += parseInt(counter) * parseInt(price);
  });

  if (totalPrice < 600) {
    deliveryCost.classList.remove("free");
    deliveryCost.innerText = "500";
    totalPriceElement.innerText = totalPrice + parseInt(deliveryCost.innerText);
  } else {
    deliveryCost.classList.add("free");
    deliveryCost.innerText = "Бесплатно";
    totalPriceElement.innerText = totalPrice;
  }
}
