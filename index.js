// console.log('Hello World');

/* const fs = require('fs');
fs.writeFileSync('index.txt','escribiendo dentro de index.txt'); */

/* const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done');
        }, 1500);
    });
    return promise;
} */

const http = require('http');
const server = http.createServer((req, res) => {
    const url = req.url;
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Enter message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message" /></form></body>');
        res.write('</html>');
        return res.end();
    }else{
        console.log(req.url, req.method, req.headers);
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My first title</title></head>');
        res.write('<body><p>Hello World</p></body>');
        res.write('</html>');
        res.end();
    }
    
});
server.listen(3000);
//resizeBy.setHeader()