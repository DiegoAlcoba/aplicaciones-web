/**
 * Módulo para realizar consultas a la API REST utilizando la API Fetch.
 *
 * @module rest-api
 */

/**
 * TODO: implementar
 * URL base de la API REST.
 */
const baseURL = "http://localhost:5000/api/pokemon";

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
  // TODO: implementar
  // Petición: GET /api/pokemon?search={query}
  const url = `${baseURL}?search=${query}`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al buscar el Pokémon indicado');
      }
      
      return response.json();
    });
};

/**
 * Crea un nuevo Pokémon con los datos especificados.
 *
 * @param {Object} data Datos del Pokémon a enviar.
 * @returns {Promise<Response>} Posible resultado de la operación asíncrona.
 */
const createPokemon = (data) => {
  // TODO: implementar
  // Petición: POST /api/pokemon/
  const url = `${baseURL}/`;

  return fetch(url, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al crear el Pokémon indicado');
      }

      return response.json();
    });
};

/**
 * Elimina un Pokémon específico a partir de su identificador.
 *
 * @param {string} query Identificador del Pokémon.
 * @returns {Promise<Response>} Posible resultado de la operación asíncrona.
 */
const deletePokemonById = (query) => {
  // TODO: implementar
  // Petición: DELETE /api/pokemon/{id}
  const url = `${baseURL}/${query}`;

  return fetch(url, {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al aliminar el Pokémon indicado');
      }

      return response.json();
    });
};

// Exportar características
export { searchPokemonByName, createPokemon, deletePokemonById };

// Mostrar por consola que el módulo ha sido cargado con éxito
console.log("Módulo rest-api cargado con éxito.");