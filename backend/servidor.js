const express = require('express');
const http = require('http');
const cors = require('cors');

const app = express();
const hostname = '127.0.0.1';
const port = 3000;

// Middleware para habilitar CORS
app.use(cors());

// Rota simples
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Criar o servidor HTTP usando Express
const server = http.createServer(app);

// Iniciar o servidor
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
