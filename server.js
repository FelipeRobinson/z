const porta = 4444;
const aplicacao = require("./source/config/express");

aplicacao.listen(porta, () => {
  console.log("SERVIDOR ATIVO!");
});