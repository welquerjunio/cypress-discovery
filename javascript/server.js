const express = require('express')
const app = express()

//Metodo get
app.get('/', function (req, res) {
  res.json({message: 'Hello Cypress Discovery'})
})

app.get('/avengers', function (req, res){
    var avengers = ['Tony Stark', 'Clint Barton', 'Natash Romanoff', 'Steve Rogers', 'Bruce Banner']
    return res.json({data: avengers})
})

app.get('/cnh', function(req, res){
    const idade = req.query.idade

    if (!idade) {
        res.json({message: 'Idade é um campo obrigatório.'})
        return
    }

    var idadeNum = parseInt(idade)

    if (idadeNum >= 18) {
        res.json({message: 'OK, você pode tirar sua CNH.'})
        return
    } else if (idadeNum > 4) {
        res.json({message: 'Você é menor de idade, por enquanto sugiro andar de bike.'})
        return
    } else {
        res.json({message: 'Melhor você tomar leite.'})
        return
    }
})

app.listen(3000)