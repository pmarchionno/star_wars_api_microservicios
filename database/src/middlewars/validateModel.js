const { ClientError } = require("../utils/errors");

module.exports = (req, res, next) => {
  const { model } = req.params;
  if (["Character", "Film", "PLanet"].includes(model)) {
    return next();
  } else {
    throw new ClientError("Model not found", 404);
  }
}