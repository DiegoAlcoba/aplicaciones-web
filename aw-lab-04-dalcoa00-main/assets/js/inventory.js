/**
 * Crea un nuevo producto.
 *
 * @returns {object} Referencia al producto.
 */
const createProduct = (name, image, price, stock) => {
  // TODO: Devolver un Object que tenga las mismas propiedades que
  //       los cuatro argumentos de entrada.
  return {
    name : name,
    image : image,
    price : price,
    stock : stock
  };
};

/**
 * Inventario de la tienda.
 */
let inventory = [
  // TODO: Inicializar el inventario de la tienda utilizando la función createProduct.
  //       Añadir, por lo menos, cuatro valores distintos.
  createProduct('producto 1','https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f4bac890-f200-46be-8dbe-81d627c8cfb8/nikepremier-3-botas-de-futbol-de-perfil-bajo-terreno-firme-j7PbSL.png', 104.99, 21),
  createProduct('producto 2','https://www.futbolemotion.com/imagesarticulos/203388/750/espinillera-nike-mercurial-lite-hyper-turquoise-black-fuchsia-dream-0.webp', 18.99, 30),
  createProduct('producto 3','https://www.futbolemotion.com/imagesarticulos/197659/750/camiseta-adidas-real-madrid-primera-equipacion-2023-2024-white-0.webp', 34.99, 150),
  createProduct('producto 4','https://www.futbolemotion.com/imagesarticulos/198043/750/pantalon-corto-adidas-real-madrid-cf-tercera-equipacion-2023-2024-nino-black-0.webp', 79.99, 100)
];

/**
 * Obtiene la hora y fecha actuales y lo imprime según el formato del
 * locale correspondiente.
 *
 * @returns {string} La fecha y hora actuales según el formato indicado.
 */
const getCurrentDate = () => {
  // TODO: Obtener la fecha y hora actuales y devolver los datos formatedos
  let date = new Date();

  return date.toLocaleString();
};

/**
 * Escribe por consola un mensaje pero añadiendole antes la hora y fecha
 * actuales siguiendo el formato: ||fecha actual|| mensaje
 * 
 * @param {string} msg El mensaje a mostrar por consola
 */
const log = (msg) => {
  // TODO: Mostrar por consola la fecha y hora actuales y a continuación
  //       el mensaje correspondiente. Para ello deberás utilizar la
  //       función getCurrentDate().
  console.log("||" + getCurrentDate() + "|| " + msg);
};

/**
 * Obtiene el índice de un producto del inventario a partir de su nombre.
 *
 * @param {string} name Nombre del producto.
 * @returns {number} Índice del producto dentro del inventario si existe
 *                   ó -1 en caso contrario.
 */
const getProductIndex = (name) => {
  // TODO: Buscar en el inventario el nombre del producto y devolver
  //       el índice asociado ó -1 si no existe
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === name) {
      return i;
    }
  }

  return -1;
};

/**
 * Elimina un producto del inventario.
 *
 * @param {string} name Nombre del producto.
 */
const removeFromInventory = (name) => {
  // TODO: Buscar el producto en el inventario y eliminarlo si no existe.
  //       Para ello deberás utilizar la función getProductIndex().
  //       Si el producto es eliminado deberás mostrar por consola el
  //       texto: "<nombre del producto> ha sido eliminado del inventario."
  //       Si el producto no se encuentra disponible, deberás mostrar
  //       por consola el texto:
  //       "<nombre del producto> no se encuentra disponible en el inventario."
  let prod = getProductIndex(name);

  if (prod === -1 || prod > inventory.length) {
    log(`${name} no se encuentra disponible en el inventario.`);
  }

  if (prod >= 0 && prod <= inventory.length) {
    inventory.splice(prod, 1);
    log(`${name} ha sido eliminado del inventario.`);
  }
  
};

/**
 * Actualiza el inventario con un producto dado. Para ello, o bien agrega
 * el producto si no existe en el inventario, o bien modifica sus datos
 * en caso de que si exista.
 *
 * @param {object} product Referencia al producto.
 */
const updateInventory = (product) => {
  // TODO: Buscar el producto en el inventario.
  //       Para ello deberás utilizar la función getProductIndex().
  //       Si el producto no existe, agregarlo al inventario y mostrar
  //       por consola el texto:
  //       "<nombre del producto> añadido con éxito."
  //       Si el producto existe, actualizar todos los datos menos el
  //       propio nombre y mostrar por consola el texto:
  //       "<nombre del producto> actualizado con éxito."
  let prod = getProductIndex(product.name);

  if (prod === -1) {
    inventory[inventory.length] = product;

    log(`${product.name} añadido con éxito.`);
  }
  else {
    inventory[prod].image = product.image;
    inventory[prod].price = product.price;
    inventory[prod].stock = product.stock;

    log(`${product.name} actualizado con éxito.`);
  }

};

/**
 * Exporta, al almacén local y en formato JSON, el estado actual del
 * inventario.
 *
 * @param {name} Nombre del inventario exportado.
 */
const serializeInventory = (name) => {
  // TODO: Convertir a formato JSON el inventario y mostrar el resultado
  //       por consola. A continuación, almacenar ese JSON en el objeto
  //       localStorage y mostrar al usuario un mensaje de alerta que
  //       indique: "<name> exportado con éxito".

  //Se convierte el inventario a formato json y se muestra el resultado por consola
  const inventoryJSON = JSON.stringify(inventory);
  log(inventoryJSON);

  //Se almacena el inventario json
  localStorage.setItem(name, inventoryJSON);

  //Se muestra el mensaje de alerta
  alert(name + " exportado con éxito");
};

/**
 * Importa el inventario desde el almacén local. Una vez importado,
 * lo elimina del mismo.
 *
 * @param {name} Nombre del inventario importado.
 */
const deserializeInventory = (name) => {
  // TODO: Obtener el inventario del objeto localStorage.
  //       Si los datos existen, mostrarlos por consola, convertirlos
  //       del formato JSON a un Object y guardarlos en la variable inventory.
  //       A continuación eliminar del localStorage el inventario
  //       (NO LA VARIABLE inventory).
  //       Finalmente mostrar el siguiente mensaje de alerta al usuario:
  //       "<name> importado con éxito.".
  //       Si los datos no existen, mostrar el siguiente mensaje de alerta
  //       al usuario: "<name> no existe en el almacén local."

  //Importo el inventario
  const inventoryJSON = localStorage.getItem(name);

  //Si existe
  if (inventoryJSON) {
    log(inventoryJSON);
    const inventory = JSON.parse(inventoryJSON);

    localStorage.removeItem(name);

    alert(name + " importado con éxito.");
  }
  else {
    alert(name + " no existe en el almacén local.")
  }
};