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
const fs = require('fs');
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