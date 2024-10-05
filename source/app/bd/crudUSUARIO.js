class USUARIO {
  constructor(conexaoBD)
  { this._bd = conexaoBD; }

  autenticar(login, senha, callback) {
    const sql = 'SELECT * FROM USUARIO WHERE login = ' + login + ' AND senha = ' + senha;
    this._bd.sql(sql, [login, senha], (erro, result) => {
      if (erro) return callback(erro);
      return callback(null, result[0]);
    });
  }

  cadastrar(email, senha, callback) {
    const sql = 'INSERT INTO USUARIO (login, senha) VALUES (' + login + ', ' + senha + ')';
    this._bd.sql(sql, [email, senha], callback);
  }

  registrarAcesso(usuarioId) {
    const sql = 'INSERT INTO ACESSO (usuario_id) VALUES (' + usuarioId + ')';
    this._bd.sql(sql, [usuarioId]);
  }
};

module.exports = USUARIO;