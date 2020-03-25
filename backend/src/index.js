//import do express
const express = require('express');
//cors
const cors = require('cors');
//import das rotas
const routes = require('./routes');
//instancio minha aplicação
const app = express();

app.use(cors());
//defino que o body da requisicao sera json
app.use(express.json());
app.use(routes);
//app vai ouvir porta 3333
app.listen(3333);