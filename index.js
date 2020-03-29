const express = require('express');

// app armazena a aplicação ( to instanciando a aplicação)
const app = express();

// setando minha primeira rota
app.get('/', (request, response) => {
    // return response.send('OLÁ CARAI!!!')
    return response.json({
        data: {
            day: '25/03/2020',
            event: 'Semana OmniStack - 11 (live 1)',
            name: 'Marco Antonio Buarque de Oliveira'
        }
    })
});
//a aplicação vai ouvir a porta 3333. 
//Quando eu acessar localhost na porta 3333, minha aplicação deve ser exibida
app.listen(3333);