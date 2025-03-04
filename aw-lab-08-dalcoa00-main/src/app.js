/**
 * Punto de entrada del software que hace de servidor web.
 */

// ------------------------------------------------------------------
// MÓDULOS A IMPORTAR (sintaxis Node)
// ------------------------------------------------------------------

// TODO: Ejercicio 2
// cargar módulo express
const express = require('express');

// TODO: Ejercicio 4
// Logger de peticiones HTTP
// Enrutador de la API REST de Pokémon
const logger = require('./middlewares/logger');
const router = require('./routes/pokemon');

// ------------------------------------------------------------------
// CREACIÓN DEL SERVIDOR WEB
// ------------------------------------------------------------------

/**
 * Crea, configura e inicializa el servidor web.
 */
const startWebServer = () => {
  // APLICACIÓN EXPRESS
  // ================================================================

  // TODO: Ejercicio 2
  // Crear la aplicación Express
  const app = express();

  // Definir los parámetros del servidor (puerto 3000)
  const port = 3000;

  // MIDDLEWARE
  // ================================================================

  // TODO: Ejercicio 3
  // ** Servir todo el frontend como contenido estático **
  // Utilizar la variable global __dirname para obtener la ruta del directorio actual
  // y navegar hasta la carpeta public (donde está el frontend)
  app.use(express.static(`${__dirname}/../public`));

  // TODO: Ejercicio 4
  // ** Servir la API REST de Pokémon **
  // Cargar el middleware para analizar el body de peticiones en formato JSON
  app.use(express.json());

  // Servir la API REST sobre el path /api/pokemon, cargando primero
  // el middleware de logging y luego el enrutador
  app.use(logger);
  app.use('/api/pokemon', router);

  // ARRANCAR SERVIDOR
  // ================================================================

  // TODO: Ejercicio 2
  // Inicializar la aplicación con los parámetros indicados. Si todo
  // va bien, mostrar el mensaje:
  // "Servidor web iniciado en el puerto <X>. Pulse Ctrl+C para deternelo."
  app.listen(port, () => {
    console.log(`Servidor web iniciado en el puerto ${port}. Pulse Ctrl+C para detenerlo.`)
  })
};

// Ejecutar la aplicación
console.log("Inicializando el servidor web...");
startWebServer();