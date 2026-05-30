var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

//aqui o arquivo esta recebendo as informações, então precisa ser router.get. Depois tem o caminho: questaoController pega a função acertosPorQuestao 
router.get("/acertos", function (req, res) {
    dashboardController.acertosPorQuestao(req, res);
})

module.exports = router;