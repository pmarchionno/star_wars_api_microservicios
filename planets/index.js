const server = require('./src/server');

const PORT = 8003;

async function main() {
  await server.listen(PORT);
  console.log(`Planets service listenning on port ${PORT}`)
}

main();