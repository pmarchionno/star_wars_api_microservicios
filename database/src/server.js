const express = require('express'); //cargo el módulo
const morgan = require('morgan');
const server = express(); //ejecuto express mediane la función

server.use(express.json());
server.use(morgan('dev')); //Utilizo el modulo de morgan

server.use(require("./routes"));

//server.use("/characters", require('./routes')); //Uso las rutas definidas

//Controlador último que se ejecuta si no se encuentra ningún endpoint que coincida
server.use("*", (req, res) => {
  res.status(404).send("Not Found")
});

// sobreescribir el controlador (manejador) de errores de express
server.use((err, req, res, next) => {
  res.status(err.statusCode || 500).send({
    error: true,
    message: err.message,
  });
})

module.exports = server; //exporto mi variable porque no deseo utilizarla aquí sino desde otros módulos
