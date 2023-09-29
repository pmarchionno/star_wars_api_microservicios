//Indice de todos los controladores de la carpeta
const { catchAsync } = require("../utils");

module.exports = {
  getPlanets: catchAsync(require("./getPlanets")),
  createPlanets: catchAsync(require("./createPlanets")),
}
