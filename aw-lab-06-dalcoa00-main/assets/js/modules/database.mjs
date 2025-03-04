/**
 * Módulo para trabajar sobre una base de datos de cartas Magic.
 *
 * @module database
 */

// Cargar módulos

/**
 * Variable que almacena los datos de las cartas obtenidos de la API.
 * @type {Array}
 */

/**
 * Array que representa el mazo de cartas del usuario.
 * @type {Array}
 */


// ------------------------------------------------------------------
// OPERACIONES SOBRE LA BASE DE DATOS A EXPORTAR
// ------------------------------------------------------------------

//Array que contiene todas las cartas posibles
//const allCards = [];

//Array que contiene el mazo con las cartas del usuario
let maze = [];

/**
 * Realiza una solicitud a la API para obtener los datos de las cartas de Magic.
 * Los datos obtenidos se utilizan para crear las opciones de los filtros y actualizar los elementos del frontend.
 */
const fetchData = () => {
    // Realiza una solicitud GET a la API de Magic: The Gathering para obtener los datos de las cartas.
    fetch('https://api.magicthegathering.io/v1/cards')
        .then(function (response) {
            if (response.ok) {
                // Convierte la respuesta en formato JSON.
                return response.json();
            }
            else {
                console.log("No se pudieron obtener los datos de la API");
            }
        })
        // Cuando la promesa se resuelve correctamente asigna los datos a la lista de cartas y
        // crea filtros en el frontend basados en los tipos, colores y rarezas que tienen las cartas.
        .then (data => {
            const allCards = data.cards;
            console.log(data);

            //flatMap para los que tienen varios valores lo reduzca a uno único
            const types = [new Set(allCards.flatMap(card => card.types))];
            const colors = [new Set(allCards.flatMap(card => card.colors))];
            const rarities = [new Set(allCards.map(card => card.rarity))];

            //Logs para comprobar cuáles hay en cada uno
            console.log(types);
            console.log(colors);
            console.log(rarities);
        })

        // Si ocurre un error durante la solicitud genera un mensaje de error.
        .catch(function (error) {
            console.log("Hubo un problema con la petición a la API" + error.message);
        });

        
};

fetchData();

/**
 * Añade una carta al mazo del usuario.
 * @param {string} cardName El nombre de la carta que se desea añadir al mazo.
 */
const addCardToDeck = (cardName) => {
    // Busca la carta en el mazo del usuario basándose en el nombre de la carta.
    // Verifica si la carta ya está en el mazo.
    // Si la carta ya está en el mazo y es de tipo "Land" o la cantidad de copias es menor que 4,
    // aumenta la cantidad de la carta en el mazo.
    // Si la carta no está en el mazo, la añade al mazo con una cantidad inicial de 1.
    let tengo = false;

    //Comprobar cuántas cartas iguales hay en el mazo
    maze.forEach(elem => {
        if (elem.name === cardName) {
            tengo = true;
            elem.cantidad++; 
        }
    });

    //Condiciones para añadir la carta al mazo o no
    maze.forEach(elem => {
        if (tengo === true && (elem.types === 'Land' || cantida < 4)) {
            elem.cantidad++;
        }
    
        if (tengo === false) {
            elem.cantidad++;
        }
    });
};

/**
 * Elimina una carta del mazo del usuario.
 * @param {string} cardName El nombre de la carta que se desea eliminar del mazo.
 */
const removeCardFromDeck = (cardName) => {
    // Busca el índice de la carta en el mazo del usuario basándose en el nombre de la carta.
    // Verifica si la carta está en el mazo, si está en el mazo reduce la cantidad y 
    // si la cantidad es 0 la elimina del mazo.

};

/**
 * Obtiene los detalles de una carta específica.
 * @param {string} name El nombre de la carta de la cual se desean obtener los detalles.
 * @returns {Object} Un objeto que representa la carta.
 */
const getCardDetails = (name) => {
    // Busca y devuelve los detalles de una carta específica basándose en el nombre de la carta.
};

/**
 * Aplica un filtro a los datos de las cartas basado en el color, tipo y rareza seleccionados.
 */
const applyFilter = () => {
    // Obtiene los valores seleccionados de los filtros de color, tipo y rareza.
    // Filtra los datos de las cartas según los valores seleccionados.
    // Actualiza los elementos de cartas en el frontend con los datos filtrados.
};

/**
 * Busca cartas por nombre.
 * @param {string} query El término de búsqueda.
 * @returns {Array} Un array que contiene las cartas que coinciden con el término de búsqueda.
 */
const searchCardByName = (query) => {
    // Busca y devuelve las cartas cuyos nombres comiencen con el término de búsqueda
};

// Exportar características
export {fetchData, addCardToDeck, removeCardFromDeck, getCardDetails, applyFilter, searchCardByName};

//Mensaje por consola para indicar que el módulo se ha cargado correctamente
console.log("Módulo database cargado correctamente");