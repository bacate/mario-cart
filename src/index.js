const player1 = {
    NOME: "Mario",
    VELOCIDADE : 4,
    MANOBRABILIDADE: 3,
    PODER : 3,
    PONTOS : 0,
}

const player2 = {
    NOME: "Luigi",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 4,
    PONTOS: 0,
}

// funçao assincrona de jogar os dados
async function rollDice(){
    return Math.floor(Math.random() * 6 ) + 1;
}

// funçao assincrona para iniciar o jogo
async function playEngineRace(character1, character2){
    for (let round = 1; round <= 5; round++){
        console.log(`🏁 Rodada ${round} iniciada.`)
    }
}

// funçao auto invoke
(async function main(){
    console.log(`🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando...`);

    await playEngineRace(player1, player2);
})()