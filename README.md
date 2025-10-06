# 🚀 Server MKS - Projeto Node.js/Express

Este é um projeto de servidor back-end simples construído com Node.js e o framework Express, utilizando CORS para permitir requisições de diferentes origens e servindo rotas para gerenciamento de produtos.

## 🛠️ Tecnologias Utilizadas

* **Node.js**: Ambiente de execução JavaScript.
* **Express**: Framework web para Node.js.
* **CORS**: Middleware para permitir requisições de diferentes domínios.

## ⚙️ Configuração do Projeto

Para começar a usar este servidor, siga os passos abaixo.

### 1. Clonar o Repositório

```bash
git clone [https://github.com/RomeuPassadoreNeto23/serve--mks](https://github.com/RomeuPassadoreNeto23/serve--mks)
cd serve--mks
2. Instalar Dependências
O projeto utiliza o express e o cors. Você precisa instalar as dependências listadas no package.json.

Bash

npm install
3. Estrutura de Pastas
Seu servidor está configurado para:

app.js: O arquivo principal que inicializa o servidor.

rotas/Produtos.js: Contém a lógica das rotas para /produtos.

public/: Pasta que serve arquivos estáticos (como HTML, CSS, JavaScript de front-end ou imagens).

▶️ Como Executar o Servidor
O servidor está configurado para rodar na porta 8000.

Execução Padrão (Node)
Use este comando para iniciar o servidor:

Bash

node app.js
Você verá a mensagem no terminal: Escutando a porta 8000.

Execução em Modo de Desenvolvimento (Nodemon)
É altamente recomendável usar o nodemon para que o servidor reinicie automaticamente sempre que você salvar uma alteração no código.

Instale o Nodemon (se ainda não o fez):

Bash

npm install -g nodemon
Inicie o servidor com Nodemon:

Bash

nodemon app.js
🌐 Rotas da API
Seu servidor expõe rotas para a URL base http://localhost:8000.

1. Rota de Arquivos Estáticos
Qualquer arquivo que você colocar na pasta public será acessível diretamente.

Método	URL	Descrição
GET	/nome-do-arquivo.html	Acessa um arquivo HTML dentro da pasta public.

Exportar para as Planilhas
Exemplo: Se houver um arquivo public/index.html, ele estará em http://localhost:8000/index.html.

2. Rotas de Produtos
As rotas para gerenciamento de produtos estão definidas no arquivo ./rotas/Produtos.js e são acessadas pelo prefixo /produtos.

Método	URL	Descrição
GET	/produtos	Busca e retorna a lista completa de produtos.
GET	/produtos/:id	Busca e retorna os detalhes de um produto específico (substitua :id pelo ID real).
POST	/produtos	Cria um novo produto (o corpo da requisição deve ser um JSON com os dados do produto).
PUT	/produtos/:id	Atualiza completamente um produto existente.
DELETE	/produtos/:id	Remove um produto específico.
Observação: ate agora só terminei o método GET

Exportar para as Planilhas
Exemplo de uso:

Para criar um novo produto, você enviaria uma requisição POST para http://localhost:8000/produtos com um corpo JSON como este:

JSON

{
  "nome": "Smartphone X",
  "preco": 1500.00
}
