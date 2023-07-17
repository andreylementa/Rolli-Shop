function toggleCartStatus() {
  const emptyCart = document.querySelector("[data-cart-empty]");
  const cardWrapper = document.querySelector(".cart-wrapper");
  const orderForm = document.querySelector("#order-form");

  if (cardWrapper.children.length > 0) {
    emptyCart.classList.add("none");
    orderForm.classList.remove("none");
  } else {
    emptyCart.classList.remove("none");
    orderForm.classList.add("none");
  }
}
