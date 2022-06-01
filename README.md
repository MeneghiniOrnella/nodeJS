# Node.JS
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