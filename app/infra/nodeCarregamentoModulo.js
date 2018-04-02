function require(path){
  var codigoDoModulo = carregado(path);
  var funcaoDeCarregamento = function(){
      eval(codigoDoModulo);
  }
  var module = {
      exports :{}
  };
  funcaoDeCarregamento(module, module.exports);
  return module;
}
