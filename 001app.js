//Sincrono
//Leer un json, fs dependendcia de Node js
/*const fs = require('fs');
//leeme unicamente el archivo de file.json, readFileSync por ser sincrono
//y almacenalo en archivo el contenido
var archivo = fs.readFileSync('./file.json');
console.log(JSON.parse(archivo));
*/

//Asincrono
//Leer un json, fs dependendcia de Node js,fs=fileSystem
/*const fs = require('fs');
//Leeme el archivo, con callback error que llama a funcion con err data
fs.readFile('./file.json',(err,data) =>{
        //si trae error y me imprima en consola ese error
        if(err){
            console.log(err);
            //si hay error para ahi e imprimelo
            return;
        }
        //caso contrario imprimeme data que es lo que viene de file.json 
        console.log(JSON.parse(data));
}) 
*/
//Crear nuestro propio servidor de forma local  en NODE JS en HTTP


 /*const http = require('http'); //Con esto avisamos que trabajaremos con protocolo http 

const hostmane = '127.0.0.1'; //enviamos HOSTNAME
const port = 3001; //PUERTO
//Conexion a ese servidor, con createServer , con parametro de respuesta res
//donde enviaremos un mensaje, req-> request y res de response, res para poder enviar comentario es un callback argumentos en otra funcion
const server = http.createServer((req, res) => {
    //enviame respuesta por medio de res, por medio de end enviamos un html con mensaje Hola mundo
    res.end('Hola Mundo');
})
//evento que escucha que se haya creado nuestro servidor, si realmente creaste el servidor enviamos el hostname y puerto
//funcion flecha para condiciones , para imprimir en consola concatenando 
server.listen(port, hostmane, () => {
    // Usamos ` para usar los parametros en el mensaje 
    console.log(`Se conecto al servidor http://${hostmane}:${port}`);
}) 
*/

console.log('Hola Mundo Marksitos');

