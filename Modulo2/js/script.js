function activaPrograma(){
    

//Fase 1
let arrayNom = ['J','O','R','D','I'];
let lletraLlegida;
for (lletraLlegida of arrayNom) {
    document.write(lletraLlegida + "\<br>");
}


//Fase 2
let llistaNom = [];
let lletraNom;
for ( lletraNom of arrayNom) {
    llistaNom.push(lletraNom);
}
//Busquem si hi ha vocals, consonants
let llistaVocals = ['A','E','I','O','U'];
let llistaNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let lletraBuscada;
let numeroBuscat;

for ( lletraBuscada of arrayNom) {
    if (llistaVocals.includes(lletraBuscada)) {
        document.write("VOCAL  \<br>" );
    } else {
        document.write("CONSONTANT  \<br>");
    }
}
    //Busquem si hi ha números. Opció 1
for (numeroBuscat of llistaNumeros) {
    if (llistaNom.includes(numeroBuscat)) {
        document.write("Els noms de persones no contenen números!  \<br>" );
    }
}


//Fase 3
//contem les lletres del nom (llistaNom)
let numeroDeLletresMap = new Map;
let lletra;
let comptador = 0;
let j;

for (i = 0; i < arrayNom.length; i++) {
    lletra = arrayNom[i];
    for (j = 0; j < arrayNom.length; j++) {
        if (arrayNom[j] == lletra) {
            comptador++;
        }
    }
    document.write(arrayNom[i] + " " + comptador + "\<br>");
    numeroDeLletresMap.set("(arrayNom[i])", comptador);
    comptador = 0;
}

//Fase4
let arrayCognom = [];
arrayCognom.push('G');
arrayCognom.push('O');
arrayCognom.push('N');
arrayCognom.push('Z');
arrayCognom.push('A');
arrayCognom.push('L');
arrayCognom.push('E');
arrayCognom.push('Z');

llistaNom.push(" ");
let fullName = llistaNom.concat(arrayCognom);
document.write(fullName);
}


  