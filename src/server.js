const express = require('express');
const path = require('path');
const fs = require('fs');


const app = express()

// definindo o template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));

// definindo os arquivos públicos
app.use(express.static(path.join(__dirname, 'public')))

// Habilita server para receber dados via post (formulário)
app.use(express.urlencoded({ extended: true}))

// rotas
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Home'
    })
})

// 404 error (not found)
app.use((req, res) => {
    res.send('Page not found')
})

// executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () =>{console.log(`Server in port ${port}`)});