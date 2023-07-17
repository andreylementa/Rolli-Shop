function totalProductPrice() {
  const productCartList = document.querySelectorAll(".cart-item");
  const totalPriceElement = document.querySelector(".total-price");
  let totalPrice = 0;
  productCartList.forEach((item) => {
    const counter = item.querySelector("[data-counter]").innerText;
    const price = item.querySelector(".price__currency").innerText;
    totalPrice += parseInt(counter) * parseInt(price);
  });
  totalPriceElement.innerText = totalPrice;
}
