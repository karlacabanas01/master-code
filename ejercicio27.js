function calcularDias(dias){


    let años =  Math.trunc(dias / 365);
    let dias_restantes = (dias%365)
    let meses = Math.trunc(dias_restantes / 30);
     dias_restantes = dias_restantes%30;

    return  Math.trunc(años) +" años, " + Math.trunc(meses)+  " meses y " + dias_restantes + " dias: " ;

}

console.log(
    "Equivale a ",
    calcularDias(920)
);
