//Función de orden superior: toma una función, la mejora y retorna la función modificada
module.exports = (fn) => {
  return function (req, res, next) {
    fn(req, res).catch((err) => {
      next(err);
    }) //La función fn devuelve una promesa, entonces puedo capturar lo que devuelve mediante un catch
  }
}
