const express = require("express");
const app = express();
const cors = require('cors');
const port = process.env.PORT || 4200;
const films = require('./src/films/films.json');

app.use(cors());

app.get("/films", (req, res) => {
    return res.json(films)
})

app.listen(port, () => {
    console.log('Servidor está rodando...')
})