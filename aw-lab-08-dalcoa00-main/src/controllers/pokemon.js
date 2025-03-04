/**
 * Módulo que define un controlador con una colección de manejadores
 * para responder a peticiones HTTP sobre la API REST de Pokémon.
 *
 * @module controllers/pokemon-controller
 */

// ------------------------------------------------------------------
// MÓDULOS A IMPORTAR (sintaxis Node)
// ------------------------------------------------------------------

// TODO: Ejercicio 5 (implementar)
// modelo de datos de Pokémon
const modelPoke = require('../models/pokemon'); 

// ------------------------------------------------------------------
// MANEJADORES
// ------------------------------------------------------------------

/**
 * Obtener una colección de Pokémon. Este manejador soporta el parámetro
 * de consulta "search" dentro del path de la URL para poder filtrar
 * por nombre los resultados de la colección. La respuesta siempre devolverá
 * un código 200 y en el body un objeto JSON con los propios resultados
 * de la búsqueda.
 *
 * @param {import("express").Request} req Objeto de petición.
 * @param {import("express").Response} res Objeto de respuesta.
 */
const get = async (req, res) => {
  // TODO: Ejercicio 5 (implementar)
  // Extraer el parámetro de consulta "search"
  const searchQuery = req.query.search;

  // Realizar la consulta a la base de datos de Pokémon
  let pokemons;

  //La búsqueda en el modelo de datos se realiza con el nombre (query) y es insensible a mayúsculas o minúsculas
  pokemons = await modelPoke.find(searchQuery);

  // Imprimir por consola un mensaje: X Pokémon encontrados.
  console.log(`Se han encontrado ${pokemons.length} pokémons.`);

  // Devolver un código 200 junto a los resultados en formato JSON
  res.status(200).json(pokemons);

  return;
};

/**
 * Crear un Pokémon. En función de como se procesa la petición,
 * la respuesta será:
 *
 * - Si la petición tiene éxito, devuelve el código 201 y un objeto JSON
 *   con los datos del Pokémon insertado en la base de datos.
 * - Si la petición falla, devuelve el código 400 y el JSON:
 *   ```
 *   {
 *      message: razón_por_la_que_no_se_pudo_crear
 *   }
 *   ```
 *
 * @param {import("express").Request} req Objeto request de Express.
 * @param {import("express").Response} res Objeto response de Express.
*/
const create = async (req, res) => {
  // TODO: Ejercicio 5 (implementar)
  try {
    // Extraer los datos del Pokémon del cuerpo de la petición
    const name = req.body.name.english;
    const type = req.body.type;
    const species = req.body.species;
    const sprite = req.body.image.sprite;
    const hires = req.body.image.hires;  

    const newPokemon = {
      name : name,
      type : type,
      species : species,
      image: {sprite : sprite, hires : hires}
    };

    // Si tuviera una propiedad "id", eliminarla
    if (newPokemon.id) {
      newPokemon.id = '';
    }

    // Insertar el Pokémon en la base de datos
    const savedPoke = await modelPoke.create(newPokemon);

    // Imprimir el resultado de la operación por consola
    console.log(`Pokémon creado correctamente!`);
    console.log(newPokemon);

    // Devolver un código 201 junto al objeto recién insertado
    res.status(201).json(newPokemon);

  } catch(error) {
      // Imprimir por consola el error
      console.error('Error al crear el pokémon: ', error);
      
      // Devolver un código 400 junto al mensaje de error en formato JSON
      res.status(400).json(error);
  }
};

/**
 * Eliminar un Pokémon. En función de como se procesa la petición,
 * la respuesta será:
 *
 * - Si la petición tiene éxito, devuelve el código 204.
 * - Si la petición falla, devuelve el código 404 y el JSON:
 *   ```
 *   {
 *      message: razón_por_la_que_no_se_pudo_eliminar
 *   }
 *   ```
 *
 * @param {import("express").Request} req Objeto request de Express.
 * @param {import("express").Response} res Objeto response de Express.
 */
const remove = async (req, res) => {
  // TODO: Ejercicio 5 (implementar)
  try {
    // Extraer el identificador (id) de los parámetros de la URL
    const idPokemon = req.body.id;

    // Eliminar el Pokémon de la base de datos
    await modelPoke.remove(idPokemon);

    // Imprimir el resultado de la operación por consola
    console.log('Pokémon eliminado correctamente!');

    // Devolver un código 204
    res.status(204);

  } catch(error) {
    // Imprimir por consola el error
    console.error('Se ha producido un error al eliminar el pokémon: ', error);

    // Devolver un código 404 junto al mensaje de error en formato JSON
    res.status(404).json(error);
  }
};


// ------------------------------------------------------------------
// API A EXPORTAR (sintaxis Node)
// ------------------------------------------------------------------

// TODO: Ejercicio 4
// Exportar todos los manejadores definidos en este controlador
module.exports = {get, create, remove};