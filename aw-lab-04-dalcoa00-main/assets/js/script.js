/**
 * Actualiza el cuerpo de una tabla con los datos de un inventario.
 * PRECONDICIÓN: el cuerpo de la tabla debe estar etiquetado con el
 *               identificador "inventory".
 *
 * @param {Array} inventory Inventario de productos.
 */
const refreshTable = (inventory) => {
  // Obtener el elemento HTML del cuerpo de la tabla
  const tableBody = document.getElementById("inventory");
  // Eliminar el contenido
  while (tableBody.firstChild) {
    tableBody.removeChild(tableBody.lastChild);
  }
  // Recorrer el inventario y, por cada elemento, insertar los datos
  inventory.forEach(item => {
    const tableRow = document.createElement("tr");
    tableRow.innerHTML = `<td>${item.name}</td>
                          <td><img height="120px" src="${item.image}" alt="${item.name}"></td>
                          <td>${item.price}</td>
                          <td>${item.stock}</td>
                          <td><button type="button" class="outline secondary" onclick="removeFromInventory('${item.name}');refreshTable(inventory);">❌</button>`;
    tableBody.appendChild(tableRow);
  });
};

/**
 * Obtiene un producto con los datos introducidos en el formulario.
 * PRECONDICIÓN: debe existir un formulario con el nombre "product".
 *
 * @returns {Object} Referencia al producto
 */
const getProduct = () => {
  // Obtiene el formulario con los datos del producto
  const product = new FormData(document.forms.product);
  // Devuelve un objeto con los valores introducidos
  return Object.fromEntries(product);
}

/*****  Código que gestiona los eventos js  *****/

/*  FORMULARIO  */
//Botón Añadir/Actualizar
//Selecciono el botón correcto por medio de su id
const updateButton = document.getElementById('addUpdateProduct');

//Asocio la pulsación del botón con la función que quiero que se ejecute con ese evento
updateButton.onclick = function() {
  //Obtengo los datos del formulario y los almaceno en product
  //const product = getProduct();
  //Se crea el objeto producto
  const prod = createProduct(getProduct().name, getProduct().image, getProduct().price, getProduct().stock);
  //Se agrega el producto al inventario, o se actualiza si ya se encontraba en este
  updateInventory(prod);
};

/*  INVENTARIO  */
// ACTUALIZAR
const refreshButton = document.getElementById('refreshTable');
refreshButton.onclick = function() {
  refreshTable(inventory);
};

// EXPORTAR
const exportButton = document.getElementById('exportTable');
exportButton.onclick = function() {
  serializeInventory("labo04");
};

// IMPORTAR
const importButton = document.getElementById('importTable');
importButton.onclick = function() {
  deserializeInventory("labo04");
};