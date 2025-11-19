// Objeto jogador 1
const player1 = {
    NOME: "Mario",
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
    PONTOS: 0,
}
//Objeto jogador 2
const player2 = {
    NOME: "Luigi",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 4,
    PONTOS: 0,
}

// funçao assincrona de jogar os dados
async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

// funçao para gerar blocos aleatorios
async function getRandomBlock() {
    let random = Math.random();
    let result;

    switch (true) {
        case random < 0.33:
            result = "RETA"
            break;

        case random < 0.66:
            result = "CURVA"
            break;

        default:
            result = "CONFRONTO"
            break;
    }

    return result
}

// funçao para exibir o log da corrida
async function logRollResult(characterName, block, diceResult, attributte) {
    console.log(`${characterName} rolou um dado de ${block} ${diceResult} + ${attributte} = ${diceResult + attributte}`)
}

// funçao assincrona para iniciar o jogo
async function playRaceEngine(character1, character2) {
    for (let round = 1; round <= 5; round++) {
        console.log(`🏁 Rodada ${round} iniciada.`)

        // exibindo os blocos
        let block = await getRandomBlock()
        console.log(`Bloco de ${block}`)

        // Guardando o resultado da rolagem de dados
        let diceResult1 = await rollDice()
        let diceResult2 = await rollDice()

        // Guardando valores de habilidades
        let totalSkill1 = 0
        let totalSkill2 = 0

        if (block === "RETA") {
            totalSkill1 = diceResult1 + character1.VELOCIDADE
            totalSkill2 = diceResult2 + character2.VELOCIDADE

            console.log(`${character1.NOME} confrontou ${character2.NOME}`)

            await logRollResult(character1.NOME, "Velocidade", diceResult1, character1.VELOCIDADE)
            await logRollResult(character2.NOME, "Velocidade", diceResult2, character2.VELOCIDADE)

            character2.PONTOS -= totalSkill1 > totalSkill2 && character2.PONTOS > 0 ? 1 : 0;
            character1.PONTOS -= totalSkill2 > totalSkill1 && character1.PONTOS > 0 ? 1 : 0;

            console.log(totalSkill1 === totalSkill2 ? "Confronto empatado!" : "")
        }

        if (block === "CURVA") {
            totalSkill1 = diceResult1 + character1.MANOBRABILIDADE
            totalSkill2 = diceResult2 + character2.MANOBRABILIDADE

            console.log(`${character1.NOME} confrontou ${character2.NOME}`)

            await logRollResult(character1.NOME, "Manobrabilidade", diceResult1, character1.MANOBRABILIDADE)
            await logRollResult(character2.NOME, "Manobrabilidade", diceResult2, character2.MANOBRABILIDADE)

            character2.PONTOS -= totalSkill1 > totalSkill2 && character2.PONTOS > 0 ? 1 : 0;
            character1.PONTOS -= totalSkill2 > totalSkill1 && character1.PONTOS > 0 ? 1 : 0;

            console.log(totalSkill1 === totalSkill2 ? "Confronto empatado!" : "")
        }

        if (block === "CONFRONTO") {
            totalSkill1 = diceResult1 + character1.PODER
            totalSkill2 = diceResult2 + character2.PODER

            console.log(`${character1.NOME} confrontou ${character2.NOME}`)

            await logRollResult(character1.NOME, "Poder", diceResult1, character1.PODER)
            await logRollResult(character2.NOME, "Poder", diceResult2, character2.PODER)

            character2.PONTOS -= totalSkill1 > totalSkill2 && character2.PONTOS > 0 ? 1 : 0;
            character1.PONTOS -= totalSkill2 > totalSkill1 && character1.PONTOS > 0 ? 1 : 0;

            console.log(totalSkill1 === totalSkill2 ? "Confronto empatado!" : "")

        }

        if (totalSkill1 > totalSkill2) {
            console.log(`${character1.NOME} marcou 1 ponto!`)
            character1.PONTOS++;
        } else if (totalSkill2 > totalSkill1) {
            console.log(`${character2.NOME} marcou 1 ponto!`)
            character2.PONTOS++;
        }

        console.log("----------------------------------------------------------------------")
    }

}

// funçao auto invoke
(async function main() {
    console.log(`🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando...`);

    await playRaceEngine(player1, player2);
})()