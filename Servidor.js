const http = require('http');
const host = 'localhost';
const puerto = 8080;

const server = http.createserver((req,res) => {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    const respuesta = {
        nombre : 'Juan Sebastian',
        mensaje : 'Hola desde mi servidor Http en Node .js',
    };
    res.end(JSON.stringify(respuesta));
});
const chalk = require('chalk');

server.listen(puerto, host, () => {
    console.log(chalk.green(`Servidor en funcionamiento en http://${host}:${puerto}`));
});
