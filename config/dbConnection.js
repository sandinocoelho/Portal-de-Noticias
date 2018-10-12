var mysql = require('mysql');

var connMysql = function(){
    console.log('Conexao com MySQL estabelecida!');
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'root',
        database : 'portalNoticias'
    });
};
module.exports = function(app){
    return connMysql;
};