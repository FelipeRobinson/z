const Usuario = require('../bd/crudUSUARIO');

module.exports = {
  paginaLogin(req, res) {
    res.render('login');
  },

  realizarLogin(req, res) {
    const { login, senha } = req.body;
    if (!login || !senha) {
      res.send('Por favor, preencha os campos corretamente!');
      return;
    }
    Usuario.autenticar(login, senha, (err, usuario) => {
      if (err || !usuario) {
        res.send('Seu login ou senha estão incorretos! Tente novamente!');
      } 
      else {
        // Registrar o acesso no BD
        Usuario.registrarAcesso(usuario.id);
        res.redirect('/home');
      }
    });
  },

  paginaCadastro(req, res) {
    res.render('cadastro');
  },

  realizarCadastro(req, res) {
    const { email, senha, confirmacaoSenha } = req.body;
    if (senha !== confirmacaoSenha) {
      res.send('Por favor, digite as senhas exatamente iguais!');
      return;
    }
    Usuario.cadastrar(email, senha, (err) => {
      if (err) res.send('Erro no cadastro, tente novamente.');
      else res.redirect('/');
    });
  }
};