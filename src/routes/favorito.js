var express = require("express");
var router = express.Router();

var favoritoController = require("../controllers/favoritoController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/favoritar", function (req, res) {
    favoritoController.favoritar(req, res);
})

module.exports = router;