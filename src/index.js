const express = require('express');
const routes = require('./routes')

// app armazena a aplicação ( to instanciando a aplicação)
const app = express();

app.use(express.json()); //avisando a aplicação que o body request a ser recebido será em json

app.use(routes);


//a aplicação vai ouvir a porta 3333. 
//Quando eu acessar localhost na porta 3333, minha aplicação deve ser exibida
app.listen(3333);