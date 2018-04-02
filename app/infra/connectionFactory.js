var mysql = require('mysql');

function createDBConnection(){
  console.log("NODE_ENV: " + process.env.NODE_ENV);
  if(!process.env.NODE_ENV)
  
    return mysql.createConnection({
      host:'localhost',
      user:'karina',
      password:'password',
      database:'casadocodigo_nodejs'
    });
  }

  if(process.env.NODE_ENV == 'test'){
    console.log("NODE_ENV: " + process.env.NODE_ENV);
    return mysql.createConnection({
        host:'localhost',
        user:'karina',
        password:'password',
        database:'casadocodigo_nodejs_test'
    });
  }

  module.exports = function(){

    return createDBConnection;

}
