var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");


//aqui o arquivo esta buscnado as informações, então precisa ser router.get. Depois o caminho dashboardController pega a função acertosPorQuestao 
// grafico
router.get("/acertos", dashboardController.acertosPorQuestao)
router.get("/ranking-usuarios", dashboardController.rankingUsuarios)
router.get("/ranking-skins", dashboardController.rankingSkins)
router.get("/ranking-habilidades", dashboardController.rankingHabilidades)

// kpis
router.get("/taxa-media/", dashboardController.taxaMediaAcerto)
router.get("/total-quizzes", dashboardController.totalQuizzes)
router.get("/melhor-pontuacao/:idUsuario", dashboardController.melhorPontuacao)


module.exports = router;