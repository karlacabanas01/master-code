function censurar(texto = false, busqueda = false){ //Se les da el false ya que pueden o no llegar

    let resultado = "";
    //const texto_censurado = texto.toLowerCase().replace(busqueda, "[-CENSURADO-]");

    if(!texto && !busqueda){
        resultado = "No puedes leer ni el texto, ni la busqueda ya que estan incompletos"; 
    }else if(texto && !busqueda){
        resultado = "No tienes la busqueda";

    }else if(!texto && busqueda){
        resultado = "No tienes el texto";
    }else if(texto && busqueda){
        resultado = texto.replace(new RegExp(busqueda, 'gi'), "[-CENSURADO-]"); //global indirecta si es mayuscula o minuscula
    }

    return resultado;

}
console.log(
    censurar("Hola que tal tu vida, hola holanda", "hola")
);

