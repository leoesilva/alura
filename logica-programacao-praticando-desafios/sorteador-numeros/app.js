function sortear() {
  let qtdNumeros = parseInt(document.getElementById("quantidade").value);
  let numMinimo = parseInt(document.getElementById("de").value);
  let numMaximo = parseInt(document.getElementById("ate").value);
  if (numMinimo >= numMaximo) {
    alert('ATENÇÃO: O valor "Do número" deve ser menor que "Até o número"');
    return;
  }
  if (qtdNumeros > (numMaximo - numMinimo + 1)) {
    alert('ATENÇÃO: A quantidade de números solicitada é maior que o intervalo');
    return;
  }

  let numsSorteados = [];
  for (let i = 0; i < qtdNumeros; i++) {
    let numero = obterNumeroAleatorio(numMinimo, numMaximo);
    while (numsSorteados.includes(numero)) {
      numero = obterNumeroAleatorio(numMinimo, numMaximo);
    }
    numsSorteados.push(numero);
  }
  numsSorteados.sort(function (a, b) {
    return a - b;
  });
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numsSorteados}</label>`;
  if (
    document
      .getElementById("btn-reiniciar")
      .classList.contains("container__botao-desabilitado")
  ) {
    alterarStatusBotao();
  }
}

function reiniciar() {
  document.getElementById("quantidade").value = "";
  document.getElementById("de").value = "";
  document.getElementById("ate").value = "";
  document.getElementById("resultado").innerHTML =
    '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';
  alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
  let botao = document.getElementById("btn-reiniciar");
  if (botao.classList.contains("container__botao-desabilitado")) {
    botao.classList.replace(
      "container__botao-desabilitado",
      "container__botao"
    );
    botao.removeAttribute("disabled");
  } else {
    botao.classList.replace(
      "container__botao",
      "container__botao-desabilitado"
    );
    botao.setAttribute("disabled", "");
  }
}
