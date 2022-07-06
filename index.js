numeros = 0;
let contador = document.getElementById("num").innerHTML = numeros;

//Funcion para obtener el 
function GetNumero(){

    document.getElementById("num").innerHTML = numeros;

}
//Funcion para agregarle al contador
function Sumar(){

    GetNumero();
    return ++numeros;

}

function Restar(){
    
    GetNumero();
    numeros > 0 ? --numeros : numeros = 0
    return numeros;

}

//Funcion para reiniciar el contador
function Reiniciar(){

    document.getElementById("num").innerHTML = 0;
    
}
