//FASE 1

var string = "david";
var nom = string.split("");

for (var i = 0; i < nom.length; i++) {
    console.log(nom[i]);
}

//FASE 2

for (var i = 0; i < nom.length; i++) {
    if (nom[i] == "a" || nom[i] == "A" || nom[i] == "e" || nom[i] == "E" || nom[i] == "i" || nom[i] == "I" || nom[i] == "o" || nom[i] == "O" || nom[i] == "u" || nom[i] == "U") {
        console.log("He trobat la vocal: " + nom[i]);
    } else if (!isNaN(nom[i])) {
        console.log("Els noms de persones no contenen el número: " + nom[i]);
    } else {

        console.log("He trobat la consonant: " + nom[i]);
    }
}

//FASE 3


var arrayFase3 = [];
var contador = 0;
for (i = 0; i < nom.length; i++) {
    for (f = 0; f < nom.length; f++) {
        if (nom[i] == nom[f]) { contador++; }
    }
    arrayFase3[nom[i]] = contador;
    var contador = 0;
}

console.log(arrayFase3);


// FASE 4

var string = "villanueva";
var cognom = string.split("");
var fullName = [];

for (i = 0; i < nom.length; i++) {
    fullName.push(nom[i]);
}
fullName.push(" ");

for (i = 0; i < cognom.length; i++) {
    fullName.push(cognom[i])
}

console.log(fullName);
