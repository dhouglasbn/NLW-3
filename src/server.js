// importar as dependencias
const express = require('express');
const path = require('path');
const pages = require('./pages');

// iniciando o express
const server = express();

// usar o body da requisição

server.use(express.urlencoded({ extended: true }))

// utilizando arquivos estáticos
server.use(express.static('public'));

// configurar template da engine
server.set('views', path.join(__dirname, 'views'))
.set('view engine', 'hbs');

// criar uma rota
server.get('/', pages.index);
server.get('/orphanages', pages.orphanages);
server.get('/orphanage', pages.orphanage);
server.get('/create-orphanage', pages.createOrphanage);
server.post('/save-orphanage', pages.saveOrphanage)

// ligar o servidor

server.listen(3333);
