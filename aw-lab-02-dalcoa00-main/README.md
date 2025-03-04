[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/MbqUAWLv)
[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-7f7980b617ed060a017424585567c406b6ee15c891e84e1186181d67ecf80aa0.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=14165029)
# Aplicaciones Web (Grado en Ingeniería Informática. Universidad de León)

## Laboratorio 02 (semana 04/03/2024 -- 10/03/2024)

## Objetivos

1. Familiarizarse con el lenguaje CSS utilizando algunos de los elementos más comunes.
2. Aprender a aplicar diferentes estilos a una página web.
3. Aprender a maquetar páginas web según su contenido.

## Requisitos

* [GitHub Codespaces](https://docs.github.com/en/codespaces/overview)
* [Visual Studio Code](https://code.visualstudio.com/)

## Referencias

* [CSS reference@MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
* [CSS Reference@W3Schools](https://www.w3schools.com/cssref/index.php)

## Enunciado

Un [listículo](https://es.wikipedia.org/wiki/Listículo) es un tipo específico de artículo periodístico que ordena de manera visual la información a exponer. Algunos ejemplos de listículos son:

* [Los 23 mejores juegos de 2023](https://vandal.elespanol.com/reportaje/los-23-mejores-juegos-de-2023)
* [Las 60 mejores películas de 2023: Los estrenos más destacados](https://www.fotogramas.es/noticias-cine/g40497441/mejores-peliculas-2023/)
* [Las mejores canciones internacionales de 2023](https://es.rollingstone.com/las-20-mejores-canciones-internacionales-de-2023/)

Crear una página web cuyo contenido esté estructurado en forma de listículo y que, además, su estilo y maquetación estén definidos mediante una hoja de estilo CSS

## Ejercicio 1: Creación y estructuración del contenido

Crear una página web denominada `index.html` cuyo contenido sea mostrado en forma de listículo. Para ello, deberás escoger un tema relacionado con algún interés que quieras (restaurantes, películas, creadores de contenido, etc) y presentar cuatro entradas relacionadas según algún criterio (año, género, temática, etc). Para inspirarte en los intereses puedes utilizar sitios web como: [Tripadvisor](https://www.tripadvisor.es/), [TMDB](https://www.themoviedb.org/) ó [Instagram](https://www.instagram.com/). La idea es que el resultado final se parezca a alguno de los ejemplos de listículos presentados en el enunciado del laboratorio.

El contenido de la página web debe seguir el siguiente esquema:

1. Una **sección principal** que agrupe todo el contenido del listículo. A su vez, esta sección está dividida en dos partes:
    1. **Encabezamiento**. Agrupa el contenido introductorio y está compuesto de:
        * **Título principal** que refleja el interés seleccionado y su relación. Por ejemplo: *Mis cuatro películas favoritas de todos los tiempos*.
        * **Imagen de fondo** que cubre todo el contenido introductorio.
        * **Datos del autor** del laboratorio, compuestos por una pequeña imagen a modo de avatar (de libre elección) y debajo de la misma dos líneas: en una tu nombre y apellidos y en la otra la frase *"Última actualización: marzo 2024"*.
    2. **Apartados**. Contiene cuatro entradas diferentes sobre el interés seleccionado y ordenadas de forma ascendente. El contenido de cada entrada debe ser independiente y autónomo con respecto al resto del documento. Cada entrada está compuesta de:
        * **Título** con el nombre del interés específico. Por ejemplo: *1. La Guerra de las Galaxias*
        * Debajo del título hay un **hipervínculo** que apunta a algún sitio web externo con más información sobre la entrada. El texto asociado al hipervínculo debe seguir el formato: *Ver más detalles*.
        * A continuación hay un **párrafo** con una breve descripción del interés específico. La descripción es de libre elección.
        * Por último hay una **imagen** que muestra algo relacionado con la entrada. Por ejemplo, en el caso de una película puede ser su póster.
2. Un **pie de página** que contiene un párrafo con el siguiente formato:

> © 2024. Nombre y Apellidos. *Aplicaciones Web. Grado en Ingeniería Informática (Universidad de León)*.

Para este ejercicio, la página web no debe incluir ningún tipo de estilo CSS **únicamente elementos HTML**. Adicionalmente, se deberán cumplir los siguientes requisitos:

* Para estructurar el contenido debes utilizar únicamente **contenedores semánticos**.
* La página web debe contener los siguientes metadatos:

| Metadato     | Valor |
|--------------|-------|
| Codificación | `UTF-8`* |
| Título       | Título de la propia página |
| Autor        | Nombre y apellidos del estudiante |
| Descripción  | Propósito de la propia página |

* El código HTML debe estar validado utilizando la herramienta oficial del [World Wide Web Consortium (W3C)](https://validator.w3.org/#validate_by_upload) y **no contener ningún tipo de aviso o error**.

## Ejercicio 2: Dar estilo al contenido

Crear una hoja de estilo CSS `styles.css` que deberá estar almacenada en el directorio `assets/css` y enlazarla con la página `index.html`. Esta hoja debe definir los siguientes estilos:

### 1. Tamaño de los apartados

#### Encabezamiento de la sección principal

* La **altura** de todo el encabezamiento es de `500 píxeles`.
* El título principal tiene una **anchura máxima** de `780 píxeles`.
* La imagen del autor tiene una **altura** de `100 píxeles` y debe estar **desplazada hacia abajo** `50 píxeles`.

#### Apartados

* El número de una entrada debe tener una **separación con respecto a su lado derecho** de `40 píxeles`.
* El **ancho** de toda la entrada, sin contar el número, debe ser del **66.67% del ancho de la página**.
* Cada entrada tiene un **espacio de relleno** de `60 píxeles por la parte superior` y de `120 píxeles por la parte inferior`.
* Cada párrafo tiene un **margen** de `20 píxeles por la parte superior`.
* El **ancho** de la imagen debe ser del `66.67% del ancho de la página`, es decir, `del 100% de la anchura del elemento padre`.

### 2. Tipografía y colores

Para cargar la tipografía indicada en este apartado, añade la siguiente línea en el apartado de los metadatos.

```
<link href="https://fonts.googleapis.com/css?family=Open+Sans|Palatino" rel="stylesheet">
```

#### Encabezamiento de la sección principal

Para el título principal:

* La **tipografía principal** es `Open Sans` y su **alternativa** es `sans-serif`.
* El **tamaño de la fuente** es de `36 píxeles`.
* La **fuente tiene un estilo** `normal` (no en negrita).
* El **texto es de color** `blanco`.
* Debe estar alineado **verticalmente y centrado sobre la imagen de fondo** que haya.

Para los datos del autor:

* La **tipografía principal** es `Palatino` y su **alternativa** es `serif`.
* El **tamaño de la fuente** es de `18 píxeles`.
* La **fuente tiene un estilo** `negrita` para el nombre y apellidos del autor.
* La **fuente tiene un estilo** `cursiva` para la frase sobre *"Última actualización..."*.
* El **texto es de color** `rgb(51 51 51)`.
* El **interlineado** es de `24 píxeles`.
* En el **lado inferior** después de la frase sobre *"Última actualización..."* debe haber un borde de tamaño `10 píxeles`, de un grosor de `2 píxeles` y de color `#e6e6e6`.

#### Apartados

Para los títulos:

* La **tipografía principal** es `Open Sans` y su **alternativa** es `sans-serif`.
* El **tamaño de la fuente** es de `36 píxeles`.
* La **fuente tiene un estilo** `negrita`.
* El **texto del número es de color** `rgba(0 0 0 / 0.25)`.
* El *texto del título es de color* `rgb(51 51 51)`.

Para los párrafos:

* La **tipografía principal** es `Palatino` y su **alternativa** es `serif`.
* El **tamaño de la fuente** es de `18 píxeles`.
* El **interlineado** es de `32 píxeles`.
* El **texto es de color** `rgb(51 51 51)`.

### 3. Hipervínculos

* El **texto es de color** `#42b4d6`.
* Por defecto, el **texto del hipervínculo** no debe tener `ningún tipo de decoración`.
* Únicamente el **texto del hipervínculo** debe estar `subrayado` cuando el usuario `pase el cursor del ratón sobre el propio hipervínculo`.

### 5. Imágenes

#### Encabezamiento de la sección principal

Para la imagen de fondo:

* Es una **imagen de fondo** cargada `mediante CSS`, no con HTML.
  * La imagen debe llamarse `header.jpg` y estar almacenada dentro de `assets/images/`.
  * **Importante**: Al cargar una imagen desde CSS hay que tener en cuenta que estamos trabajando con una **ruta relativa**, por lo que habrá que utilizar el valor `../images/header.jpg`
* No se **repite** en `ningún eje`.
* Posee un **tamaño** que debe `cubrir todo el elemento HTML`.
* Debe tener una **posición anclada** a la `parte superior del elemento HTML`.
* Tiene una **altura** de `500 píxeles`.

Para la imagen de los datos del autor:

* Es una **imagen de fondo** cargada `mediante CSS`, no con HTML.
    * La imagen debe llamarse `profile.jpg` y estar almacenada dentro de `assets/images/`.
    * **Importante**: Al cargar una imagen desde CSS hay que tener en cuenta que estamos trabajando con una **ruta relativa**, por lo que habrá que utilizar el valor `../images/header.jpg`
* Tiene un **ancho** de `100 píxeles`.
* Tiene unos **bordes redondeados con un radio** al `100%`.
* Tiene un **borde de color** `blanco` y con un **grosor** de `1 píxel`.

## Ejercicio 3: Maquetar la disposición del contenido

El [diseño responsivo](https://developer.mozilla.org/en-US/docs/Glossary/Responsive_web_design) permite que una página web se vea y comporte de forma óptima en cualquier tipo de dispositivo. Modificar el fichero `styles.css` para que todos los apartados sigan una de estas opciones:

1. **Disposición flexible**. En esta disposición los elementos deben seguir un **flujo por filas** y estar distribuidos por *columnas de forma inversa*.
2. **Disposición en cuadrícula**. En esta disposición la cuadrícula está compuesta por **dos columnas**, en las que cada una ocupa el `50%` del espacio disponible.

## Entregable

La solución deberá estar subida en el repositorio correspondiente del GitHub Classroom **antes del domingo 10 de marzo de 2024 a las 23:59 CEST**.
