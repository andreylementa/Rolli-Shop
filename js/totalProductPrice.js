//// Находим элемент общей суммы в корзине за товар
//function totalProductPrice(e) {
//  const totalProductPrice = e.target
//    .closest(".cart-item")
//    .querySelector(".price__currency");
//  // Ищем нужный id
//  const currentId = e.target.closest("[data-id]").getAttribute("data-id");
//  //Ищем цену в списке продуктов по id
//  const productPrice = parseInt(
//    document
//      .querySelector(`[data-id='${currentId}']`)
//      .querySelector(".price__currency").innerText
//  );

//  totalProductPrice.innerText =
//    parseInt(currentCounter.innerText) * productPrice;
//}
