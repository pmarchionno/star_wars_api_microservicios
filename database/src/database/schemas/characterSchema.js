const { Schema } = require("mongoose");

const characterSchema = new Schema({
  _id: { type: String }, //Schema.Types.ObjectId Por defeto Mongoose asigna este tipo de datos
  name: String,
  height: String,
  mass: String,
  hair_color: String,
  skin_color: String,
  eye_color: String,
  birth_year: String,
  gender: String, //[MALE, FEMALE, NC]
  homeworld: { type: String, ref: "Planet" }, //Referencia al id del planeta
  films: [{ type: String, ref: "Film" }], //Array de referencias a ids de películas
});

characterSchema.statics.list = async function () {
  return await this.find()
    .populate("homeworld", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};

characterSchema.statics.get = async function (_id) {
  //return await this.findOne({ _id })
  return await this.findById(_id)
    .populate("homeworld", ["_id", "name"])
    .populate("films", ["_id", "title"]);
}

characterSchema.statics.insert = async function (character) {
  return await this.create(character);
}

module.exports = characterSchema;
