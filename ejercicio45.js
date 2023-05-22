function suspensos(alumnos){
    let aprobados=0, suspensos=0 ;
    for(alumno of alumnos){
        if(alumno[1] >= 5){
            aprobados++;
        }else{
            suspensos++;
        }
    }
    return{
        "aprobados": aprobados,
        "suspensos": suspensos
    }
}

console.log(suspensos([
    ["karla", 10],
    ["juan", 7],
    ["maria", 10],
    ["pepe", 8],
    ["andres", 2],
    ["julia", 1],
]));