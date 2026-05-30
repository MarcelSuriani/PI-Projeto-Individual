var database = require("../database/config")

function acertosPorQuestao() {
    var instrucaoSql = `
        SELECT q.idQuestao, q.pergunta Pergunta,
        ROUND((SUM(CASE WHEN tq.acertou = 1 THEN 1 ELSE 0 END) / COUNT(tq.idTentativaQuestao)) * 100, 1) AS porcentagemAcertos
        FROM questao q
        LEFT JOIN tentativaQuestao tq ON q.idQuestao = tq.fkQuestao
        GROUP BY q.idQuestao, q.pergunta
        ORDER BY q.idQuestao;
        `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function rankingQuiz() {

}
function rankingSkin() {

}
function rankingHabilidade() {

}
function rankingQuiz() {

}

module.exports = {
    acertosPorQuestao
};