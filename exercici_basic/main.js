//exercici1
console.log ("Hola Mundo!");

//exercici2
alert("Me llamo David Villanueva");

//exercici3
var nombre="David";
var apellido="Villanueva";
console.log (nombre+" "+apellido);

//exercici4

var num1= 45;
var num2= 31;
console.log ("La suma de "+num1+" + "+num2+ " es igual a: "+ (num1+num2));

//exercici6
function notas(){
var nota= parseInt(document.getElementById("introNum1").value);

if (nota>=5){
    alert("Enhorabuena has aprobado");
    }else
        {alert("Amigo has suspendido");
        }
}

//exercici7
var frase="Tinc un cotxe de color blau"
console.log (frase);
var changeOne = frase.replace("blau", "verd");
console.log (changeOne);
var changeOne = frase.replace(/o/g, "u");
console.log (changeOne);

//exercici8
function calculadora(){
    var valor1= parseInt(document.getElementById("introValor1").value);
    var valor2= parseInt(document.getElementById("introValor2").value);
    var selected=document.getElementById("operator");
    var index=selected.selectedIndex;
    var operador=selected.options[index].value;
    


function calc(valor1, valor2,operador){
    var resultado=0;
    switch (operador){

    case "+":
        resultado= valor1+valor2;
        break;
    
    case "-":
        resultado= valor1-valor2;
        break;
    
    case "*":
        resultado= valor1*valor2;
        break;
    
    case "/":
        resultado= valor1/valor2;
        break;
    
}    
return resultado;
}

console.log (calc(valor1,valor2,operador));

}