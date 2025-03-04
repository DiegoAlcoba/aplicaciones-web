/**
 * Script para gestionar los eventos del frontend.
 */

//Cargar módulos
import * as db from './modules/database.mjs';
import * as html from './modules/html-components.mjs';


// ------------------------------------------------------------------
// MANEJADORES DE EVENTOS
// ------------------------------------------------------------------

//db.fetchData();

/**
 * Busca en la base de datos de cartas Magic según los datos del formulario de
 * búsqueda y actualiza el apartado de los resultados de cartas.
 *
 * @param {Event} event Información del evento que ha sucedido.
 */
const searchCardHandler = (event) => {
    // Evitar la propagación de eventos para que no se envíe el formulario
    // Obtener los datos del formulario
    // Realizar la búsqueda en la base de datos
    // Actualizar el apartado de los resultados
};


/**
 * Aplica un filtro a los resultados de cartas mostrados en función del color,
 * tipo o rareza de la carta.
 * 
 * @param {Event} event Información del evento que ha sucedido.
 */
const applyFilterHadler = (event) => {
  // Obtener los valores de los selectores de color, tipo y rareza y filtrar 
  // las cartas de la base de datos que contengan esos valores.
};

// Obtener los datos de cartas de Magic mediante el uso de la API Fetch

// ------------------------------------------------------------------
// ASIGNACIÓN DE EVENTOS
// ------------------------------------------------------------------

/*
 * Agregar un manejador al formulario de búsqueda para poder realizar
 * las búsquedas en la base de datos al enviar los datos del mismo.
 */

/*
 * Agregar un manejador al cambio de valor de los selectores para poder
 * aplicar los filtros correspondientes a los datos de la base de datos.
 */
