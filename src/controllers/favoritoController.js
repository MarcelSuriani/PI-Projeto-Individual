var favoritoModel = require("../models/favoritoModel");

function favoritar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo quiz.html
    var fkUsuario = req.body.fkUsuarioServer;
    var fkSkin = req.body.fkSkinServer;
    var fkHabilidade = req.body.fkHabilidadeServer;

    // Passe os valores como parâmetro e vá para o arquivo tentativaModel.js
    favoritoModel.favoritar(fkUsuario, fkSkin, fkHabilidade)
        .then(function (resultado) {
            res.status(201).json({ mensagem: "Tentativa registrada com sucesso!" }); // só então responde
        })
        .catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o registro de tentativa! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );

}

module.exports = {
    favoritar
}