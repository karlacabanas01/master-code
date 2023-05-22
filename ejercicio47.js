function aficiones (arrObj){
    let mapeo = {};
    for(objeto of arrObj){
        for( aficion of objeto.aficiones){
            if(!mapeo[aficion]){
                mapeo[aficion] = 1;
            }else{
                mapeo[aficion] ++;
            }
        }
    }
    return mapeo;
}

const usuarios = [
    {nombre: "Juan", aficiones:["informática", "cine", "videos"]},
    {nombre: "Maria", aficiones:["informática", "perros", "nadar"]},
    {nombre: "Andrea", aficiones:["informática", "comida", "videos"]},
    {nombre: "Rita", aficiones:["informática", "perros", "videojuegos"]},
]

console.log(aficiones(usuarios));