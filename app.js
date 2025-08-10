//Variables
let numeroSecreto=Math.floor(Math.random()*10);
let numeroUsuario=0;
let contador=1;
//let palabra="vez"
let  maximo=6;
console.log(numeroSecreto);

while(numeroUsuario !=numeroSecreto){
    numeroUsuario= prompt("Me indicas un numero entre 1 y 10por favor");

    /*
    Aca  se realiza la
    comparacion
    */
    if (numeroUsuario==numeroSecreto){
        // La condicion se cumplio
        alert(`Acertaste, el numero es: ${numeroUsuario} Lo hiciste en ${contador} ${contador ==1 ? "vez" : "veces"} `);
        // La condicion no cumple
    } else{
        if (numeroUsuario> numeroSecreto){
            alert("El numero es menor");

        }else{
            alert("El numero es mayor");
        }
        //incrementamos cuando no acierta
        contador++;
        //palabra="veces";
        if (contador>maximo){
            alert(`Superaste los  ${maximo} de intentos`)
            break
        }
    }
    
}