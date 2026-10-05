// 1. Importa as bibliotecas que vamos usar
const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('./config/db');

// 2. Cria a aplicação (o "servidor" em si)
const app = express();

// 3. Middlewares: funções que rodam em TODA requisição, antes de chegar nas rotas
app.use(cors());            // libera o front-end a acessar a API
app.use(express.json());    // permite que o servidor entenda JSON enviado pelo front-end

// 4. Rota de teste, só para confirmar que o servidor está vivo
app.get('/', (req, res) => {
  res.json({ mensagem: 'API da ONG Almas de Gato rodando!' });
});

// 5. Define a porta e liga o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});