/**
 * Módulo para crear diferentes componentes HTML utilizando la API Document
 * de JavaScript.
 *
 * @module html-components
 */

// Cargar módulos
import * as db from './database.mjs'

// ------------------------------------------------------------------
// COMPONENTES INTERNOS
// ------------------------------------------------------------------

/**
 * Crea un filtro en el frontend basado en las propiedades de las cartas.
 * @param {Array} cards - La lista de cartas para las cuales se va a crear el filtro.
 * @param {string} property - La propiedad de las cartas por la cual se va a filtrar (por ejemplo, "types", "colorIdentity", "rarity").
 * @param {string} selectorId - El ID del elemento selector del frontend donde se mostrarán las opciones de filtro.
 */
const createFilter = (cards, property, selectorId) => {
    // Obtener la lista de los diferentes valores que puede tener la propiedad en
    // cada una de las cartas de la base de datos.
    // Obtener el selector correspondiente al selectorId.
    // Añadir la lista de opciones al selector.
};

/**
 * Actualiza la lista de cartas del mazo en el frontend.
 */
const updateDeck = () => {
    // Obtener el apartado de la lista de cartas que componen el mazo.
    // Limpiar el contenido obtenido en el mazo.
    // Por cada carta del mazo:
    // - Crear elemento <li>.
    // - Crear elemento <article> donde su clase sea card-selected.
    // - Crear elemento <span> con la cantidad de copias de esa carta. 
    // - Crear elemento <button> donde su clase sea "icon-button" y data-name el nombre de la carta.
    // - Crear elemento <i> cuyas clases sean "ti ti-trash".
    // - Añade el elemento <i> a <button>.
    // - Añade <span>, el nombre de la carta y <button> a <article>.
    // - Añade <article> a <li>
    // Obtener los botones encargados de eliminar una carta del mazo.
    // Por cada botón añade un manejador de eventos que al hacer click
    // elimine esa carta del mazo. Después actualiza el mazo en el frontend.
};

/**
 * Actualiza los elementos del frontend con las cartas proporcionadas.
 * También gestiona la interacción del usuario con las cartas (selección, mostrar detalles, etc.).
 * @param {Array} data - La lista de cartas que se van a mostrar en el frontend.
 */
const updateCardElements = (data) => {
    // Obtener los resultados de las cartas.
    // Limpiar el contenido existente en el apartado de los resultados.
    // Por cada carta de la lista de cartas:
    // - Verificar si la carta tiene URL de la imagen.
    // - Crear un elemento <button> donde su clase sea "card", su data-name el nombre de la carta
    //   y que contenga la imagen de la carta.
    // - Añadir a los resultados un elemento <article> que contenga el elemento <button>

    // Obtener los botones de las cartas.
    // Por cada botón:
    // - Añadir un manejador de eventos que para el click añada la carta en el mazo
    //   y lo actualize en el frontend.
    // - Obtener el elemento de los detalles.
    // - Añadir un manejador de eventos para que cuando el ratón esté sobre la carta muestre
    //   los detalles de la carta: Nombre de la carta, coste de maná, tipo, rareza y descripción.
    // - Añadir un manejador de eventos para que cuando el ratón ya no esté sobre la carta
    //   deje de mostrar los detalles.
};

// Exportar características
export {createFilter, updateCardElements};

//Mensaje por consola para indicar que el módulo se ha cargado correctamente
console.log("Módulo html-components cargado correctamente");