const pessoa1 = {
  nome: "Letícia",
  idade: 16,
  casada: false,
  conjuge: null,
};

const infor2 = ["Rodriga", "Lets", "Bea"];
// console.log(infor2[2]);

const pessoa2 = {
  nome: "Beatriz",
  idade: 16,
  casada: false,
  conjuge: null,
};

console.log(`
    Meu nome é ${pessoa1.nome}
    Minha idade é ${pessoa1.idade}
    Casada? ${pessoa1.casada}
    Nome do conjuge ${pessoa1.conjuge}
    `);

console.log(`
        Meu nome é ${pessoa2.nome}
        Minha idade é ${pessoa2.idade}
        Casada? ${pessoa2.casada}
        Nome do conjuge ${pessoa2.conjuge}
        `);

// Palavra reservada do JavaScript para informar o tipo de dado
console.log(typeof pessoa2.nome);
console.log(pessoa1.idade);
console.log(pessoa1.casada);
console.log(pessoa1.conjuge);

let idade = "10";

if (idade == 10) {
  console.log("Entrou na condição");
} else {
  console.log("Não entrou na condição");
}

//let nome ="Beatriz";
{
  let nome = "nick";
  console.log(nome);
}
console.log(nome);
