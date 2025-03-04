[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/IfzBQt2a)
# Aplicaciones Web (Grado en Ingeniería Informática. Universidad de León)

## Laboratorio 04 (semana 18/03/2024 -- 24/03/2024)

## Objetivos

1. Familiarizarse con código JavaScript.
2. Trabajar con funciones, objetos y arrays.
3. Conocer el concepto de serialización y el formato JSON.
4. Introducirse a la gestión de eventos en JavaScript.

## Requisitos

* [GitHub Codespaces](https://docs.github.com/en/codespaces/overview)
* [Visual Studio Code](https://code.visualstudio.com/)

## Referencias

* [JavaScript Reference@DevDocs](https://devdocs.io/javascript/)
* [JavaScript reference@MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)


## Enunciado

Crear una página web que gestione el inventario de una tienda online ficticia. La página web deberá utilizar HTML para estructurar el contenido, el framework [pico.css](https://picocss.com/) para el diseño y maquetación básicos y JavaScript para la gestión del inventario.

## Ejercicio 1: Creación y estructuración del contenido

Crear una página web denominada `index.html` cuyo contenido permita gestionar un inventario de productos. Su contenido debe seguir el siguiente esquema:

1. Una **sección principal** que agrupe todo el contenido y que está dividida en dos partes:
    1. **Sección de formulario**. Compuesta por:
      * **Título** con el valor `Gestión de productos`.
      * **Formulario** que permita añadir y actualizar los diferentes
      productos que haya en el inventario. El formulario debe tener
      lo siguiente:
          * El formulario debe tener asociado el **nombre** `product`.
          * A su vez, tendrá **dos divisiones genéricas**:
              * Un área con los siguientes *widgets*:
                  * Un **campo de texto** de tipo `normal` para introducir el nombre del producto. Este campo debe indicarse como **obligatorio**.
                  * Un **campo de texto** de tipo `url` para introducir la url de una imagen asociada al producto.
                  * Un **campo de texto**  de tipo `número` para introducir el precio del producto. Por defecto tendrá asociado el valor `0`.
                  * Un **campo de texto** de tipo `número` para introducir la cantidad de unidades disponibles para el producto. Este campo debe indicarse como **obligatorio**. Por defecto tendrá asociado el valor `0`.
              * Otro área con los siguientes widgets:
                  * Un **botón** de tipo `button` con el texto `Añadir/Actualizar`.
                  * Un **botón** de tipo `reset`con el texto `Limpiar`.
    2. **Sección del inventario de productos**. Compuesta por:
      * **Título** con el valor `Inventario de productos`.
      * Un **botón** de tipo `button` con el texto `Refrescar`.
      * Un **botón** de tipo `button` con el texto `Exportar`.
      * Un **botón** de tipo `button` con el texto `Importar`.
      * Una **tabla** con las siguientes características:
          * **Cinco columnas**: `Nombre`, `Imagen`, `Precio`, `Cantidad` y `Acción`.
          * Los **encabezados de columnas** deben de estar agrupados en un elemento [thead](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead).
          * Debe haber un elemento [tbody](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody) etiquetado con el identificador `inventory` pero **sin contenido**.

2. Un **pie de página** que contiene un párrafo con el siguiente formato:

> © 2024. Nombre y Apellidos. *Aplicaciones Web. Grado en Ingeniería Informática (Universidad de León)*.

Para este ejercicio, la página web debe incluir los siguientes estilos CSS:

* Utilizar el framework [Pico.css](https://picocss.com/), añadiendo la siguiente línea en los metadatos:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css">
```

### 1. Sección principal

* Todo el contenido debe seguir un **layout** de tipo [container](https://picocss.com/docs/container).

#### 1.1. Sección de formulario

* El formulario debe seguir un **layout** de tipo [grid](https://picocss.com/docs/grid), para que se vea por un lado los widgets y por el otro el botón.

#### 1.2. Sección del inventario de productos

* Todos los botones tiene un aspecto [contrast](https://picocss.com/docs/button). Los botones de `Exportar` e `Importar` también tienen el aspecto [outline](https://picocss.com/docs/button).
* La tabla de productos deberá:
    * Seguir un **layout** de tipo [overflow-auto](https://picocss.com/docs/overflow-auto).
    * Tener las filas de colores alternos mediante la **clase** [striped](https://picocss.com/docs/table#striped).

### 2. Pie de página

* Todo el contenido del pie de página debe seguir un **layout** de tipo [container-fluid](https://picocss.com/docs/container).

### Otros requisitos

Adicionalmente, se deberán cumplir los siguientes requisitos:

* Para estructurar el contenido debes utilizar **contenedores semánticos** siempre que puedas.
* La página web debe contener los siguientes metadatos:

| Metadato     | Valor |
|--------------|-------|
| Codificación | `UTF-8` |
| Título       | Título de la propia página |
| Autor        | Nombre y apellidos del estudiante |
| Descripción  | Propósito de la propia página |

* El código HTML debe estar validado utilizando la herramienta oficial del [World Wide Web Consortium (W3C)](https://validator.w3.org/#validate_by_upload) y **no contener ningún tipo de aviso o error**.

## Ejercicio 2. Cargar scripts externos

El directorio `assets/js` contiene dos scripts escritos en JavaScript:

* Por un lado, el fichero `script.js` contiene dos funciones ya definidas que permiten agregar cierta funcionalidad relacionada con la inclusión de datos en una tabla y con la obtención de los diferentes campos de un formulario.
* Por otro lado, el fichero `inventory.js` contiene la declaración de una variable y un conjunto de funciones cuyo código está vacío.

Cargar, de forma asíncrona, ambos scripts dentro del apartado de los metadatos. Para ello, deberás revisar la documentación asociada al elemento HTML [script](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script).

## Ejercicio 3. Escribir código JavaScript

Completar el código de las funciones declaradas en el fichero `assets/js/inventory.js` según se indica en los comentarios.

Cabe destacar que en este fichero hay dos funciones cuya finalidad es trabajar con la [serialización de datos](https://en.wikipedia.org/wiki/Serialization). JavaScript ofrece un objeto global que permite la serialización utilizando el [formato JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON). Además, para que los datos puedan persistir de forma local en el disco, JavaScript ofrece otro objeto global llamado [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).

## Ejercicio 4. Eventos JavaScript

La interacción del usuario con una página web produce [eventos](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events); los cuales pueden ser controlados mediante código JavaScript. Por ejemplo, cada vez que un usuario hace click en un botón es posible controlar qué acciones realizar gracias al atributo [onclick](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event).

Analizar el código del fichero `assets/js/script.js` y a continuación modificar el código de `index.html` para que:

* En la **sección de formulario**:
  * Al hacer click sobre el botón `Añadir/actualizar` se debe llamar a la función que permite actualizar el inventario pasándole como argumento los datos introducidos en el formulario.
    * **Importante**: para obtener los datos del formulario ya tienes una función definida dentro del fichero `assets/js/script.js`.

Después, con el código que hayas escrito en el fichero `assets/js/inventory.js`, modificar el código de `index.html` para que:

* En la **sección del inventario de productos**:
  * Al hacer click sobre el botón `Actualizar` se llame a la función que permite actualizar la tabla de productos, pasando como argumento el inventario definido en el fichero `assets/js/inventory.js`.
  * Al hacer click sobre el botón `Exportar` se llame a la función de exportar el inventario al almacén local, utilizando como argumento el valor `labo04`.
  * Al hacer click sobre el botón `Importar` se llame a la función de importar el inventario etiquetado con el valor `labo04` desde el almacén local.

## Entregable

La solución deberá estar subida en el repositorio correspondiente del GitHub Classroom **antes del domingo 31 de marzo de 2024 a las 23:59 CEST**.