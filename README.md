# Tareas Node App

Esta es una aplicación simple para gestionar tareas utilizando Node.js, Express conectandose a una base de datos MongoDB contenerizada con Docker.

## Instalación de aplicación:

1. Clona este repositorio en tu máquina local.
2. Instala las dependencias utilizando npm:

  ```bash
  npm install
  ```

## Crear base de datos contenerizada usando Docker (Se debe tener instalado Docker previamente):

1. Descargar imagen mongo: 

  ```bash
	Docker pull mongo
  ```
	
2. Crear contenedor para base de datos mongodb usando imagen anterior:
  
  ```bash
	docker create -p <puertoHOST>:27017 --name <nombreContenedor> -e MONGO_INITDB_ROOT_USERNAME=<nombreUsuario> -e MONGO_INITDB_ROOT_PASSWORD=<contraseñaUsuario> mongo
  ```
3. Ejecutar contenedor:

  ```bash
	docker start <nombreContenedor>
  ```

## Ejecutar aplicación node:

  ```bash
	node index.js
  ```

## Hacer pruebas con aplicaciones como Postman.
