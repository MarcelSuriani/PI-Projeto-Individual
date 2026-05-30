var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");


//aqui o arquivo esta buscnado as informações, então precisa ser router.get. Depois o caminho dashboardController pega a função acertosPorQuestao 
router.get("/acertos", dashboardController.acertosPorQuestao)
router.get("/ranking-usuarios", dashboardController.rankingUsuarios)
router.get("/ranking-skins", dashboardController.rankingSkins)

router.get("/taxa-media-usuario", dashboardController.taxaMediaAcerto)
router.get("/total-quizzes", dashboardController.totalQuizzes)
router.get("/melhor-pontuacao", dashboardController.melhorPontuacao)
router.get("/titulo-Jogador", dashboardController.tituloJogador)
router.get("/ranking-habilidades", dashboardController.rankingHabilidades)

module.exports = router;