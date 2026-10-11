
numero = Number(prompt("Digite um número inteiro:"));

if (numero > 0) {
  console.log("O número é positivo.");
} else if (numero < 0) {
  console.log("O número é negativo.");
} else {
  console.log("O número é zero.");
}


numero = Number(prompt("Digite um número inteiro:"));

console.log("Antecessor:", numero - 1);
console.log("Sucessor:", numero + 1);


anoNascimento = Number(prompt("Digite o ano de nascimento:"));
anoAtual = Number(prompt("Digite o ano atual:"));

idade = anoAtual - anoNascimento;

console.log("Idade:", idade);

if (idade >= 18) {
  console.log("É maior de idade.");
} else {
  console.log("Não é maior de idade.");
}


numero = Number(prompt("Digite um número:"));

if (numero % 2 === 0) {
  console.log("O número é par.");
} else {
  console.log("O número não é par.");
}


numero = Number(prompt("Digite um número:"));

if (numero % 2 !== 0) {
  console.log("O número é ímpar.");
} else {
  console.log("O número não é ímpar.");
}



valor1 = Number(prompt("Digite o primeiro valor:"));
valor2 = Number(prompt("Digite o segundo valor:"));

console.log("Soma:", valor1 + valor2);
console.log("Subtração:", valor1 - valor2);
console.log("Multiplicação:", valor1 * valor2);

if (valor2 !== 0) {
  console.log("Divisão:", valor1 / valor2);
  console.log("Resto da divisão:", valor1 % valor2);
} else {
  console.log("Não é possível dividir por zero.");
}



nota1 = Number(prompt("Digite a nota da primeira avaliação:"));
nota2 = Number(prompt("Digite a nota da segunda avaliação:"));
nota3 = Number(prompt("Digite a nota da terceira avaliação:"));

const media = (nota1 + nota2 + nota3) / 3;

console.log("Média:", media);

if (media >= 60) {
  console.log("Aluno aprovado.");
} else {
  console.log("Aluno não aprovado.");
}



