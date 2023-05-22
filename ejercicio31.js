function angulo(abertura){
    let resultado = "Ángulo completo";

    if(abertura < 90){
        resultado= "Ángulo agudo";
    }else if(abertura  === 90) {
        resultado= "Ángulo recto";
    }else if(abertura < 90 && abertura < 180){
        resultado= "Ángulo obtuso";
    }else if(abertura === 180){
        resultado= "Ángulo llano";
    }else if(abertura > 180 && abertura < 360){
        resultado= "Ángulo concavo";
    }


    return resultado;
}

console.log(angulo(90));