const port = 3334
import express from 'express'
const app = express()

app.get('/perfil/:nome/:profissao', (req, res) => {
    res.send(`<h1>Seja bem vindo, ${req.params.nome}! Você é um(a) excelente ${req.params.profissao}<h1/>`)
})

app.get('/perfil', (req, res) => {
    res.send(req.query["profissao"])
})

app.get('/calculadora/:operacao/:x&:y', (req, res)=> {

    let resultado = 0;
    let x = Number(req.params.x)
    let y = Number(req.params.y)
    
    if(req.params.operacao == 'adicao'){
        resultado = x + y
    }

    if(req.params.operacao == 'subtracao'){
        resultado = x - y
    }

    if(req.params.operacao == 'multiplicacao'){
        resultado = x * y
    }

    if(req.params.operacao == 'divisao'){
        resultado = x / y
    }

    res.send(`<h2>Resultado: ${resultado}</h2>`)
})

app.listen(port, () => {
    console.log(`Servidor Rodando na porta ${port}`)
})