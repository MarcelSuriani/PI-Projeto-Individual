var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

//aqui o arquivo esta buscnado as informações, então precisa ser router.get. Depois o caminho dashboardController pega a função acertosPorQuestao 
router.get("/acertos", dashboardController.acertosPorQuestao)

module.exports = router;