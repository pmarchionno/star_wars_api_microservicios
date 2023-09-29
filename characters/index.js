const server = require('./src/server');

const PORT = 8001;

async function main() {
  await server.listen(PORT);
  console.log(`Characters service listenning on port ${PORT}`)
}

main();