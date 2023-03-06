function operaciones(){
    var notas = [];
    var suma = 0;
    var promedio = 0;
    var nota = 0;

    for(var i = 0; i < 5; i++){
        nota = prompt ("por favor ingrese sus notas" + (i+1));
        notas.push(nota);
    }

    promedio = suma / 5;
    if (promedio < 3) {
        alert ("su promedio es de: " + promedio + "esta en nivel bajo, trate de mejorar.");
    }else if (promedio >= 3 && promedio < 4){
        alert("su promedio es de: "+ promedio + "esta en nivel basico, sigue mejorando.");
    }else if (promedio >= 4 && promedio < 5){
        alert("su promedio es de: "+ promedio + "esta en nivel alto, admirable.");
    }else {
        alert("su promedio es de: "+ promedio + "esta en nivel superior.");
    }
}