module.exports = function(app){
  var listaProdutos = function(req, res, next) {
    var connection = app.infra.connectionFactory();
    var produtosDAO = new app.infra.ProdutosDAO(connection);

    produtosDAO.lista(function(err, results) {
        if(err) {
            return next(err);
        }
        res.format({
            html: function() {
                res.render('produtos/lista', {lista:results});
            },
            json: function() {
                res.json(results);
            }
        });
    });

    connection.end();
}

app.get('/produtos', listaProdutos);

app.get('/produtos/json', function(req, res) {
    var connection = app.infra.connectionFactory();
    var produtosDAO = new app.infra.ProdutosDAO(connection);

    produtosDAO.lista(function(err, results) {
        res.json(results);
    });

    connection.end();
});

app.get('/produtos/form', function(req, res) {
  res.render('produtos/form', {errosValidacao:{}, produto:{}});
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

app.post('/produtos', function(req, res){

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
                   res.status(400).json(erros);
               }
           });

           return;
       }


  var connection = app.infra.connectionFactory();
  var produtosDAO = new app.infra.ProdutosDAO(connection);
  produtosDAO.salva(produto, function(erros, resultados){
    res.redirect('/produtos');

  });
  connection.end();
});
}
