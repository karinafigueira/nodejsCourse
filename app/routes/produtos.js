module.exports = function(app){
  app.get('/produtos', function(req, res){
    var connection = app.infra.connectionFactory();
    var produtoBanco = new app.infra.ProdutosDAO(connection);

  produtoBanco.lista(function(erros, resultados){
    res.render('produtos/lista', {lista:resultados});
  });
  connection.end();
});

app.get('produtos/remove', function(){

  var connection = app.infra.connectionFactory();
  var produtoBanco = app.infra.ProdutosDAO;
  var produto = ProdutosDAO.carrega(id, callback);

  if(produto){
    produtoBanco.remove(connection,produto,callback);
  }
});

}
