const mysql = require("mysql2");

const connetion = mysql.createConnection({
    host:     'regulus.cotuca.unicamp.br',
    user:     'BD24464',
    password: 'BD24464',
    database: 'BD24464'
});

connetion.connect(function(erro) {
    if (erro)
        console.log("ERRO NA CONEXÃO COM O BANCO DE DADOS.")
    else
        console.log("CONEXÃO COM O BANCO DE DADOS ATIVA.")
});

module.exports = connetion;