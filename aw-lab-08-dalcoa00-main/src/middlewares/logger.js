/**
 * Módulo para loggear por consola todas las peticiones HTTP recibidas.
 *
 * @module middleware/logger
 */

// ------------------------------------------------------------------
// MANEJADORES
// ------------------------------------------------------------------

/**
 * Muestra por consola los datos de cualquier petición HTTP recibida.
 *
 * @param {import("express").Request} req Objeto request de Express.
 * @param {import("express").Response} res Objeto response de Express.
 * @param {import("express").NextFunction} next Función middleware de Express
 */
const logRequests = (req, res, next) => {
  // TODO: Ejercicio 4 (implementar)
  // Obtener la fecha actual del servidor
  const date = new Date();

  // Mostrar por consola un mensaje que indique:
  // [hora_actual_formato ISO] método_HTTP url_base/path_url
  // cabeceras
  const isoDate = date.toLocaleString();
  console.log(`${isoDate}: Método HTTP: ${req.method}. URL: ${req.originalUrl}. Cabeceras: ${req.headers}`)
  
  // Si el método es POST o PUT, mostrar también por consola el body
  // del mensaje únicamente si sigue el formato de datos JSON
  if (req.method.toUpperCase === 'POST' || req.method.toUpperCase === 'PUT') {
    if (req.is('application/json')) {
      console.log(JSON.stringify(req.body));
    }
  }

  // Delegar a la siguiente función
  next();
};

// ------------------------------------------------------------------
// EXPORTAR CARACTERÍSTICAS (sintaxis Node)
// ------------------------------------------------------------------

// TODO: Ejercicio 4 (implementar)
// Exportar únicamente el manejador para loggear las peticiones
module.exports = logRequests;