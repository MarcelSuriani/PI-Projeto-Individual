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

function rankingSkins() {
     var instrucaoSql = `
    SELECT s.nome, COUNT(f.fkSkin) AS votos
    FROM favorito f
    JOIN skin s ON f.fkSkin = s.idSkin
    GROUP BY f.fkSkin
    ORDER BY votos DESC
    LIMIT 5;`
    ;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

function rankingHabilidades() {
    var instrucaoSql = `
        SELECT h.nome, COUNT(f.fkHabilidade) AS votos
        FROM favorito f
        JOIN habilidade h ON f.fkHabilidade = h.idHabilidade
        GROUP BY f.fkHabilidade
        ORDER BY votos DESC
        LIMIT 5;`
        ;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
}

function totalQuizzes() {
        var instrucaoSql = `
        SELECT COUNT(idTentativa) Tentativas_gerais FROM tentativa;`
        ;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);

}

function taxaMediaAcerto() {
    var instrucaoSql = `
    SELECT ROUND(AVG(totalAcertos),0) AS mediaAcertos
    FROM tentativa;`
    ;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



function melhorPontuacao(idUsuario) {

}

function tituloJogador(idUsuario) {

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