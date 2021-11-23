const express = require('express')
const router = express.Router()
const dados = require('./dados')

function geraJogador() {
    const jogador = {
        "nome": dados.nome[Math.floor(Math.random() * dados.nome.length)],
        "sobrenome": dados.sobrenome[Math.floor(Math.random() * dados.sobrenome.length)],
        "idade": Math.floor(Math.random() * 23) + 18,
        "posição": dados.posição[Math.floor(Math.random() * dados.posição.length)],
        "clube": dados.clube[Math.floor(Math.random() * dados.clube.length)]
    }

    return jogador

}

router.get('/gerador', function (req, res) {
    const isFiltro = req.query.filtro == 'idade'

    let jogador = geraJogador()

    let mensagem
    if (isFilter) {
        let nivel = 'novato'

        if (jogador.idade > 35) {
            nivel = 'master'
        } else if (jogador.idade >= 29) {
            nivel = 'veterano'
        } else if (jogador.idade >= 22) {
            nivel = 'profissional'
        }

        mensagem = `${jogador.nome} ${jogador.sobrenome} é um futebolista brasileiro ${nivel} que atua como ${jogador.posição}. Atualmente defende o ${jogador.clube}.`

    } else {

        mensagem = `${jogador.nome} ${jogador.sobrenome} é um futebolista brasileiro de ${jogador.idade} anos que atua como ${jogador.posição}. Atualmente defende o ${jogador.clube}.`

    }

    res.send(mensagem)
})

module.exports = router