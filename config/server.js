var express = require ('express');
var consign = require ('consign');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine','ejs');
app.set('views','./app/views');

app.use(bodyParser.urlencoded({extended:true}));
//aqui parametrizamos como o bodyParser vai tratar os formulários.
//o parametro extend:true vai permitir que seja implementada através de Json
//as url codificadas.

consign()
    .include('app/routes')
    .then('config/dbConnection.js')//incluido a conexão com o banco no consign
    .then('app/models')//inclui o diretório de models
    .into(app);
//O consign reconhece todos os arquivos da pasta routes e inclui
//dentro do servidor - app
module.exports=app; //o módulo vai retornar a variável app
