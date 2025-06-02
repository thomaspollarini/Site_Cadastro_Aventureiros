// Selecionar os elementos
const btnRegistrar = document.querySelector(".register__submit");
const inputNome = document.querySelector(".register__name");
const inputExp = document.querySelector(".register__exp");
const tabela = document.querySelector(".guild__table");

// Função para calcular o Rank baseado na EXP
function calcularRank(exp) {
  if (exp <= 1000) return "Camponês";
  if (exp <= 2000) return "Aprendiz";
  if (exp <= 5000) return "Aventureiro";
  if (exp <= 7000) return "Mercenário";
  if (exp <= 8000) return "Cavaleiro";
  if (exp <= 9000) return "Mestre de Armas";
  if (exp <= 10000) return "Lorde da Guerra";
  return "Lenda";
}

// Função para registrar na tabela
function registrarAventureiro() {
  const nome = inputNome.value.trim();
  const exp = parseInt(inputExp.value);

  // Validação simples
  if (nome === "" || isNaN(exp) || exp < 0) {
    alert("Por favor, preencha todos os campos corretamente.");
    return;
  }

  const rank = calcularRank(exp);

  // Criar a nova linha
  const novaLinha = document.createElement("tr");

  novaLinha.innerHTML = `
    <td class="signature">${nome}</td>
    <td>${exp}</td>
    <td>${rank}</td>
  `;

  // Adiciona a linha na tabela
  tabela.appendChild(novaLinha);

  // Limpa os inputs
  inputNome.value = "";
  inputExp.value = "";
}

// Evento no botão
btnRegistrar.addEventListener("click", registrarAventureiro);
