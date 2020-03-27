const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


// metodo http



// metodo 
// get: busca/listar uma informação
// Post: criar uma informação
// Put: Alterar uma informação
// delete: deletar uma informação

/**
 * tipos de parametros
 * 
 * query params: parametros nomeados  enviados na rota apór "?" (filtros, paginação)
 * 
 * route params: parametros utilizados para identificar recurso
 * 
 * request body: corpo da requisição, utilizado para criar ou alterar recursos
 */


 /**
  * Driver: 
  */


app.listen(3333);
