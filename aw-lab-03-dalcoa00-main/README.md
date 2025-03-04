[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/nuUs77W1)
# Aplicaciones Web (Grado en Ingeniería Informática. Universidad de León)

## Laboratorio 03 (semana 11/03/2024 -- 17/03/2024)

## Objetivos

1. Familiarizarse con un framework CSS
2. Introducción al uso de preprocesadores CSS

## Requisitos

* [GitHub Codespaces](https://docs.github.com/en/codespaces/overview)
* [Visual Studio Code](https://code.visualstudio.com/)

## Referencias

* [CSS reference@MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
* [CSS Reference@W3Schools](https://www.w3schools.com/cssref/index.php)
* [Documentation: Pico CSS](https://picocss.com/docs)
* [Sass Tutorial@W3Schools](https://www.w3schools.com/sass/default.php)
* [Sass: Documentation](https://sass-lang.com/documentation/)

## Enunciado

Una [tienda online](https://es.wikipedia.org/wiki/Tienda_en_línea) es una forma de comercio electrónico que permite a un usuario comprar o vender artículos a través de un sitio web. Hoy en día existen numerosos ejemplos:

* [Amazon](https://www.amazon.es/)
* [El Corte Inglés](https://www.elcorteingles.es/)
* [ASOS](https://www.asos.com/)

Crear una página web que presente el catálogo de una tienda online ficticia. La página web deberá utilizar HTML para estructurar el contenido, el framework [pico.css](https://picocss.com/) para el diseño y maquetación básicos y el preprocesador SASS para personalizar el estilo.

## Ejercicio 1: Creación y estructuración del contenido

Crear una página web denominada `index.html` cuyo contenido muestre el catálogo de una tienda online ficticia. Para ello deberás escoger un nombre y un tipo de productos a ofrecer. Puedes utilizar como inspiración alguno de los siguientes enlaces:

* [Nook Plaza](https://nookplaza.net/)
* [Splatoon 3 - Weapon and Gear Database](https://leanny.github.io/splat3/database.html)
* [CSGO Database](https://www.csgodatabase.com/)

El contenido de la página web debe seguir el siguiente esquema:

1. Una **cabecera** cuyo contenido introductorio debe incluir:
    * El **nombre de la tienda** como un hipervínculo que apunta a la propia página `index.html`. Podrá ser o bien texto o bien una imagen.
    * Un **formulario** de búsqueda con lo siguiente:
      * Un **campo de texto** de tipo `búsqueda` que incluye un [placeholder](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/placeholder) con el valor `Nombre del producto...`.
      * Un **botón** de tipo `submit` con el texto `Buscar`
      * El **método** para enviar los datos es de tipo `GET`.
2. Un **contenido principal** que agrupa todo el catálogo de la tienda. Está compuesto por:
    * Una **sección** que corresponde con el catálogo de la propia tienda y que a su vez está dividida en dos partes:
      1. Un **encabezamiento** con el título `Catálogo de productos`.
      2. Un **área genérica** que contiene tantos apartados como productos tenga el catálogo (por lo menos debe de haber **cuatro diferentes**). A su vez, cada producto está compuesto por:
        * Un **hipervínculo** que apunta al fragmento de la propia página `#` y cuyo contenido es una imagen del propio producto.
        * Un **área genérica** que contiene tanto el nombre del producto como su precio.
        * Un **pie de página** que contiene un botón de tipo `button` con el texto `Comprar`.
    * Un **contenido no relacionado** que muestra la cesta del usuario. Este apartado estará compuesta a su vez de:
        * Un **encabezamiento** con un título más pequeño que el del catálogo y con el texto `Cesta`.
        * Una **tabla** con las siguientes características:
          * Tres columnas: `Producto`, `Cantidad` y `Precio`.
          * Por lo menos dos filas con los datos correspondientes a dos productos del catálogo.
          * Una última fila que tendrá una celda que ocupará dos columnas con el texto `Total` y otra celda con el precio total correspondiente a los productos de la cesta.
        * Un **formulario** para la tramitación del pedido con lo siguiente:
          * Un **widget** de [detalles](https://developer.mozilla.org/es/docs/Web/HTML/Element/details) con el texto `Aplicar código de descuento`. Este widget debe agrupar los siguientes elementos:
            * Un **campo de texto** de tipo normal con un [placeholder](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/placeholder) con el valor `Añadir código de descuento`.
            * Un **botón** de tipo `button` y con el texto `Aplicar`.
          * Un **botón** de tipo `submit` con el texto `Tramitar pedido`.
          * El **método** para enviar los datos es de tipo `POST`.
3. Un **pie de página** que contiene un párrafo con el siguiente formato:

> © 2024. Nombre y Apellidos. *Aplicaciones Web. Grado en Ingeniería Informática (Universidad de León)*.

Para este ejercicio, la página web no debe incluir ningún tipo de estilo CSS **únicamente elementos HTML**. Adicionalmente, se deberán cumplir los siguientes requisitos:

* Para estructurar el contenido debes utilizar **contenedores semánticos** siempre que puedas.
* La página web debe contener los siguientes metadatos:

| Metadato     | Valor |
|--------------|-------|
| Codificación | `UTF-8` |
| Título       | Título de la propia página |
| Autor        | Nombre y apellidos del estudiante |
| Descripción  | Propósito de la propia página |

* El código HTML debe estar validado utilizando la herramienta oficial del [World Wide Web Consortium (W3C)](https://validator.w3.org/#validate_by_upload) y **no contener ningún tipo de aviso o error**.

## Ejercicio 2: Maquetación mediante el framework Pico.css

[Pico.css](https://picocss.com/) es un framework CSS minimalista y ligero que prioriza el uso de una sintaxis semántica. Para utilizarlo en una página web basta con añadir la siguiente línea en los metadatos:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css">
```

Modificar el fichero `index.html` para utilizar este framework y que además se cumplan los siguientes requisitos:

### 1. Cabecera

* Todo el contenido debe seguir un **layout** de tipo [container-fluid](https://picocss.com/docs/container).
* Modificar el contenido de la cabecera para utilizar el **componente** [nav](https://picocss.com/docs/nav), de tal manera que en la parte izquierda esté el nombre de la tienda y a la derecha el formulario de búsqueda.
* En el formulario, el campo de texto de tipo búsqueda y el botón `Buscar` deben estar agrupados como un **componente** [group](https://picocss.com/docs/group)

### 2. Contenido principal

* Todo el contenido debe seguir un **layout** de tipo [container](https://picocss.com/docs/container).

#### 2.1. Catálogo de productos

* Todo el contenido debe seguir un **layout** de tipo [grid](https://picocss.com/docs/grid) a excepción del título.
* Todos los botones para comprar un producto tienen un **aspecto** [secondary](https://picocss.com/docs/button)

#### 2.2. Cesta

* La tabla de productos deberá:
  * Seguir un **layout** de tipo [overflow-auto](https://picocss.com/docs/overflow-auto).
  * Aplicar el **estilo** de [tablas](https://picocss.com/docs/table) utilizado por el framework; agregando los elementos [thead](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead), [tbody](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody) y [tfoot](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tfoot) según corresponda.
* Modificar el widget de detalles para utilizar el **componente** [accordion](https://picocss.com/docs/accordion). Más concretamente para que el texto aparezca como un **botón con el aspecto** `contrast outline`.
  * El **campo de texto** del código de descuento y el **botón** `Aplicar` deben estar agrupados como un **componente** [group](https://picocss.com/docs/group).

### 3. Pie de página

* Todo el contenido de la cabecera debe seguir un **layout** de tipo [container-fluid](https://picocss.com/docs/container).

## Ejercicio 3: Preprocesador CSS

Es posible personalizar los estilos del framework Pico.css utilizando el [preprocesador Sass](https://picocss.com/docs/sass). Sin embargo, antes de poder trabajar con Sass es necesario [instalarlo de algún modo](https://sass-lang.com/install/). Una posibilidad es utilizar el sistema de paquetes **npm** de [node](https://nodejs.org/en) mediante el comando:

```console
$ npm install -g sass
```

Un fichero Sass con extensión `.scss` utiliza la [sintaxis normal de CSS](https://sass-lang.com/documentation/syntax/). Para traducir un fichero `.scss` a uno `.css`, hay que compilarlo utilizando el comando:

```console
$ sass <input.scss> <output.css>
```

Teniendo en cuenta lo anterior, modificar el fichero `index.html` para cargar el framework Pico.css mediante una hoja de estilo CSS externa denominada `style.css` y ubicada en el directorio `assets/css/`; en lugar de utilizar una URL externa como se hizo en el ejercicio anterior. No obstante, esta hoja de estilo deberá ser compilada previamente a partir de un **fichero escrito mediante el preprocesador Sass**. Para ello deberás:

1. Crear un fichero `index.scss` que estará almacenado en el directorio `assets/scss`.
2. Modificar `index.scss` para cargar el módulo Sass `pico` ubicado en la ruta `assets/scss/pico/`.
    * **Importante**: Al cargar un módulo hay que tener en cuenta que estamos trabajando con una ruta relativa, por lo que habrá que utilizar el valor correspondiente.
3. Compilar `index.scss` utilizando Sass para generar el archivo `style.css` dentro de `assets/css`.

## Ejercicio 4: Modificando estilos mediante Sass

Modificar el fichero `index.scss` para agregar los requisitos indicados en los siguientes subapartados.

### 1. Catálogo de productos

Utilizando únicamente [selectores anidados](https://sass-lang.com/documentation/style-rules/#nesting):

* Los apartados de cada producto tienen un **altura máxima** de `500 píxeles`.
* Cualquier imagen dentro del catálogo debe:
  * Tener una **ancho** del `100%` y una **altura** de `200 píxeles`.
  * El **tamaño del fondo** debe `cubrir todo el elemento HTML`.
  * Al pasar el **cursor del ratón sobre la misma** debe aplicarse una **transformación** de tipo `escala con un factor de 1.03`.
* El **texto** del nombre del producto debe estar `alineado al centro`.
* El precio del producto debe:
  * Tener el **texto** `alineado al centro`.
  * Maquetarse como un **elemento** de `tipo bloque`.
  * Tener un **estilo de tipografía** `cursiva`.
  * Tener un **color** de valor `var(--pico-primary-inverse)` y un **color de fondo** de valor `var(--pico-primary-background)`.
  * El **radio de los bordes** debe ser de `10 píxeles`.
  * Un **ancho máximo** que se `ajuste al contenido`.
  * Una **posición** `relativa al elemento` y que esté **desplazada con respecto al lado superior** con un valor de `-12rem`.
* Todos los **botones** dentro del pie de página del catálogo deben:
  * Tener un **ancho** del `100%`.

### 2. Variables

Para controlar diferentes aspectos del estilo, el framework Pico.css define un [conjunto de variables](https://picocss.com/docs/css-variables) en CSS. Modificar el fichero `index.scss` para cumplir con los siguientes requisitos:

* Crear una **variable Sass** llamada `font-stack` cuyo valor principal es `Lato` y su alternativa es `sans-serif`.
* A continuación asignar el valor de dicha variable Sass a la **variable CSS** correspondiente encargada de controlar la tipografía (del framework Pico.css). Para asignar el valor de una variable Sass utiliza la expresión `#{$nombre-variable}`.
* Por último, modifica el fichero `index.html` para agregar la siguiente línea a fin de poder cargar la tipografía correspondiente.

```html
<link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
```

## Entregable

La solución deberá estar subida en el repositorio correspondiente del GitHub Classroom **antes del domingo 17 de marzo de 2024 a las 23:59 CEST**.