window.addEventListener("click", function (e) {
  //Если кнопка в корзину
  if (e.target.hasAttribute("data-cart")) {
    const currentProduct = e.target.closest(".card");

    const cartWrapper = document.querySelector(".cart-wrapper");

    // Собираем данные о товаре

    const productObj = {
      id: currentProduct.dataset.id,
      src: currentProduct.querySelector(".product-img").getAttribute("src"),
      title: currentProduct.querySelector(".item-title").innerText,
      counter: currentProduct.querySelector("[data-counter]").innerText,
      weight: currentProduct.querySelector(".price__weight").innerText,
      price: currentProduct.querySelector(".price__currency").innerText,
    };

    // Ищем данный товар в корзине

    const itemInCart = cartWrapper.querySelector(
      `[data-id="${productObj.id}"]`
    );

    // Проверяем, есть ли данный товар в корзине
    if (itemInCart) {
      // Складываем счетчики
      const counterInCart = itemInCart.querySelector("[data-counter]");
      counterInCart.innerText = +counterInCart.innerText + +productObj.counter;
      totalProductPrice();
    } else {
      // Добавляем в корзину, если его там нет
      const productToCart = `
    <div class="cart-item" data-id="${productObj.id}">
                  <div class="cart-item__top">
                    <div class="cart-item__img">
                      <img src="${productObj.src}" alt="" />
                    </div>
                    <div class="cart-item__desc">
                      <div class="cart-item__title">${productObj.title}</div>
                      <div class="cart-item__weight">6 шт. / ${
                        productObj.weight
                      }.</div>

                      <!-- cart-item__details -->
                      <div class="cart-item__details">
                        <div class="items items--small counter-wrapper">
                          <div class="items__control" data-action="minus">
                            -
                          </div>
                          <div class="items__current" data-counter="">${
                            productObj.counter
                          }</div>
                          <div class="items__control" data-action="plus">+</div>
                        </div>

                        <div class="price">
                          <div class="price__currency">${parseInt(
                            productObj.price
                          )}</div>
                        </div>
                      </div>
                      <!-- // cart-item__details -->
                    </div>
                  </div>
                </div>
    `;
      // Добавление в корзину
      cartWrapper.insertAdjacentHTML("beforeend", productToCart);
      totalProductPrice();
      //  Убираем 'Корзина пуста'
      toggleCartStatus();
    }
  }
});
