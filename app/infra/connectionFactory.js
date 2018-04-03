var mysql = require('mysql');

function createDBConnection() {
  console.log("NODE_ENV: " + process.env.NODE_ENV);

/*   if(!process.env.NODE_ENV == 'development') {
    
      return mysql.createConnection({
        host:'localhost',
        user:'karina',
        password:'password',
          database: 'casadocodigo_nodejs'
      });
  } else { */
      return mysql.createConnection({
        host:'localhost',
        user:'karina',
        password:'password',
          database: 'casadocodigo_nodejs_test'
      });
  
  //}
}

module.exports = function() {
  return createDBConnection;
}

