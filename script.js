// Variáveis globais
let contador = 0;
let itens = [];

// 1. console.log() - Exibir mensagem no console
console.log("Projeto iniciado");

// 2. alert() - Alertar mensagem
document.getElementById("btn-alert").addEventListener("click", function () {
  alert("Botão clicado!");
});

// 3. document.getElementById() / .innerHTML
document.getElementById("btn-nome").addEventListener("click", function () {
  let nome = document.getElementById("input-nome").value;
  document.getElementById("paragrafo").innerHTML = "Olá, " + nome + "!";
});

// 4. Math.random() / Math.floor()
document.getElementById("btn-random").addEventListener("click", function () {
  let numero = Math.floor(Math.random() * 100);
  document.getElementById("paragrafo").innerHTML =
    "Número aleatório: " + numero;
});

// 5. new Date() / .getFullYear()
document.getElementById("btn-date").addEventListener("click", function () {
  let ano = new Date().getFullYear();
  document.getElementById("paragrafo").innerHTML = "Ano atual: " + ano;
});

// 6. .push() e .forEach() - Adicionar itens à lista
document.getElementById("btn-add-item").addEventListener("click", function () {
  let novoItem = "Item " + (itens.length + 1);
  itens.push(novoItem);
  atualizarLista();
});

function atualizarLista() {
  let lista = document.getElementById("itens-lista");
  lista.innerHTML = "";
  itens.forEach(function (item) {
    let li = document.createElement("li");
    li.textContent = item;
    lista.appendChild(li);
  });
}

// 7. setInterval() - Atualizar contador
document.getElementById("btn-increment").addEventListener("click", function () {
  contador++;
  document.getElementById("contador-display").innerHTML = contador;
});

// 8. Resetar contador
document.getElementById("btn-reset").addEventListener("click", function () {
  contador = 0;
  document.getElementById("contador-display").innerHTML = contador;
});

// 9. .map() - Transformar lista de itens em maiúsculo
document.getElementById("btn-add-item").addEventListener("click", function () {
  itens = itens.map((item) => item.toUpperCase());
  atualizarLista();
});

// 10. .filter() - Filtrar itens contendo número par
document.getElementById("btn-add-item").addEventListener("click", function () {
  itens = itens.filter((item) => parseInt(item.split(" ")[1]) % 2 === 0);
  atualizarLista();
});
