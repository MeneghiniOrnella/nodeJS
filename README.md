# Node.JS
## [Curso Udemy - NodeJS - The complete guide (MVC, REST APIs, GraphOL, Deno) - Maximilian Schwarzmuller](https://www.udemy.com/course/nodejs-the-complete-guide/)
## Ejecutar archivos NodeJS
> node index.js
luego abrir navegador y entrar al link de localhost
## Crear un archivo y escribir dentro
```
const fs = require('fs');
fs.writeFileSync('index.txt','escribiendo dentro de index.txt');
```
## Crear servidor
1. Crear archivo `server.js` o `app.js`
2. Definir modulos principales:
    - http
    - https
    ```
    const http = require('http');
    http.createServer(funcion);
    ```
    - fs
    - path
    - os
## Finalizar servidor
En consola, presionar `CTROL + C`
## package.json
> npm init
## Instalar Express.js
> npm install --save express
```
const express = require('express');
const app = express();
app.use((req, res, next) => {
    console.log('In the middleware');
    next();
});
app.use((req, res, next) => {
    console.log('In another middleware');
    res.send('<h1>Hello Express</h1>');
});
const server = http.createServer(app);
server.listen(3000) // localhost
```