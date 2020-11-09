function activaPrograma(){
    

//Fase1
let ciutat1 = prompt("Escriu el nom d'una ciutat");
let ciutat2 = prompt("Escriu el nom d'una altre ciutat");
let ciutat3 = prompt("Escriu el nom d'una altre ciutat");
let ciutat4 = prompt("Escriu el nom d'una altre ciutat");
let ciutat5 = prompt("Escriu el nom d'una altre ciutat");
let ciutat6 = prompt("Escriu el nom d'una altre ciutat");


document.write(ciutat1 + ", " + ciutat2 + ", " + ciutat3 + ", " + ciutat4 + ", " + ciutat5 + ", " + ciutat6 + "\<br>");

//Fase2
//ordenem l'array i l'imprimim
let arrayCiutats = [ciutat1, ciutat2, ciutat3, ciutat4, ciutat5, ciutat6];

arrayCiutats.sort();

for (i of arrayCiutats) {
    document.write(i + " ");
}


//fase3
//substituim el char 'a' per 4, les ordenem i les imprimim

for (i = 0; i < arrayCiutats.length; i++)
{
    arrayCiutats[i] = arrayCiutats[i].replace('a', '4');
}
arrayCiutatsModificades = arrayCiutats.sort();

for (i of arrayCiutatsModificades) {
    document.write("\<br>" + i + " ");
}
document.write("\<br>");


//Fase 4
//creem arrays de la mida del nom que acollirà
let barcelona = [ciutat1.length];
let madrid    = [ciutat2.length];
let valencia  = [ciutat3.length];
let malaga    = [ciutat4.length];
let cadis     = [ciutat5.length];
let santander = [ciutat6.length];

//cridem el mètode per omplir
barcelona = ompleArray(ciutat1);
madrid    = ompleArray(ciutat2);
valencia  = ompleArray(ciutat3);
malaga    = ompleArray(ciutat4);
cadis     = ompleArray(ciutat5);
santander = ompleArray(ciutat6);

//imprimim els arrays invertits

document.write(barcelona.reverse() + "\<br>");
document.write(madrid.reverse()+ "\<br>");
document.write(valencia.reverse()+ "\<br>");
document.write(malaga.reverse()+ "\<br>");
document.write(cadis.reverse()+ "\<br>");
document.write(santander.reverse()+ "\<br>");

}
//fem un mètode per omplir els arrays
function ompleArray(ciutat) {
let arrayPle= [ciutat.length];
for (i=0; i < ciutat.length; i++) {
    arrayPle[i] = ciutat.charAt(i);
}
return arrayPle;
}








  