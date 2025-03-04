/**
 * Módulo para crear diferentes componentes HTML utilizando la API Document
 * de JavaScript.
 *
 * @module html-components
 */

// ------------------------------------------------------------------
// COMPONENTES INTERNOS
// ------------------------------------------------------------------

/**
 * Crea un apartado para mostrar una notificación.
 *
 * @param {string} msg Mensaje a mostrar en la notificación.
 * @returns {HTMLElement} Nodo del árbol DOM de tipo elemento "span".
 */
const createNotification = (msg) => {
  // TODO: Crear un <span> con el mensaje y devolverlo
  const notif = document.createElement("span");

  notif.textContent = msg;

  return notif;
};

/**
 * Crea una tabla para tabular los datos de una lista de Pokémon.
 *
 * @param {Array} data Lista de datos a tabular.
 * @returns {HTMLElement} Nodo del árbol DOM de tipo elemento "table"
 */
const createPokedexTable = (data) => {
  // TODO: a implementar
  // Crear un elemento <table> y asignarle el estilo correspondiente
  // Crear un elemento <thead> y agregarle las correspondientes columnas
  // Crear un elemento <tbody> y, por cada resultado que haya, insertar
  //  los datos del Pokémon llamando a la función createPokemonTableRow
  // Crear un elemento <tfooter> para mostrar el total de resultados
  // Devolver la tabla

  //Creación de la tabla
  const table = document.createElement("table");
  table.classList.add("table", "bg-cover", "border-39");

  //Creación del thead y sus columnas
  const thead = document.createElement("thead");
  const rows = document.createElement("th");
  const colums = ["No.", "Pokémon", "Especie", "Tipo"];

  colums.forEach(labelText => {
    const th = document.createElement("th");
    th.textContent = labelText;

    rows.appendChild(th);
  });

  thead.appendChild(rows);
  thead.appendChild(thead);

  //Creación elemento tbody
  const tbody = document.createElement("tbody");

  data.forEach((pokemon) => {
    const row = createPokemonTableRow(pokemon);
    tbody.appendChild(row);
  });

  table.appendChild(tbody);

  //Creación elemento tfoot
  const tfoot = document.createElement("tfoot");
  const fRow = document.createElement("tr");
  fRow.innerHTML = `<td colspan="4">Total: ${data.length}</td>`;

  tfoot.appendChild(fRow);
  table.appendChild(tfoot);

  
  return table;
}

/**
 * Crea una fila de una tabla con los datos de un Pokémon.
 *
 * @param {Object} data Datos de un Pokémon específico.
 * @returns {HTMLElement} Nodo del árbol DOM de tipo elemento "tr".
 */
const createPokemonTableRow = (data) => {
  // TODO: a implementar
  // Crear un <tr> y asignarle el id del Pokémon siguiendo el formato "pokemon-<id>"
  // Agregar en cada columna el contenido correspondiente:
  //  No. <-> Identificador
  //  Pokemon <-> Hipervínculo que apunte a la propiedad image.hires
  //              y que se abre en una nueva ventana. El contenido del
  //              hipervínculo será una imagen a la propiedad image.sprite.
  //              Además, fuera del hipervínculo deberá mostrará el nombre
  //              del Pokémon en inglés
  //  Especie <-> Especie
  //  Tipo <-> llamar a la función createPokemonTypeTableData
  // Devolver el <tr>

  //Crear tr con el id
  const row = document.createElement("tr");
  row.id = `pokemon-${data.id}`;

  //Celda del id del pokemon
  const id = document.createElement("td");
  id.textContent = data.id;
  row.appendChild(id);

  //Celda del pokemon con el link, la imagen, etc.
  const poke = document.createElement("td");
  const link = document.createElement("a");
  link.href = data.image.hires;
  link.target("_blank");

  const pic = document.createElement("img");
  pic.src = data.image.sprite;
  pic.alt = data.name.english;

  link.appendChild(pic);
  poke.appendChild(link);
  poke.appendChild(document.createTextNode(data.name.english));
  row.appendChild(poke);

  //Celda de la especie del pokemon
  const specie = document.createElement("td");
  specie.textContent(data.species);
  row.appendChild(specie);

  //Celda del tipo
  const type = createPokemonTypeTableData(data.type);
  row.appendChild(type);

  return row;
}

