document.getElementById("formulario").addEventListener("submit", (e) => {
  e.preventDefault();

  let nome = document.querySelector("#id_nome").value;
  let resultado = document.querySelector("#resultado");

  let altura = document.getElementById("id_altura").value;
  altura = parseFloat(altura.replace(",", "."));

  let peso = document.getElementById("id_peso").value;
  peso = parseFloat(peso.replace(",", "."));

  let IMC = peso / (altura * altura);

  resultado.innerHTML = ` <br>
   Olá, <strong>${nome}</strong>!             
   <br> Seu IMC é <strong>${IMC.toFixed(1)}</strong>
   e <br> sua classficação é: `;

  if (IMC < 18.5) {
    resultado.innerHTML += "Abaixo do peso normal";
  } else if (IMC >= 18.5 && IMC <= 24.9) {
    resultado.innerHTML += "Peso normal";
  } else if (IMC >= 25.0 && IMC <= 29.9) {
    resultado.innerHTML += "Excesso de peso";
  } else if (IMC >= 30.0 && IMC <= 34.9) {
    resultado.innerHTML += "Obesidade classe I";
  } else if (IMC >= 35.0 && IMC <= 39.9) {
    resultado.innerHTML += "Obesidade classe II";
  } else if (IMC >= 40.0) {
    resultado.innerHTML += "Obsedidade classe III";
  } else {
    resultado.innerHTML += "ERRO";
  }
});
