//constante que almacena al JSON
const data = [
    //para trabajar con json
    {
        "nombre": "Alonso",
        "apellidos": "Navasp"
    },
    {        
        "nombre": "Luis",
        "apellidos": "Nava"
    }
] //fin de data array

//console.log(data);

//Funcion básica
/*function getData(data) {
    return data;
}

console.log(getData(data));
*/
//Funcion con flecha
//convertimos que getData funcion arriba a constante  que sera igual a una funcion por eso los ()
// es decir getData= () es igual a function getData() y le ponemos funcion flecha con  = >
 const getData = () => {
    // imprimimos la data con console log 
    console.log(data);
}

getData() //llamamos a getData funcion