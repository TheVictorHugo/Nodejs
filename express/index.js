const express = require("express");
const app = express();

app.get("/", (req, res) =>{
    res.send("<h1>Bem vindo ao guia do programador</h1>")
})

app.get("/blog", (req, res) => {
    res.send("Bem vindo ao meu blog!")
})

app.get("/canal/youtube", (req, res) => {
    res.send("<h1>bem vindo ao meu canal!</h1>")
})


app.listen(3000,function(error){
    if(error){
        console.log("Ocorreu um erro");
    }else{
        console.log("Servidor inicado com sucesso!!!");
    }
})