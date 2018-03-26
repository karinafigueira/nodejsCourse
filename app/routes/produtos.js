module.exports = function(app){
  app.get('/produtos', function(req, res){
    var connection = app.infra.connectionFactory();
    var produtoDAO = new app.infra.ProdutosDAO(connection);

  produtoDAO.lista(function(erros, resultados){
    res.render('produtos/lista', {lista:resultados});
  });
  connection.end();
});

app.get('produtos/remove', function(){

  var connection = app.infra.connectionFactory();
  var produtoDAO = app.infra.ProdutosDAO;
  var produto = ProdutosDAO.carrega(id, callback);

  if(produto){
    produtoBanco.remove(connection,produto,callback);
  }
});

app.get('/produtos/form', function(req, res){
  res.render('produtos/form');

});
}
