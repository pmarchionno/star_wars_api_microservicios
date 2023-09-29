//Indice de todos los controladores de la carpeta
const { catchAsync } = require("../utils");

module.exports = {
  getFilms: catchAsync(require("./getFilms")),
  createFilms: catchAsync(require("./createFilms")),
}
