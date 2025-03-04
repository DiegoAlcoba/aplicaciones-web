[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/D4flXXKX)
[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-7f7980b617ed060a017424585567c406b6ee15c891e84e1186181d67ecf80aa0.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=14989714)
# Aplicaciones Web (Grado en Ingeniería Informática. Universidad de León)

## Laboratorio 08 (semana 06/05/2024 -- 12/05/2024)

## Objetivos

1. Familiarizarse con Node.js y el gestor de paquetes npm
2. Trabajar con el framework Express para crear un servidor web
3. Profundizar en la creación de un servicio web de tipo API REST

## Requisitos

- [GitHub Codespaces](https://docs.github.com/en/codespaces/overview)
- [Visual Studio Code](https://code.visualstudio.com/)

## Referencias

- [Node.js Documentation@Node.js](https://nodejs.org/docs/latest/api/)
- [npm Docs@npm](https://docs.npmjs.com/)
- [4.x API@Express](https://expressjs.com/en/4x/api.html)
- [JavaScript reference@MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)

## Enunciado

Desarrollar una aplicación web cuyo backend ofrezca el frontend desarrollado en el Laboratorio 07 y también ofrezca e implemente el servicio de API REST de Pokémon.

### Estructura

Inicialmente, el proyecto ya contiene todos los elementos para construir la estructura de la aplicación web y está organizado de la siguiente manera:

```
.
├── public/                         # Frontend de la aplicación web
└── src/                            # Backend de la aplicación web
    ├── controllers/                # Controladores (Express)
    │   └── pokemon.js              # Módulo para gestionar peticiones HTTP en la API REST de Pokémon
    ├── middlewares/                # Middleware (Express)
    │   └── logger.js               # Módulo de logging de peticiones HTTP
    ├── models/                     # Modelos de datos
    │   └── pokemon.js              # Módulo para simular un modelo de datos de Pokémon
    ├── routes/                     # Rutas (Express)
    │   └── pokemon.js              # Módulo para definir los endpoints de la API REST de Pokémon
    └── app.js                      # Punto de entrada de la aplicación web
```

Esta organización sigue el [estilo Modelo-Vista-Controlador](https://expressjs.com/en/starter/faq.html#how-should-i-structure-my-application) sugerido por Express.

## Ejercicio 1: Creación del proyecto de Node

[Node](https://nodejs.org/) es un entorno de ejecución JavaScript que permite construir aplicaciones en el lado del servidor. Para ejecutar un script desde el terminal basta con introducir el comando `node <path_al_fichero.js>`. Por ejemplo, para ejecutar la aplicación del servidor web escribir el comando:

```console
node src/app.js
```

Junto a Node se incluye un sistema de gestión de paquetes (librerías) denominado [npm](https://www.npmjs.com/), que permite gestionar tareas relacionadas con el desarrollo de un proyecto software como la gestión de dependencias o la ejecución de la aplicación. El primer paso para gestionar un proyecto Node con npm es utilizar el comando:

```console
npm init
```

Esto lanzará un asistente para crear un fichero descriptor denominado `package.json`. Completar el asistente con los siguientes parámetros:

* package name: aw-lab-08
* version: (valor por defecto)
* description: AW - Laboratorio 08: Node y Express
* entry point: app.js
* test command: (valor por defecto)
* git repository: (enlace al repositorio personal del GitHub Classroom)
* keywords: (valor por defecto)
* author: (indicar nombre y apellidos y correo electrónico)
* license: (valor por defecto)

Finalmente verificar que todo sea correcto y escribir `yes` para generar el fichero `package.json`. El asistente genera en el fichero descriptor una entrada por defecto para ejecutar los tests del proyecto. Dado que no se van a ejecutar tests para este laboratorio, modificar `package.json` para eliminar la propiedad `test` dentro de `scripts` y sustituirla por:

```json
"scripts": {
  "start": "node app.js"
}
```

Para verificar que el proyecto se ejecuta correctamente ejecutar el comando:

```console
npm start
```

Como ya se mencionó, otra de las utilidades de npm es gestionar las dependencias del proyecto; de hecho cuenta con un [repositorio central](https://www.npmjs.com/) en el que hay más de un millon de paquetes. Para instalar una dependencia basta con utilizar el comando `npm install <paquete>`. También es posible instalar dependencias que únicamente se vayan a utilizar mientras se está desarrollando el proyecto utilizando el comando `npm install <paquete> --save-dev` (ver [documentación npm](https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file)). De cualquier modo, cada vez que se instala una dependencia se modifica automáticamente el fichero `package.json` para incluir la dependencia y también se genera automáticamente un fichero `package-lock.json` que fija las versiones concretas de las dependencias instaladas para el proyecto (este fichero no se debe de modificar manualmente nunca ya que es gestionado por npm).

Dicho esto, instalar las siguientes depedencias:

* Como dependencia normal el paquete [express](https://www.npmjs.com/package/express), que permite crear un servidor web de forma simple.
* Como dependencia solo para modo desarrollador [nodemon](https://www.npmjs.com/package/nodemon), que permite  ejecutar un script Node y reiniciarlo automáticamente cada vez que se detecten cambios en los ficheros de un directorio indicado.

Una vez instaladas las dependencias, modificar `package.json` y modificar la propiedad `scripts` con el siguiente contenido:

```json
"scripts": {
  "start": "node app.js",
  "dev": "nodemon --watch src src/app.js"
}
```

Ahora para ejecutar el proyecto en modo desarrollador basta con ejecutar el comando:

```console
npm run dev
```

## Ejercicio 2: Creación del servidor web con Express

El fichero `src/app.js` es el punto de entrada del proyecto de Node y contendrá todo el código necesario para actuar como servidor web. A diferencia de los scripts JavaScript utilizados en el frontend, para importar módulos desde Node hay que utilizar una función especial denominado [require()](https://nodejs.org/api/modules.html).

Basándose en la [documentación de Express](https://expressjs.com/en/starter/hello-world.html), modificar `src/app.js` para importar el módulo `express` y utilizarlo para completar el método `startWebServer` según se indique en los comentarios.

## Ejercicio 3: Servir recursos estáticos

La finalidad de un servidor web es ofrecer recursos y, en el caso de express, la manera más sencilla es utilizar el middleware [express.static](https://expressjs.com/en/4x/api.html#express.static). En el contexto de express, un [middleware](https://expressjs.com/en/guide/using-middleware.html) es una función que se ejecuta antes de que una petición HTTP llegue al manejador de rutas o antes de enviar una respuesta a un cliente. En consecuencia este middleware se puede utilizar para asociar un endpoint a todo el contenido que haya en uno o varios directorios específicos.

Basándose en la [documentación de Express](https://expressjs.com/en/starter/static-files.html), modificar `src/app.js` para servir como recursos estáticos todo el contenido del directorio `public` sobre el endpoint raíz (es decir, sobre `/`). Para este laboratorio este directorio contiene el frontend de la aplicación, por lo que al visitar la URL del servidor desde un navegador se debería de visualizar correctamente.

**IMPORTANTE**: En la plantilla del laboratorio ya se incluye el frontend con una posible solución al Laboratorio 07. No obstante, **es recomendable** sustituir todo el contenido que haya en dicho directorio por la solución propia que se haya entregado para el Laboratorio 07.

Independientemente del frontend utilizado, es necesario modificar el fichero `assets/js/modules/rest-api.mjs` para que los siguientes ejercicios de este laboratorio funcionen:

* Modificar la variable que define la URL base de la API REST por el valor correspondiente.
* Modificar el método `createPokemon` para enviar los datos pasados como argumento siguiendo el formato JSON. En el Laboratorio 07 se envíaban los datos como un objeto de tipo `FormData`, pero para simplificar la gestión de este formato de datos en los ejercicios posteriores, es preferible enviarlos con el formato JSON. Para ello:
    1. Transformar el `FormData` a un `object` normal que siga la estructura:
    ```javascript
    {
      name: {
        english: string
      },
      type: Array,
      species: string
      image: {
        sprite: string,
        hires: string
      }
    }
    ```
    2. Modificar la llamada al método `fetch()` para incluir la cabecera `Content-Type: application/json` y el body como una cadena en notación JSON.

## Ejercicio 4: Crear middlewares personalizados

A pesar de que express ofrece una colección de middlewares por defecto, es posible crear propios. Por un lado, el módulo `src/middlewares/logger.js` define un middleware cuya finalidad es loggear por consola todas las peticiones HTTP recibidas. Por otro lado, el módulo `src/routes/pokemon.js` define un enrutador para ofrecer una API REST de Pokémon. En el contexto de express, un [enrutador](https://expressjs.com/en/guide/routing.html) es un elemento que permite mapear una URL con un middleware/manejador específico a fin de controlar cómo gestionar cada petición HTTP.

Teniendo en cuenta esto:

1. Basándose en la [documentación de Express](https://expressjs.com/en/guide/using-middleware.html#middleware.application), modificar `src/middlewares/logger.js` para implementar el manejador `logRequests` según se indique en los comentarios. A continuación exportar como característica dicho manejador. Al igual que pasaba con la importación de módulos en Node.js, para exportar características es posible utilizar la propiedad [module.exports](https://nodejs.org/api/modules.html#moduleexports).
2. Basandose en la [documentación de Express](https://expressjs.com/en/guide/using-middleware.html#middleware.router), modificar `src/routes/pokemon.js` para crear un enrutador que de servicio a la API REST de Pokémon. Antes de mapear cada endpoint de la API REST con un middleware, cabe notar que la gestión de sus peticiones está definida en el módulo `src/controllers/pokemon.js`, el cual deberá implementarse en el Ejercicio 5. No obstante, es necesario modificar ese fichero para exportar como características todos los manejadores definidos en ese fichero.
3. Modificar `src/app.js` para cargar el middleware [express.json](https://expressjs.com/en/api.html#express.json) que permita analizar el body de peticiones y transformarlo a un objeto JSON. Modificarlo también para servir el middleware del enrutador sobre el endpoint `/api/pokemon` y, añadir también el middleware de logging para que se ejecute antes de que lleguen las peticiones al enrutador.

## Ejercicio 5: Servir API REST

En aplicaciones web basadas en el patrón [Modelo-Vista-Controlador](https://en.wikipedia.org/wiki/Model-view-controller), la finalidad de un controlador de backend es gestionar peticiones HTTP para ofrecer una respuesta apropiada. En este laboratorio, el módulo `src/controllers/pokemon.js` define precisamente una colección de manejadores que actúan como controlador para realizar algunas operaciones CRUD sobre el modelo de datos descrito en el módulo `src/models/pokemon.js`. Este módulo define una clase `Pokemon` que simula un objeto que nos permite operar de forma asíncrona sobre una base de datos a través de sus métodos `find`, `create` y `remove`.

Basándose en la [documentación de Express](https://expressjs.com/en/guide/routing.html), modificar `src/controllers/pokemon.js` para implementar todos los manejadores según se indique en el código.

## Entregable

La solución deberá estar subida en el repositorio correspondiente del GitHub Classroom **antes del domingo 12 de mayo de 2024 a las 23:59 CEST**.
