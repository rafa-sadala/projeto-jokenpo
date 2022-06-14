const escolhaPedra = document.getElementById('escolhaPedra')
const escolhaPapel = document.getElementById('escolhaPapel')
const escolhaTesoura = document.getElementById('escolhaTesoura')
const vencedor = document.getElementById('vencedor')
const escolhaTelaCpu = document.getElementById('escolhaTelaCpu')

//console.log(escolhaPedra)
//console.log(escolhaPapel)
//console.log(escolhaTesoura)

function checarResposta(escolha){
   const jogadaCpu = jogadaComputador()
   console.log(escolha)
   console.log(jogadaCpu)

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
   const opcoesComputador = ["Pedra","Papel","Tesoura"];
   const randomNum = Math.floor(Math.random()*3);
   escolhaTelaCpu.innerText = `A escolha do computador foi ${opcoesComputador[randomNum]}.`;

  return opcoesComputador[randomNum];
}


escolhaPedra.addEventListener("click",() => {
checarResposta("Pedra")
})

escolhaPapel.addEventListener("click", () => {
  checarResposta("Papel")
}) 

escolhaTesoura.addEventListener("click", () => {
  checarResposta("Tesoura")
})