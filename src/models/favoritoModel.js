var database = require("../database/config")

// Para registrar uma tentativa
function favoritar(fkUsuario, fkSkin, fkHabilidade) {
    console.log("ACESSEI O TENTATIVA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function registrarTentativa():", fkUsuario, fkSkin, fkHabilidade);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO favorito (fkUsuario, fkSkin, fkHabilidade) 
        VALUES ('${fkUsuario}', '${fkSkin}', '${fkHabilidade}')
        ON DUPLICATE KEY UPDATE 
        fkSkin = '${fkSkin}', 
        fkHabilidade = '${fkHabilidade}'
        `; 
        // o on dupicate key é para atualizar os dados do banco
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    }
    
    module.exports = {
        favoritar
    };