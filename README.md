## Base de datos

Para instalar y ejecutar una base de datos PostgreSQL en un sistema local, siga estos pasos:

1. Descargue e instale PostgreSQL en su sistema local desde [https://www.postgresql.org/download/](https://www.postgresql.org/download/).
2. Una vez instalado, abra la consola y cree una nueva base de datos ejecutando el siguiente comando: `createdb nombre_de_la_base_de_datos`
3. Ahora, puede ejecutar comandos SQL en su base de datos utilizando la herramienta `psql`. Para conectarse a su base de datos, ejecute el siguiente comando: `psql nombre_de_la_base_de_datos`

Asegúrese de tener Node.js y npm instalados en su sistema local. Puede descargarlos desde [https://nodejs.org/es/download/](https://nodejs.org/es/download/).

## Backend

1. Clone el repositorio desde GitHub a su sistema local utilizando el comando `git clone`.
2. Abra una terminal en la carpeta del proyecto y ejecute el comando `npm install` para instalar todas las dependencias.
3. Cree un archivo `.env` en la raíz del proyecto y agregue las siguientes variables de entorno:

```
DATABASE_URL="postgresql://user:password@localhost:5432/dbname"

```

Asegúrese de reemplazar `user`, `password` y `dbname` con los valores apropiados para su base de datos.

1. Ejecute el comando `npx prisma migrate dev` en la terminal para ejecutar las migraciones de la base de datos.
2. Ejecute el comando `npm i --save-dev @types/node-fetch` en la terminal para actualizar los tipos de node-fetch.
3. Ejecute el comando `npm run dev` en la terminal para iniciar el servidor.
4. Ahora la aplicación estará en funcionamiento en `http://localhost:4000`.

## Frontend

Advertencia: para hacer funcionar el Frontend es necesario tener arrancado el backend.

1. Clone el repositorio desde GitHub a su sistema local utilizando el comando `git clone`.
2. Abra una terminal en la carpeta del proyecto y ejecute el comando `npm install` para instalar todas las dependencias.
3. Ejecute el comando `npm start` en la terminal para iniciar la aplicación.
4. Visite `http://localhost:3000` en su navegador para ver la aplicación en funcionamiento.
