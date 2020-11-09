function activaPrograma(){
    

 //Fase 1
 let billete5   = 5;
 let billete10  = 10;
 let billete20  = 20;
 let billete50  = 50;
 let billete100 = 100;
 let billete200 = 200;
 let billete500 = 500;

 let menu  = new Array(5);
 let preus = new Array(5);

 //Fase 2
 // Omplim els arrays per consola demanant-li les dades al lector i
 // després guardarem les dades dels arrays a un map
 let menuValorat = new Map;
 
 let i = 0;

 for (i = 0; i < menu.length; i++) {
    //Comprovem que la dada introduida és correcte
    let dadaCorrecte = false;

    while (!dadaCorrecte){
        let plat = prompt("Introdueix un plat del menú");
        try {
            if (plat=="") {
                throw "vuida! Siusplau escriu un plat."
            } else {
                menu[i] = plat;
                dadaCorrecte = true;
            }
        } catch (err) {
            window.alert("La dada introduida és " + err);
        }
    }
} 

 
 for (i = 0; i < menu.length; i++) {
     //Comprovem que la dada introduida és correcte
     dadaCorrecte = false;

     while (!dadaCorrecte) {
         preu = prompt("Introdueix el preu del plat " + menu[i]);
         try {
             if (preu > 0) {
                 preus[i] = preu;
                 dadaCorrecte = true;
             } else {
                 window.alert("El preu no pot ser un número negatiu. Introdueix-lo de nou.");
             }
         } catch(err) {
             window.alert("La dada introduida no és correcte");
         }
     }
     //Guardem les dades dels arrays a un map
     menuValorat.set(menu[i], preus[i]);
 }

 //Fase 3
 //Mostrem el menú valorat
 
 //Iterator = menuValorat.entrySet().iterator();
 document.write("Avui tenim els següents plats al menú: ")
 for (entry of menuValorat) {
     document.write(entry + "\<br>");
 }
 //demanem què vol menjar
 let comandaTotalFeta = [];
 let comandaAcabada = false;

 do {
     platDemanat = prompt("digui quin plat del menú vol menjar");
     comandaTotalFeta.push(platDemanat);
     //demanem si vol menjar més o ja ha acabat
     opcion = demanarMes();

    if (opcio == 0 ) {
        comandaAcabada = true;
    } else if (opcio == 1){
       comandaAcabada = false;
    } 
 } while (!comandaAcabada);

 document.write("Ha demanat: " + comandaTotalFeta + "\<br>");

 //Fase 4
 //Mirem si el plat demanat està a la llista i sumem l'import. Si no està avisem al client
 let costTotal = 0;
 for (plat of comandaTotalFeta) {
     if (menuValorat.has(plat)) {
         costTotal =  costTotal + parseInt(menuValorat.get(plat));
     } else {
         document.write("Ho sentim però no tenim " + plat + " no està al menú. \<br>");
     }
 }
 document.write("El dinar finalment costarà " + costTotal + "€");
}

function demanarMes(){
    do {
        opcioValida = false;
        opcio = parseInt(prompt("Vol demanar res més? Si vol més escrigui 1, si no vol més escrigui 0"));
        try {
            if (isNaN(opcio)) {
                throw ("no es correcte. Introdueixi un 1 o un 0.");    
            } else if (opcio > 1 || opcio < 0) {
                throw ("no és cap opció vàlida. Introdueixi un 1 o un 0.")  
            } else {
                opcioValida = true;
            }
        } catch (err) {
            window.alert("La dada introduida " + err);
        }
    } while (!opcioValida);
    return opcio;
}
