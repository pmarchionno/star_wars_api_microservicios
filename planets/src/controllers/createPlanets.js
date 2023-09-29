module.exports = async (req, res) => {
  const newplanet = await Character.create();
  response(res, 201, newplanet);
}