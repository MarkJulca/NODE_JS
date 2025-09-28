const data = [
    {
        "nombre": "Alonso",
        "apellidos": "Navarosa"
    },
    {        
        "nombre": "Luis",
        "apellidos": "Navalios"
    }
]

//Promesas devuelve argumentos,estos argumentos pueden ser demostrados por alguna accion o error
//funcion getData llamamos a un error por medio de err y nos retorna una Promise o promesa, donde resolve y reject son callback
//comentario 15:50
const getData = (err) => new Promise((resolve, reject) => {
    //resolve  enviando algo que si encontro,reject esta rechazando algo es decir no encontro nada
    //const consulta = (data) => console.log(data)
    const consulta = data.find( respuesta => respuesta)//con find nos devuelve solo 1 objeto o dato que seria Alonso Navarosa
    //si es diferente de err, nos devuelve una consulta 
    if(!err) {
        //devuelve la consultalo que encontro, es decir no encontro error 
        resolve(consulta)
    }
    //caso contrario en reject devuelve mensaje o nos devuelve algo negativo no encontrado
    else {
        reject('No existen datos')
    }
}) //fin de const getData
//si esto "fue falso" de que encontro un error,es decir todo bien
//si fuese getData(true) es decir encontro error entonces imprimeme el error va al catch
getData(false).then((datos) => {
    console.log(datos)
}).catch((error) => {
    console.log(error)
});
