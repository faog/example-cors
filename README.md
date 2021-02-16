# WEB SERVICES - Mission 1

La idea de este proyecto, es realizar una prueba de concepto del funcionamiento de Cross-Origin Resource Sharing (CORS) y REST.

## Antes de...

Para realizar esta prueba fue necesario implementar en este proyecto una api la cual nos responde en el puerto 3001, además de 2 aplicaciones que acceden a ella.
### Ejecución Api

- Para la api, se debe ejecutar el comando `npm run start-api`, siendo inicializada en http://localhost:3001/

### Ejecución aplicación

- Para ejecutar la aplicación 1, debe ejecutar el comando `npm run start-cors` accediendo a ella en la ruta http://localhost:3000/

- Para el caso de la aplicación 2, se debe ejecutar el comando `npm run start-no-cors` accediendo a ella en la ruta http://localhost:3002/

## CORS

Una vez inicializadas las aplicaciones y la api, es posible verificar la implementación de cors.

En el archivo *src/api.js* de este proyecto, se realiza la a habilitación de cors (previamente instalado en el package.json), habilitando el acceso solamente para la aplicación 1 (es decir el acceso desde http://localhost:3000).

Esto se aprecia en la siguiente código

```
let corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
  method: "POST"
};

  app.post('/', cors(corsOptions), (req, res) =>{
  res.json({
      message: 'Acceso a Cors'
  });
}
```
Si comprobamos en la consola del navegador, obtendremos la siguiente respuesta json

```
{
  message: "Acceso a Cors"
}
```

Para el caso de la aplicación 2, cuando accedemos a http://localhost:3002 y verificamos la respuesta de la api en la consola del navegador nos encontramos el siguiente mensaje 

```
Access to fetch at 'http://localhost:3001/' from origin 'http://localhost:3002' has been blocked by CORS policy: The 'Access-Control-Allow-Origin' header has a value 'http://localhost:3000' that is not equal to the supplied origin. Have the server send the header with a valid value, or, if an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
```

Esto es debido a que esta aplicación no fue configurada para poder acceder a la información de la api.

## REST

En esta prueba de concepto, se configura la api para recibir parametros. Utilizando postman, al realizar un `POST` a `localhost:3001/` se obtiene la respuesta 
```
{
  message: "Acceso a Cors"
}
```

Tambien, es posible agregar un parámetro en la url como por ejemplo `localhost:3001/John` obteniendo una respuesta distinta:

```
{
  message: "Hello John"
}
```