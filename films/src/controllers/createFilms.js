module.exports = async (req, res) => {
  const newFilm = await Character.create();
  response(res, 201, newFilm); //res.status(200).send("Create new Film");
}