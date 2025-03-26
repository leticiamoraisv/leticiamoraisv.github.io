let limpar = () => {
  // Capturar via ID
  // let jogador = document.getElementById("id_monike");
  // console.log(jogador);
  // CAPTURAR via QUERY INDIVIDUAL

  // let jogador = document.querySelector("Everson Ex");
  // console.log(jogador);
  // jogador.innerHTML = "<strong>Adria</strong>";

  // Capturar todos por QUERY
  // let jogadores = document.querySelectorAll(".jogadores");
  // console.log(jogadores.length);
  // for (let i = 0; i < jogadores.length; i++) {
  //   jogadores[i].innerHTML = "<strong>Adria</strong>";
  // }

  let jogadores = document.querySelectorAll("li");
  console.log(jogadores.length);
  console.log(jogadores);
  for (let i = 0; i < jogadores.length; i++) {
    jogadores[i].innerHTML = "";
  }
};
