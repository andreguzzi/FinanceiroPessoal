const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('financeiro', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

// por recomendação nao disponibilizar este trecho para o usuario final
sequelize.authenticate().then(function(){
    console.log("Conexão com o banco de dados realizado com sucesso!");
}).catch(function(err){
    console.log("Erro: Conexão com o banco de dados não realizado com sucesso!");
});

module.exports = sequelize;