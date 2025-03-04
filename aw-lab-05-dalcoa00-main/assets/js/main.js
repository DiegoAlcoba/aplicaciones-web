/**
 * Script para gestionar los eventos del frontend.
 */

// TODO: Cargar módulos
import * as db from './modules/database.mjs';
import * as html from './modules/html-components.mjs';

// ------------------------------------------------------------------
// MANEJADORES DE EVENTOS
// ------------------------------------------------------------------

/**
 * Busca en la base de datos Pokémon según los datos del formulario de
 * búsqueda y actualiza el apartado de los resultados.
 *
 * @param {Event} event Información del evento que ha sucedido.
 */
const searchPokedexHandler = (event) => {
  // Evitar la propagación de eventos para que no se envíe el formulario
  event.preventDefault();

  // TODO: a implementar
  // Obtener los datos del formulario
  const data = new FormData(event.target);
  const pokeName = data.get('name');

  // Realizar la búsqueda en la base de datos
  const search = db.searchPokemonByName(pokeName);

  // Actualizar el apartado de los resultados
  html.updatePokedexArticle(search);

  // Si hubo resultados, actualizar también la columna del tipo de Pokémon
  // para aplicar el estilo de "badges"
  if (search.length > 0) {
    html.updatePokemonTypeTableColumn();
  }
};

// ------------------------------------------------------------------
// ASIGNACIÓN DE EVENTOS
// ------------------------------------------------------------------

/*
 * TODO: agregar un manejador al formulario de búsqueda para poder realizar
 * las búsquedas en la base de datos al enviar los datos del mismo.
 */
const formHandler = document.forms['dex-search'];
formHandler.addEventListener('submit', searchPokedexHandler);

/*
 * TODO: agregar un manejador a la propia ventana del navegador para inicializar
 * el estilo de la página nada más que se cargue.
 */
window.addEventListener('load', () => {
  html.updatePageStyle();
});