/**
 * Crea una celda de una tabla con el tipo de un Pokémon específico.
 * Cada tipo está delimitado dentro de un elemento "span".
 *
 * @param {string[]} data Lista con los tipos específicos de un Pokémon.
 * @returns {HTMLElement} Nodo del árbol DOM de tipo elemento "td".
 */
const createPokemonTypeTableData = (data) => {
  // TODO: a implementar
  // Crear el elemento <td>
  // Por cada tipo, crear un <span> sin atributos, el contenido será el tipo
  // y guardarlo en el <td>
  // Devolver el <td>
  const row = document.createElement("td");

  data.forEach(type => {
    const typeSpan = document.createElement("span");
    typeSpan.textContent = type;

    row.appendChild(typeSpan);
  });

  return row;
}

// ------------------------------------------------------------------
// COMPONENTES A EXPORTAR
// ------------------------------------------------------------------

/**
 * Actualiza el estilo de la página principal cambiando la imagen de
 * fondo del contenido principal y el borde del apartado de los resultados.
 */
const updatePageStyle = () => {
  // TODO: a implementar
  // Aplicar la imagen de fondo al cuerpo del documento
  document.body.style.backgroundImage = "url('./../../img/bg.jpg')";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundAttachment = "fixed";

  // Obtener el apartado de resultados y aplicarle su estilo
  const results = document.getElementById("dex-results");
  results.style.border = "solid 39px transparent";
  results.style.borderWidth = "39px"
  results.style.borderImageSource = "url('./../../img/border.png')";
  results.style.borderImageSlice = "39";
  
}

/**
 * Actualiza el apartado de resultados de la Pokédex con una lista de
 * Pokémon dada.
 *
 * @param {Array} data Lista de Pokémon para actualizar el apartado.
 */
const updatePokedexArticle = (data) => {
  // TODO: a implementar
  // Obtener el apartado de los resultados
  const results = document.getElementById("dex-results");

  // Eliminar todos los nodos hijos que pudiera haber (si los hay)
  while (results.firstChild) {
    results.removeChild(results.firstChild);
  }

  // Actualizar el apartado de resultados de la siguiente manera:
  //  - Si hay datos crear la tabla llamando a la función createPokedexTable
  //  - Si no, llamar a la función createNotification con el mensaje
  //    "No se han encontrado resultados"
  if (data && data.length > 0) {
    results.appendChild(createPokedexTable(data));
  }
  else {
    results.appendChild(createNotification("No se han encontrado resultados"));
  }
}

/**
 * Actualiza la columna "Tipo" dentro de la tabla de los resultados para
 * que cada celda muestre los datos como "badges". El estilo de "badges"
 * está definido dentro del framework CSS "pokemon-types-css"
 * {@link https://github.com/justingolden21/pokemon-types-css}
 */
const updatePokemonTypeTableColumn = () => {
  // TODO: a implementar
  // Obtener todas las etiquetas span que haya dentro del apartado de
  // los resultados
  const spans = document.querySelectorAll("#dex-results span.type");

  // Por cada <span>, modificar su contenido para aplicar correctamente
  // la clase correspondiente del framework CSS "pokemon-types-css" y
  // eliminar el contenido del span.
  spans.forEach(span => {
    const type = span.textContent.toLowerCase();
    span.textContent = "";
    span.classList.add("pokemon-type", `type-${type}`);
  });
}

// TODO: Exportar características
export default {
  createNotification,
  createPokedexTable,
  updatePageStyle,
  updatePokedexArticle,
  updatePokemonTypeTableColumn
};

// TODO: Mostrar por consola que el módulo ha sido cargado con éxito
console.log("Módulo html-components.mjs cargado correctamente");