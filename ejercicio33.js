//Ejercicio resuelto usando Date varias veces
function reloj(){
    let resultado = "";
    setInterval(() =>{
        const fecha = new Date();
        const horas = fecha.getHours();
        const minutos = fecha.getMinutes();
        const segundos = fecha.getSeconds();
    }, 1000);
    return resultado = (`${horas}:${minutos}:${segundos}`);
}

