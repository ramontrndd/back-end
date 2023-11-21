const express = require("express");
const app = express()
const port = process.env.PORT || 5555

const films = require("./src/films/films.json")

app.get("/films", (req, res) => {
    return res.json(films)
});


app.listen(port, () => {
    console.log('Server is running...')
})