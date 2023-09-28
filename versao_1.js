/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
const carta = comprarCarta()

console.log("Boas vindas ao jogo de BlackJack!")
const comecoDoJogo = confirm("Quer iniciar uma nova rodada?")

if (comecoDoJogo) {
   let cartaJogador1 = comprarCarta()
   let cartaJogador2 = comprarCarta()
   let cartaMaquina1 = comprarCarta()
   let cartaMaquina2 = comprarCarta()


   const pontuacaoJogador = cartaJogador1.valor + cartaJogador2.valor
   const pontuacaoMaquina = cartaMaquina1.valor + cartaMaquina2.valor

   console.log(`Jogador - cartas: ${cartaJogador1.texto} ${cartaJogador2.texto} - ${pontuacaoJogador}`)
   console.log(`Máquina - cartas: ${cartaMaquina1.texto} ${cartaMaquina2.texto} - ${pontuacaoMaquina}`)

   if (pontuacaoJogador > pontuacaoMaquina) {
      console.log("O jogador venceu!")
   } else if (pontuacaoJogador < pontuacaoMaquina) {
      console.log("A máquina venceu!")
   } else if (pontuacaoJogador === pontuacaoMaquina) {
      console.log("O jogo deu empate")
   }
} else {
   console.log("O jogo acabou")
}