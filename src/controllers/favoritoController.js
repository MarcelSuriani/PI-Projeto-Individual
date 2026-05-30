var favoritoModel = require("../models/favoritoModel");

function favoritar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo quiz.html
    var fkUsuario = req.body.fkUsuarioServer;
    var fkSkin = req.body.fkSkinServer;
    var fkHabilidade = req.body.fkHabilidadeServer;

    // Passe os valores como parâmetro e vá para o arquivo favoritoModel.js
    favoritoModel.favoritar(fkUsuario, fkSkin, fkHabilidade)
        .then(function (resultado) {
            if (resultado.affectedRows === 1) {
                res.status(201).send("Favoritos registrados com sucesso!");
            } else {
                res.status(200).send("Favoritos atualizados com sucesso!");
            } // 200 atualiza e 201 insere a primeira vez
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