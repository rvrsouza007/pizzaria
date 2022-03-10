const express = require("express");

const PizzasRouter = require("./routers/PizzasRouter")

const path = require("path")

const app = express()


app.use('/', PizzasRouter)

app.set('view engine','ejs');

app.use(express.static(path.join(__dirname, 'public')))

app.listen(3000);
console.log("Servidor rodando na porta 3000")
