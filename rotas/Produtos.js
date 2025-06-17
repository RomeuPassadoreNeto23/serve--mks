const { Router } = require("express"); // Importa o construtor de rotas do Express.js
const {getProdutos} = require('../controladores/Produtos') // Importa as funções do controlador para lidar com cada rota

// Cria uma instância do roteador do Express
const router = Router();

// Define as rotas e associa cada rota a uma função do controlador

//GET /Produtos:  Obtém todos os Produtos
router.get('/', getProdutos)

// Exporta o roteador para ser utilizado em outros módulos
module.exports = router;