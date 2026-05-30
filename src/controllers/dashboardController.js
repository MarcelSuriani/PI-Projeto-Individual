var dashboardModel = require("../models/dashboardModel");


// chamo a função
// dashboardModel(nome do arquivo onde está a função que eu to fazendo req e res).função que to chamando
// então, quando a função que eu chamei, trouxer o (resultado) e o resultado vier ok, eu respondo um status 200 com o json que veio no resultado da requisição da função
// caso de algo errado,  ele cai no catch
function acertosPorQuestao(req, res) {
    dashboardModel.acertosPorQuestao()
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar a busca de dados! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );

}

function rankingUsuarios(req, res) {
    dashboardModel.rankingUsuarios()
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar a busca de dados! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );

}

function rankingSkins(req,res) {
      dashboardModel.rankingSkins()
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar a busca de dados! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
} 

function rankingHabilidades(req, res) {
          dashboardModel.rankingHabilidades()
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar a busca de dados! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );    
}

function taxaMediaAcerto(idUsuario) {

}


function melhorPontuacao(idUsuario) {

} 

function tituloJogador(idUsuario) {

} 

function totalQuizzes(req, res) {
              dashboardModel.totalQuizzes()
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar a busca de dados! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );    

}

module.exports = {
    acertosPorQuestao,
    taxaMediaAcerto,
    totalQuizzes,
    melhorPontuacao,
    tituloJogador,
    rankingUsuarios,
    rankingSkins,
    rankingHabilidades
}