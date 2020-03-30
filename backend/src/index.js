const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const ensinoRoutes = require('./ensinoRoutes');

// app armazena a aplicação ( to instanciando a aplicação)
const app = express();

// app.use(cors({
//     origin: 'endereço de hospedagem'
// }));
app.use(cors())
app.use(express.json()); //avisando a aplicação que o body request a ser recebido será em json
app.use(routes);
app.use(ensinoRoutes);


//a aplicação vai ouvir a porta 3333. 
//Quando eu acessar localhost na porta 3333, minha aplicação deve ser exibida
app.listen(3333);