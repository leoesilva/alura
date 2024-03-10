function alterarStatus(id) {
  let item = document.getElementById(`game-${id}`);
  let img = item.querySelector(".dashboard__item__img");
  let botao = item.querySelector(".dashboard__item__button");
  if (
    img.classList.contains("dashboard__item__img--rented") &&
    botao.classList.contains("dashboard__item__button--return")
  ) {
    img.classList.remove("dashboard__item__img--rented");
    botao.classList.remove("dashboard__item__button--return");
    botao.textContent = "Alugar";
  } else {
    img.classList.add("dashboard__item__img--rented");
    botao.classList.add("dashboard__item__button--return");
    botao.textContent = "Devolver";
  }
}
