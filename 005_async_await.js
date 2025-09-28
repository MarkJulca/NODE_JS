const data = [
    {
        "nombre": "Alonso",
        "apellidos": "Navaliosa"
    },
    {        
        "nombre": "Luis",
        "apellidos": "Navarosa"
    }
]
//async es una promesa de forma asincrona distintos tiempos 
//async Esto significa que puede tomar un tiempo obtener los datos, 
//por lo que la función no espera a que se completen todas las operaciones antes de continuar con el código restante.
const getData = async (err) => {
    //si es diferentre de err es decir esta bien imprime 
    if(!err) { // si es diferente err de true osea false imprime 
        //en consulta almacenara lo que encuentres del array data y mandamelo en respuesta
    //await es algo que esta esperando que se active una funcion,accion o evento se envie , si encuentra esos datos y ahora si lanzate con async
        const consulta = await data.find( respuesta => respuesta)//el find devuelve un objeto el primero que encuentra
        //await esperar a que se complete la busqueda
        return consulta
    }else {//si es true error 
        return error
    }
}
//si esto "fue falso" de que encontro un error,es decir todo bien, imprime la data
//si fuese getData(true) es decir encontro error entonces imprimeme el error va al catch
getData(false).then((datos) => {
    console.log(datos)
}).catch((error) => {
    console.log('error no existen los datos')
});
/*
En resumen, el código busca datos de un conjunto predefinido y 
maneja posibles errores de una manera asíncrona, lo que significa que puede continuar con otras tareas mientras espera los resultados.

*/