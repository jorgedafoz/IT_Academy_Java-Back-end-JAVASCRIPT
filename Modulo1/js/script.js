function activaPrograma(){
    

     //Fase 1
    let nom = "Jordi";
    let cognom1 = "Gonzalez";
    let cognom2 = "Palo";
    let dia = 7;
    let mes = 4;
    let any = 1977;
    document.write(nom + "/"+ cognom1 + " " + cognom2 + "<br/>");
    document.write(dia + "/" + mes + "/" + any + "<br/>");

    //Fase2
    const ANY_TRASPAS_INICIAL = 1948;
    let anysCadaTraspas = 4;
    let anysTotalsTraspas = (any - ANY_TRASPAS_INICIAL) / anysCadaTraspas;
    document.write("Hi ha un total de " + anysTotalsTraspas + " anys de traspàs." + "<br/>");
    
    //Fase3
    let anyTraspasInicial = 1948;
    let esDeTraspas = false;
    let respostaAfirmativa = "És de traspàs.";
    let respostaNegativa = "No és de traspàs.";
    let i;

    for (i = anyTraspasInicial; i <= any; i++) {
        if ((i % 4 == 0) && (i % 100 != 0) || (i % 400 == 0)) {
            document.write(i + "<br/>");
        }
    }

    //3.Ara mirem si l'any de naixament és de traspàs
    //creem el boolean
    if ((any % 4 == 0) && (any % 100 != 0) || (any % 400 == 0)) {
        esDeTraspas = true;
    } else {
        esDeTraspas = false;
    }
    //4. amb el boolean imprimim el resultat.
    //Nota: 3 i 4 es podrien compactar en un sol if/else
    if (esDeTraspas) {
        document.write(respostaAfirmativa + "<br/>");
    } else {
    document.write(respostaNegativa + "<br/>");
    }    

    //Fase 4
    let nomComplet = nom + " " + cognom1 + " " + cognom2;
    let dataNaixament = dia + "/" + mes + "/" + any;
    let respostaFinal = "";

        if(esDeTraspas == true) {
            respostaFinal = respostaAfirmativa;
        } else {
            respostaFinal = respostaNegativa;
        }
    document.write("El meu nom és: " + nomComplet + "<br/>");
    document.write("Vaig nèixer el " + dataNaixament + "<br/>");
    document.write("El meu any de naixement " + respostaFinal + "<br/>");
}

  