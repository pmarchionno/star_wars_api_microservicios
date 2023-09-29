const server = require('./src/server');

const PORT = 8002;

async function main() {
  await server.listen(PORT);
  console.log(`Films service listenning on port ${PORT}`)
}

main();