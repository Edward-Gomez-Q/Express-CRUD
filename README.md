# Proyecto de API Express con Sequelize

Este es un proyecto de ejemplo que demuestra cómo construir una API RESTful utilizando Express.js y Sequelize, una base de datos MySQL.

## Requisitos

- Node.js
- MySQL
- Sequelize (ORM)

## Sobre el proyecto

1. Validación de datos: En Sequelize se definen las validaciones de los datos que se van a guardar en la base de datos. En el archivo Entity/actor.js se definen las validaciones para la tabla Actor.
2. Documentación de la API: Se tiene la documentación de la API en el mismo Readme.md y para probar las misma esta el archivo http/Actor.http (Para ejecutar las peticiones del archivo http/Actor.http se debe instalar la extensión REST Client en Visual Studio Code).
3. Seguridad: Se utiliza Sequelize para evitar ataques de inyección SQL.

## Configuración del proyecto

1. Clona el repositorio desde GitHub:

   ```bash
   https://github.com/Edward-Gomez-Q/Express-CRUD
    ```
2. Instala las dependencias del proyecto:

   ```bash
   npm install
   ```

3. Configura la conexión con la base de datos: Abre el archivo DB/databaseConnection.js y modifica la configuración de la conexión a tu base de datos MySQL.

4. Ejecuta el proyecto:

   ```bash
   node app.js
   ```
## Rutas
1. Obtener todos los actores
    - Método: GET
    - Ruta: '/api/actors'
    - Descripción: Obtiene todos los actores de la base de datos.
    - Respuesta: 
    ```json
    {   [
            {
                "id": 1,
                "firstName": "PENELOPE",
                "lastName": "GUINESS",
                "lastUpdate": "2006-02-15T08:34:33.000Z"
            },
            {
                "id": 2,
                "firstName": "NICK",
                "lastName": "WAHLBERG",
                "lastUpdate": "2006-02-15T08:34:33.000Z"
            }
        ]
    }
    ```
2. Obtener un actor por su id
    - Método: GET
    - Ruta: '/api/actors/:id'
    - Descripción: Obtiene un actor por su id.
    - Respuesta: 
    ```json
    {
        "id": 1,
        "firstName": "PENELOPE",
        "lastName": "GUINESS",
        "lastUpdate": "2006-02-15T08:34:33.000Z"
    }
    ```
3. Crear un actor
    - Método: POST
    - Ruta: '/api/actors'
    - Descripción: Crea un actor.
    - Respuesta: 
    ```json
    {
        "id": 214,
        "firstName": "Taylor",
        "lastName": "Swift",
        "lastUpdate": "2023-10-20T03:29:49.169Z"
    }
    ```
4. Actualizar un actor
    - Método: PUT
    - Ruta: '/api/actors/:id'
    - Descripción: Actualiza un actor.
    - Respuesta: 
    ```json
    {
        "id": 214,
        "firstName": "Juanita",
        "lastName": "Perez",
        "lastUpdate": "2023-10-20T03:29:49.169Z"
    }
    ```
5. Eliminar un actor
    - Método: DELETE
    - Ruta: '/api/actors/:id'
    - Descripción: Elimina un actor.
    - Respuesta: "Actor eliminado correctamente"
