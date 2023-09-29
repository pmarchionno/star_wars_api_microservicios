const mongoose = require("mongoose");
const { MONGO_URI } = require("../config/envs");

const conn = mongoose.createConnection(MONGO_URI); //Nos conectamos a la base de datos

// const Character = conn.model("Character", require("./schemas/characterSchema"));  //Tenemos definido el modelo de personajes
// const Film = conn.model("Film", require("./schemas/filmSchema"));
// const Planet = conn.model("Planet", require("./schemas/planetSchema"));

//Probamos la conección a la base de datos y consultamos el esquema que definimos
// Film.find()
//   .populate("planets")
//   .then(res => console.log(res[0]));

// Character.find()
//   .populate("homeworld")
//   .populate("films", ["_id", "title"]) //Limitamos la información que queremos visualizar
//   .then(res => console.log(res[0]));

module.exports = {
  Character: conn.model("Character", require("./schemas/characterSchema")),
  Film: conn.model("Film", require("./schemas/filmSchema")),
  Planet: conn.model("Planet", require("./schemas/planetSchema")),
}