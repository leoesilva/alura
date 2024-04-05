let valorTotal = 0;
document.getElementById("lista-produtos").innerHTML = "";
document.getElementById("valor-total").textContent = "R$0";

function limpar() {
  let listaProdutos = document.getElementById("lista-produtos");
  let valorTotal = document.getElementById("valor-total");
  while (listaProdutos.firstChild) {
    listaProdutos.removeChild(listaProdutos.firstChild);
  }
  valorTotal.innerHTML = "R$0";
  document.getElementById("quantidade").value = "";
}

function adicionar() {
  let produto = document.getElementById("produto").value;
  let nome = produto.split("-")[0];
  let valor = produto.split("R$")[1];
  let quantidade = document.getElementById("quantidade").value;
  if (quantidade > 0) {
    let preco = quantidade * valor;
    let sectionProd = document.createElement("section");
    sectionProd.setAttribute("class", "carrinho__produtos__produto");
    sectionProd.innerHTML = `<span class="texto-azul">${quantidade}x</span> ${nome} <span class="texto-azul">R$${preco}</span>`;
    document.getElementById("lista-produtos").appendChild(sectionProd);
    valorTotal += preco;
    document.getElementById("valor-total").textContent = `R$${valorTotal}`;
    document.getElementById("quantidade").value = "";
  }
}
