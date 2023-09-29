const server = require('./src/server');

const PORT = 8004;

const { Character, Film } = require("./src/database");

async function main() {
  // Character.list().then(res => console.log(res));
  // Film.list().then(res => console.log(res));
  //Character.get(1).then(res => console.log(res));

  // Character.insert({
  //   _id: "200",
  //   name: "Prueba",
  //   birth_year: "1998",
  //   campoInexistente: "asdf", //Este campo no se inserta porque NO existe en la base de datos
  // }).then(res => console.log(res));

  await server.listen(PORT);
  console.log(`Database service listenning on port ${PORT}`)
}

main();
