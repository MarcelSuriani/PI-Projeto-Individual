var questaoModel = require("../models/questaoModel");

function acertosPorQuestao(req, res) {

    questaoModel.acertosPorQuestao()
        .then(function (resultado) {
            res.status(200).json(resultado);
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
    acertosPorQuestao
}