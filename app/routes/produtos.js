module.exports = function(app){
  app.get('/produtos', function(req, res){

    var connection = app.infra.connectionFactory();
    var produtoDAO = new app.infra.ProdutosDAO(connection);

  produtoDAO.lista(function(erros, resultados){
    res.format({
      html: function(){
        res.render('produtos/lista', {lista:resultados});
      },
      json: function(){
        res.json(resultados);
      }
    });
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
  res.render('produtos/form', {errosValidacao:{}, produto: {}});

});

app.post('/produtos/salva', function(req, res){

  var produto = req.body;
  req.assert('titulo', 'Título é obrigatório').notEmpty();
  req.assert('preco', 'Formato inválido').isFloat();
  var erros = req.validationErrors();
       if(erros) {
           res.format({
               html: function() {
                   res.status(400).render('produtos/form', {errosValidacao:erros, produto:produto});
               },
               json: function() {
                   res.status(400).json(errosValidacao);
               }
           });

           return;
       }


  var connection = app.infra.connectionFactory();
  var produtosDAO = new app.infra.ProdutosDAO(connection);
  produtosDAO.salva(produto, function(erros, resultados){
    console.log(erros);
    res.redirect('/produtos');


  });
  connection.end();
});
}
