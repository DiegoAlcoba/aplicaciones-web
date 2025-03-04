/**
 * Script para gestionar los eventos del frontend.
 */

// Cargar módulos
import * as rest_api from "./modules/rest-api.mjs";
import * as html from "./modules/html-components.mjs";

// ------------------------------------------------------------------
// MANEJADORES DE EVENTOS
// ------------------------------------------------------------------

/**
 * Busca en la base de datos Pokémon según los datos del formulario de
 * búsqueda y actualiza el apartado de los resultados.
 *
 * @param {Event} event Información del evento que ha sucedido.
 */
const searchPokedexHandler = async (event) => {
  // TODO: implementar
  // Evitar la propagación de eventos para que no se envíe el formulario
  event.preventDefault();

  // Obtener los datos del formulario
  const formData = document.forms['dex-search'];
  const searchQuery = formData['name'].value;
  
  // Realizar la petición a la API REST
  try {
    const pokemonData = await rest_api.searchPokemonByName(searchQuery); //Petición a la API

    //Debug************************************
    console.log(pokemonData);

    // Actualizar el apartado de los resultados
    html.updatePokedexArticle(pokemonData);

    // Si hubo resultados, actualizar también la columna del tipo de Pokémon
    // para aplicar el estilo de "badges"
    // También actualizar la columna de los botones para asignar el handler
    // que elimina un Pokémon
    if (pokemonData.length > 0) {
      html.updatePokemonTypeTableColumn();
      html.updatePokemonActionTableColumn(deletePokemonHandler);
    }

  } catch(error) {
    // Si ocurrió algún error, mostrar una alerta con el error
    window.alert('Error al buscar el Pokémon indicado: ' + error.message);
  }
};

/**
 * Crea un nuevo Pokémon según los datos del formulario de crear un Pokémon
 * y muestra una alerta al usuario.
 *
 * @param {Event} event Información del evento que ha sucedido.
 */
const createPokemonHandler = async (event) => {
  // TODO: implementar
  // Evitar la propagación de eventos para que no se envíe el formulario
  event.preventDefault();
  
  // Crear un nuevo FormData para enviar todos los datos del formulario
  const form = document.forms['dex-create'];
  const pokemonData = new FormData(form);   

  // Agregar la propiedad name[english] para almacenar el nombre
  pokemonData.set("name[english]", pokemonData.get("name"));
  // Eliminar la propiedad name
  pokemonData.delete("name");
  // Agregar las propiedades image[sprite] e image[hires]
  pokemonData.set("image[sprite]", pokemonData.get("sprite"));
  pokemonData.set("image[hires]", pokemonData.get("hires"));
  // Eliminar las propiedades sprite y hires
  pokemonData.delete("sprite");
  pokemonData.delete("hires");
  // Obtener un Array con todos los tipos
  const types = pokemonData.get("type");
  // Eliminar la propiedad type
  pokemonData.delete("type");
  // Agregar la propiedad type[] y rellenarla con todos los tipos que hubiera
  pokemonData.set("type[]", types);
  
  // Realizar la petición a la API REST
  try {
    const newPokemon = await rest_api.createPokemon(pokemonData);

    // Notificar al usuario de que todo ha ido correctamente con el
    // mensaje "Pokémon creado correctamente"
    window.alert('Pokémon creado correctamente');

    // Reiniciar los campos del formulario
    form.reset();

    // Reiniciar los resultados de búsqueda
    const resetResults = document.getElementById('dex-results');
    resetResults.innerHTML = '';

  } catch(error) {
    // Si ocurrió algún error, mostrar una alerta
    window.alert('Error al crear el Pokémon: ' + error.message);
  }
};

/**
 * Muestra un diálogo de confirmación al usuario para eliminar un Pokémon.
 *
 * @param {Event} event Información del evento que ha sucedido.
 */
const deletePokemonHandler = async (event) => {
  // TODO: implementar
  // Muestra un diálogo de confirmación al usuario y si el usuario acepta,
  // elimina el Pokémon correspondiente
  if (window.confirm("¿Estás seguro de querer eliminar este Pokémon?")) {
    // Desde el elemento que ha originado el evento, utilizar la jerarquía
    // DOM para acceder a la fila de la tabla
    const delButton = event.target;
    //const row = delButton.closest('tr');

    // Obtener el ID del Pokémon
    /////////////////////////////////////////////??????????????????????????????????????????????????????????
    
    // Realizar la petición a la API REST
    try {
      const delPoke = await rest_api.deletePokemonById(4);
      // Notificar al usuario de que todo ha ido correctamente con
      // el mensaje "Pokémon eliminado correctamente"
      window.alert("Pokémon eliminado correctamente");

      // Reiniciar los resultados de búsqueda
      const resetResults = document.getElementById('dex-results');
      resetResults.innerHTML = '';
    } catch(error) {
      // Si ocurrió algún error, mostrar una alerta
      window.alert("Error al eliminar el Pokémon: " + error.message);
    }
  }
};

// ------------------------------------------------------------------
// ASIGNACIÓN DE EVENTOS
// ------------------------------------------------------------------

/*
 * TODO: implementar
 * Agregar un manejador al formulario de búsqueda para poder realizar
 * las búsquedas en la base de datos al enviar los datos del mismo.
 */
const searchForm = document.forms['dex-search'];
searchForm.addEventListener('submit', searchPokedexHandler);

/*
 * TODO: implementar
 * Agregar un manejador al formulario de crear un Pokémon para poder
 * crear un nuevo Pokémon.
 */
const createForm = document.forms['dex-create'];
createForm.addEventListener('submit', createPokemonHandler);