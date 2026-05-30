var dashboardModel = require("../models/dashboardModel");

function acertosPorQuestao(req, res) {

    dashboardModel.acertosPorQuestao()
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