const express = require('express');
const path = require('path');



const db = require('./database')
const routes = require('./routes')

const app = express()

// conexão com o banco de dados
db.connect()

// Criando tabela no mongo com os campos name, age, email e password tendo o nome de 'customers'



// definindo o template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));

// definindo os arquivos públicos
app.use(express.static(path.join(__dirname, 'public')))

// Habilita server para receber dados via post (formulário)
app.use(express.urlencoded({ extended: true}))

// definindo as rotas

app.use('/', routes)

// 404 error (not found)
app.use((req, res) => {
    res.send('Page not found')
})

// executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () =>{console.log(`Server in port ${port}`)});