//Creamos una clase de error con el mensaje y el statusCode
//De esta forma podemoos mandar al controlador el statusCode deseado
class ClientError extends Error {
  constructor(message, statusCode = 400) {
    super(message);
    this.statusCode = statusCode;
  }
}

module.exports = { ClientError };