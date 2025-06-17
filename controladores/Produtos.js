// Importando as funções de serviço relacionadas a Produtos do arquivo de serviços
const { getTodosProdutos } = require('../servico/produtos')

// Função para lidar com a requisição de obtenção de todos os Produtos
function getProdutos(req, res) {
    try {
        // Chama a função do serviço para obter todos os Produtos
        const Produtos = getTodosProdutos()
        // Retorna a lista de Produtos como resposta
        res.send(Produtos)


    } catch (error) {
        // Em caso de erro, retorna status 500 (erro interno do servidor)
        res.status(500)
         // Envia a mensagem de erro como resposta
        res.send(error.message)

    }
}
// Exporta as funções para serem usadas em outros arquivos
module.exports = {
    getProdutos
}