function iniciJs() {
    let i;
    let j;
    alert("El Botó funciona i esta vinculat");
    //Obtenim els tr i els td en un array. Les columnes es trobaràn amb una formula inversa del àrea.
    var lineas = document.getElementsByTagName("tr");
    var columnes = document.getElementsByTagName("td");
    var num = lineas.length;
    var num2 = columnes.length;
    num2 = num2 / num;
    //Creem el array simple i fem la següent generació. S'ha asignat el valor de les lineas.
    var tauler = new Array(num);
    var taulerProx = new Array(num);
    console.log(num);
    //Asignem el numero de columnes per cada fila. Basicament creem un array bidimensional
    for (i = 0; i < num; i++) {
        tauler[i] = new Array(num2);
        taulerProx[i] = new Array(num2);
    }
    //Inicialitzem el els dos arrays
    for (i = 0; i < num; i++) {
        for (j = 0; j < num2; j++) {
            tauler[i][j] = 0;
            taulerProx[i][j] = 0;
        }
    }
    //A partir de la linia seleccionada tornem tots els td al array de les columnes. Després recorrem totes les posicions,
    //revisant els inputs de cada columna mirem si esta marcada. Si aquesta està marcada el valor del tauler[i][j] canviara a 1;
    for (i = 0; i < num; i++) {
        columnes = lineas[i].getElementsByTagName("td");
        for (j = 0; j < num2; j++) {
            if (columnes[j].getElementsByTagName("input")[0].checked) {
                tauler[i][j] = 1;
            }
        }
    }

    console.log(tauler);

//Necessitem recorre un altre cop els nostres arrays.
/**
 * SIGNIFICAT DE FUNCIONS $RESUMIT
 * aplicarNormes-> Contem els veins i depenent dels veins en la següent generació desapareixen
 * copiarIResetNexGen -> Copiem el array pare al fill o viceversa. I fem un reset.
 * actualitzarTempsreal -> A partir si la posició es 1. Canviem el estat del checkbox
    Li pasarem les parametres següents
     (i,j - Posicions actuals)
     (num,num2 - files i columnes )
     (tauler taulerProx -> Array Pare i Array Fill)
     La funció serà repetida el fins acabar totes les files i columnes
    * */
    for (i = 0; i < num; i++) {
        for (j = 0; j < num2; j++) {
            aplicarNormes(i, j,num,num2,tauler,taulerProx);

        }
        console.log(taulerProx);
        copiarIResetNexGen(i, j, tauler, taulerProx);
        //actualitzarTempsreal(num,num2,tauler,taulerProx);

    }
}
function copiarIResetNexGen(num,num2,tauler,taulerProx){
 for (var i = 0; i < num; i++) {
          for (var j = 0; j < num2; j++) {
              tauler[i][j] = taulerProx[i][j];
              taulerProx[i][j] = 0;
          }
     console.log(tauler);
      }

}
/*
/*
function actualitzarTempsreal(num,num2,tauler,taulerProx){
for (var i = 0; i < num; i++) {
            for (var j = 0; j < num2; j++) {
                var celula = document.getElementsByName(tauler + "[" + i + "]" + "[" + j + "]");
                if (tauler[i][j] === 0) {
                    console.log("------>" + celula[0]);
                    celula[0].setAttribute("checked", "true");
                } else {
                    celula.setAttribute("checked", "false");
                }
            }
        }
}
*/

function aplicarNormes(num, num2,linies,columnes,tauler,taulerProx) {
//Ens farà el return de la funció que conta els veins
    var numVeins = countVecinasVivasDeCeldaMuerta(num, num2,linies,columnes,tauler,taulerProx);
    //Si la cel·lula esta viva, i te menys de 2 o 3 veins aquesta mor i si té exactament 3 o 2 cel·lules és manté en vida
    if (tauler[num][num2] === 1) {
        if (numVeins < 2 || numVeins > 3) {
            taulerProx[num][num2] = 0;
        } else if (numVeins === 2 || numVeins === 3) {
            taulerProx[num][num2] = 1;
        }
        //Si la cel·lula està morta, i té un numero de veins exacte a 3. Llavors aquesta reviu.
    } else if (tauler[num][num2] === 0) {
           // if (countVecinasMuertasDeCeldaViva(num, num2,linies,columnes,tauler,taulerProx) === 3) {
                if (numVeins ===3) {
                    taulerProx[num][num2] = 1;
                }
            }
      //  }
    }

        //Necessito el numero original de lineas i columnes per la següent condició
function countVecinasVivasDeCeldaMuerta(num, num2,linia,columna,tauler) {
    var count = 0;
    if (num-1 >= 0) {
        if (tauler[num-1][num2] === 1) count++;
    }
    if (num-1 >= 0 && num2-1 >= 0) {
        if (tauler[num-1][num2-1] === 1) count++;
    }
    if (num-1 >= 0 && num2+1 < columna) {
        if (tauler[num-1][num2+1] === 1) count++;
    }
    if (num2-1 >= 0) {
        if (tauler[num][num2-1] === 1) count++;
    }
    if (num2+1 < columna) {
        if (tauler[num][num2+1] === 1) count++;
    }
    if (num+1 < linia) {
        if (tauler[num+1][num2] === 1) count++;
    }
    if (num+1 < linia && num2-1 >= 0) {
        if (tauler[num+1][num2-1] === 1) count++;
    }
    if (num+1 < linia && num2+1 < columna) {
        if (tauler[num+1][num2+1] === 1) count++;
    }
    return count;
}

/*
function countVecinasMuertasDeCeldaViva(num, num2,linia,columna,tauler) {
    var count = 0;
    if (num-1 >= 0) {
        if (tauler[num-1][num2] === 0) count++;
    }
    if (num-1 >= 0 && num2-1 >= 0) {
        if (tauler[num-1][num2-1] === 0) count++;
    }
    if (num-1 >= 0 && num2+1 < columna) {
        if (tauler[num-1][num2+1] === 0) count++;
    }
    if (num2-1 >= 0) {
        if (tauler[num][num2-1] === 0) count++;
    }
    if (num2+1 < columna) {
        if (tauler[num][num2+1] === 0) count++;
    }
    if (num+1 < linia) {
        if (tauler[num+1][num2] === 0) count++;
    }
    if (num+1 < linia && num2-1 >= 0) {
        if (tauler[num+1][num2-1] === 0) count++;
    }
    if (num+1 < linia && num2+1 < columna) {
        if (tauler[num+1][num2+1] === 0) count++;
    }
    return count;
}
*/



