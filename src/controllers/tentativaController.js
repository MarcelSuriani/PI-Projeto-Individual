var tentativaModel = require("../models/tentativaModel");

function registrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo quiz.html
    var fkUsuario = req.body.fkUsuarioServer;
    var totalAcertos = req.body.totalAcertosServer;
    var questoes = req.body.questoesServer;

    // Passe os valores como parâmetro e vá para o arquivo tentativaModel.js
    tentativaModel.registrarTentativa(fkUsuario, totalAcertos)
        .then(function (resultado) {
            var idTentativa = resultado.insertId; // pega o id da tentativa que foi registrada pelo insert da tentativa

            var promessas = questoes.map(function (q) { // cria uma Promise para cada questão. Ele vai armazenando dentro de um array e criando um insert pra cada promisse que ta sendo criado
                return tentativaModel.registrarQuestao(idTentativa, q.fkQuestao, q.acertou);
            });

            Promise.all(promessas).then(function () { // espera todas as questões serem salvas
                res.status(201).json({ mensagem: "Tentativa registrada com sucesso!" }); // só então responde
            });
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
    registrar
}