const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/:nome/:lang', (req, res) => {
    //res.send("Bem vindo ao meu site!");
    var nome = req.params.nome;
    var lang = req.params.lang;
    var exibirMsg = true;

    var produtos = [
       "Doritos", "Coca-cola", "Leite"
    ]

    res.render("index",{
        nome: nome,
        lang: lang,
        empresa: "udemy",
        inscritos: 8000,
        msg: exibirMsg,
        produtos: produtos
    })
});

app.listen(8080, () => {
    console.log("App rodando !");
})
