function existePropiedad(objeto, propiedad){
    if(typeof objeto === 'object' && typeof propiedad == "string" && objeto.hasOwnProperty(propiedad)
    ){
        return true;
    } 
    return false;

}
let usuario = {
    nombre: 'karla',
    apellido: 'cabanas'
}
console.log(existePropiedad(
    usuario,
    "nombre"
));