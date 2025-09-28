const data = [
    {
        "nombre": "Alonso",
        "apellidos": "Navasosa"
    },
    {        
        "nombre": "Luis",
        "apellidos": "Navas"
    }
]
//creamos nuestra constante getData 
//callback o cb es el resultado o lo que devuelve de parametros o argumentos, si usamos callback necesitamos crear más funciones
//callback funcion que se pasa como argumento a otra funcion y se ejecuta despues de que la funcion original haya terminado de ejecutarse
//probando pul request
const getData = (callback) => {
    //validamos que si es true traera la data
    if(true){ 
        callback(data)

    } else {
        console.log('No existen datos');
    }

} //fin de const
//constante consulta lo que se encuentre en callback en datos y con funcion flecha imprimimos los datos
const consulta = (datos) => console.log(datos)
//consulta obtendra la informacion del callback que almacena el array data de arriba
//pasamos la funcion consulta como un callback a getData
//el callback consulta se eejecuta despues de que getData haya terminado de ejecutarse.
getData(consulta); //llamamos a getData
