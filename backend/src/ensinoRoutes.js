const express = require('express');

const ensinoRoutes = express.Router();

/*
            TIPOS DE REQUISIÇÃO HTTP
*** GET: Nusca uma informação no servidor ex: entrar na página de login
*** POST: Envia/cria uma informação para o servidor ex: cadastro de um novo usuário
*** PUT: Altera uma informação que está no servidor ex: alterar senha
*** DELETE: Deleta uma informação de está no servidor ex: excluir usuário
*/

/* 
*** setando minha primeira rota
*** localhost:3333/users (A rota que estou acessando)  
*** '/users' o recurso que estou querendo acessar 
 ** O recurso geralmente tá associado a algum tipo de entidade ex uma tabela no banco de dados
*** Request guarda toda a informação enviada pelo usuário no método (get, put...)
*** Response é a resposta da informação enviada pelo request/ do que o request pediu
 */

/* 
            TIPOS DE PARAMETROS
*** Query Params: Parâmetros nomeados enviados na rota após "?" que servem como filtro, paginação
 ** ex localhost:3333/users?page=2&name=Wilson&age>18
*
*** Route Params: Parâmetros utilizados para identificar recursos
 ** ex: localhost:3333/users/:id    eu quero da tabela usuários o usuário/recurso com um ID específico   
*
*** Request body: O corpo da requisição, usado para criar ou alterar recursos
 ** ex: criar um usuário, vc manda e-mail, número, senha, endereço e outros dados para criar o usuário no BD, essas infos vão no request body
 */

ensinoRoutes.get('/users/:id', (request, response) => {
  const queryParams = request.query;
  console.log('query params', queryParams);

  const routeParams = request.params;
  console.log('route params::', routeParams);
  //query ex: localhost:3333/users/1?name=joao

  const body = request.body; // rem que mudar a rota para post app.post
  console.log('request body', body);

  // return response.send('OLÁ CARAI!!!')
  return response.json({
    data: {
      day: '25/03/2020',
      event: 'Semana OmniStack - 11 (live 1)',
      name: 'Marco Antonio Buarque de Oliveira'
    }
  })
});

ensinoRoutes.post('/users', (request, response) => {
  const body = request.body; // rem que mudar a rota para post app.post
  console.log('request body', body);

  // return response.send('OLÁ CARAI!!!')
  return response.json({
    data: {
        day: '25/03/2020',
        event: 'Semana OmniStack - 11 (live 1)',
        name: 'Marco Antonio Buarque de Oliveira'
    }
  })
});

module.exports = ensinoRoutes;