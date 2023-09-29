//Indice de todos los controladores de la carpeta
const { catchAsync } = require("../utils");

module.exports = {
  getCharacters: catchAsync(require("./getCharacters")), //Exportamos el controlador mejorado por catchAsync
  createCharacters: catchAsync(require("./createCharacters")),
}
