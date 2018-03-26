var mysql = require('mysql');

function createDBConnection(){

  return mysql.createConnection({
    host : 'localhost',
    user : 'karina',
    password : 'password',
    database : 'casadocodigo_nodejs'
  });

}

module.exports = function(){

    return createDBConnection;

}
