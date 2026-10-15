
//4.Utilizando o operador ternário:
  freteGratis = valorCompra >= 100 ? true : false;

  //5. O resultado será 10, porque o operador || considera o zero um valor falso.
   pts = 0;
 final = pts ?? 10;

 //6. Código usando switch:
  opcao = 1;

switch (opcao) {
  case 1:
    console.log("Falar com atendente");
    break;
  case 2:
    console.log("Segunda via de conta");
    break;
  case 3:
    console.log("Cancelar plano");
    break;
  default:
    console.log("Opção inválida");

}

//Questão desafio — O totem da lanchonete
 cliente = nome ?? "Cliente Fiel";

 embalagem = viagem ? "Sacola" : "Bandeja";

switch (status) {
  case 1:
    console.log("Na cozinha");
    break;
  case 2:
    console.log("Preparando lanche");
    break;
  case 3:
    console.log("PRONTO!");
    break;
  default:
    console.log("Status inválido");
}

//Exercícios de fixação

// Questão 01 - Nível do jogador
 pts = 75;

if (pts >= 90) {
    console.log("Mestre");
} else if (pts >= 70) {
    console.log("Veterano");
} else if (pts >= 50) {
    console.log("Novato");
} else {
    console.log("Iniciante");
}

// Questão 02 - Tipo de triângulo
 saldo = 100;
 valorProduto = 150;

 resposta = saldo >= valorProduto ? "Aprovado" : "Recusado";

 // Questão 03 - Tipo de triângulo
tema = undefined;

tema ??= "Escuro";

console.log(tema);