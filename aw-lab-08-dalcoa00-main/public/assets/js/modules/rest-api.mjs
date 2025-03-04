/**
 * Módulo para realizar consultas a la API REST utilizando la API Fetch.
 *
 * @module rest-api
 */

// TODO: ** LABORATORIO 08: Ejercicio 3 **
// Modificar URL base
/**
 * URL base de la API REST.
 */
const baseURL = "http://localhost:3000/api/pokemon";

// ------------------------------------------------------------------
// OPERACIONES SOBRE LA API REST
// ------------------------------------------------------------------

/**
 * Busca todos aquellos Pokémon cuyo nombre contenga un valor dado.
 *
 * @param {string} query Nombre del Pokémon a buscar.
 * @returns {Promise<Response>} Posible resultado de la operación asíncrona.
 */
const searchPokemonByName = (query) => {
  // Petición: GET /api/pokemon?search={query}
  return fetch(`${baseURL}?search=${query}`, { method: "GET" });
};

/**
 * Crea un nuevo Pokémon con los datos especificados.
 *
 * @param {FormData} data Datos del Pokémon a enviar.
 * @returns {Promise<Response>} Posible resultado de la operación asíncrona.
 */
const createPokemon = (data) => {
  // TODO: ** LABORATORIO 08: Ejercicio 3 **
  // Transformar el FormData en un object normal (siguiendo la estructura
  // del modelo de datos del backend) para poder serializarlo después
  // a JSON. Para ello, utilizar el método get() para obtener tipos normales
  // y getAll() para obtener Arrays
  const pokemon = {
    name: {
      english: data.get('name.english')
    },
    type: data.getAll('type'),
    species: data.get('species'),
    image: {
      sprite: data.get('image.sprite'),
      hires: data.get('image.hires')
    }
  }

  // Petición: POST /api/pokemon/
  return fetch(baseURL, {
    method: "POST",
    // TODO: ** LABORATORIO 08: Ejercicio 3 **
    // Enviar los datos como un JSON
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(pokemon)
  });
};

/**
 * Elimina un Pokémon específico a partir de su identificador.
 *
 * @param {string} query Identificador del Pokémon.
 * @returns {Promise<Response>} Posible resultado de la operación asíncrona.
 */
const deletePokemonById = (query) => {
  // Petición: DELETE /api/pokemon/{id}
  return fetch(`${baseURL}/${query}`, { method: "DELETE" });
}

// Exportar características
export { searchPokemonByName, createPokemon, deletePokemonById };

// Mostrar por consola que el módulo ha sido cargado con éxito
console.log("Módulo rest-api cargado con éxito.");