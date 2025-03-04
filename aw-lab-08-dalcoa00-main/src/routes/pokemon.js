/**
 * Módulo que define un enrutador con todos los endpoints de la API REST
 * de Pokémon.
 *
 * Este módulo define la API REST /api/pokemon con los siguientes endpoints:
 * GET /          - Obtener una colección de Pokémon.
 * DELETE /:id    - Eliminar un Pokémon específico.
 * POST /         - Crear un Pokémon
 *
 * @module routes/pokemon
 */

// ------------------------------------------------------------------
// MÓDULOS A IMPORTAR (sintaxis Node)
// ------------------------------------------------------------------

// TODO: Ejercicio 4 (implementar)
// express
const express = require('express');
const router = express.Router();

// controlador de la API REST de Pokémon
const controller = require('../controllers/pokemon');

// ------------------------------------------------------------------
// ENRUTADOR Y ENDPOINTS
// ------------------------------------------------------------------

// TODO: Ejercicio 4 (implementar)
/** Enrutador para la API REST de Pokémon */
// Mapear cada endpoint con los manejadores del controlador
/**
 * ENDPOINT:  GET /
 * MANEJADOR: pkmn_api_controller.get
 * FINALIDAD: Obtener una colección de Pokémon.
 */
router.get('/', controller.get);

/**
 * ENDPOINT:  DELETE /:id
 * MANEJADOR: pkmn_api_controller.remove
 * FINALIDAD: Eliminar un Pokémon específico.
 */
router.delete(`/:id`, controller.remove);

/**
 * ENDPOINT:  POST /
 * MANEJADOR: pkmn_api_controller.create
 * FINALIDAD: Crear un Pokémon.
 */
router.post('/', controller.create);

// ------------------------------------------------------------------
// EXPORTAR CARACTERÍSTICAS (sintaxis Node)
// ------------------------------------------------------------------

// TODO: Ejercicio 4 (implementar)
// Exportar únicamente el enrutador
module.exports = router;