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

function rankingUsuarios() {
    var instrucaoSql = `
    SELECT u.username, MAX(t.totalAcertos) AS melhorPontuacao
    FROM tentativa t
    JOIN usuario u ON t.fkUsuario = u.idUsuario
    GROUP BY u.username
    ORDER BY melhorPontuacao DESC
    LIMIT 5;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function taxaMediaAcerto(idUsuario) {

}

function totalQuizzes() {

}

function melhorPontuacao(idUsuario) {

}

function tituloJogador(idUsuario) {

}

function rankingSkins() {

}

function rankingHabilidades() {

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