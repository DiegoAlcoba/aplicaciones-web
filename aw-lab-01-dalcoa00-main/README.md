[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/u0Vm25Y_)
[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-7f7980b617ed060a017424585567c406b6ee15c891e84e1186181d67ecf80aa0.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=14061539)
# Aplicaciones Web (Grado en Ingeniería Informática. Universidad de León)

## Laboratorio 01 (semana 26/02/2024 -- 03/03/2024)

## Objetivos

1. Crear un sitio web de tamaño pequeño.
2. Familiarizarse con el lenguaje HTML 5 utilizando algunos de los elementos más comunes.
3. Aprender a estructurar páginas web según su contenido utilizando elementos semánticos.

## Requisitos

* [GitHub Codespaces](https://docs.github.com/en/codespaces/overview)
* [Visual Studio Code](https://code.visualstudio.com/)

## Referencias

* [HTML reference@MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference)
* [HTML Element Reference@W3Schools](https://www.w3schools.com/tags/)

## Enunciado

Crear un sitio web personal utilizando únicamente HTML.

### Ejercicio 1: Estructura del sitio web

Un [mapa de sitio o *sitemap*](https://developer.mozilla.org/en-US/docs/Glossary/Site_map) es un listado de las páginas que componen un sitio web. Crear la estructura de un sitio web según el siguiente mapa:

```
.
├── assets/               # Directorio para almacenar recursos (p.e. imágenes)
│   └── *.[jpg|png|gif]
├── index.html            # Página de inicio
├── about.html            # Página con diversa información personal
└── contact.html          # Página de contacto
```

Para este ejercicio cada página no tendrá contenido, únicamente habrá que especificar los **cuatro elementos básicos** de todo documento HTML.

### Ejercicio 2: Estructura y contenido de las páginas web

Todas las páginas del sitio web deben seguir la siguiente estructura, utilizando para ello los correspondientes **contenedores semánticos**:

1. **Cabecera**. Al menos debe incluir el título de la página. En todas las páginas excepto `index.html`, también incluirá una barra de navegación con enlaces a todas las páginas del sitio web (menos a la propia página, en la que solo estará indicado el nombre de forma resaltada).
2. **Contenido principal**. Ver detalles más abajo.
3. **Pie de página**. Incluirá un párrafo con el siguiente formato:
  > © 2024. Nombre y Apellidos. *Aplicaciones Web. Grado en Ingeniería Informática (Universidad de León).*

Con respecto al contenido principal de las páginas, se deben cumplir los siguientes requisitos:

* `index.html`
  * Párrafo de bienvenida al sitio web.
  * Una imagen de libre elección.
  * Barra de navegación con enlaces al resto de páginas web que forman el sitio web.
* `about.html`
  * Apartado con dos imágenes que representen diferentes estados de ánimo (por ejemplo, contento y triste) y un párrafo con una breve descripción personal (en una o dos frases). Además, destacar al menos una o varias palabras relevantes (utilizando énfasis y/o importancia).
  * Apartado con las asignaturas matriculadas durante el presente curso. Para ello, los datos deben estar tabulados utilizando las columnas: **curso**, **nombre de la asignatura**, **semestre** y **número de créditos**.
  * Apartado con los intereses. Se debe indicar una lista ordenada (según preferencia) de al menos tres intereses (libros, películas, videojuegos, etc). Cada elemento de la lista deberá incluir, al menos, el título y el año de publicación así como un enlace a otro sitio web externo que contenga una ficha descriptiva de dicho elemento.
* `contact.html`
  * Formulario con los siguientes campos a introducir por el usuario visitante:
    * Dirección de correo electrónico.
    * Asunto o propósito del mensaje a enviar.
    * Cuerpo del propio mensaje.
    * Botón para enviar los datos anteriores.
  * La acción del formulario será la de enviar un correo electrónico a la correspondiente dirección de `@estudiantes.unileon.es`.

Todas las imágenes que se utilicen en el sitio web deberán almacenarse dentro del directorio `assets`. Algunas posibles fuentes de inspiración para buscar imágenes pueden ser: [Google imágenes](https://images.google.com/), [imgur](https://imgur.com/) ó [Giphy](https://giphy.com/). En el caso de los intereses, puedes utilizar páginas como: [Google libros](https://books.google.com/), [TMDB](https://www.themoviedb.org/) ó [IGDB](https://www.igdb.com/).

### Ejercicio 3: Metadatos

El elemento `<head>` contiene [metadatos](https://developer.mozilla.org/en-US/docs/Glossary/Metadata), es decir, información que describe al propio documento web. Agregar el siguiente conjunto de metadatos a cada una de las páginas que componen el sitio web:

| Metadato     | Valor |
|--------------|-------|
| Codificación | `UTF-8`* |
| Título       | Título de la propia página |
| Autor        | Nombre y apellidos del estudiante |
| Descripción  | Propósito de la propia página |

\* Asegúrate de que  **cada página esté guardada con este tipo de codificación**

Para poder indicar estos metadatos, primero deberás revisar la sección de referencias de este laboratorio e identificar cuáles son las **etiquetas y atributos adecuados**.

### Ejercicio 4: Validación de las páginas web

Para garantizar que un navegador pueda visualizar correctamente una página web, existen diversas herramientas que verifican si su código HTML cumple con los estándares actuales. Validar, utilizando la herramienta oficial del [World Wide Web Consortium (W3C)](https://validator.w3.org/#validate_by_upload), que el código HTML de todas las páginas del sitio web escrito en los anteriores ejercicios **es correcto y no contiene ningún tipo de aviso o error**. En caso de haberlos, deberán ser corregidos según corresponda hasta que la herramienta muestre el mensaje: "*Document checking completed. No errors or warnings to show*".

## Entregable

La solución deberá estar subida en el repositorio correspondiente del GitHub Classroom **antes del domingo 3 de marzo de 2024 a las 23:59 CEST**.