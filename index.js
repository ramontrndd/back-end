const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5555;
const films = require("./src/films/films.json");

// Defina a lista branca de origens permitidas
const whitelist = ['http://localhost:4200/', 'https://ramontrndd.github.io/'];

// Configuração do middleware de opções CORS
const corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (whitelist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true }; // Permitir a origem solicitada
  } else {
    corsOptions = { origin: false }; // Desabilitar CORS para esta solicitação
  }
  callback(null, corsOptions);
};

// Aplicar middleware de CORS com base nas opções da lista branca
app.use(cors(corsOptionsDelegate));

// Rota para obter filmes
app.get("/films", (req, res) => {
    return res.json(films);
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});