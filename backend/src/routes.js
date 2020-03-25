const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//rota de login
routes.post("/sessions",SessionController.create);

//definição da rota para listar
routes.get("/ongs", OngController.index);
//definição de rota para salvar
routes.post("/ongs", OngController.create);

//definição da rota para listar todos casos de uma ong
routes.get("/profile", ProfileController.index);

//definição da rota para listar
routes.get("/incidents", IncidentController.index);
//definição de rota para salvar
routes.post("/incidents", IncidentController.create);
//definição de rota para deleção
routes.delete("/incidents/:id", IncidentController.delete);

module.exports = routes;