const express = require("express");

// aplicação express
const aplicacao = express();

// pacote body-parser
const bodyParser = require("body-parser");

// dados via req.body
aplicacao.use(bodyParser.urlencoded({
    extended: true
}));

// dados via json
aplicacao.use(bodyParser.json({
    extended: true
}));

// pacote EJS
const expressLayout = require("express-ejs-layouts");

aplicacao.set("view engine", "ejs");
aplicacao.set("view engine", "./views");
aplicacao.use(expressLayout);

//  vinculo dos arquivos com as rotas
const rotas = require("../app/rotas/rotas");
rotas(aplicacao);

module.exports = aplicacao;