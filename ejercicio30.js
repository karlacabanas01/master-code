const eliminarDuplicados = (elementos) => {
    elementos = elementos.filter(elemento =>{
        return typeof elemento === "number";
    });

    let sin_duplicados = new Set(elementos);
    
    return Array.from(sin_duplicados);
}

console.log(
    eliminarDuplicados(["uno", "dos", 1, 2, 3, 4,5, 1,2,3 ,4])
);