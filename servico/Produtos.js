const fs = require("fs"); // Importa o módulo 'fs' para manipular arquivos no sistema de arquivos

// função para pegar todos os produtos
function getTodosProdutos(){
    // Lê o conteúdo do arquivo 'Produtos.json' e o converte em um array de objetos
    return JSON.parse(fs.readFileSync("Produtos.json"));
}
// Exporta todas as funções para que possam ser utilizadas em outros arquivos
module.exports = {
    getTodosProdutos
}

