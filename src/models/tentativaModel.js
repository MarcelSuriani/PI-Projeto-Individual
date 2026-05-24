var database = require("../database/config")

// Para registrar uma tentativa
function registrarTentativa(fkUsuario, totalAcertos) {
    console.log("ACESSEI O TENTATIVA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function registrarTentativa():", fkUsuario, totalAcertos);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO tentativa (fkUsuario, totalAcertos) VALUES ('${fkUsuario}', '${totalAcertos}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function registrarQuestao(fkTentativa, fkQuestao, acertou) {
    var instrucaoSql = `
        INSERT INTO tentativaQuestao (fkTentativa, fkQuestao, acertou) 
        VALUES ('${fkTentativa}', '${fkQuestao}', '${acertou}');
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    registrarTentativa,
    registrarQuestao
};