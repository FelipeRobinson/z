module.exports = (rotas) => {
   const controller = require('../controllers/controller');

   rotas.get('/', controller.paginaLogin);
   rotas.post('/login', controller.realizarLogin);
   rotas.get('/cadastro', controller.paginaCadastro);
   rotas.post('/cadastro', controller.realizarCadastro);
}