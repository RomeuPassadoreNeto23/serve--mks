const express = require("express"); // Importa o módulo Express
const cors = require("cors"); // Importa o módulo CORS
const rotaProdutos = require('./rotas/Produtos'); // Importa as rotas de gerenciamento de Produtos
// Cria uma instância da aplicação Express
const app = express();

// Configura o Express para aceitar requisições com JSON
app.use(express.json());

// Permite que requisições de qualquer origem sejam aceitas, usando CORS
app.use(cors({origin:"*"}));

// --- Adicione esta linha para servir arquivos estáticos ---
app.use(express.static('public'));

// Define as rotas da aplicação
app.use('/produtos', rotaProdutos); // Associa as rotas de gerenciamento de produtos"


// Define a porta em que o servidor irá rodar
const port = 8000;

// Inicia o servidor e o coloca para escutar na porta definida
app.listen(port, () => {
    console.log(`Escutando a porta ${port}`); // Mensagem de log indicando que o servidor está ativo
});