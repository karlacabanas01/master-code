//Ejercicio 26 
/*Dado un número, mostrar su serie fibonacci, la cual es un
 orden de números donde cada número es la suma de los dos anteriores */
 
 function fibonacci(numero){
    const serie = [0, 1];
    for(let i = 2; i <= numero; i++){
        //console.log("numero: "+ i);//Muestro 2 al 10
        serie.push(serie[i - 1] + serie[i - 2]) 
        /* 
            push es para añadir un elemento al array
            sumo el numero anterior y el numero anterior del anterior

        */
    } 

    return [serie, serie[numero]]
    console.log(serie); //Para ver que si va funcionando
 }

 console.log("Serie completa: " + fibonacci(10)[0]);  //Indice 0
 console.log("Resultado: " + fibonacci(10)[1]); //Indice 1 