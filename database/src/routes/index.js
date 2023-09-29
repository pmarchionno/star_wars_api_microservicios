const { Router } = require("express");
//const { Character, Film, Planet } = require("../database");
const store = require("../database");
const { validateModel } = require("../middlewars");

const router = Router();

// router.get("/character", async (req, res) => {
//   const response = await Character.list();
//   res.status(200).json(response);
// })

// router.get("/films", async (req, res) => {
//   const response = await Film.list();
//   res.status(200).json(response);
// })

// router.get("/planets", async (req, res) => {
//   const response = await Planet.list();
//   res.status(200).json(response);
// })

// Todos los métodos anteriores podemos generalizarlos en el siguiente método
router.get("/:model", validateModel, async (req, res) => {
  const { model } = req.params; //el modelo viene por params
  const response = await store[model].list();
  res.status(200).json(response);
})

router.get("/:model/:id", validateModel, async (req, res) => {
  const { model, id } = req.params;
  const response = await store[model].get(id);
  res.status(200).json(response);
})

router.get("/:model/:create", validateModel, async (req, res) => {
  const { model, create } = req.params;
  const response = await store[model].insert(create);
  res.status(200).json(response);
})

module.exports = router;
