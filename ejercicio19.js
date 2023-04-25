function misPeliculas(peliculas){
 for(pelicula of peliculas){

    let para_mostrar = `"${pelicula.title} de ${pelicula.autor}"\n`;

    if(pelicula.vista ){
        console.log("Ya has visto: ", para_mostrar);
    }else{
        console.log("Te falta por ver: ", para_mostrar);
    }
 }
 return peliculas;
}

const coleccion_peliculas = [
    {
        title: 'El señor de los anillos',
        autor: 'Peter Jackson',
        vista: false
    },
    {
        title: 'Harry Potter',
        autor: 'JK Rouling',
        vista: true
    },
    {
        title: 'Piratas del Caribe',
        autor: 'Algun señor',
        vista: true
    },
    {
        title: 'Harry Potter 2',
        autor: 'JK',
        vista: false
    } 
]

misPeliculas(coleccion_peliculas);
