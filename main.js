const escolhaPedra = document.getElementById('escolhaPedra');
const escolhaPapel = document.getElementById('escolhaPapel');
const escolhaTesoura = document.getElementById('escolhaTesoura');
const vencedor = document.getElementById('vencedor');
const escolhaTelaCpu = document.getElementById('escolhaTelaCpu');
const escolhaJogador = document.getElementById('escolhaJogador');
//const pontosJogadorSpan = document.getElementById('pontosJogador');
//const pontosComputadorSpan = document.getElementById('pontosComputador');
//const pontuacao = document.querySelector('.pontuacao')
//let pontosJogador = 0;
//let pontosComputador = 0;



function checarResposta(escolha){
   const jogadaCpu = jogadaComputador()

if (escolha === jogadaCpu){
    vencedor.innerText = "EMPATE!"
}

if ( escolha === "Pedra" && jogadaCpu === "Papel"){
    vencedor.innerText = "COMPUTADOR VENCEU!"
}

if ( escolha === "Pedra" && jogadaCpu === "Tesoura"){
    vencedor.innerText = "JOGADOR VENCEU!"
}

if ( escolha === "Papel" && jogadaCpu === "Pedra"){
    vencedor.innerText = "JOGADOR VENCEU!"
}

if (escolha === "Papel" && jogadaCpu === "Tesoura"){
    vencedor.innerText = "COMPUTADOR VENCEU!"
}

if (escolha === "Tesoura" && jogadaCpu === "Pedra"){
    vencedor.innerText = "COMPUTADOR VENCEU!"
}

if (escolha === "Tesoura" && jogadaCpu === "Papel"){
    vencedor.innerText = "JOGADOR VENCEU!"
}

}

function jogadaComputador(){
   const opcoesComputador = ["Pedra", "Papel", "Tesoura"];
   const randomNum = Math.floor(Math.random(opcoesComputador)*3);
   escolhaTelaCpu.innerText = `Computador: ${opcoesComputador[randomNum]}.`;
   
  return opcoesComputador[randomNum];
}

function jogadaJogador(escolha){
    if (escolha === 'Pedra'){
    escolhaJogador.innerText = "Jogador: Pedra"
    }
    if (escolha === 'Papel'){
    escolhaJogador.innerText = "Jogador: Papel"
    }
    if (escolha === 'Tesoura'){
    escolhaJogador.innerText = "Jogador: Tesoura"
    } 
}

//function





escolhaPedra.addEventListener("click",() => {
checarResposta("Pedra")
jogadaJogador("Pedra")
})

escolhaPapel.addEventListener("click", () => {
  checarResposta("Papel")
  jogadaJogador("Papel")
}) 

escolhaTesoura.addEventListener("click", () => {
  checarResposta("Tesoura")
  jogadaJogador("Tesoura")
})