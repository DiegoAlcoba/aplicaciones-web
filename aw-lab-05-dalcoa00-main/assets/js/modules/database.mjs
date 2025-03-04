/**
 * Módulo para trabajar sobre una base de datos de Pokémon.
 *
 * @module database
 */

// TODO: Cargar la base de datos
import * as db from '../db/data.js';

// ------------------------------------------------------------------
// OPERACIONES SOBRE LA BASE DE DATOS A EXPORTAR
// ------------------------------------------------------------------

/**
 * Busca en la base de datos todos aquellos Pokémon cuyo nombre empiece
 * por un valor dado.
 *
 * @param {string} query Nombre del Pokémon a buscar.
 * @returns {Array} Lista de Pokémon que cumplen con el criterio de búsqueda.
 */
const searchPokemonByName = (query) => {
  // TODO: a implementar
  // Recorrer la base de datos y, por cada entrada, quedarse únicamente
  // con aquellos elementos que comiencen por el nombre del pokémon indicado.
  // Para las comparaciones utiliza los correspondientes valores en minúsculas.

  const pokes = [];

  //Se recorren todos los elementos de la base de datos
  for (const pokemon of db) {
    //Compara el nombre del pokemon con la entrada todo en minúsculas
    if (pokemon.name.toLowerCase().startsWith(query.toLowerCase())) {
      //Si coincide, se incluye en el array de resultados
      pokes.push(pokemon);
    }
  }
  
  //Devuelve el array con los nombres de pokemon que coinciden
  return pokes;
};

// TODO: Exportar características
export default searchPokemonByName;

// TODO: Mostrar por consola que el módulo ha sido cargado con éxito
console.log("Módulo database.mjs cargado correctamente");